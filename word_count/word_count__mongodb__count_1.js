// title: word count - mongodb - count 1
// v: 2021-04-18T2214 AU
db.words.aggregate([
	{ $project : { "words_list" : { $split: ["$text", " "] } } }
,	{ $project: { "count": { $size: "$words_list" }}}
,	{ $sort : { "count" : -1 } }
])
;
