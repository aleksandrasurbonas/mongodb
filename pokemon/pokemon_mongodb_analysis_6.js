// title: POKEMON ANALIZĖ
// v: 2021-04-15T2037 AU

// 6. Pavadinimas prasideda raide `K`
db.Pokemon.find(
	{ name: /^K/ }
).count()
;