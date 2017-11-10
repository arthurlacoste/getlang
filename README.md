

# Get lang

[![NPM Version][npm-version]][npm-url]
[![travis][travis-badge]][travis-url]
[![xo][xo-badge]][xo-url]

Get ISO 639-1 version of a string. Without any API. This is less accurate than Google translate, but faster! :)

![demo](static/demo.gif)

##  Install

```
npm install getlang -S
```

## Use it

```js

const getlang =  require('getlang');

const result = getlang('手を切り落としたら砂金が溢れ出るとか神話とかにありそう');
console.log(result);

// => "ja"
```

A browserified version is available in the `dist` folder. You can use it like this :

```html

<script src="../dist/getlang.js"></script>
<script>
console.log(getlang("Quelle est ma langue"));
// => "fr"
</script>

```


## Other

Server version:
- [Project](https://github.com/arthurlacoste/detect-lang-server)
- [Demo here](https://obscure-fjord-89228.herokuapp.com/lang/obrigado)

Side Projects:
- [Mastodon Lang Remover](https://github.com/arthurlacoste/mastodon-lang-remover)
- [Franc](https://github.com/wooorm/franc)

[npm-version]:https://img.shields.io/npm/v/getlang.svg
[npm-url]: https://npmjs.org/package/getlang
[travis-badge]: http://img.shields.io/travis/arthurlacoste/getlang.svg
[travis-url]: https://travis-ci.org/arthurlacoste/getlang
[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
