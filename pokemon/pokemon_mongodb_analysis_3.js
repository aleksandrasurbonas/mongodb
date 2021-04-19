// title: POKEMON ANALIZĖ
// v: 2021-04-19T1901 AU // demo

// 3. Kiek Pokemonų neturi slaptų galių?
db.Pokemon.find(
	{HasHiddenAbility:"False"}
).count()
;