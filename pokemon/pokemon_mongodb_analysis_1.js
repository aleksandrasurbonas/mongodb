// title: POKEMON ANALIZĖ
// v: 2021-04-15T2000 AU

// 1-1. patikrinu, kiek yra Pokemonų, kurių `stats` yra neigiami (`HP, Attack, Defence`)
db.Pokemon.find(
	{ $or: [ { HP: { $lt: 0 } }, { Attack: { $lt: 0 } }, { Defence: { $lt: 0 } } ] }
).count()
;
// > AU: 2 (du)

// 1-2. peržiūriu Pokemonus, kurių `stats` yra neigiami (`HP, Attack, Defence`)
db.Pokemon.find(
	{ $or: [ { HP: { $lt: 0 } }, { Attack: { $lt: 0 } }, { Defence: { $lt: 0 } } ] }
//,	{_id: 1} // pasirenku norimus stulpelius
).pretty()
;

// 1-3. pataisau Pokemonų statistikas, kai `stats` yra neigiami (`HP, Attack, Defence`)
db.Pokemon.update( {Attack: -23}, { $set: {Attack: 23} } )
db.Pokemon.update( {Attack: -37}, { $set: {Attack: 37} } )
;

// Pvz.: 3.4 ... :)
// db.Darbuotojai.update( {ID: {$in: [1, 2, 3]} }, { $set: {ID: 5} } )


// 1-4. patikrinu po pataisymo, kiek yra Pokemonų, kurių `stats` yra neigiami (`HP, Attack, Defence`)
db.Pokemon.find(
	{ $or: [ { HP: { $lt: 0 } }, { Attack: { $lt: 0 } }, { Defence: { $lt: 0 } } ] }
).count()
;
// > AU: 0 (nulis)