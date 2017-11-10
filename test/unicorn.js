const test = require('ava');
const getlang = require('../index.js');

test.cb('Init test', t => {
	t.pass();
	t.end();
});

test('Complex test', t => {
	const result = getlang('Être en été est à mi-chemin de noël');
	t.is(result, 'fr');
});

test('Test Japanese', t => {
	const result = getlang('手を切り落としたら砂金が溢れ出るとか神話とかにありそう');
	t.is(result, 'ja');
});

test('Test english', t => {
	const result = getlang('In today’s edition of stupid things I’ve done: I ran out of gas on the interstate a mile from work and just past a gas station because I’m used to having a much larger gas tank than the one in my new');
	t.is(result, 'en');
});

test('Long portugese chain.', t => {
	const text = `O histograma, também conhecido como distribuição de frequências, é a representação gráfica em colunas ou em barras (retângulos) de um conjunto de dados previamente tabulado e dividido em classes uniformes ou não uniformes. A base de cada retângulo representa uma classe. A altura de cada retângulo representa a quantidade ou a frequência absoluta com que o valor da classe ocorre no conjunto de dados para classes uniformes ou a densidade de frequência para classes não uniformes. Importante ferramenta da estatística, o histograma também é uma das chamadas sete ferramentas da qualidade.`;

	const result = getlang(text);
	t.is(result, 'pt');
});

test('Long italian chain.', t => {
	const text = `L'itinerario di risalita normale parte dal sentiero N.11 situato all'estremità sud di Solda, e sale verso est lungo la Valle di Rosim. Il sentiero parte a quota 1.950 m. e attraversa una pineta fino a sbucare presso dei pascoli di bovini. Qui il sentiero sale lungo un fianco erboso della valle e sbuca ai Piani di Rosim, altro pascolo ricco di cardi. Qui si incrocia un sentiero proveniente dalla funivia "Pulpito", la cui stazione di arrivo è più a nord. Si prosegue dritti in direzione est verso la Vedretta di Rosim, si costeggia a sinistra il corpo di ghiaccio e, arrivati in cima, si attraversa parte del ghiacciaio fino a dove i serracchi lo permettono, quindi bisogna salire a sinistra lungo la pietraia. A questo punto la croce in vetta sarà visibile: si segue la risalita lungo la pietraia fino ad arrivare sul crinale e da qui ci si arrampica fino in vetta.`;
	const result = getlang(text);
	t.is(result, 'it');
});

const result = getlang('手を切り落としたら砂金が溢れ出るとか神話とかにありそう');
console.log(result);
