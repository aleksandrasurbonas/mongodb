// title: POKEMON ANALIZĖ
// v: 2021-04-15T2031 AU

// 4. Pokemonų kiekis kiekvienoje kartoje (`generation`)
db.Pokemon.aggregate([
	{ $group: { _id: "$Generation", amount: { $sum: 1 } } }
,	{ $match: { amount: { $gte: 10 } } }
,	{ $sort: { amount: 1 } } // -1 = Z to A
])
;