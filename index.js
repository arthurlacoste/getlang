/* eslint no-constant-condition: 0 */
const franc = require('franc-min');
const iso6393 = require('iso-639-3');

function stripTags(input, allowed) {
  // Making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	allowed = ((String(allowed || '')).toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

	const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

	let before = input;
	let after = input;
  // Recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
	while (true) {
		before = after;
		after = before.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) => {
			return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
		});

    // Return once no more tags are removed
		if (before === after) {
			return after;
		}
	}
}

module.exports = function (toot) {
	toot = stripTags(toot.toString()
	.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''));

  // Lang = ISO6391
	let lang = '';

  // Longer is better, like my *
	while (toot.length < 10) {
		toot += ' ' + toot;
	}

	const langISO6393 = franc(toot);

	try {
		if (langISO6393 === 'cmn') {
			lang = 'zh-CN'; // Mandarin detected -> chinese ISO 639-1
		} else {
			iso6393.forEach(language => {
				if (language.iso6393 === langISO6393) {
					lang = language.iso6391;
				}
			});
		}

		return lang;
	} catch (err) {
		return err;
	}
};
