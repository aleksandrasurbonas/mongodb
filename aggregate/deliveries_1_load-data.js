// title: deliveries - 1 - load data
// v: 2021-04-18T2230 AU
use test
;
db.createCollection('deliveries')
;
db.deliveries.insert([
	{ "_id" : 1, "city" : "Berkeley, CA", "qty" : 648 }
,	{ "_id" : 2, "city" : "Bend, OR", "qty" : 491 }
,	{ "_id" : 3, "city" : "Kensington, CA", "qty" : 233 }
,	{ "_id" : 4, "city" : "Eugene, OR", "qty" : 842 }
,	{ "_id" : 5, "city" : "Reno, NV", "qty" : 655 }
,	{ "_id" : 6, "city" : "Portland, OR", "qty" : 408 }
,	{ "_id" : 7, "city" : "Sacramento, CA", "qty" : 574 }
])
;
