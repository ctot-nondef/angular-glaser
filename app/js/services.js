'use strict';

/* Adlib API Query Services Module */
const Config = {
    "baseURL":"https://opacbasis.acdh.oeaw.ac.at/wwwopac.ashx?",
    "pagesize": 40,
    "sortField":"title",
    "sortOrder":"ascending",
    "currentView":"list",
    "localStorage":"GlaserStorage",
    "geoNamesID":"oeaw_adlib"
}

const sites  = {
	"30616": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.31825195736317,
			"south": 15.057132702497146,
			"north": 15.093107297502854,
			"west": 45.28099204263683,
			"accuracyLevel": 0
		},
		"asciiName": "Judaydah",
		"astergdem": 1247,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1256,
		"adminId2": "6940844",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.07512",
		"fcode": "PPLA2",
		"continentCode": "AS",
		"adminCode2": "2607",
		"adminCode1": "14",
		"lng": "45.29962",
		"geonameId": 30616,
		"toponymName": "Judaydah",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al Judaydah"
			},
			{
				"name": "Judaydah"
			},
			{
				"name": "Sūq al Jadīdah"
			},
			{
				"name": "الجديدة",
				"lang": "ar"
			},
			{
				"name": "جديدة",
				"lang": "ar"
			},
			{
				"name": "سوق الجديدة",
				"lang": "ar"
			}
		],
		"adminName2": "Al Jubah",
		"name": "Judaydah",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "seat of a second-order administrative division",
		"adminName1": "Ma’rib"
	},
	"34703": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.03757822859201,
			"south": 15.431340702497145,
			"north": 15.467315297502854,
			"west": 45.00025177140799,
			"accuracyLevel": 0
		},
		"asciiName": "Suq Sirwah",
		"astergdem": 1479,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1480,
		"adminId2": "6940839",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.44933",
		"fcode": "PPLA2",
		"continentCode": "AS",
		"adminCode2": "2606",
		"adminCode1": "14",
		"lng": "45.01891",
		"geonameId": 34703,
		"toponymName": "Sūq Şirwāḩ",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "As Sūq"
			},
			{
				"name": "Markaz Şirwāh"
			},
			{
				"name": "Sarwāḩ"
			},
			{
				"name": "Şarwāḩ"
			},
			{
				"name": "Şirwāḩ",
				"lang": "ar"
			},
			{
				"name": "Sūq Şirwāḩ",
				"lang": "ar"
			},
			{
				"name": "السوق",
				"lang": "ar"
			},
			{
				"name": "سوق صرواح",
				"lang": "ar"
			},
			{
				"name": "صرواح",
				"lang": "ar"
			},
			{
				"name": "مركز صرواح",
				"lang": "ar"
			}
		],
		"adminName2": "Sirwah",
		"name": "Sūq Şirwāḩ",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "seat of a second-order administrative division",
		"adminName1": "Ma’rib"
	},
	"69374": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Hayd al Lisi",
		"astergdem": 2561,
		"countryId": "69543",
		"fcl": "T",
		"srtm3": 2562,
		"adminId2": "6940768",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "DH"
		},
		"adminId1": "76183",
		"lat": "14.54631",
		"fcode": "MT",
		"continentCode": "AS",
		"adminCode2": "2009",
		"adminCode1": "11",
		"lng": "44.53979",
		"geonameId": 69374,
		"toponymName": "Ḩayd al Lisī",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Ḩayd al Asī"
			},
			{
				"name": "Ḩayd al Isī"
			},
			{
				"name": "Ḩayd al Lisī"
			},
			{
				"name": "Jabal Asfar"
			}
		],
		"adminName2": "Mayfa'at Anss",
		"name": "Ḩayd al Lisī",
		"fclName": "mountain,hill,rock,... ",
		"countryName": "Yemen",
		"fcodeName": "mountain",
		"adminName1": "Dhamār"
	},
	"70160": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 49.01760821143032,
			"south": 16.03895670249715,
			"north": 16.074931297502854,
			"west": 48.980169788569675,
			"accuracyLevel": 0
		},
		"asciiName": "Tarim",
		"astergdem": 626,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 617,
		"adminId2": "6940764",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HD"
		},
		"adminId1": "75411",
		"lat": "16.05694",
		"fcode": "PPLA2",
		"continentCode": "AS",
		"adminCode2": "1911",
		"adminCode1": "04",
		"lng": "48.99889",
		"geonameId": 70160,
		"toponymName": "Tarīm",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Tarim%2C_Yemen",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "https://en.wikipedia.org/wiki/Tarim%2C_Yemen",
				"lang": "link"
			},
			{
				"name": "Tarīm"
			},
			{
				"name": "Terīm"
			},
			{
				"name": "تريم",
				"lang": "ar"
			}
		],
		"adminName2": "Tarim",
		"name": "Tarīm",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "seat of a second-order administrative division",
		"adminName1": "Ḩaḑramawt"
	},
	"70364": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 49.026015446136896,
			"south": 15.824339651248573,
			"north": 15.842326948751426,
			"west": 49.00731795386311,
			"accuracyLevel": 0
		},
		"asciiName": "Sunah",
		"astergdem": 669,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 661,
		"cc2": "YE",
		"adminId2": "6940764",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HD"
		},
		"adminId1": "75411",
		"lat": "15.83333",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1911",
		"adminCode1": "04",
		"lng": "49.01667",
		"geonameId": 70364,
		"toponymName": "Sūnah",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Suna"
			},
			{
				"name": "Sūnah"
			}
		],
		"adminName2": "Tarim",
		"name": "Sūnah",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ḩaḑramawt"
	},
	"70676": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 48.63601979498422,
			"south": 15.917950751248574,
			"north": 15.935938048751426,
			"west": 48.61731360501578,
			"accuracyLevel": 0
		},
		"asciiName": "Shibam",
		"astergdem": 688,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 683,
		"cc2": "YE",
		"adminId2": "6940744",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HD"
		},
		"adminId1": "75411",
		"lat": "15.92694",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1908",
		"adminCode1": "04",
		"lng": "48.62667",
		"geonameId": 70676,
		"toponymName": "Shibām",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Shibam",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "https://en.wikipedia.org/wiki/Shibam",
				"lang": "link"
			},
			{
				"name": "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D0%B1%D0%B0%D0%BC",
				"lang": "link"
			},
			{
				"name": "Schibam",
				"lang": "de"
			},
			{
				"name": "Shibam",
				"lang": "en"
			},
			{
				"name": "Shibam",
				"lang": "fr"
			},
			{
				"name": "Shibam",
				"lang": "nl"
			},
			{
				"name": "Shibam",
				"lang": "sv"
			},
			{
				"name": "Shibām",
				"lang": "ar"
			},
			{
				"name": "Ŝibam",
				"lang": "eo"
			},
			{
				"name": "Šibām"
			},
			{
				"name": "شبام",
				"lang": "ar"
			},
			{
				"name": "شبام",
				"lang": "fa"
			},
			{
				"name": "Шибам",
				"lang": "ru"
			}
		],
		"adminName2": "Shibam",
		"name": "Shibam",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ḩaḑramawt"
	},
	"70809": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.22597727639096,
			"south": 14.974339651248574,
			"north": 14.992326948751426,
			"west": 44.20735612360904,
			"accuracyLevel": 0
		},
		"asciiName": "Shararah",
		"astergdem": 2316,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2300,
		"cc2": "YE",
		"adminId2": "6940804",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "14.98333",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2306",
		"adminCode1": "16",
		"lng": "44.21667",
		"geonameId": 70809,
		"toponymName": "Sharārah",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Shararah",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "https://en.wikipedia.org/wiki/Shararah",
				"lang": "link"
			},
			{
				"name": "Sharara"
			},
			{
				"name": "Sharārah"
			}
		],
		"adminName2": "Bilad Ar Rus",
		"name": "Sharārah",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Sanaa"
	},
	"70843": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.529058293567246,
			"south": 14.921780351248245,
			"north": 14.939767648751754,
			"west": 45.51044170643276,
			"accuracyLevel": 0
		},
		"asciiName": "Shaqir",
		"astergdem": 1160,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1163,
		"adminId2": "6940790",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.93077",
		"fcode": "PPL",
		"continentCode": "AS",
		"elevation": 2,
		"adminCode2": "2106",
		"adminCode1": "05",
		"lng": "45.51975",
		"geonameId": 70843,
		"toponymName": "Shaqīr",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Shaqīr"
			}
		],
		"adminName2": "Ain",
		"name": "Shaqīr",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Shabwah"
	},
	"70936": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 47.03611462764194,
			"south": 15.360581351248573,
			"north": 15.378568648751425,
			"west": 47.017459372358054,
			"accuracyLevel": 0
		},
		"asciiName": "Shabwah",
		"astergdem": 844,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 845,
		"adminId2": "6940788",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "15.36957",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2104",
		"adminCode1": "05",
		"lng": "47.02679",
		"geonameId": 70936,
		"toponymName": "Shabwah",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Hajar Shabwah"
			},
			{
				"name": "Q2005211",
				"lang": "wkdt"
			},
			{
				"name": "Shabwa"
			},
			{
				"name": "Shabwah"
			},
			{
				"name": "شبوة",
				"lang": "ar"
			}
		],
		"adminName2": "Arma",
		"name": "Shabwah",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Shabwah"
	},
	"71137": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.39417579399228,
			"south": 15.174063794655925,
			"north": 15.535380205344076,
			"west": 44.019158206007724,
			"accuracyLevel": 0
		},
		"asciiName": "Sanaa",
		"astergdem": 2253,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2253,
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "15.35472",
		"fcode": "PPLC",
		"continentCode": "AS",
		"adminCode1": "16",
		"lng": "44.20667",
		"geonameId": 71137,
		"toponymName": "Sanaa",
		"population": 1937451,
		"wikipediaURL": "en.wikipedia.org/wiki/Sana%27a",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "ሳና",
				"lang": "am"
			},
			{
				"name": "사나",
				"lang": "ko"
			},
			{
				"name": "サヌア",
				"lang": "ja"
			},
			{
				"name": "http://id.loc.gov/authorities/names/n80086523",
				"lang": "link"
			},
			{
				"name": "https://en.wikipedia.org/wiki/Sana%27a",
				"lang": "link"
			},
			{
				"name": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%B0",
				"lang": "link"
			},
			{
				"name": "SAH",
				"lang": "iata"
			},
			{
				"name": "Sana",
				"lang": "lt"
			},
			{
				"name": "Sana",
				"lang": "lv"
			},
			{
				"name": "Sana",
				"lang": "no"
			},
			{
				"name": "Sana",
				"lang": "pl"
			},
			{
				"name": "Sana",
				"lang": "pt"
			},
			{
				"name": "Sana",
				"lang": "sv"
			},
			{
				"name": "San'a",
				"lang": "it"
			},
			{
				"name": "Saná",
				"lang": "es"
			},
			{
				"name": "Saná",
				"lang": "sk"
			},
			{
				"name": "Şan‘ā'",
				"lang": "et"
			},
			{
				"name": "Şan‘ā’"
			},
			{
				"isPreferredName": true,
				"name": "Sanaa",
				"lang": "de"
			},
			{
				"isPreferredName": true,
				"name": "Sanaa",
				"lang": "en"
			},
			{
				"name": "Sanaa",
				"lang": "eu"
			},
			{
				"name": "Sanaa",
				"lang": "fi"
			},
			{
				"name": "Sanaa",
				"lang": "fr"
			},
			{
				"name": "Sanaa",
				"lang": "io"
			},
			{
				"name": "Sanaa",
				"lang": "nl"
			},
			{
				"name": "Sana'a",
				"lang": "br"
			},
			{
				"name": "Sana'a",
				"lang": "de"
			},
			{
				"name": "Sanaá",
				"lang": "da"
			},
			{
				"name": "Sanaá",
				"lang": "id"
			},
			{
				"name": "Sanaà",
				"lang": "ca"
			},
			{
				"name": "San’ah"
			},
			{
				"name": "YESAH",
				"lang": "unlc"
			},
			{
				"name": "صنعاء",
				"lang": "ar"
			},
			{
				"name": "صنعاء",
				"lang": "fa"
			},
			{
				"name": "צנעא",
				"lang": "he"
			},
			{
				"name": "Σάνα",
				"lang": "el"
			},
			{
				"name": "Сана",
				"lang": "ru"
			},
			{
				"name": "Сана",
				"lang": "tg"
			},
			{
				"name": "Санъо",
				"lang": "tg"
			},
			{
				"name": "萨那",
				"lang": "zh-CN"
			}
		],
		"adminName2": "",
		"name": "Sanaa",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "capital of a political entity",
		"adminName1": "Sanaa"
	},
	"72277": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Naqb al Hajar",
		"astergdem": 843,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 841,
		"cc2": "YE",
		"adminId2": "6940783",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.23333",
		"fcode": "RUIN",
		"continentCode": "AS",
		"adminCode2": "2116",
		"adminCode1": "05",
		"lng": "47.51667",
		"geonameId": 72277,
		"toponymName": "Naqb al Hajar",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Naqab al-Hajar"
			},
			{
				"name": "Naqb al Hajar"
			}
		],
		"adminName2": "Mayfa'a",
		"name": "Naqb al Hajar",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "ruin(s)",
		"adminName1": "Shabwah"
	},
	"72570": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Naqil Mudarraj",
		"astergdem": 1425,
		"countryId": "69543",
		"fcl": "T",
		"srtm3": 1435,
		"adminId2": "72965",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.4",
		"fcode": "PASS",
		"continentCode": "AS",
		"adminCode2": "2612",
		"adminCode1": "14",
		"lng": "45.23333",
		"geonameId": 72570,
		"toponymName": "Naqīl Mudarraj",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Naqīl Mudarraj"
			},
			{
				"name": "Q29885285",
				"lang": "wkdt"
			}
		],
		"adminName2": "Marib City",
		"name": "Naqīl Mudarraj",
		"fclName": "mountain,hill,rock,... ",
		"countryName": "Yemen",
		"fcodeName": "pass",
		"adminName1": "Ma’rib"
	},
	"72968": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.342637029406326,
			"south": 15.446318355629447,
			"north": 15.47874541735623,
			"west": 45.308989557507736,
			"accuracyLevel": 0
		},
		"asciiName": "Ma'rib",
		"astergdem": 1090,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1095,
		"adminId2": "72965",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.46253",
		"fcode": "PPLA",
		"continentCode": "AS",
		"adminCode2": "2612",
		"adminCode1": "14",
		"lng": "45.32581",
		"geonameId": 72968,
		"toponymName": "Ma'rib",
		"population": 16794,
		"wikipediaURL": "en.wikipedia.org/wiki/Ma%27rib",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "https://en.wikipedia.org/wiki/Ma%27rib",
				"lang": "link"
			},
			{
				"name": "Magreb"
			},
			{
				"name": "Mar`rib"
			},
			{
				"name": "MYN",
				"lang": "iata"
			},
			{
				"name": "Мариб",
				"lang": "ru"
			}
		],
		"adminName2": "Marib City",
		"name": "Ma'rib",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "seat of a first-order administrative division",
		"adminName1": "Ma’rib"
	},
	"73198": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Ma`in",
		"astergdem": 1108,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 1110,
		"adminId2": "6940697",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "JA"
		},
		"adminId1": "74222",
		"lat": "16.12797",
		"fcode": "RUIN",
		"continentCode": "AS",
		"adminCode2": "1605",
		"adminCode1": "21",
		"lng": "44.81475",
		"geonameId": 73198,
		"toponymName": "Ma‘īn",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Ma‘īn"
			},
			{
				"name": "Qarnaw"
			},
			{
				"name": "معين",
				"lang": "ar"
			}
		],
		"adminName2": "Al Hazm",
		"name": "Ma‘īn",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "ruin(s)",
		"adminName1": "Al Jawf"
	},
	"74258": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.73935513155659,
			"south": 14.778866351248574,
			"north": 14.796853648751426,
			"west": 45.7207508684434,
			"accuracyLevel": 0
		},
		"asciiName": "Jaradan",
		"astergdem": 1127,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1132,
		"adminId2": "6940780",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.78786",
		"fcode": "PPL",
		"continentCode": "AS",
		"elevation": 2,
		"adminCode2": "2107",
		"adminCode1": "05",
		"lng": "45.73005",
		"geonameId": 74258,
		"toponymName": "Jarādān",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Jarādān"
			},
			{
				"name": "Jardan"
			},
			{
				"name": "Jarrādān"
			}
		],
		"adminName2": "Bayhan",
		"name": "Jarādān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Shabwah"
	},
	"74766": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 48.33615256577798,
			"south": 13.996600351248901,
			"north": 14.0145876487511,
			"west": 48.317613434222025,
			"accuracyLevel": 0
		},
		"asciiName": "Hisn al Ghurab",
		"astergdem": 86,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 99,
		"adminId2": "6940778",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.00559",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2117",
		"adminCode1": "05",
		"lng": "48.32688",
		"geonameId": 74766,
		"toponymName": "Ḩişn al Ghurāb",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Ḥal-Ghurab"
			},
			{
				"name": "Ḩişn al Ghurāb"
			},
			{
				"name": "Husn al Ghurab"
			},
			{
				"name": "Urr Mawīyat"
			}
		],
		"adminName2": "Rudum",
		"name": "Ḩişn al Ghurāb",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Shabwah"
	},
	"75349": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Hajar Bin Humayd",
		"astergdem": 1076,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 1085,
		"adminId2": "6940617",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.91086",
		"fcode": "RUIN",
		"continentCode": "AS",
		"elevation": 3,
		"adminCode2": "2105",
		"adminCode1": "05",
		"lng": "45.76184",
		"geonameId": 75349,
		"toponymName": "Hajar Bin Ḩumayd",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Hajar āl Ḥumaid"
			},
			{
				"name": "Hajar Āl Ḩumayd"
			},
			{
				"name": "Hajar Bin Ḩumayd"
			},
			{
				"name": "Hajar bin Humerd"
			},
			{
				"name": "Hajeir Al Humeid"
			}
		],
		"adminName2": "Usaylan",
		"name": "Hajar Bin Ḩumayd",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "ruin(s)",
		"adminName1": "Shabwah"
	},
	"76546": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Wadi Dara'",
		"astergdem": 1075,
		"countryId": "69543",
		"fcl": "H",
		"srtm3": 1075,
		"adminId2": "6940779",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.52238",
		"fcode": "WAD",
		"continentCode": "AS",
		"adminCode2": "2110",
		"adminCode1": "05",
		"lng": "46.49823",
		"geonameId": 76546,
		"toponymName": "Wādī Ḑarā’",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Wādī Ḑarā’"
			},
			{
				"name": "Wādī Dhurah"
			},
			{
				"name": "Wādī Durā"
			}
		],
		"adminName2": "Nisab",
		"name": "Wādī Ḑarā’",
		"fclName": "stream, lake, ...",
		"countryName": "Yemen",
		"fcodeName": "wadi",
		"adminName1": "Shabwah"
	},
	"76791": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 48.35289430920762,
			"south": 14.014997351248574,
			"north": 14.032984648751427,
			"west": 48.334353690792376,
			"accuracyLevel": 0
		},
		"asciiName": "Bi'r `Ali",
		"astergdem": 14,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 7,
		"adminId2": "6940778",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.02399",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2117",
		"adminCode1": "05",
		"lng": "48.34362",
		"geonameId": 76791,
		"toponymName": "Bi’r ‘Alī",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Bi%27r_%60Ali",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Bir ‘Ait"
			},
			{
				"name": "Bi’r ‘Alī",
				"lang": "ar"
			},
			{
				"name": "https://en.wikipedia.org/wiki/Bi%27r_%60Ali",
				"lang": "link"
			},
			{
				"name": "بئر علي",
				"lang": "ar"
			}
		],
		"adminName2": "Rudum",
		"name": "Bi’r ‘Alī",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Shabwah"
	},
	"77129": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.80935650906515,
			"south": 15.991006351248574,
			"north": 16.008993648751428,
			"west": 44.79064349093485,
			"accuracyLevel": 0
		},
		"asciiName": "Baraqish",
		"astergdem": 1114,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1120,
		"adminId2": "6940836",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "16",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2601",
		"adminCode1": "14",
		"lng": "44.8",
		"geonameId": 77129,
		"toponymName": "Barāqish",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Baraqish",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Barāqish"
			},
			{
				"name": "https://en.wikipedia.org/wiki/Baraqish",
				"lang": "link"
			}
		],
		"adminName2": "Majzar",
		"name": "Barāqish",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ma’rib"
	},
	"77557": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Jabal Ayyub",
		"astergdem": 803,
		"countryId": "69543",
		"fcl": "T",
		"srtm3": 779,
		"cc2": "YE",
		"adminId2": "6940757",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HD"
		},
		"adminId1": "75411",
		"lat": "15.92639",
		"fcode": "PROM",
		"continentCode": "AS",
		"adminCode2": "1910",
		"adminCode1": "04",
		"lng": "48.785",
		"geonameId": 77557,
		"toponymName": "Jabal Ayyūb",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Jabal Aiyūb"
			},
			{
				"name": "Jabal Aiyyub"
			},
			{
				"name": "Jabal Ayyūb"
			}
		],
		"adminName2": "Sayun",
		"name": "Jabal Ayyūb",
		"fclName": "mountain,hill,rock,... ",
		"countryName": "Yemen",
		"fcodeName": "promontory(-ies)",
		"adminName1": "Ḩaḑramawt"
	},
	"79686": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.34380251265744,
			"south": 15.513490351248574,
			"north": 15.531477648751427,
			"west": 44.32513348734256,
			"accuracyLevel": 0
		},
		"asciiName": "Al Ghiras",
		"astergdem": 2211,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2210,
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SA"
		},
		"adminId1": "6940571",
		"lat": "15.52248",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2304",
		"adminCode1": "26",
		"lng": "44.33447",
		"geonameId": 79686,
		"toponymName": "Al Ghirās",
		"population": 0,
		"wikipediaURL": "en.wikipedia.org/wiki/Al_Ghiras",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al Ghirās",
				"lang": "ar"
			},
			{
				"name": "https://en.wikipedia.org/wiki/Al_Ghiras",
				"lang": "link"
			}
		],
		"adminName2": "YE.26.2304",
		"name": "Al Ghirās",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Amanat Al Asimah"
	},
	"79822": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 48.32594721662462,
			"south": 14.257673351248245,
			"north": 14.275660648751755,
			"west": 48.307386783375385,
			"accuracyLevel": 0
		},
		"asciiName": "Al Bina'",
		"astergdem": 420,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 420,
		"adminId2": "6940743",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HD"
		},
		"adminId1": "75411",
		"lat": "14.26667",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1924",
		"adminCode1": "04",
		"lng": "48.31667",
		"geonameId": 79822,
		"toponymName": "Al Binā’",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al Binā’",
				"lang": "ar"
			},
			{
				"name": "Binā"
			},
			{
				"name": "Obne"
			}
		],
		"adminName2": "Hajr",
		"name": "Al Binā’",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ḩaḑramawt"
	},
	"79836": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.598523892949956,
			"south": 13.960188741494997,
			"north": 14.010263258505004,
			"west": 45.54691410705004,
			"accuracyLevel": 0
		},
		"asciiName": "Al Bayda",
		"astergdem": 1992,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2005,
		"adminId2": "6940677",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "BA"
		},
		"adminId1": "79838",
		"lat": "13.98523",
		"fcode": "PPLA",
		"continentCode": "AS",
		"adminCode2": "1409",
		"adminCode1": "20",
		"lng": "45.57272",
		"geonameId": 79836,
		"toponymName": "Al Bayda",
		"population": 37821,
		"wikipediaURL": "en.wikipedia.org/wiki/Al_Bayda%27%2C_Yemen",
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al-Baidā"
			},
			{
				"name": "Al-Baidhah"
			},
			{
				"name": "Al Bayda",
				"lang": "en"
			},
			{
				"name": "Al Bayḑā’"
			},
			{
				"name": "Al Beidha"
			},
			{
				"name": "Beida"
			},
			{
				"name": "Beidha"
			},
			{
				"name": "BYD",
				"lang": "iata"
			},
			{
				"name": "https://en.wikipedia.org/wiki/Al_Bayda%27%2C_Yemen",
				"lang": "link"
			},
			{
				"name": "البيضاء",
				"lang": "ar"
			}
		],
		"adminName2": "Al Bayda City",
		"name": "Al Bayda",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "seat of a first-order administrative division",
		"adminName1": "Al Bayda"
	},
	"79938": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Lisahil",
		"astergdem": 1090,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 1093,
		"adminId2": "6940838",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.78635",
		"fcode": "ANS",
		"continentCode": "AS",
		"adminCode2": "2602",
		"adminCode1": "14",
		"lng": "45.08957",
		"geonameId": 79938,
		"toponymName": "Lisāḩil",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al Asāḩil"
			},
			{
				"name": "‘Araratum"
			},
			{
				"name": "Lisāḩil",
				"lang": "ar"
			}
		],
		"adminName2": "Raghwan",
		"name": "Lisāḩil",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "archaeological/prehistoric site",
		"adminName1": "Ma’rib"
	},
	"80467": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "`Abidah",
		"astergdem": 1106,
		"countryId": "69543",
		"fcl": "L",
		"srtm3": 1102,
		"adminId2": "6940835",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.61667",
		"fcode": "TRB",
		"continentCode": "AS",
		"adminCode2": "2613",
		"adminCode1": "14",
		"lng": "45.3",
		"geonameId": 80467,
		"toponymName": "‘Abīdah",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Abida"
			},
			{
				"name": "‘Abīdah"
			}
		],
		"adminName2": "Marib",
		"name": "‘Abīdah",
		"fclName": "parks,area, ...",
		"countryName": "Yemen",
		"fcodeName": "tribal area",
		"adminName1": "Ma’rib"
	},
	"402243": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.46365621128734,
			"south": 14.780725351248574,
			"north": 14.798712648751426,
			"west": 44.44505178871266,
			"accuracyLevel": 0
		},
		"asciiName": "Busan",
		"astergdem": 2280,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2283,
		"adminId2": "6940769",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "DH"
		},
		"adminId1": "76183",
		"lat": "14.78972",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2001",
		"adminCode1": "11",
		"lng": "44.45435",
		"geonameId": 402243,
		"toponymName": "Būsān",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Būsān",
				"lang": "ar"
			},
			{
				"name": "بوسان",
				"lang": "ar"
			}
		],
		"adminName2": "Al Hada",
		"name": "Būsān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Dhamār"
	},
	"404935": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.28301450922453,
			"south": 15.775944351248574,
			"north": 15.793931648751427,
			"west": 44.26432149077547,
			"accuracyLevel": 0
		},
		"asciiName": "Itwah",
		"astergdem": 2472,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2472,
		"adminId2": "6940622",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "15.78494",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2302",
		"adminCode1": "16",
		"lng": "44.27367",
		"geonameId": 404935,
		"toponymName": "Itwah",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Itwah"
			}
		],
		"adminName2": "Arhab",
		"name": "Itwah",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Sanaa"
	},
	"407047": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.773614041015385,
			"south": 16.150854351248572,
			"north": 16.168841648751428,
			"west": 44.75488595898461,
			"accuracyLevel": 0
		},
		"asciiName": "Kharabat Hamdan",
		"astergdem": 1117,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1127,
		"adminId2": "6940697",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "JA"
		},
		"adminId1": "74222",
		"lat": "16.15985",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1605",
		"adminCode1": "21",
		"lng": "44.76425",
		"geonameId": 407047,
		"toponymName": "Kharābāt Hamdān",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al Kharbah"
			},
			{
				"name": "Kharābāt Hamdān"
			},
			{
				"name": "Kharibat Hamdān"
			},
			{
				"name": "خرابات همدان",
				"lang": "ar"
			}
		],
		"adminName2": "Al Hazm",
		"name": "Kharābāt Hamdān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Al Jawf"
	},
	"408814": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.58996578544693,
			"south": 14.416089351248575,
			"north": 14.434076648751427,
			"west": 44.57139221455308,
			"accuracyLevel": 0
		},
		"asciiName": "Hakir",
		"astergdem": 2436,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2441,
		"adminId2": "6940768",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "DH"
		},
		"adminId1": "76183",
		"lat": "14.42508",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2009",
		"adminCode1": "11",
		"lng": "44.58068",
		"geonameId": 408814,
		"toponymName": "Hakir",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Hakir"
			}
		],
		"adminName2": "Mayfa'at Anss",
		"name": "Hakir",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Dhamār"
	},
	"1094240": {
		"timezone": {
			"gmtOffset": 2,
			"timeZoneId": "Africa/Maputo",
			"dstOffset": 2
		},
		"asciiName": "Rio Muelamaze",
		"astergdem": 200,
		"countryId": "1036973",
		"fcl": "H",
		"srtm3": 206,
		"countryCode": "MZ",
		"adminCodes1": {
			"ISO3166_2": "Q"
		},
		"adminId1": "1024312",
		"lat": "-15.93278",
		"fcode": "STMI",
		"continentCode": "AF",
		"adminCode1": "09",
		"lng": "38.62028",
		"geonameId": 1094240,
		"toponymName": "Rio Muelamaze",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "",
		"name": "Rio Muelamaze",
		"fclName": "stream, lake, ...",
		"countryName": "Mozambique",
		"fcodeName": "intermittent stream",
		"adminName1": "Zambézia"
	},
	"7342817": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.51510287773044,
			"south": 15.653359351248573,
			"north": 15.671346648751426,
			"west": 44.49642112226955,
			"accuracyLevel": 0
		},
		"asciiName": "Al `Uqran",
		"astergdem": 2180,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2179,
		"adminId2": "6940800",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "15.66235",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2303",
		"adminCode1": "16",
		"lng": "44.50576",
		"geonameId": 7342817,
		"toponymName": "Al ‘Uqrān",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Al ‘Uqrān",
				"lang": "ar"
			}
		],
		"adminName2": "Nihm",
		"name": "Al ‘Uqrān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Sanaa"
	},
	"7357210": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.45439593133602,
			"south": 13.9062763512489,
			"north": 13.924263648751099,
			"west": 44.435864068663975,
			"accuracyLevel": 0
		},
		"asciiName": "Zafar",
		"astergdem": 1670,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": -32768,
		"adminId2": "6940645",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "IB"
		},
		"adminId1": "6201196",
		"lat": "13.91527",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1113",
		"adminCode1": "23",
		"lng": "44.44513",
		"geonameId": 7357210,
		"toponymName": "Z̧afār",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Z̧afār"
			},
			{
				"name": "ظفار",
				"lang": "ar"
			}
		],
		"adminName2": "Ba'dan",
		"name": "Z̧afār",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ibb"
	},
	"7363994": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.64834363295364,
			"south": 14.743876351248574,
			"north": 14.761863648751426,
			"west": 44.62974236704636,
			"accuracyLevel": 0
		},
		"asciiName": "Baynun Thawban",
		"astergdem": 2254,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2252,
		"adminId2": "6940769",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "DH"
		},
		"adminId1": "76183",
		"lat": "14.75287",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2001",
		"adminCode1": "11",
		"lng": "44.63904",
		"geonameId": 7363994,
		"toponymName": "Baynūn Thawbān",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Baynūn Thawbān"
			}
		],
		"adminName2": "Al Hada",
		"name": "Baynūn Thawbān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Dhamār"
	},
	"7631782": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 43.2600014261475,
			"south": 16.171694635124858,
			"north": 16.173493364875142,
			"west": 43.2581285738525,
			"accuracyLevel": 0
		},
		"asciiName": "Alman",
		"astergdem": 263,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 285,
		"adminId2": "6940722",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "HJ"
		},
		"adminId1": "6201195",
		"lat": "16.17259",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "1712",
		"adminCode1": "22",
		"lng": "43.25906",
		"geonameId": 7631782,
		"toponymName": "Almān",
		"population": 7,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Almān",
				"lang": "ar"
			},
			{
				"name": "المان",
				"lang": "ar"
			}
		],
		"adminName2": "Aslem",
		"name": "Almān",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ḩajjah"
	},
	"9976272": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.063013347331115,
			"south": 15.421186351248574,
			"north": 15.439173648751426,
			"west": 45.044352652668884,
			"accuracyLevel": 0
		},
		"asciiName": "Ta'ud",
		"astergdem": 1486,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 1487,
		"adminId2": "6940839",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "MA"
		},
		"adminId1": "72966",
		"lat": "15.43018",
		"fcode": "PPL",
		"continentCode": "AS",
		"adminCode2": "2606",
		"adminCode1": "14",
		"lng": "45.05368",
		"geonameId": 9976272,
		"toponymName": "Ta‘ūd",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [
			{
				"name": "Ta‘ūd"
			},
			{
				"name": "تعود",
				"lang": "ar"
			}
		],
		"adminName2": "Sirwah",
		"name": "Ta‘ūd",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "populated place",
		"adminName1": "Ma’rib"
	},
	"10793918": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 45.785184702642844,
			"south": 13.798682702497146,
			"north": 13.834657297502854,
			"west": 45.74813529735716,
			"accuracyLevel": 0
		},
		"asciiName": "ad-Durayb",
		"astergdem": 983,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 991,
		"adminId2": "6940881",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "DA"
		},
		"adminId1": "6201193",
		"lat": "13.81667",
		"fcode": "PPLH",
		"continentCode": "AS",
		"adminCode2": "3004",
		"adminCode1": "18",
		"lng": "45.76666",
		"geonameId": 10793918,
		"toponymName": "ad-Durayb",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Ash Shu'ayb",
		"name": "ad-Durayb",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "historical populated place",
		"adminName1": "Aḑ Ḑāli‘"
	},
	"10793919": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.225705838291525,
			"south": 15.34910270249649,
			"north": 15.385077297503509,
			"west": 44.18839416170848,
			"accuracyLevel": 0
		},
		"asciiName": "Shu'ub",
		"astergdem": 2242,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2248,
		"adminId2": "6940663",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SA"
		},
		"adminId1": "6940571",
		"lat": "15.36709",
		"fcode": "PPLH",
		"continentCode": "AS",
		"adminCode2": "1302",
		"adminCode1": "26",
		"lng": "44.20705",
		"geonameId": 10793919,
		"toponymName": "Shu'ub",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Shu'aub",
		"name": "Shu'ub",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "historical populated place",
		"adminName1": "Amanat Al Asimah"
	},
	"10793963": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"bbox": {
			"east": 44.25269453238422,
			"south": 15.774352702497145,
			"north": 15.810327297502853,
			"west": 44.215305467615785,
			"accuracyLevel": 0
		},
		"asciiName": "Sirwah-Arhab",
		"astergdem": 2502,
		"countryId": "69543",
		"fcl": "P",
		"srtm3": 2503,
		"adminId2": "6940622",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "15.79234",
		"fcode": "PPLH",
		"continentCode": "AS",
		"adminCode2": "2302",
		"adminCode1": "16",
		"lng": "44.234",
		"geonameId": 10793963,
		"toponymName": "Ṣirwāḥ-Arḥab",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Arhab",
		"name": "Ṣirwāḥ-Arḥab",
		"fclName": "city, village,...",
		"countryName": "Yemen",
		"fcodeName": "historical populated place",
		"adminName1": "Sanaa"
	},
	"10942369": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "al-Huqqa",
		"astergdem": 2721,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 2730,
		"adminId2": "6940622",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SN"
		},
		"adminId1": "71132",
		"lat": "15.75",
		"fcode": "ANS",
		"continentCode": "AS",
		"adminCode2": "2302",
		"adminCode1": "16",
		"lng": "44.16667",
		"geonameId": 10942369,
		"toponymName": "al-Ḥuqqa",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Arhab",
		"name": "al-Ḥuqqa",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "archaeological/prehistoric site",
		"adminName1": "Sanaa"
	},
	"10942375": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "as-Sawda",
		"astergdem": 1151,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 1156,
		"adminId2": "6940701",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "JA"
		},
		"adminId1": "74222",
		"lat": "16.16917",
		"fcode": "ANS",
		"continentCode": "AS",
		"adminCode2": "1607",
		"adminCode1": "21",
		"lng": "44.63417",
		"geonameId": 10942375,
		"toponymName": "as-Sawdā",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Al Maslub",
		"name": "as-Sawdā",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "archaeological/prehistoric site",
		"adminName1": "Al Jawf"
	},
	"10942412": {
		"timezone": {
			"gmtOffset": 3,
			"timeZoneId": "Asia/Aden",
			"dstOffset": 3
		},
		"asciiName": "Hinu az-Zurayr",
		"astergdem": 1179,
		"countryId": "69543",
		"fcl": "S",
		"srtm3": 1188,
		"adminId2": "6940790",
		"countryCode": "YE",
		"adminCodes1": {
			"ISO3166_2": "SH"
		},
		"adminId1": "70935",
		"lat": "14.8925",
		"fcode": "RUIN",
		"continentCode": "AS",
		"adminCode2": "2106",
		"adminCode1": "05",
		"lng": "45.51389",
		"geonameId": 10942412,
		"toponymName": "Ḥinū az-Zurayr",
		"population": 0,
		"adminName5": "",
		"adminName4": "",
		"adminName3": "",
		"alternateNames": [],
		"adminName2": "Ain",
		"name": "Ḥinū az-Zurayr",
		"fclName": "spot, building, farm",
		"countryName": "Yemen",
		"fcodeName": "ruin(s)",
		"adminName1": "Shabwah"
	}
};

var AdlibServices = angular.module('AdlibServices', ['ngStorage']);
AdlibServices.service('opacsearch', ['$http', '$localStorage' ,function($http,$localStorage){
	if(!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
	if($localStorage[Config.localStorage]['history']) this.history = $localStorage[Config.localStorage]['history'];
	else {
		var obj = {"history":{"querystring":[],"query":[],"result":[]}}
		$localStorage[Config.localStorage] = obj;
		this.history = $localStorage[Config.localStorage]['history'];
	}
	this.pagesize = Config.pagesize;
	this.sortField = Config.sortField;
	this.sortOrder = Config.sortOrder;
	//////////Parameter Parsers///////////////////////////////
		this.parseFields = function(fields){
			var fieldstring = "";
			if(fields && fields != []) {
				fieldstring +="&fields=";
				fields.forEach(function(field){
					fieldstring += field+",%20"
				})
			}
			return fieldstring;
		}
		this.parseLimit = function(limit,page){
			var limitstring = "";
			if (!limit) var limit = this.pagesize;
			if (!page) var page = 1;
			var skip = (page-1) * limit + 1;
			limitstring = "&limit="+limit+"&startfrom="+skip;
			return limitstring;
		}
		this.parseDB = function(database){
			var dbString = "";
			if(database && database != "") dbString += "&database="+database;
			return dbString;
		}
		this.parseSorting = function(){
			var sortString = "";
			return "%20sort%20"+this.sortField+"%20"+this.sortOrder;
		}
	//////////Callable retrieval functions///////////////////////////////
		this.getFullListbyDB = function(database, fields, page, limit){console.log('getFullList Query: ', database, fields, page, limit);
			return $http.get(Config.baseURL+"&action=search&search=all"+this.parseSorting()+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
		}
		this.getPointerList = function(database, pointerfile ){console.log('getPointerList Query: ', database, pointerfile );
			if(pointerfile) return $http.get(Config.baseURL+"&command=getpointerfile&number="+pointerfile+"&output=JSON"+this.parseDB(database));
			else console.log('Parameters Missing');
		}
		this.getRecordsbyPointer = function(database, pointerfile, fields, page, limit){console.log('getRecordsbyPointer Query: ', database, pointerfile, fields, page, limit);
			if(pointerfile) return $http.get(Config.baseURL+"&action=search&search=pointer "+pointerfile+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
			else console.log('Parameters Missing');
		}
		this.getSingleRecordbyRef = function(database, reference, fields){console.log('getSingleRecord Query: ', database, reference, fields);
			if(reference) return $http.get(Config.baseURL+"&action=search&search=priref="+reference+"&output=JSON"+this.parseDB(database)+this.parseFields(fields));
			else console.log('Parameters Missing');
		}
		this.getRecordsbyIndex = function(database, index, logic, pointer, fields, page, limit){console.log('getRecordsbyIndex Query: ', database, index, logic, pointer, page, fields, limit);
			if(!logic) logic = "OR";
			if(index) {
				var searchstring = "";
				index.forEach(function(query){
					for(var key in query) {
						if(searchstring != "") searchstring += "%20"+logic+"%20";
						searchstring += key+"=%27"+query[key]+"%27";
					}
				});
				if(pointer) {
					searchstring = "(pointer%20"+pointer+")%20AND%20("+searchstring +")";
				}
				return $http.get(Config.baseURL+"&action=search&search="+searchstring+this.parseSorting()+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
			}
			else console.log('Parameters Missing');
		}
	//////////// Parameter getters / setters ///////////////////////////////
		this.updateHistory = function(string, query, page, result){console.log('addtoHistory: ', query, result);
			this.history.querystring.unshift(string);
			this.history.query.unshift(query);
			if(page && result) {
				var obj = {};
				obj[page] = result;
				this.history.result.unshift(obj);
			}
			else this.history.result.unshift({});
		}
		this.clearHistory = function(){console.log('clearing History upon user request.');
			$localStorage[Config.localStorage]['history'] = {"querystring":[],"query":[],"result":[]};
			this.history = $localStorage[Config.localStorage]['history'];
		}
		this.updatePage = function(queryno, page, result){console.log('updatePage: ', queryno, page, result);
			if(this.history.result[queryno]) {
				this.history.result[queryno][page] = result;
			}
			else {
				var obj = {};
				obj[page] = result;
				this.history.result[queryno] = obj;
			}
		}
		this.updateSize = function(newsize){console.log('updateSize: ', newsize);
			this.pagesize = newsize;
			$localStorage[Config.localStorage]['history']['result'] = [];
			this.history = $localStorage[Config.localStorage]['history'];
		};
		this.updateSorting = function(sort, field){console.log('updateSorting: ', sort, field);
			this.sortOrder = sort;
			this.sortField = field;
			this.history.result = [];
		}
}]);
AdlibServices.service('contentrtrvl', ['$http', '$q', function($http, $q){
	var getImage = function(id,width,height,scalemode,fillmode){console.log('getFullList Query: ', database);
		if(database) var promise = $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit=1000");
		else var promise = $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
		return promise;
	};
	return {
	  	FullList: getFullList,
	  	PointerList: getPointerList,
	  	SingleRecord: getSingleRecord
  	};
}]);


///////////////// GeoNames Service Module
//TODO: move to separate file
var GeoNamesServices = angular.module('GeoNamesServices', ['ngStorage']);
GeoNamesServices.service('GeoNamesServices', ['$http', '$localStorage', '$q', function($http, $localStorage, $q){
	const staticcache = sites;
	if(!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
	if($localStorage[Config.localStorage]['geocache']) var geocache = $localStorage[Config.localStorage]['geocache'];
	else {
		$localStorage[Config.localStorage]['geocache'] = {};
		var geocache = $localStorage[Config.localStorage]['cache'];
	}
	var getByID = function(id){console.log('GeoNames getByID: ', id);
		if(Number.isInteger(parseInt(id)) && (!this.geocache[id] || !this.geocache[id]['$$status'])) {
			var promise = $http.get("http://api.geonames.org/getJSON?formatted=true&geonameId="+id+"&username="+Config.geoNamesID);
			return promise;
		}
		if(id && this.geocache.id) return this.geocache.id;
		if(!Number.isInteger(id)) return $q.reject("invalid Parameters");
	}
	var addtoCache = function(ID, promise){console.log('addtoCache', promise);
		if(ID && promise ){
			this.geocache[ID] = promise;
		}
	}
	var clearCache = function(){console.log('clearing geocache upon user request');
		if($localStorage[Config.localStorage]['geocache']) $localStorage[Config.localStorage]['geocache'] = {};
		this.geocache = $localStorage[Config.localStorage]['geocache'];
	}
	return {
	  	getByID: getByID,
	  	addtoCache: addtoCache,
	  	geocache: geocache,
		staticcache: staticcache,
	  	clearCache: clearCache
  	};
}]);

/**
 * Service providing convenience Methods and Cacheing for the zotero webservices API
 */
var ZoteroService = angular.module('ZoteroService', ['ngStorage']);
ZoteroService.service('ZoteroService', function($http, $localStorage, $q, $log){
	this.ZoteroConfig = {
		BASEURL : "https://api.zotero.org/",
		BASEPARAMS : {
      "format":"json",
      "sort":"title",
      "limit":10,
      "direction":"asc",
      "start":0,
      "defaultlib":"3808523"
		}
	}
	this.initStorage = function(){$log.debug('initializing local storage');
		if(!$localStorage[Config.LOCALSTORAGE]) $localStorage[Config.LOCALSTORAGE] = {};
		if($localStorage[Config.LOCALSTORAGE]['zoterocache']) this.zoterocache = $localStorage[Config.LOCALSTORAGE]['zoterocache'];
		else {
			$localStorage[Config.LOCALSTORAGE]['zoterocache'] = {};
			this.zoterocache = $localStorage[Config.LOCALSTORAGE]['zoterocache'];
		}
	}
  this.getList = function(inputparams){$log.debug('GeoNames getList: ', inputparams);
		var params = JSON.parse(JSON.stringify(this.ZoteroConfig.BASEPARAMS));
		Object.assign(params, inputparams);
		return $q(function(resolve, reject){
			$http.get(
				this.ZoteroConfig.BASEURL+params.path,
				{
					params: params
				}
			).then(
			function(res){
        resolve(res);
			}.bind(this),
			function(err){
				reject(err);
			});
		}.bind(this));
	}
	this.getItem = function(path){$log.debug('GeoNames getByID: ', path);
		return $q(function(resolve, reject){
			if(this.zoterocache[path]) resolve(this.zoterocache[path]);
			else if(!this.zoterocache[path]) {
				$http.get(
					this.ZoteroConfig.BASEURL+path,
					{
					}
				).then(
				function(res){
            console.log(res);
            resolve(res.data);
            //this.zoterocache[params.geonameId] = res.data;
				}.bind(this),
				function(err){
					reject(err);
				});
			}
		}.bind(this));
	}
  this.updateSize = function(newsize){
    this.ZoteroConfig.BASEPARAMS.limit = newsize;
    return this.ZoteroConfig.BASEPARAMS.limit;
  }
  this.updateSorting = function(direction,param){
    this.ZoteroConfig.BASEPARAMS.direction = direction;
    this.ZoteroConfig.BASEPARAMS.sort = param;
    return {direction:this.ZoteroConfig.BASEPARAMS.direction, sort:this.ZoteroConfig.BASEPARAMS.sort  }
  }
  this.updateStart = function(start){
    this.ZoteroConfig.BASEPARAMS.start = start;
    return this.ZoteroConfig.BASEPARAMS.start;
  }
  this.initStorage();
});

/**
 * Service providing convenience Methods and Cacheing for the ExistDB API
 */
var ExistService = angular.module('ExistService', ['ngStorage']);
ExistService.service('ExistService', function($http, $localStorage, $q, $log){
  this.Manifest = $q;
  this.Meta = {HITS:0}
  this.ExistConfig = {
		BASEURL : "https://glaser-tei.acdh.oeaw.ac.at/exist/restxq/glaser-tei/done/",
    PAGESIZE: 10
	}
	this.initStorage = function(){$log.debug('initializing local storage');
		if(!$localStorage[Config.LOCALSTORAGE]) $localStorage[Config.LOCALSTORAGE] = {};
		if($localStorage[Config.LOCALSTORAGE]['existcache']) this.existcache = $localStorage[Config.LOCALSTORAGE]['existcache'];
		else {
			$localStorage[Config.LOCALSTORAGE]['existcache'] = {};
			this.existcache = $localStorage[Config.LOCALSTORAGE]['existcache'];
		}
    //TODO: make TEI records queryable by ID
    //as the single record id_s are not trivial since they contain the ingest time/database
    //well have to fetch the entire manifest in the beginning to have the proper urls independent of the current page
    this.Manifest = $q(function(resolve, reject){
      $http.get(this.ExistConfig.BASEURL+'json?page[number]=1&page[size]=1000').then(function(res){
        var idx = res.data.data.length;
        var m = {};
        while(idx--){
          var key = res.data.data[idx].id.split('_')[0];
          m[key] = res.data.data[idx];
        }
        this.Meta.HITS = res.data.meta.hits;
        resolve(m);
      }.bind(this));
    }.bind(this));
	}
  this.getPage = function(pageno, pagesize){$log.debug('fetching Exist Page', pageno, pagesize);
    if(!pageno) pageno = 1;
    if(!pagesize) pagesize = this.ExistConfig.PAGESIZE;
		return $q(function(resolve, reject){
			$http.get(
				this.ExistConfig.BASEURL+'json'+'?page[number]='+pageno+'&page[size]='+pagesize,
				{
				}
			).then(
			function(res){
        this.Page = {};
        var idx = res.data.data.length;
        while(idx--){
          var key = res.data.data[idx].id.split('.')[0];
          this.Page[key] = res.data.data[idx];
        }
        this.Meta.HITS = res.data.meta.hits;
        resolve(this.Page);
			}.bind(this),
			function(err){
				reject(err);
			});
		}.bind(this));
	}
	this.getItem = function(id, format){console.log('Exist getByID: ', id, format);
    if(!format) var format = "xml";
		return $q(function(resolve, reject){
			if(this.existcache[id]) resolve(this.existcache[id]);
			else if(!this.existcache[id]) {
        this.Manifest.then(function(m){
          $http.get(
  					this.ExistConfig.BASEURL+id+'.xml/'+format,
  				).then(
  				function(res){
              resolve(res.data);
  				}.bind(this),
  				function(err){
  					reject(err);
  				});
        }.bind(this));
			}
		}.bind(this));
	}
  this.updatePage = function(queryno, page, result){console.log('updatePage: ', queryno, page, result);
    if(this.history.result[queryno]) {
      this.history.result[queryno][page] = result;
    }
    else {
      var obj = {};
      obj[page] = result;
      this.history.result[queryno] = obj;
    }
  }
  this.updateSize = function(newsize){console.log('updateSize: ', newsize);
    this.pagesize = newsize;
    $localStorage[Config.localStorage]['history']['result'] = [];
    this.history = $localStorage[Config.localStorage]['history'];
  };
  this.initStorage();
});
