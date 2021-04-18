// title: POKEMON ANALIZĖ
// v: 2021-04-15T2020 AU

// 3. Kiek Pokemonų neturi slaptų galių?
db.Pokemon.find(
	{HasHiddenAbility:"False"}
).count()
;