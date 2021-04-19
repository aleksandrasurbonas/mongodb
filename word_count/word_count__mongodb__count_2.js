// title: word count - mongodb - count # 2
// v: 2021-04-19T1848 AU

db.words.aggregate([
	{ $project : { words_list : { $split: ["$text", " "] } } }
,	{ $unwind : "$words_list" }
,	{ $match : { words_list : /[A-Za-z]/ } }
,	{ $group : { _id: { "Text_id": "$_id" }, count: { "$sum": 1 } } }
//,	{ $sort : { count : -1 } } // v1: one variable
,	{ $sort : { count : 1, _id : -1 } } // v2: multiple variables
//,	{ $limit: 2 }
])
;
