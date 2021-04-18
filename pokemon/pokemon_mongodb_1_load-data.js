// title:pokomeno - mongodb - 1 load data
// v:2021-04-06T1931 AU
use test
;
db.createCollection('Pokemon')
;
db.Pokemon.insert([
 {Id:"001",name:"Bulbasaur",Species:"Seed",Abilities:{Ability1:"Overgrow",Ability2:"Chlorophyll"},HP:45,Attack:49,Defense:49,HasHiddenAbility:"True",Generation:"1"}
,{Id:"004",name:"Charmander",Species:"Lizard",Abilities:{Ability1:"Blaze",Ability2:"Solar Power"},HP:73,Attack:33,Defense:53,HasHiddenAbility:"True",Generation:"1"}
,{Id:"096",name:"Drowzee",Species:"Hypnosis",Abilities:{Ability1:"Insomnia",Ability2:"Forewarn",Ability3:"Inner Focus"},HP:73,Attack:43,Defense:55},HasHiddenAbility:"True",Generation:"1"})
,{Id:"106",name:"Hitmonlee",Species:"Kicking",Abilities:{Ability1:"Limber",Ability2:"Reckless",Ability3:"Unburden"},HP:33,Attack:33,Defense:80,HasHiddenAbility:"True",Generation:"1"})
,{Id:"152",name:"Chikorita",Species:"Leaf",Abilities:{Ability1:"Overgrow",Ability2:"Leaf Guard"},HP:77,Attack:63,Defense:55},HasHiddenAbility:"True",Generation:"2"})
,{Id:"186",name:"Politoed",Species:"Frog",Abilities:{Ability1:"Water Absorb",Ability2:"Damp",Ability3:"Drizzle"},HP:103,Attack:43,Defense:64,HasHiddenAbility:"True",Generation:"2"})
,{Id:"218",name:"Slugma",Species:"Lava",Abilities:{Ability1:"Magma Armor",Ability2:"Flame Body",Ability3:"Weak Armor"},HP:55,Attack:22,Defense:45,HasHiddenAbility:"True",Generation:"2"})
,{Id:"246",name:"Larvitar",Species:"Rock Skin",Abilities:{Ability1:"Guts",Ability2:"Sand Veil"},HP:63,Attack:45,Defense:33,HasHiddenAbility:"True",Generation:"2"})
,{Id:"266",name:"Silcoon",Species:"Cocoon",Abilities:{Ability1:"Shed Skin"},HP:33,Attack:22,Defense:53},HasHiddenAbility:"False",Generation:"3"})
,{Id:"277",name:"Swillow",Species:"Swallow",Abilities:{Ability1:"Guts",Ability2:"Scrappy"},HP:103,Attack:57,Defense:53,HasHiddenAbility:"True",Generation:"3"}
,{Id:"289",name:"Slaking",Species:"Lazy",Abilities:{Ability1:"Truant"},HP:73,Attack:73,Defense:33,HasHiddenAbility:"False",Generation:"3"}
,{Id:"305",name:"Lairon",Species:"Iron Armor",Abilities:{Ability1:"Sturdy",Ability2:"Rock Head",Ability3:"Heavy Metal"},HP:55,Attack:-37,Defense:23,HasHiddenAbility:"False",Generation:"3"}
,{Id:"321",name:"Wailord",Species:"Float Whale",Abilities:{Ability1:"Water Veil",Ability2:"Oblivious",Ability3:"Pressure"},HP:83,Attack:52,Defense:57,HasHiddenAbility:"True",Generation:"3"}
,{Id:"349",name:"Feebas",Species:"Fish",Abilities:{Ability1:"Swift Swim",Ability2:"Oblivious",Ability3:"Adaptability"},HP:63,Attack:43,Defense:73,HasHiddenAbility:"True",Generation:"3"}
,{Id:"360",name:"Wynaut",Species:"Bright",Abilities:{Ability1:"Shadow Tag",Ability2:"Telepathy"},HP:37,Attack:58,Defense:73,HasHiddenAbility:"True",Generation:"3"}
,{Id:"385",name:"Jirachi",Species:"Wish",Abilities:{Ability1:"Serene Grace"},HP:88,Attack:46,Defense:38},HasHiddenAbility:"True",Generation:"3"}
,{Id:"387",name:"Turtwig",Species:"Tiny Leaf",Abilities:{Ability1:"Overgrow",Ability2:"Shell Armor"},HP:66,Attack:23,Defense:17,HasHiddenAbility:"True",Generation:"4"}
,{Id:"393",name:"Piplup",Species:"Penguin",Abilities:{Ability1:"Torrent",Ability2:"Defiant"},HP:75,Attack:100,Defense:30,HasHiddenAbility:"True",Generation:"4"}
,{Id:"401",name:"Kricketot",Species:"Cricket",Abilities:{Ability1:"Shed Skin",Ability2:"Run Away"},HP:77,Attack:22,Defense:43,HasHiddenAbility:"True",Generation:"4"}
,{Id:"410",name:"Shieldon",Species:"Shield",Abilities:{Ability1:"Sturdy",Ability2:"Soundproof"},HP:76,Attack:44,Defense:41,HasHiddenAbility:"True",Generation:"4"}
,{Id:"425",name:"Drifloon",Species:"Balloon",Abilities:{Abiity1:"Aftermath",Ability2:"Unburden",Ability3:"Flare Boost"},HP:73,Attack:53,Defense:34,HasHiddenAbility:"True",Generation:"4"}
,{Id:"440",name:"Happiny",Species:"Playhouse",Abilities:{Ability1:"Natural Cure",Ability2:"Serene Grace",Ability3:"Friend Guard"},HP:77,Attack:83,Defense:53,HasHiddenAbility:"True",Generation:"4"})
,{Id:"441",name:"Chatot",Species:"Music Note",Abilities:{Ability1:"Keen Eye",Ability2:"Tangled Feet",Ability3:"Big Pecks"},HP:63,Attack:-23,Defense:31,HasHiddenAbility:"True",Generation:"4"}
,{Id:"453",name:"Croagunk",Species:"Toxic Mouth",Abilities:{Ability1:"Anticipation",Ability2:"Dry Skin",Ability3:"Poison Touch"},HP:73,Attack:55,Defense:34,HasHiddenAbility:"True",Generation:"4"}
,{Id:"459",name:"Snoer",Species:"Frost Tree",Abilities:{Ability1:"Snow Warning",Ability2:"Soundproof"},HP:66,Attack:32,Defense:73,HasHiddenAbility:"True",Generation:"4"}
,{Id:"480",name:"Uxie",Species:"Knowledge",Abilities:{Ability1:"Levitate"},HP:64,Attack:37,Defense:31,HasHiddenAbility:"False",Generation:"4"}
,{Id:"494",name:"Victini",Species:"Victory",Abilities:{Ability1:"Victory Star"},HP:63,Attack:55,Defense:23,HasHiddenAbility:"False",Generation:"5"}
,{Id:"498",name:"Tepig",Species:"Fire Pig",Abilities:{Ability1:"Blaze",Ability2:"Thick Fat"},HP:107,Attack:50,Defense:35,HasHiddenAbility:"True",Generation:"5"})
,{Id:"511",name:"Pansage",Species:"Grass Monkey",Abilities:{Ability1:"Gluttony",Ability2:"Overgrow"},HP:63,Attack:23,Defense:17,HasHiddenAbility:"True",Generation:"5"}
,{Id:"512",name:"Simisage",Species:"Thorn Monkey",Abilities:{Ability1:"Gluttony",Ability2:"Overgrow"},HP:73,Attack:33,Defense:75,HasHiddenAbility:"True",Generation:"5"}
,{Id:"519",name:"Pidove",Species:"Tiny Pigeon",Abilities:{Ability1:"Big Pecks",Ability2:"Super Luck",Ability3:"Rivalry"},HP:43,Attack:63,Defense:21,HasHiddenAbility:"True",Generation:"5"}
,{Id:"523",name:"Zebstrika",Species:"Thunderbolt",Abilities:{Ability1:"Lightning Rod",Ability2:"Motor Drive",Ability3:"Sap Sipper"},HP:77,Attack:23,Defense:53,HasHiddenAbility:"True",Generation:"5"}
,{Id:"524",name:"Roggenrola",Species:"Mantle",Abilities:{Ability1:"Sturdy",Ability2:"Weak Armor",Ability3:"Sand Force"},HP:120,Attack:53,Defense:43,HasHiddenAbility:"True",Generation:"5"}
,{Id:"523",name:"Timburr",Species:"Muscular",Abilities:{Ability1:"Guts",Ability2:"Sheer Force",Ability3:"Iron Fist"},HP:130,Attack:28,Defense:27,HasHiddenAbility:"True",Generation:"5"}
,{Id:"543",name:"Venipede",Species:"Centipede",Abilities:{Ability1:"Poison Point",Ability2:"Swarm",Ability3:"Speed Boost"},HP:33,Attack:73,Defense:27,HasHiddenAbility:"True",Generation:"5"}
,{Id:"555",name:"Darmanitan",Species:"Centipede",Abilities:{Ability1:"Sheer Force",Ability2:"Zen Mode"},HP:100,Attack:35,Defense:16,HasHiddenAbility:"True",Generation:"5"}
,{Id:"558",name:"Crustle",Species:"Stone Home",Abilities:{Ability1:"Sturdy",Ability2:"Shell Armor",Ability3:"Weak Armor"},HP:85,Attack:63,Defense:32,HasHiddenAbility:"True",Generation:"5"}
,{Id:"568",name:"Trubbish",Species:"Trash Bag",Abilities:{Ability1:"Stench",Ability2:"Sticky Hold",Ability3:"Aftermath"},HP:95,Attack:53,Defense:48,HasHiddenAbility:"True",Generation:"5"}
,{Id:"569",name:"Garbodor",Species:"Trash Heap",Abilities:{Ability1:"Stench",Ability2:"Weak Armor",Ability3:"Aftermath"},HP:85,Attack:73,Defense:48,HasHiddenAbility:"True",Generation:"5"}
,{Id:"577",name:"Solosis",Species:"Cell",Abilities:{Ability1:"Overcoat",Ability2:"Magic Guard",Ability3:"Regenerator"},HP:70,Attack:35,Defense:40,HasHiddenAbility:"True",Generation:"5"}
,{Id:"582",name:"Vanillite",Species:"Fresh Snow",Abilities:{Ability1:"Ice Body",Ability2:"Snow Cloak",Ability3:"Weak Armor"},HP:66,Attack:46,Defense:64,HasHiddenAbility:"True",Generation:"5"}
,{Id:"588",name:"Karrablast",Species:"Clamping",Abilities:{Ability1:"Swarm",Ability2:"Shed Skin",Ability3:"No Guard"},HP:130,Attack:53,Defense:71,HasHiddenAbility:"True",Generation:"5"}
,{Id:"599",name:"Klink",Species:"Gear",Abilities:{Ability1:"Plus",Ability2:"Minus",Ability3:"Clear Body"},HP:100,Attack:58,Defense:70,HasHiddenAbility:"True",Generation:"5"}
,{Id:"600",name:"Klang",Species:"Gear",Abilities:{Ability1:"Plus",Ability2:"Minus",Ability3:"Clear Body"},HP:153,Attack:44,Defense:73,HasHiddenAbility:"True",Generation:"5"}
,{Id:"601",name:"Klinklang",Species:"Gear",Abilities:{Ability1:"Plus",Ability2:"Minus",Ability3:"Clear Body"},HP:73,Attack:55,Defense:80,HasHiddenAbility:"True",Generation:"5"}
,{Id:"607",name:"Litwick",Species:"Candle",Abilities:{Ability1:"Flash Fire",Ability2:"Flame Body",Ability3:"Infiltrator"},HP:73,Attack:11,Defense:60,HasHiddenAbility:"True",Generation:"5"}
,{Id:"616",name:"Shelmet",Species:"Snail",Abilities:{Ability1:"Hydration",Ability2:"Shell Armor",Ability3:"Overcoat"},HP:120,Attack:20,Defense:60,HasHiddenAbility:"True",Generation:"5"}
,{Id:"632",name:"Durant",Species:"Iron Ant",Abilities:{Ability1:"Swarm",Ability2:"Hustle",Ability3:"Truant"},HP:163,Attack:53,Defense:32,HasHiddenAbility:"True",Generation:"5"}
,{Id:"655",name:"Delphox",Species:"Fox",Abilities:{Ability1:"Blaze",Ability2:"Magician"},HP:103,Attack:15,Defense:35,HasHiddenAbility:"True",Generation:"6"}
,{Id:"666",name:"Vivillon",Species:"Scale",Abilities:{Ability1:"Shield Dust",Ability2:"Compound Eyes",Ability3:"Friend Guard"},HP:130,Attack:25,Defense:45,HasHiddenAbility:"True",Generation:"5"}
])
;