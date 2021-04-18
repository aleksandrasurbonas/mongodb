// title: POKEMON ANALIZĖ
// v: 2021-04-15T2034 AU

// 5. Skirtingų pokemonų rūšių (`species`) kiekis duomenų bazėje
db.Pokemon.aggregate([
	{ $group: { _id: "$Species", count: { $sum: 1 } } }
,	{ $sort: { count: -1 } } // -1 = Z to A
])
;