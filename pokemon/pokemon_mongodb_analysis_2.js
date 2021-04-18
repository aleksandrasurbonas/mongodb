// title: POKEMON ANALIZĖ
// v: 2021-04-15T1931 AU

// 2. Statistikos: `HP, Attack, Defense` vidurkiai
db.Pokemon.aggregate([
	{ $group: {
			_id: "$Generation"
			,	avg_HP: {$avg: "$HP"}
			,	avg_Attack: {$avg: "$Attack"}
			,	avg_Defense: {$avg: "$Defense"}
		}
	}
])
;