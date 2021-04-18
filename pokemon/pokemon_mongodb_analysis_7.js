// title: POKEMON ANALIZĖ
// v: 2021-04-15T2038 AU

// 7. naudoja tas pačias savybes `abilities` (kiekis)
db.Pokemon.aggregate([
	{ $group: { _id:"$Abilities", count: { $sum:1 } } }
,	{ $sort: {count: -1} }
])
;