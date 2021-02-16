'use strict';

/* Adlib API Query Services Module */
const Config = {
  "baseURL": "https://opacbasis.acdh.oeaw.ac.at/wwwopac.ashx?",
  "pagesize": 40,
  "sortField": "title",
  "sortOrder": "ascending",
  "currentView": "list",
  "localStorage": "GlaserStorage",
  "geoNamesID": "oeaw_adlib"
}

const sites = {
  "71451": {
    "timezone": {"gmtOffset": 3, "timeZoneId": "Asia/Aden", "dstOffset": 3},
    "asciiName": "Jabal Riyam",
    "astergdem": 2525,
    "countryId": "69543",
    "fcl": "T",
    "srtm3": 2514,
    "adminId2": "71489",
    "countryCode": "YE",
    "adminCodes1": {"ISO3166_2": "BA"},
    "adminId1": "79838",
    "lat": "14.32405",
    "fcode": "MT",
    "continentCode": "AS",
    "adminCode2": "1413",
    "adminCode1": "20",
    "lng": "44.95176",
    "geonameId": 71451,
    "toponymName": "Jabal Riyām",
    "population": 0,
    "adminName5": "",
    "adminName4": "",
    "adminName3": "",
    "alternateNames": [{"name": "Jabal Riyām"}, {"name": "Q29875790", "lang": "wkdt"}],
    "adminName2": "Radā‘",
    "name": "Jabal Riyām",
    "fclName": "mountain,hill,rock,... ",
    "countryName": "Yemen",
    "fcodeName": "mountain",
    "adminName1": "Al Bayda"
  },
  "76184": {
    "timezone": {"gmtOffset": 3, "timeZoneId": "Asia/Aden", "dstOffset": 3},
    "bbox": {
      "east": 44.45873407216954,
      "south": 14.490882091411732,
      "north": 14.594601908588269,
      "west": 44.351555927830454,
      "accuracyLevel": 0
    },
    "asciiName": "Dhamar",
    "astergdem": 2429,
    "countryId": "69543",
    "fcl": "P",
    "srtm3": 2421,
    "adminId2": "76182",
    "countryCode": "YE",
    "adminCodes1": {"ISO3166_2": "DH"},
    "adminId1": "76183",
    "lat": "14.54274",
    "fcode": "PPLA",
    "continentCode": "AS",
    "adminCode2": "2008",
    "adminCode1": "11",
    "lng": "44.40514",
    "geonameId": 76184,
    "toponymName": "Dhamār",
    "population": 160114,
    "wikipediaURL": "en.wikipedia.org/wiki/Dhamar%2C_Yemen",
    "adminName5": "",
    "adminName4": "",
    "adminName3": "",
    "alternateNames": [{"name": "Damar"}, {"name": "Dhamār"}, {
      "name": "DMR",
      "lang": "iata"
    }, {"name": "https://en.wikipedia.org/wiki/Dhamar,_Yemen", "lang": "link"}, {
      "name": "YEDMR",
      "lang": "unlc"
    }, {"name": "ذمار", "lang": "ar"}],
    "adminName2": "Madīnat Dhamār",
    "name": "Dhamār",
    "fclName": "city, village,...",
    "countryName": "Yemen",
    "fcodeName": "seat of a first-order administrative division",
    "adminName1": "Dhamār"
  },
  "77017": {
    "timezone": {"gmtOffset": 3, "timeZoneId": "Asia/Aden", "dstOffset": 3},
    "bbox": {
      "east": 45.73749713470297,
      "south": 14.782681702497145,
      "north": 14.818656297502853,
      "west": 45.70028486529703,
      "accuracyLevel": 0
    },
    "asciiName": "Bayhan",
    "astergdem": 1124,
    "countryId": "69543",
    "fcl": "P",
    "srtm3": 1127,
    "adminId2": "6940780",
    "countryCode": "YE",
    "adminCodes1": {"ISO3166_2": "SH"},
    "adminId1": "70935",
    "lat": "14.80067",
    "fcode": "PPLA2",
    "continentCode": "AS",
    "elevation": 2,
    "adminCode2": "2107",
    "adminCode1": "05",
    "lng": "45.71889",
    "geonameId": 77017,
    "toponymName": "Bayḩān",
    "population": 0,
    "wikipediaURL": "en.wikipedia.org/wiki/Beihan",
    "adminName5": "",
    "adminName4": "",
    "adminName3": "",
    "alternateNames": [{"name": "Al-Kaṣāb"}, {"name": "Baiḥān al-Qaṣāb"}, {"name": "Bayḩān"}, {"name": "Bayḩān al Qaşāb"}, {"name": "Bayḩān al Qişāb"}, {"name": "Bayhan al Quisab"}, {"name": "Bayhan Qasab"}, {"name": "Beihā al Qasāb"}, {"name": "Beihan"}, {"name": "Beihan Qasab"}, {"name": "Beuhan"}, {
      "name": "BHN",
      "lang": "iata"
    }, {"name": "Ḥiṣn ‘Abd Allāh"}, {
      "name": "https://en.wikipedia.org/wiki/Beihan",
      "lang": "link"
    }, {"name": "Sūq ‘Abd Allāb"}, {"name": "YEBHN", "lang": "unlc"}, {"name": "بيحان", "lang": "ar"}],
    "adminName2": "Bayhan",
    "name": "Bayḩān",
    "fclName": "city, village,...",
    "countryName": "Yemen",
    "fcodeName": "seat of a second-order administrative division",
    "adminName1": "Shabwah"
  },
  "10942408": {
    "timezone": {"gmtOffset": 3, "timeZoneId": "Asia/Aden", "dstOffset": 3},
    "asciiName": "al-'Adiyya",
    "astergdem": 2190,
    "countryId": "69543",
    "fcl": "S",
    "srtm3": 2185,
    "adminId2": "6940671",
    "countryCode": "YE",
    "adminCodes1": {"ISO3166_2": "BA"},
    "adminId1": "79838",
    "lat": "13.989",
    "fcode": "RUIN",
    "continentCode": "AS",
    "adminCode2": "1408",
    "adminCode1": "20",
    "lng": "45.721",
    "geonameId": 10942408,
    "toponymName": "al-ʿĀdiyya",
    "population": 0,
    "adminName5": "",
    "adminName4": "",
    "adminName3": "",
    "alternateNames": [],
    "adminName2": "Mukayras",
    "name": "al-ʿĀdiyya",
    "fclName": "spot, building, farm",
    "countryName": "Yemen",
    "fcodeName": "ruin(s)",
    "adminName1": "Al Bayda"
  },
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
const legacyPrirefs = [
  {
    "old": "1110004335",
    "new": "110004268"
  },
  {
    "old": "1110004339",
    "new": "110004267"
  },
  {
    "old": "1110004338",
    "new": "110004266"
  },
  {
    "old": "1110004337",
    "new": "110004265"
  },
  {
    "old": "1110004336",
    "new": "110004264"
  },
  {
    "old": "1110004335",
    "new": "110004263"
  },
  {
    "old": "1110004334",
    "new": "110004262"
  },
  {
    "old": "1110004333",
    "new": "110004261"
  },
  {
    "old": "1110004332",
    "new": "110004260"
  },
  {
    "old": "1110004331",
    "new": "110004259"
  },
  {
    "old": "1110004330",
    "new": "110004258"
  },
  {
    "old": "1110004329",
    "new": "110004257"
  },
  {
    "old": "1110004328",
    "new": "110004256"
  },
  {
    "old": "1110004327",
    "new": "110004255"
  },
  {
    "old": "1110004326",
    "new": "110004254"
  },
  {
    "old": "1110004325",
    "new": "110004253"
  },
  {
    "old": "1110004324",
    "new": "110004252"
  },
  {
    "old": "1110004323",
    "new": "110004251"
  },
  {
    "old": "1110004322",
    "new": "110004250"
  },
  {
    "old": "1110004321",
    "new": "110004249"
  },
  {
    "old": "1110004320",
    "new": "110004248"
  },
  {
    "old": "1110004319",
    "new": "110004247"
  },
  {
    "old": "1110004318",
    "new": "110004246"
  },
  {
    "old": "1110004317",
    "new": "110004245"
  },
  {
    "old": "1110004316",
    "new": "110004244"
  },
  {
    "old": "1110004315",
    "new": "110004243"
  },
  {
    "old": "1110004314",
    "new": "110004242"
  },
  {
    "old": "1110004313",
    "new": "110004241"
  },
  {
    "old": "1110004312",
    "new": "110004240"
  },
  {
    "old": "1110004311",
    "new": "110004239"
  },
  {
    "old": "1110004310",
    "new": "110004238"
  },
  {
    "old": "1110004309",
    "new": "110004237"
  },
  {
    "old": "1110004308",
    "new": "110004236"
  },
  {
    "old": "1110004307",
    "new": "110004235"
  },
  {
    "old": "1110004306",
    "new": "110004234"
  },
  {
    "old": "1110004305",
    "new": "110004233"
  },
  {
    "old": "1110004304",
    "new": "110004232"
  },
  {
    "old": "1110004303",
    "new": "110004231"
  },
  {
    "old": "1110004302",
    "new": "110004230"
  },
  {
    "old": "1110004301",
    "new": "110004229"
  },
  {
    "old": "1110004300",
    "new": "110004228"
  },
  {
    "old": "1110004299",
    "new": "110004227"
  },
  {
    "old": "1110004298",
    "new": "110004226"
  },
  {
    "old": "1110004297",
    "new": "110004225"
  },
  {
    "old": "1110004296",
    "new": "110004224"
  },
  {
    "old": "1110004295",
    "new": "110004223"
  },
  {
    "old": "1110004294",
    "new": "110004222"
  },
  {
    "old": "1110004293",
    "new": "110004221"
  },
  {
    "old": "1110004292",
    "new": "110004220"
  },
  {
    "old": "1110004291",
    "new": "110004219"
  },
  {
    "old": "1110004290",
    "new": "110004218"
  },
  {
    "old": "1110004289",
    "new": "110004217"
  },
  {
    "old": "1110004288",
    "new": "110004216"
  },
  {
    "old": "1110004287",
    "new": "110004215"
  },
  {
    "old": "1110004286",
    "new": "110004214"
  },
  {
    "old": "1110004285",
    "new": "110004213"
  },
  {
    "old": "1110004284",
    "new": "110004212"
  },
  {
    "old": "1110004283",
    "new": "110004211"
  },
  {
    "old": "1110004282",
    "new": "110004210"
  },
  {
    "old": "1110004281",
    "new": "110004209"
  },
  {
    "old": "1110004280",
    "new": "110004208"
  },
  {
    "old": "1110004279",
    "new": "110004207"
  },
  {
    "old": "1110004278",
    "new": "110004206"
  },
  {
    "old": "1110004277",
    "new": "110004205"
  },
  {
    "old": "1110004276",
    "new": "110004204"
  },
  {
    "old": "1110004275",
    "new": "110004203"
  },
  {
    "old": "1110004274",
    "new": "110004202"
  },
  {
    "old": "1110004273",
    "new": "110004201"
  },
  {
    "old": "1110004272",
    "new": "110004200"
  },
  {
    "old": "1110004271",
    "new": "110004199"
  },
  {
    "old": "1110004270",
    "new": "110004198"
  },
  {
    "old": "1110004269",
    "new": "110004197"
  },
  {
    "old": "1110004268",
    "new": "110004196"
  },
  {
    "old": "1110004267",
    "new": "110004195"
  },
  {
    "old": "1110004266",
    "new": "110004194"
  },
  {
    "old": "1110004265",
    "new": "110004193"
  },
  {
    "old": "1110004264",
    "new": "110004192"
  },
  {
    "old": "1110004263",
    "new": "110004191"
  },
  {
    "old": "1110004262",
    "new": "110004190"
  },
  {
    "old": "1110004261",
    "new": "110004189"
  },
  {
    "old": "1110004260",
    "new": "110004188"
  },
  {
    "old": "1110004259",
    "new": "110004187"
  },
  {
    "old": "1110004258",
    "new": "110004186"
  },
  {
    "old": "1110004257",
    "new": "110004185"
  },
  {
    "old": "1110004256",
    "new": "110004184"
  },
  {
    "old": "1110004255",
    "new": "110004183"
  },
  {
    "old": "1110004254",
    "new": "110004182"
  },
  {
    "old": "1110004253",
    "new": "110004181"
  },
  {
    "old": "1110004252",
    "new": "110004180"
  },
  {
    "old": "1110004251",
    "new": "110004179"
  },
  {
    "old": "1110004250",
    "new": "110004178"
  },
  {
    "old": "1110004249",
    "new": "110004177"
  },
  {
    "old": "1110004248",
    "new": "110004176"
  },
  {
    "old": "1110004247",
    "new": "110004175"
  },
  {
    "old": "1110004246",
    "new": "110004174"
  },
  {
    "old": "1110004245",
    "new": "110004173"
  },
  {
    "old": "1110004244",
    "new": "110004172"
  },
  {
    "old": "1110004243",
    "new": "110004171"
  },
  {
    "old": "1110004242",
    "new": "110004170"
  },
  {
    "old": "1110004241",
    "new": "110004169"
  },
  {
    "old": "1110004240",
    "new": "110004168"
  },
  {
    "old": "1110004239",
    "new": "110004167"
  },
  {
    "old": "1110004238",
    "new": "110004166"
  },
  {
    "old": "1110004237",
    "new": "110004165"
  },
  {
    "old": "1110004236",
    "new": "110004164"
  },
  {
    "old": "1110004235",
    "new": "110004163"
  },
  {
    "old": "1110004234",
    "new": "110004162"
  },
  {
    "old": "1110004233",
    "new": "110004161"
  },
  {
    "old": "1110004232",
    "new": "110004160"
  },
  {
    "old": "1110004231",
    "new": "110004159"
  },
  {
    "old": "1110004230",
    "new": "110004158"
  },
  {
    "old": "1110004229",
    "new": "110004157"
  },
  {
    "old": "1110004228",
    "new": "110004156"
  },
  {
    "old": "1110004227",
    "new": "110004155"
  },
  {
    "old": "1110004226",
    "new": "110004154"
  },
  {
    "old": "1110004225",
    "new": "110004153"
  },
  {
    "old": "1110004224",
    "new": "110004152"
  },
  {
    "old": "1110004223",
    "new": "110004151"
  },
  {
    "old": "1110004222",
    "new": "110004150"
  },
  {
    "old": "1110004221",
    "new": "110004149"
  },
  {
    "old": "1110004220",
    "new": "110004148"
  },
  {
    "old": "1110004219",
    "new": "110004147"
  },
  {
    "old": "1110004218",
    "new": "110004146"
  },
  {
    "old": "1110004217",
    "new": "110004145"
  },
  {
    "old": "1110004216",
    "new": "110004144"
  },
  {
    "old": "1110004215",
    "new": "110004143"
  },
  {
    "old": "1110004214",
    "new": "110004142"
  },
  {
    "old": "1110004213",
    "new": "110004141"
  },
  {
    "old": "1110004212",
    "new": "110004140"
  },
  {
    "old": "1110004211",
    "new": "110004139"
  },
  {
    "old": "1110004210",
    "new": "110004138"
  },
  {
    "old": "1110004209",
    "new": "110004137"
  },
  {
    "old": "1110004208",
    "new": "110004136"
  },
  {
    "old": "1110004207",
    "new": "110004135"
  },
  {
    "old": "1110004206",
    "new": "110004134"
  },
  {
    "old": "1110004205",
    "new": "110004133"
  },
  {
    "old": "1110004204",
    "new": "110004132"
  },
  {
    "old": "1110004203",
    "new": "110004131"
  },
  {
    "old": "1110004202",
    "new": "110004130"
  },
  {
    "old": "1110004201",
    "new": "110004129"
  },
  {
    "old": "1110004200",
    "new": "110004128"
  },
  {
    "old": "1110004199",
    "new": "110004127"
  },
  {
    "old": "1110004198",
    "new": "110004126"
  },
  {
    "old": "1110004197",
    "new": "110004125"
  },
  {
    "old": "1110004196",
    "new": "110004124"
  },
  {
    "old": "1110004195",
    "new": "110004123"
  },
  {
    "old": "1110004194",
    "new": "110004122"
  },
  {
    "old": "1110004193",
    "new": "110004121"
  },
  {
    "old": "1110004192",
    "new": "110004120"
  },
  {
    "old": "1110004191",
    "new": "110004119"
  },
  {
    "old": "1110004190",
    "new": "110004118"
  },
  {
    "old": "1110004189",
    "new": "110004117"
  },
  {
    "old": "1110004188",
    "new": "110004116"
  },
  {
    "old": "1110004187",
    "new": "110004115"
  },
  {
    "old": "1110004186",
    "new": "110004114"
  },
  {
    "old": "1110004185",
    "new": "110004113"
  },
  {
    "old": "1110004184",
    "new": "110004112"
  },
  {
    "old": "1110004183",
    "new": "110004111"
  },
  {
    "old": "1110004182",
    "new": "110004110"
  },
  {
    "old": "1110004181",
    "new": "110004109"
  },
  {
    "old": "1110004180",
    "new": "110004108"
  },
  {
    "old": "1110004179",
    "new": "110004107"
  },
  {
    "old": "1110004178",
    "new": "110004106"
  },
  {
    "old": "1110004177",
    "new": "110004105"
  },
  {
    "old": "1110004176",
    "new": "110004104"
  },
  {
    "old": "1110004175",
    "new": "110004103"
  },
  {
    "old": "1110004174",
    "new": "110004102"
  },
  {
    "old": "1110004173",
    "new": "110004101"
  },
  {
    "old": "1110004172",
    "new": "110004100"
  },
  {
    "old": "1110004171",
    "new": "110004099"
  },
  {
    "old": "1110004170",
    "new": "110004098"
  },
  {
    "old": "1110004169",
    "new": "110004097"
  },
  {
    "old": "1110004168",
    "new": "110004096"
  },
  {
    "old": "1110004167",
    "new": "110004095"
  },
  {
    "old": "1110004166",
    "new": "110004094"
  },
  {
    "old": "1110004165",
    "new": "110004093"
  },
  {
    "old": "1110004164",
    "new": "110004092"
  },
  {
    "old": "1110004163",
    "new": "110004091"
  },
  {
    "old": "1110004162",
    "new": "110004090"
  },
  {
    "old": "1110004161",
    "new": "110004089"
  },
  {
    "old": "1110004160",
    "new": "110004088"
  },
  {
    "old": "1110004159",
    "new": "110004087"
  },
  {
    "old": "1110004158",
    "new": "110004086"
  },
  {
    "old": "1110004157",
    "new": "110004085"
  },
  {
    "old": "1110004156",
    "new": "110004084"
  },
  {
    "old": "1110004155",
    "new": "110004083"
  },
  {
    "old": "1110004154",
    "new": "110004082"
  },
  {
    "old": "1110004153",
    "new": "110004081"
  },
  {
    "old": "1110004152",
    "new": "110004080"
  },
  {
    "old": "1110004151",
    "new": "110004079"
  },
  {
    "old": "1110004150",
    "new": "110004078"
  },
  {
    "old": "1110004149",
    "new": "110004077"
  },
  {
    "old": "1110004148",
    "new": "110004076"
  },
  {
    "old": "1110004147",
    "new": "110004075"
  },
  {
    "old": "1110004146",
    "new": "110004074"
  },
  {
    "old": "1110004145",
    "new": "110004073"
  },
  {
    "old": "1110004144",
    "new": "110004072"
  },
  {
    "old": "1110004143",
    "new": "110004071"
  },
  {
    "old": "1110004142",
    "new": "110004070"
  },
  {
    "old": "1110004141",
    "new": "110004069"
  },
  {
    "old": "1110004140",
    "new": "110004068"
  },
  {
    "old": "1110004139",
    "new": "110004067"
  },
  {
    "old": "1110004138",
    "new": "110004066"
  },
  {
    "old": "1110004137",
    "new": "110004065"
  },
  {
    "old": "1110004136",
    "new": "110004064"
  },
  {
    "old": "1110004135",
    "new": "110004063"
  },
  {
    "old": "1110004134",
    "new": "110004062"
  },
  {
    "old": "1110004133",
    "new": "110004061"
  },
  {
    "old": "1110004132",
    "new": "110004060"
  },
  {
    "old": "1110004131",
    "new": "110004059"
  },
  {
    "old": "1110004130",
    "new": "110004058"
  },
  {
    "old": "1110004129",
    "new": "110004057"
  },
  {
    "old": "1110004128",
    "new": "110004056"
  },
  {
    "old": "1110004127",
    "new": "110004055"
  },
  {
    "old": "1110004126",
    "new": "110004054"
  },
  {
    "old": "1110004125",
    "new": "110004053"
  },
  {
    "old": "1110004124",
    "new": "110004052"
  },
  {
    "old": "1110004123",
    "new": "110004051"
  },
  {
    "old": "1110004122",
    "new": "110004050"
  },
  {
    "old": "1110004121",
    "new": "110004049"
  },
  {
    "old": "1110004120",
    "new": "110004048"
  },
  {
    "old": "1110004119",
    "new": "110004047"
  },
  {
    "old": "1110004118",
    "new": "110004046"
  },
  {
    "old": "1110004117",
    "new": "110004045"
  },
  {
    "old": "1110004116",
    "new": "110004044"
  },
  {
    "old": "1110004115",
    "new": "110004043"
  },
  {
    "old": "1110004114",
    "new": "110004042"
  },
  {
    "old": "1110004113",
    "new": "110004041"
  },
  {
    "old": "1110004112",
    "new": "110004040"
  },
  {
    "old": "1110004111",
    "new": "110004039"
  },
  {
    "old": "1110004110",
    "new": "110004038"
  },
  {
    "old": "1110004109",
    "new": "110004037"
  },
  {
    "old": "1110004108",
    "new": "110004036"
  },
  {
    "old": "1110004107",
    "new": "110004035"
  },
  {
    "old": "1110004106",
    "new": "110004034"
  },
  {
    "old": "1110004105",
    "new": "110004033"
  },
  {
    "old": "1110004104",
    "new": "110004032"
  },
  {
    "old": "1110004103",
    "new": "110004031"
  },
  {
    "old": "1110004102",
    "new": "110004030"
  },
  {
    "old": "1110004101",
    "new": "110004029"
  },
  {
    "old": "1110004100",
    "new": "110004028"
  },
  {
    "old": "1110004099",
    "new": "110004027"
  },
  {
    "old": "1110004098",
    "new": "110004026"
  },
  {
    "old": "1110004097",
    "new": "110004025"
  },
  {
    "old": "1110004096",
    "new": "110004024"
  },
  {
    "old": "1110004095",
    "new": "110004023"
  },
  {
    "old": "1110004094",
    "new": "110004022"
  },
  {
    "old": "1110004093",
    "new": "110004021"
  },
  {
    "old": "1110004092",
    "new": "110004020"
  },
  {
    "old": "1110004091",
    "new": "110004019"
  },
  {
    "old": "1110004090",
    "new": "110004018"
  },
  {
    "old": "1110004089",
    "new": "110004017"
  },
  {
    "old": "1110004088",
    "new": "110004016"
  },
  {
    "old": "1110004087",
    "new": "110004015"
  },
  {
    "old": "1110004086",
    "new": "110004014"
  },
  {
    "old": "1110004085",
    "new": "110004013"
  },
  {
    "old": "1110004084",
    "new": "110004012"
  },
  {
    "old": "1110004083",
    "new": "110004011"
  },
  {
    "old": "1110004082",
    "new": "110004010"
  },
  {
    "old": "1110004081",
    "new": "110004009"
  },
  {
    "old": "1110004080",
    "new": "110004008"
  },
  {
    "old": "1110004079",
    "new": "110004007"
  },
  {
    "old": "1110004078",
    "new": "110004006"
  },
  {
    "old": "1110004077",
    "new": "110004005"
  },
  {
    "old": "1110004076",
    "new": "110004004"
  },
  {
    "old": "1110004075",
    "new": "110004003"
  },
  {
    "old": "1110004074",
    "new": "110004002"
  },
  {
    "old": "1110004073",
    "new": "110004001"
  },
  {
    "old": "1110004072",
    "new": "110004000"
  },
  {
    "old": "1110004071",
    "new": "110003999"
  },
  {
    "old": "1110004070",
    "new": "110003998"
  },
  {
    "old": "1110004069",
    "new": "110003997"
  },
  {
    "old": "1110004068",
    "new": "110003996"
  },
  {
    "old": "1110004067",
    "new": "110003995"
  },
  {
    "old": "1110004066",
    "new": "110003994"
  },
  {
    "old": "1110004065",
    "new": "110003993"
  },
  {
    "old": "1110004064",
    "new": "110003992"
  },
  {
    "old": "1110004063",
    "new": "110003991"
  },
  {
    "old": "1110004062",
    "new": "110003990"
  },
  {
    "old": "1110004061",
    "new": "110003989"
  },
  {
    "old": "1110004060",
    "new": "110003988"
  },
  {
    "old": "1110004059",
    "new": "110003987"
  },
  {
    "old": "1110004058",
    "new": "110003986"
  },
  {
    "old": "1110004057",
    "new": "110003985"
  },
  {
    "old": "1110004056",
    "new": "110003984"
  },
  {
    "old": "1110004055",
    "new": "110003983"
  },
  {
    "old": "1110004054",
    "new": "110003982"
  },
  {
    "old": "1110004053",
    "new": "110003981"
  },
  {
    "old": "1110004052",
    "new": "110003980"
  },
  {
    "old": "1110004051",
    "new": "110003979"
  },
  {
    "old": "1110004050",
    "new": "110003978"
  },
  {
    "old": "1110004049",
    "new": "110003977"
  },
  {
    "old": "1110004048",
    "new": "110003976"
  },
  {
    "old": "1110004047",
    "new": "110003975"
  },
  {
    "old": "1110004046",
    "new": "110003974"
  },
  {
    "old": "1110004045",
    "new": "110003973"
  },
  {
    "old": "1110004044",
    "new": "110003972"
  },
  {
    "old": "1110004043",
    "new": "110003971"
  },
  {
    "old": "1110004042",
    "new": "110003970"
  },
  {
    "old": "1110004041",
    "new": "110003969"
  },
  {
    "old": "1110004040",
    "new": "110003968"
  },
  {
    "old": "1110004039",
    "new": "110003967"
  },
  {
    "old": "1110004038",
    "new": "110003966"
  },
  {
    "old": "1110004037",
    "new": "110003965"
  },
  {
    "old": "1110004036",
    "new": "110003964"
  },
  {
    "old": "1110004035",
    "new": "110003963"
  },
  {
    "old": "1110004034",
    "new": "110003962"
  },
  {
    "old": "1110004033",
    "new": "110003961"
  },
  {
    "old": "1110004032",
    "new": "110003960"
  },
  {
    "old": "1110004031",
    "new": "110003959"
  },
  {
    "old": "1110004030",
    "new": "110003958"
  },
  {
    "old": "1110004029",
    "new": "110003957"
  },
  {
    "old": "1110004028",
    "new": "110003956"
  },
  {
    "old": "1110004027",
    "new": "110003955"
  },
  {
    "old": "1110004026",
    "new": "110003954"
  },
  {
    "old": "1110004025",
    "new": "110003953"
  },
  {
    "old": "1110004024",
    "new": "110003952"
  },
  {
    "old": "1110004023",
    "new": "110003951"
  },
  {
    "old": "1110004022",
    "new": "110003950"
  },
  {
    "old": "1110004021",
    "new": "110003949"
  },
  {
    "old": "1110004020",
    "new": "110003948"
  },
  {
    "old": "1110004019",
    "new": "110003947"
  },
  {
    "old": "1110004018",
    "new": "110003946"
  },
  {
    "old": "1110004017",
    "new": "110003945"
  },
  {
    "old": "1110004016",
    "new": "110003944"
  },
  {
    "old": "1110004015",
    "new": "110003943"
  },
  {
    "old": "1110004014",
    "new": "110003942"
  },
  {
    "old": "1110004013",
    "new": "110003941"
  },
  {
    "old": "1110004012",
    "new": "110003940"
  },
  {
    "old": "1110004011",
    "new": "110003939"
  },
  {
    "old": "1110004010",
    "new": "110003938"
  },
  {
    "old": "1110004009",
    "new": "110003937"
  },
  {
    "old": "1110004008",
    "new": "110003936"
  },
  {
    "old": "1110004007",
    "new": "110003935"
  },
  {
    "old": "1110004006",
    "new": "110003934"
  },
  {
    "old": "1110004005",
    "new": "110003933"
  },
  {
    "old": "1110004004",
    "new": "110003932"
  },
  {
    "old": "1110004003",
    "new": "110003931"
  },
  {
    "old": "1110004002",
    "new": "110003930"
  },
  {
    "old": "1110004001",
    "new": "110003929"
  },
  {
    "old": "1110004000",
    "new": "110003928"
  },
  {
    "old": "1110003999",
    "new": "110003927"
  },
  {
    "old": "1110003998",
    "new": "110003926"
  },
  {
    "old": "1110003997",
    "new": "110003925"
  },
  {
    "old": "1110003996",
    "new": "110003924"
  },
  {
    "old": "1110003995",
    "new": "110003923"
  },
  {
    "old": "1110003993",
    "new": "110003922"
  },
  {
    "old": "1110003992",
    "new": "110003921"
  },
  {
    "old": "1110003991",
    "new": "110003920"
  },
  {
    "old": "1110003990",
    "new": "110003919"
  },
  {
    "old": "1110003989",
    "new": "110003918"
  },
  {
    "old": "1110003988",
    "new": "110003917"
  },
  {
    "old": "1110003987",
    "new": "110003916"
  },
  {
    "old": "1110003986",
    "new": "110003915"
  },
  {
    "old": "1110003985",
    "new": "110003914"
  },
  {
    "old": "1110003984",
    "new": "110003913"
  },
  {
    "old": "1110003983",
    "new": "110003912"
  },
  {
    "old": "1110003982",
    "new": "110003911"
  },
  {
    "old": "1110003981",
    "new": "110003910"
  },
  {
    "old": "1110003980",
    "new": "110003909"
  },
  {
    "old": "1110003979",
    "new": "110003908"
  },
  {
    "old": "1110003978",
    "new": "110003907"
  },
  {
    "old": "1110003977",
    "new": "110003906"
  },
  {
    "old": "1110003976",
    "new": "110003905"
  },
  {
    "old": "1110003975",
    "new": "110003904"
  },
  {
    "old": "1110003974",
    "new": "110003903"
  },
  {
    "old": "1110003973",
    "new": "110003902"
  },
  {
    "old": "1110003972",
    "new": "110003901"
  },
  {
    "old": "1110003971",
    "new": "110003900"
  },
  {
    "old": "1110003970",
    "new": "110003899"
  },
  {
    "old": "1110003969",
    "new": "110003898"
  },
  {
    "old": "1110003968",
    "new": "110003897"
  },
  {
    "old": "1110003967",
    "new": "110003896"
  },
  {
    "old": "1110003966",
    "new": "110003895"
  },
  {
    "old": "1110003965",
    "new": "110003894"
  },
  {
    "old": "1110003964",
    "new": "110003893"
  },
  {
    "old": "1110003963",
    "new": "110003892"
  },
  {
    "old": "1110003962",
    "new": "110003891"
  },
  {
    "old": "1110003961",
    "new": "110003890"
  },
  {
    "old": "1110003960",
    "new": "110003889"
  },
  {
    "old": "1110003959",
    "new": "110003888"
  },
  {
    "old": "1110003958",
    "new": "110003887"
  },
  {
    "old": "1110003957",
    "new": "110003886"
  },
  {
    "old": "1110003956",
    "new": "110003885"
  },
  {
    "old": "1110003955",
    "new": "110003884"
  },
  {
    "old": "1110003954",
    "new": "110003883"
  },
  {
    "old": "1110003953",
    "new": "110003882"
  },
  {
    "old": "1110003952",
    "new": "110003881"
  },
  {
    "old": "1110003951",
    "new": "110003880"
  },
  {
    "old": "1110003950",
    "new": "110003879"
  },
  {
    "old": "1110003949",
    "new": "110003878"
  },
  {
    "old": "1110003948",
    "new": "110003877"
  },
  {
    "old": "1110003947",
    "new": "110003876"
  },
  {
    "old": "1110003946",
    "new": "110003875"
  },
  {
    "old": "1110003945",
    "new": "110003874"
  },
  {
    "old": "1110003944",
    "new": "110003873"
  },
  {
    "old": "1110003943",
    "new": "110003872"
  },
  {
    "old": "1110003942",
    "new": "110003871"
  },
  {
    "old": "1110003941",
    "new": "110003870"
  },
  {
    "old": "1110003940",
    "new": "110003869"
  },
  {
    "old": "1110003939",
    "new": "110003868"
  },
  {
    "old": "1110003938",
    "new": "110003867"
  },
  {
    "old": "1110003937",
    "new": "110003866"
  },
  {
    "old": "1110003936",
    "new": "110003865"
  },
  {
    "old": "1110003935",
    "new": "110003864"
  },
  {
    "old": "1110003934",
    "new": "110003863"
  },
  {
    "old": "1110003933",
    "new": "110003862"
  },
  {
    "old": "1110003932",
    "new": "110003861"
  },
  {
    "old": "1110003931",
    "new": "110003860"
  },
  {
    "old": "1110003930",
    "new": "110003859"
  },
  {
    "old": "1110003929",
    "new": "110003858"
  },
  {
    "old": "1110003928",
    "new": "110003857"
  },
  {
    "old": "1110003927",
    "new": "110003856"
  },
  {
    "old": "1110003926",
    "new": "110003855"
  },
  {
    "old": "1110003925",
    "new": "110003854"
  },
  {
    "old": "1110003924",
    "new": "110003853"
  },
  {
    "old": "1110003923",
    "new": "110003852"
  },
  {
    "old": "1110003922",
    "new": "110003851"
  },
  {
    "old": "1110003921",
    "new": "110003850"
  },
  {
    "old": "1110003920",
    "new": "110003849"
  },
  {
    "old": "1110003919",
    "new": "110003848"
  },
  {
    "old": "1110003918",
    "new": "110003847"
  },
  {
    "old": "1110003917",
    "new": "110003846"
  },
  {
    "old": "1110003916",
    "new": "110003845"
  },
  {
    "old": "1110003915",
    "new": "110003844"
  },
  {
    "old": "1110003914",
    "new": "110003843"
  },
  {
    "old": "1110003913",
    "new": "110003842"
  },
  {
    "old": "1110003912",
    "new": "110003841"
  },
  {
    "old": "1110003911",
    "new": "110003840"
  },
  {
    "old": "1110003910",
    "new": "110003839"
  },
  {
    "old": "1110003909",
    "new": "110003838"
  },
  {
    "old": "1110003908",
    "new": "110003837"
  },
  {
    "old": "1110003907",
    "new": "110003836"
  },
  {
    "old": "1110003906",
    "new": "110003835"
  },
  {
    "old": "1110003905",
    "new": "110003834"
  },
  {
    "old": "1110003904",
    "new": "110003833"
  },
  {
    "old": "1110003903",
    "new": "110003832"
  },
  {
    "old": "1110003902",
    "new": "110003831"
  },
  {
    "old": "1110003901",
    "new": "110003830"
  },
  {
    "old": "1110003900",
    "new": "110003829"
  },
  {
    "old": "1110003899",
    "new": "110003828"
  },
  {
    "old": "1110003898",
    "new": "110003827"
  },
  {
    "old": "1110003897",
    "new": "110003826"
  },
  {
    "old": "1110003896",
    "new": "110003825"
  },
  {
    "old": "1110003895",
    "new": "110003824"
  },
  {
    "old": "1110003894",
    "new": "110003823"
  },
  {
    "old": "1110003893",
    "new": "110003822"
  },
  {
    "old": "1110003892",
    "new": "110003821"
  },
  {
    "old": "1110003891",
    "new": "110003820"
  },
  {
    "old": "1110003890",
    "new": "110003819"
  },
  {
    "old": "1110003889",
    "new": "110003818"
  },
  {
    "old": "1110003888",
    "new": "110003817"
  },
  {
    "old": "1110003887",
    "new": "110003816"
  },
  {
    "old": "1110003886",
    "new": "110003815"
  },
  {
    "old": "1110003885",
    "new": "110003814"
  },
  {
    "old": "1110003884",
    "new": "110003813"
  },
  {
    "old": "1110003883",
    "new": "110003812"
  },
  {
    "old": "1110003882",
    "new": "110003811"
  },
  {
    "old": "1110003881",
    "new": "110003810"
  },
  {
    "old": "1110003880",
    "new": "110003809"
  },
  {
    "old": "1110003879",
    "new": "110003808"
  },
  {
    "old": "1110003878",
    "new": "110003807"
  },
  {
    "old": "1110003877",
    "new": "110003806"
  },
  {
    "old": "1110003876",
    "new": "110003805"
  },
  {
    "old": "1110003875",
    "new": "110003804"
  },
  {
    "old": "1110003874",
    "new": "110003803"
  },
  {
    "old": "1110003873",
    "new": "110003802"
  },
  {
    "old": "1110003872",
    "new": "110003801"
  },
  {
    "old": "1110003871",
    "new": "110003800"
  },
  {
    "old": "1110003870",
    "new": "110003799"
  },
  {
    "old": "1110003869",
    "new": "110003798"
  },
  {
    "old": "1110003868",
    "new": "110003797"
  },
  {
    "old": "1110003867",
    "new": "110003796"
  },
  {
    "old": "1110003866",
    "new": "110003795"
  },
  {
    "old": "1110003865",
    "new": "110003794"
  },
  {
    "old": "1110003864",
    "new": "110003793"
  },
  {
    "old": "1110003863",
    "new": "110003792"
  },
  {
    "old": "1110003862",
    "new": "110003791"
  },
  {
    "old": "1110003861",
    "new": "110003790"
  },
  {
    "old": "1110003860",
    "new": "110003789"
  },
  {
    "old": "1110003859",
    "new": "110003788"
  },
  {
    "old": "1110003858",
    "new": "110003787"
  },
  {
    "old": "1110003857",
    "new": "110003786"
  },
  {
    "old": "1110003856",
    "new": "110003785"
  },
  {
    "old": "1110003855",
    "new": "110003784"
  },
  {
    "old": "1110003854",
    "new": "110003783"
  },
  {
    "old": "1110003853",
    "new": "110003782"
  },
  {
    "old": "1110003852",
    "new": "110003781"
  },
  {
    "old": "1110003851",
    "new": "110003780"
  },
  {
    "old": "1110003850",
    "new": "110003779"
  },
  {
    "old": "1110003849",
    "new": "110003778"
  },
  {
    "old": "1110003848",
    "new": "110003777"
  },
  {
    "old": "1110003847",
    "new": "110003776"
  },
  {
    "old": "1110003846",
    "new": "110003775"
  },
  {
    "old": "1110003845",
    "new": "110003774"
  },
  {
    "old": "1110003844",
    "new": "110003773"
  },
  {
    "old": "1110003843",
    "new": "110003772"
  },
  {
    "old": "1110003842",
    "new": "110003771"
  },
  {
    "old": "1110003841",
    "new": "110003770"
  },
  {
    "old": "1110003840",
    "new": "110003769"
  },
  {
    "old": "1110003839",
    "new": "110003768"
  },
  {
    "old": "1110003838",
    "new": "110003767"
  },
  {
    "old": "1110003837",
    "new": "110003766"
  },
  {
    "old": "1110003836",
    "new": "110003765"
  },
  {
    "old": "1110003835",
    "new": "110003764"
  },
  {
    "old": "1110003834",
    "new": "110003763"
  },
  {
    "old": "1110003833",
    "new": "110003762"
  },
  {
    "old": "1110003832",
    "new": "110003761"
  },
  {
    "old": "1110003831",
    "new": "110003760"
  },
  {
    "old": "1110003830",
    "new": "110003759"
  },
  {
    "old": "1110003829",
    "new": "110003758"
  },
  {
    "old": "1110003828",
    "new": "110003757"
  },
  {
    "old": "1110003827",
    "new": "110003756"
  },
  {
    "old": "1110003826",
    "new": "110003755"
  },
  {
    "old": "1110003825",
    "new": "110003754"
  },
  {
    "old": "1110003824",
    "new": "110003753"
  },
  {
    "old": "1110003823",
    "new": "110003752"
  },
  {
    "old": "1110003822",
    "new": "110003751"
  },
  {
    "old": "1110003821",
    "new": "110003750"
  },
  {
    "old": "1110003820",
    "new": "110003749"
  },
  {
    "old": "1110003819",
    "new": "110003748"
  },
  {
    "old": "1110003818",
    "new": "110003747"
  },
  {
    "old": "1110003817",
    "new": "110003746"
  },
  {
    "old": "1110003816",
    "new": "110003745"
  },
  {
    "old": "1110003815",
    "new": "110003744"
  },
  {
    "old": "1110003814",
    "new": "110003743"
  },
  {
    "old": "1110003813",
    "new": "110003742"
  },
  {
    "old": "1110003812",
    "new": "110003741"
  },
  {
    "old": "1110003811",
    "new": "110003740"
  },
  {
    "old": "1110003810",
    "new": "110003739"
  },
  {
    "old": "1110003809",
    "new": "110003738"
  },
  {
    "old": "1110003808",
    "new": "110003737"
  },
  {
    "old": "1110003807",
    "new": "110003736"
  },
  {
    "old": "1110003806",
    "new": "110003735"
  },
  {
    "old": "1110003805",
    "new": "110003734"
  },
  {
    "old": "1110003804",
    "new": "110003733"
  },
  {
    "old": "1110003803",
    "new": "110003732"
  },
  {
    "old": "1110003802",
    "new": "110003731"
  },
  {
    "old": "1110003801",
    "new": "110003730"
  },
  {
    "old": "1110003800",
    "new": "110003729"
  },
  {
    "old": "1110003799",
    "new": "110003728"
  },
  {
    "old": "1110003798",
    "new": "110003727"
  },
  {
    "old": "1110003797",
    "new": "110003726"
  },
  {
    "old": "1110003796",
    "new": "110003725"
  },
  {
    "old": "1110003795",
    "new": "110003724"
  },
  {
    "old": "1110003794",
    "new": "110003723"
  },
  {
    "old": "1110003793",
    "new": "110003722"
  },
  {
    "old": "1110003792",
    "new": "110003721"
  },
  {
    "old": "1110003791",
    "new": "110003720"
  },
  {
    "old": "1110003790",
    "new": "110003719"
  },
  {
    "old": "1110003789",
    "new": "110003718"
  },
  {
    "old": "1110003788",
    "new": "110003717"
  },
  {
    "old": "1110003787",
    "new": "110003716"
  },
  {
    "old": "1110003786",
    "new": "110003715"
  },
  {
    "old": "1110003785",
    "new": "110003714"
  },
  {
    "old": "1110003784",
    "new": "110003713"
  },
  {
    "old": "1110003783",
    "new": "110003712"
  },
  {
    "old": "1110003782",
    "new": "110003711"
  },
  {
    "old": "1110003781",
    "new": "110003710"
  },
  {
    "old": "1110003780",
    "new": "110003709"
  },
  {
    "old": "1110003779",
    "new": "110003708"
  },
  {
    "old": "1110003778",
    "new": "110003707"
  },
  {
    "old": "1110003777",
    "new": "110003706"
  },
  {
    "old": "1110003776",
    "new": "110003705"
  },
  {
    "old": "1110003775",
    "new": "110003704"
  },
  {
    "old": "1110003774",
    "new": "110003703"
  },
  {
    "old": "1110003773",
    "new": "110003702"
  },
  {
    "old": "1110003772",
    "new": "110003701"
  },
  {
    "old": "1110003771",
    "new": "110003700"
  },
  {
    "old": "1110003770",
    "new": "110003699"
  },
  {
    "old": "1110003769",
    "new": "110003698"
  },
  {
    "old": "1110003768",
    "new": "110003697"
  },
  {
    "old": "1110003767",
    "new": "110003696"
  },
  {
    "old": "1110003766",
    "new": "110003695"
  },
  {
    "old": "1110003765",
    "new": "110003694"
  },
  {
    "old": "1110003764",
    "new": "110003693"
  },
  {
    "old": "1110003763",
    "new": "110003692"
  },
  {
    "old": "1110003762",
    "new": "110003691"
  },
  {
    "old": "1110003761",
    "new": "110003690"
  },
  {
    "old": "1110003760",
    "new": "110003689"
  },
  {
    "old": "1110003759",
    "new": "110003688"
  },
  {
    "old": "1110003758",
    "new": "110003687"
  },
  {
    "old": "1110003757",
    "new": "110003686"
  },
  {
    "old": "1110003756",
    "new": "110003685"
  },
  {
    "old": "1110003755",
    "new": "110003684"
  },
  {
    "old": "1110003754",
    "new": "110003683"
  },
  {
    "old": "1110003753",
    "new": "110003682"
  },
  {
    "old": "1110003752",
    "new": "110003681"
  },
  {
    "old": "1110003751",
    "new": "110003680"
  },
  {
    "old": "1110003750",
    "new": "110003679"
  },
  {
    "old": "1110003749",
    "new": "110003678"
  },
  {
    "old": "1110003748",
    "new": "110003677"
  },
  {
    "old": "1110003747",
    "new": "110003676"
  },
  {
    "old": "1110003746",
    "new": "110003675"
  },
  {
    "old": "1110003745",
    "new": "110003674"
  },
  {
    "old": "1110003744",
    "new": "110003673"
  },
  {
    "old": "1110003743",
    "new": "110003672"
  },
  {
    "old": "1110003742",
    "new": "110003671"
  },
  {
    "old": "1110003741",
    "new": "110003670"
  },
  {
    "old": "1110003740",
    "new": "110003669"
  },
  {
    "old": "1110003739",
    "new": "110003668"
  },
  {
    "old": "1110003738",
    "new": "110003667"
  },
  {
    "old": "1110003737",
    "new": "110003666"
  },
  {
    "old": "1110003736",
    "new": "110003665"
  },
  {
    "old": "1110003735",
    "new": "110003664"
  },
  {
    "old": "1110003734",
    "new": "110003663"
  },
  {
    "old": "1110003733",
    "new": "110003662"
  },
  {
    "old": "1110003732",
    "new": "110003661"
  },
  {
    "old": "1110003731",
    "new": "110003660"
  },
  {
    "old": "1110003730",
    "new": "110003659"
  },
  {
    "old": "1110003729",
    "new": "110003658"
  },
  {
    "old": "1110003728",
    "new": "110003657"
  },
  {
    "old": "1110003727",
    "new": "110003656"
  },
  {
    "old": "1110003726",
    "new": "110003655"
  },
  {
    "old": "1110003725",
    "new": "110003654"
  },
  {
    "old": "1110003724",
    "new": "110003653"
  },
  {
    "old": "1110003723",
    "new": "110003652"
  },
  {
    "old": "1110003722",
    "new": "110003651"
  },
  {
    "old": "1110003721",
    "new": "110003650"
  },
  {
    "old": "1110003720",
    "new": "110003649"
  },
  {
    "old": "1110003719",
    "new": "110003648"
  },
  {
    "old": "1110003718",
    "new": "110003647"
  },
  {
    "old": "1110003717",
    "new": "110003646"
  },
  {
    "old": "1110003716",
    "new": "110003645"
  },
  {
    "old": "1110003715",
    "new": "110003644"
  },
  {
    "old": "1110003714",
    "new": "110003643"
  },
  {
    "old": "1110003713",
    "new": "110003642"
  },
  {
    "old": "1110003712",
    "new": "110003641"
  },
  {
    "old": "1110003711",
    "new": "110003640"
  },
  {
    "old": "1110003710",
    "new": "110003639"
  },
  {
    "old": "1110003709",
    "new": "110003638"
  },
  {
    "old": "1110003708",
    "new": "110003637"
  },
  {
    "old": "1110003707",
    "new": "110003636"
  },
  {
    "old": "1110003706",
    "new": "110003635"
  },
  {
    "old": "1110003705",
    "new": "110003634"
  },
  {
    "old": "1110003704",
    "new": "110003633"
  },
  {
    "old": "1110003703",
    "new": "110003632"
  },
  {
    "old": "1110003702",
    "new": "110003631"
  },
  {
    "old": "1110003701",
    "new": "110003630"
  },
  {
    "old": "1110003700",
    "new": "110003629"
  },
  {
    "old": "1110003699",
    "new": "110003628"
  },
  {
    "old": "1110003698",
    "new": "110003627"
  },
  {
    "old": "1110003697",
    "new": "110003626"
  },
  {
    "old": "1110003696",
    "new": "110003625"
  },
  {
    "old": "1110003695",
    "new": "110003624"
  },
  {
    "old": "1110003694",
    "new": "110003623"
  },
  {
    "old": "1110003693",
    "new": "110003622"
  },
  {
    "old": "1110003692",
    "new": "110003621"
  },
  {
    "old": "1110003691",
    "new": "110003620"
  },
  {
    "old": "1110003690",
    "new": "110003619"
  },
  {
    "old": "1110003689",
    "new": "110003618"
  },
  {
    "old": "1110003688",
    "new": "110003617"
  },
  {
    "old": "1110003687",
    "new": "110003616"
  },
  {
    "old": "1110003686",
    "new": "110003615"
  },
  {
    "old": "1110003685",
    "new": "110003614"
  },
  {
    "old": "1110003684",
    "new": "110003613"
  },
  {
    "old": "1110003683",
    "new": "110003612"
  },
  {
    "old": "1110003682",
    "new": "110003611"
  },
  {
    "old": "1110003681",
    "new": "110003610"
  },
  {
    "old": "1110003680",
    "new": "110003609"
  },
  {
    "old": "1110003679",
    "new": "110003608"
  },
  {
    "old": "1110003678",
    "new": "110003607"
  },
  {
    "old": "1110003677",
    "new": "110003606"
  },
  {
    "old": "1110003676",
    "new": "110003605"
  },
  {
    "old": "1110003675",
    "new": "110003604"
  },
  {
    "old": "1110003674",
    "new": "110003603"
  },
  {
    "old": "1110003673",
    "new": "110003602"
  },
  {
    "old": "1110003672",
    "new": "110003601"
  },
  {
    "old": "1110003671",
    "new": "110003600"
  },
  {
    "old": "1110003670",
    "new": "110003599"
  },
  {
    "old": "1110003669",
    "new": "110003598"
  },
  {
    "old": "1110003668",
    "new": "110003597"
  },
  {
    "old": "1110003667",
    "new": "110003596"
  },
  {
    "old": "1110003666",
    "new": "110003595"
  },
  {
    "old": "1110003665",
    "new": "110003594"
  },
  {
    "old": "1110003664",
    "new": "110003593"
  },
  {
    "old": "1110003663",
    "new": "110003592"
  },
  {
    "old": "1110003662",
    "new": "110003591"
  },
  {
    "old": "1110003661",
    "new": "110003590"
  },
  {
    "old": "1110003660",
    "new": "110003589"
  },
  {
    "old": "1110003659",
    "new": "110003588"
  },
  {
    "old": "1110003658",
    "new": "110003587"
  },
  {
    "old": "1110003657",
    "new": "110003586"
  },
  {
    "old": "1110003656",
    "new": "110003585"
  },
  {
    "old": "1110003655",
    "new": "110003584"
  },
  {
    "old": "1110003654",
    "new": "110003583"
  },
  {
    "old": "1110003653",
    "new": "110003582"
  },
  {
    "old": "1110003652",
    "new": "110003581"
  },
  {
    "old": "1110003651",
    "new": "110003580"
  },
  {
    "old": "1110003650",
    "new": "110003579"
  },
  {
    "old": "1110003649",
    "new": "110003578"
  },
  {
    "old": "1110003648",
    "new": "110003577"
  },
  {
    "old": "1110003647",
    "new": "110003576"
  },
  {
    "old": "1110003646",
    "new": "110003575"
  },
  {
    "old": "1110003645",
    "new": "110003574"
  },
  {
    "old": "1110003644",
    "new": "110003573"
  },
  {
    "old": "1110003643",
    "new": "110003572"
  },
  {
    "old": "1110003642",
    "new": "110003571"
  },
  {
    "old": "1110003641",
    "new": "110003570"
  },
  {
    "old": "1110003640",
    "new": "110003569"
  },
  {
    "old": "1110003639",
    "new": "110003568"
  },
  {
    "old": "1110003638",
    "new": "110003567"
  },
  {
    "old": "1110003637",
    "new": "110003566"
  },
  {
    "old": "1110003636",
    "new": "110003565"
  },
  {
    "old": "1110003635",
    "new": "110003564"
  },
  {
    "old": "1110003634",
    "new": "110003563"
  },
  {
    "old": "1110003633",
    "new": "110003562"
  },
  {
    "old": "1110003632",
    "new": "110003561"
  },
  {
    "old": "1110003631",
    "new": "110003560"
  },
  {
    "old": "1110003630",
    "new": "110003559"
  },
  {
    "old": "1110003629",
    "new": "110003558"
  },
  {
    "old": "1110003628",
    "new": "110003557"
  },
  {
    "old": "1110003627",
    "new": "110003556"
  },
  {
    "old": "1110003626",
    "new": "110003555"
  },
  {
    "old": "1110003625",
    "new": "110003554"
  },
  {
    "old": "1110003624",
    "new": "110003553"
  },
  {
    "old": "1110003623",
    "new": "110003552"
  },
  {
    "old": "1110003622",
    "new": "110003551"
  },
  {
    "old": "1110003621",
    "new": "110003550"
  },
  {
    "old": "1110003620",
    "new": "110003549"
  },
  {
    "old": "1110003619",
    "new": "110003548"
  },
  {
    "old": "1110003618",
    "new": "110003547"
  },
  {
    "old": "1110003617",
    "new": "110003546"
  },
  {
    "old": "1110003616",
    "new": "110003545"
  },
  {
    "old": "1110003615",
    "new": "110003544"
  },
  {
    "old": "1110003614",
    "new": "110003543"
  },
  {
    "old": "1110003613",
    "new": "110003542"
  },
  {
    "old": "1110003612",
    "new": "110003541"
  },
  {
    "old": "1110003611",
    "new": "110003540"
  },
  {
    "old": "1110003610",
    "new": "110003539"
  },
  {
    "old": "1110003609",
    "new": "110003538"
  },
  {
    "old": "1110003608",
    "new": "110003537"
  },
  {
    "old": "1110003607",
    "new": "110003536"
  },
  {
    "old": "1110003606",
    "new": "110003535"
  },
  {
    "old": "1110003605",
    "new": "110003534"
  },
  {
    "old": "1110003604",
    "new": "110003533"
  },
  {
    "old": "1110003603",
    "new": "110003532"
  },
  {
    "old": "1110003602",
    "new": "110003531"
  },
  {
    "old": "1110003601",
    "new": "110003530"
  },
  {
    "old": "1110003600",
    "new": "110003529"
  },
  {
    "old": "1110003599",
    "new": "110003528"
  },
  {
    "old": "1110003598",
    "new": "110003527"
  },
  {
    "old": "1110003597",
    "new": "110003526"
  },
  {
    "old": "1110003596",
    "new": "110003525"
  },
  {
    "old": "1110003595",
    "new": "110003524"
  },
  {
    "old": "1110003594",
    "new": "110003523"
  },
  {
    "old": "1110003593",
    "new": "110003522"
  },
  {
    "old": "1110003592",
    "new": "110003521"
  },
  {
    "old": "1110003591",
    "new": "110003520"
  },
  {
    "old": "1110003590",
    "new": "110003519"
  },
  {
    "old": "1110003589",
    "new": "110003518"
  },
  {
    "old": "1110003588",
    "new": "110003517"
  },
  {
    "old": "1110003587",
    "new": "110003516"
  },
  {
    "old": "1110003586",
    "new": "110003515"
  },
  {
    "old": "1110003585",
    "new": "110003514"
  },
  {
    "old": "1110003584",
    "new": "110003513"
  },
  {
    "old": "1110003583",
    "new": "110003512"
  },
  {
    "old": "1110003582",
    "new": "110003511"
  },
  {
    "old": "1110003581",
    "new": "110003510"
  },
  {
    "old": "1110003580",
    "new": "110003509"
  },
  {
    "old": "1110003579",
    "new": "110003508"
  },
  {
    "old": "1110003578",
    "new": "110003507"
  },
  {
    "old": "1110003577",
    "new": "110003506"
  },
  {
    "old": "1110003576",
    "new": "110003505"
  },
  {
    "old": "1110003575",
    "new": "110003504"
  },
  {
    "old": "1110003574",
    "new": "110003503"
  },
  {
    "old": "1110003573",
    "new": "110003502"
  },
  {
    "old": "1110003572",
    "new": "110003501"
  },
  {
    "old": "1110003571",
    "new": "110003500"
  },
  {
    "old": "1110003570",
    "new": "110003499"
  },
  {
    "old": "1110003569",
    "new": "110003498"
  },
  {
    "old": "1110003568",
    "new": "110003497"
  },
  {
    "old": "1110003567",
    "new": "110003496"
  },
  {
    "old": "1110003566",
    "new": "110003495"
  },
  {
    "old": "1110003565",
    "new": "110003494"
  },
  {
    "old": "1110003564",
    "new": "110003493"
  },
  {
    "old": "1110003563",
    "new": "110003492"
  },
  {
    "old": "1110003562",
    "new": "110003491"
  },
  {
    "old": "1110003561",
    "new": "110003490"
  },
  {
    "old": "1110003560",
    "new": "110003489"
  },
  {
    "old": "1110003559",
    "new": "110003488"
  },
  {
    "old": "1110003558",
    "new": "110003487"
  },
  {
    "old": "1110003557",
    "new": "110003486"
  },
  {
    "old": "1110003556",
    "new": "110003485"
  },
  {
    "old": "1110003555",
    "new": "110003484"
  },
  {
    "old": "1110003554",
    "new": "110003483"
  },
  {
    "old": "1110003553",
    "new": "110003482"
  },
  {
    "old": "1110003552",
    "new": "110003481"
  },
  {
    "old": "1110003551",
    "new": "110003480"
  },
  {
    "old": "1110003550",
    "new": "110003479"
  },
  {
    "old": "1110003549",
    "new": "110003478"
  },
  {
    "old": "1110003548",
    "new": "110003477"
  },
  {
    "old": "1110003547",
    "new": "110003476"
  },
  {
    "old": "1110003546",
    "new": "110003475"
  },
  {
    "old": "1110003545",
    "new": "110003474"
  },
  {
    "old": "1110003544",
    "new": "110003473"
  },
  {
    "old": "1110003543",
    "new": "110003472"
  },
  {
    "old": "1110003542",
    "new": "110003471"
  },
  {
    "old": "1110003541",
    "new": "110003470"
  },
  {
    "old": "1110003540",
    "new": "110003469"
  },
  {
    "old": "1110003539",
    "new": "110003468"
  },
  {
    "old": "1110003538",
    "new": "110003467"
  },
  {
    "old": "1110003537",
    "new": "110003466"
  },
  {
    "old": "1110003536",
    "new": "110003465"
  },
  {
    "old": "1110003535",
    "new": "110003464"
  },
  {
    "old": "1110003534",
    "new": "110003463"
  },
  {
    "old": "1110003533",
    "new": "110003462"
  },
  {
    "old": "1110003532",
    "new": "110003461"
  },
  {
    "old": "1110003531",
    "new": "110003460"
  },
  {
    "old": "1110003530",
    "new": "110003459"
  },
  {
    "old": "1110003529",
    "new": "110003458"
  },
  {
    "old": "1110003528",
    "new": "110003457"
  },
  {
    "old": "1110003527",
    "new": "110003456"
  },
  {
    "old": "1110003526",
    "new": "110003455"
  },
  {
    "old": "1110003525",
    "new": "110003454"
  },
  {
    "old": "1110003524",
    "new": "110003453"
  },
  {
    "old": "1110003523",
    "new": "110003452"
  },
  {
    "old": "1110003522",
    "new": "110003451"
  },
  {
    "old": "1110003521",
    "new": "110003450"
  },
  {
    "old": "1110003520",
    "new": "110003449"
  },
  {
    "old": "1110003519",
    "new": "110003448"
  },
  {
    "old": "1110003518",
    "new": "110003447"
  },
  {
    "old": "1110003517",
    "new": "110003446"
  },
  {
    "old": "1110003516",
    "new": "110003445"
  },
  {
    "old": "1110003515",
    "new": "110003444"
  },
  {
    "old": "1110003514",
    "new": "110003443"
  },
  {
    "old": "1110003513",
    "new": "110003442"
  },
  {
    "old": "1110003512",
    "new": "110003441"
  },
  {
    "old": "1110003511",
    "new": "110003440"
  },
  {
    "old": "1110003510",
    "new": "110003439"
  },
  {
    "old": "1110003509",
    "new": "110003438"
  },
  {
    "old": "1110003508",
    "new": "110003437"
  },
  {
    "old": "1110003507",
    "new": "110003436"
  },
  {
    "old": "1110003506",
    "new": "110003435"
  },
  {
    "old": "1110003505",
    "new": "110003434"
  },
  {
    "old": "1110003504",
    "new": "110003433"
  },
  {
    "old": "1110003503",
    "new": "110003432"
  },
  {
    "old": "1110003502",
    "new": "110003431"
  },
  {
    "old": "1110003501",
    "new": "110003430"
  },
  {
    "old": "1110003500",
    "new": "110003429"
  },
  {
    "old": "1110003499",
    "new": "110003428"
  },
  {
    "old": "1110003498",
    "new": "110003427"
  },
  {
    "old": "1110003497",
    "new": "110003426"
  },
  {
    "old": "1110003496",
    "new": "110003425"
  },
  {
    "old": "1110003495",
    "new": "110003424"
  },
  {
    "old": "1110003494",
    "new": "110003423"
  },
  {
    "old": "1110003493",
    "new": "110003422"
  },
  {
    "old": "1110003492",
    "new": "110003421"
  },
  {
    "old": "1110003491",
    "new": "110003420"
  },
  {
    "old": "1110003490",
    "new": "110003419"
  },
  {
    "old": "1110003489",
    "new": "110003418"
  },
  {
    "old": "1110003488",
    "new": "110003417"
  },
  {
    "old": "1110003487",
    "new": "110003416"
  },
  {
    "old": "1110003486",
    "new": "110003415"
  },
  {
    "old": "1110003485",
    "new": "110003414"
  },
  {
    "old": "1110003484",
    "new": "110003413"
  },
  {
    "old": "1110003483",
    "new": "110003412"
  },
  {
    "old": "1110003482",
    "new": "110003411"
  },
  {
    "old": "1110003481",
    "new": "110003410"
  },
  {
    "old": "1110003480",
    "new": "110003409"
  },
  {
    "old": "1110003479",
    "new": "110003408"
  },
  {
    "old": "1110003478",
    "new": "110003407"
  },
  {
    "old": "1110003477",
    "new": "110003406"
  },
  {
    "old": "1110003476",
    "new": "110003405"
  },
  {
    "old": "1110003475",
    "new": "110003404"
  },
  {
    "old": "1110003474",
    "new": "110003403"
  },
  {
    "old": "1110003473",
    "new": "110003402"
  },
  {
    "old": "1110003472",
    "new": "110003401"
  },
  {
    "old": "1110003471",
    "new": "110003400"
  },
  {
    "old": "1110003470",
    "new": "110003399"
  },
  {
    "old": "1110003469",
    "new": "110003398"
  },
  {
    "old": "1110003468",
    "new": "110003397"
  },
  {
    "old": "1110003467",
    "new": "110003396"
  },
  {
    "old": "1110003466",
    "new": "110003395"
  },
  {
    "old": "1110003465",
    "new": "110003394"
  },
  {
    "old": "1110003463",
    "new": "110003393"
  },
  {
    "old": "1110003462",
    "new": "110003392"
  },
  {
    "old": "1110003461",
    "new": "110003391"
  },
  {
    "old": "1110003460",
    "new": "110003390"
  },
  {
    "old": "1110003459",
    "new": "110003389"
  },
  {
    "old": "1110003458",
    "new": "110003388"
  },
  {
    "old": "1110003457",
    "new": "110003387"
  },
  {
    "old": "1110003456",
    "new": "110003386"
  },
  {
    "old": "1110003455",
    "new": "110003385"
  },
  {
    "old": "1110003454",
    "new": "110003384"
  },
  {
    "old": "1110003453",
    "new": "110003383"
  },
  {
    "old": "1110003452",
    "new": "110003382"
  },
  {
    "old": "1110003451",
    "new": "110003381"
  },
  {
    "old": "1110003450",
    "new": "110003380"
  },
  {
    "old": "1110003449",
    "new": "110003379"
  },
  {
    "old": "1110003448",
    "new": "110003378"
  },
  {
    "old": "1110003447",
    "new": "110003377"
  },
  {
    "old": "1110003446",
    "new": "110003376"
  },
  {
    "old": "1110003445",
    "new": "110003375"
  },
  {
    "old": "1110003444",
    "new": "110003374"
  },
  {
    "old": "1110003443",
    "new": "110003373"
  },
  {
    "old": "1110003442",
    "new": "110003372"
  },
  {
    "old": "1110003441",
    "new": "110003371"
  },
  {
    "old": "1110003440",
    "new": "110003370"
  },
  {
    "old": "1110003439",
    "new": "110003369"
  },
  {
    "old": "1110003438",
    "new": "110003368"
  },
  {
    "old": "1110003437",
    "new": "110003367"
  },
  {
    "old": "1110003436",
    "new": "110003366"
  },
  {
    "old": "1110003435",
    "new": "110003365"
  },
  {
    "old": "1110003434",
    "new": "110003364"
  },
  {
    "old": "1110003433",
    "new": "110003363"
  },
  {
    "old": "1110003432",
    "new": "110003362"
  },
  {
    "old": "1110003431",
    "new": "110003361"
  },
  {
    "old": "1110003430",
    "new": "110003360"
  },
  {
    "old": "1110003429",
    "new": "110003359"
  },
  {
    "old": "1110003427",
    "new": "110003358"
  },
  {
    "old": "1110003426",
    "new": "110003357"
  },
  {
    "old": "1110003424",
    "new": "110003356"
  },
  {
    "old": "1110003423",
    "new": "110003355"
  },
  {
    "old": "1110003421",
    "new": "110003354"
  },
  {
    "old": "1110003420",
    "new": "110003353"
  },
  {
    "old": "1110003419",
    "new": "110003352"
  },
  {
    "old": "1110003418",
    "new": "110003351"
  },
  {
    "old": "1110003417",
    "new": "110003350"
  },
  {
    "old": "1110003416",
    "new": "110003349"
  },
  {
    "old": "1110003415",
    "new": "110003348"
  },
  {
    "old": "1110003414",
    "new": "110003347"
  },
  {
    "old": "1110003413",
    "new": "110003346"
  },
  {
    "old": "1110003412",
    "new": "110003345"
  },
  {
    "old": "1110003411",
    "new": "110003344"
  },
  {
    "old": "1110003410",
    "new": "110003343"
  },
  {
    "old": "1110003409",
    "new": "110003342"
  },
  {
    "old": "1110003408",
    "new": "110003341"
  },
  {
    "old": "1110003407",
    "new": "110003340"
  },
  {
    "old": "1110003406",
    "new": "110003339"
  },
  {
    "old": "1110003405",
    "new": "110003338"
  },
  {
    "old": "1110003404",
    "new": "110003337"
  },
  {
    "old": "1110003403",
    "new": "110003336"
  },
  {
    "old": "1110003402",
    "new": "110003335"
  },
  {
    "old": "1110003401",
    "new": "110003334"
  },
  {
    "old": "1110003400",
    "new": "110003333"
  },
  {
    "old": "1110003399",
    "new": "110003332"
  },
  {
    "old": "1110003398",
    "new": "110003331"
  },
  {
    "old": "1110003397",
    "new": "110003330"
  },
  {
    "old": "1110003396",
    "new": "110003329"
  },
  {
    "old": "1110003395",
    "new": "110003328"
  },
  {
    "old": "1110003394",
    "new": "110003327"
  },
  {
    "old": "1110003393",
    "new": "110003326"
  },
  {
    "old": "1110003392",
    "new": "110003325"
  },
  {
    "old": "1110003391",
    "new": "110003324"
  },
  {
    "old": "1110003390",
    "new": "110003323"
  },
  {
    "old": "1110003389",
    "new": "110003322"
  },
  {
    "old": "1110003388",
    "new": "110003321"
  },
  {
    "old": "1110003387",
    "new": "110003320"
  },
  {
    "old": "1110003386",
    "new": "110003319"
  },
  {
    "old": "1110003385",
    "new": "110003318"
  },
  {
    "old": "1110003384",
    "new": "110003317"
  },
  {
    "old": "1110003383",
    "new": "110003316"
  },
  {
    "old": "1110003382",
    "new": "110003315"
  },
  {
    "old": "1110003381",
    "new": "110003314"
  },
  {
    "old": "1110003380",
    "new": "110003313"
  },
  {
    "old": "1110003379",
    "new": "110003312"
  },
  {
    "old": "1110003378",
    "new": "110003311"
  },
  {
    "old": "1110003377",
    "new": "110003310"
  },
  {
    "old": "1110003376",
    "new": "110003309"
  },
  {
    "old": "1110003375",
    "new": "110003308"
  },
  {
    "old": "1110003374",
    "new": "110003307"
  },
  {
    "old": "1110003373",
    "new": "110003306"
  },
  {
    "old": "1110003372",
    "new": "110003305"
  },
  {
    "old": "1110003371",
    "new": "110003304"
  },
  {
    "old": "1110003370",
    "new": "110003303"
  },
  {
    "old": "1110003369",
    "new": "110003302"
  },
  {
    "old": "1110003368",
    "new": "110003301"
  },
  {
    "old": "1110003367",
    "new": "110003300"
  },
  {
    "old": "1110003366",
    "new": "110003299"
  },
  {
    "old": "1110003365",
    "new": "110003298"
  },
  {
    "old": "1110003364",
    "new": "110003297"
  },
  {
    "old": "1110003363",
    "new": "110003296"
  },
  {
    "old": "1110003362",
    "new": "110003295"
  },
  {
    "old": "1110003361",
    "new": "110003294"
  },
  {
    "old": "1110003360",
    "new": "110003293"
  },
  {
    "old": "1110003359",
    "new": "110003292"
  },
  {
    "old": "1110003358",
    "new": "110003291"
  },
  {
    "old": "1110003357",
    "new": "110003290"
  },
  {
    "old": "1110003356",
    "new": "110003289"
  },
  {
    "old": "1110003355",
    "new": "110003288"
  },
  {
    "old": "1110003354",
    "new": "110003287"
  },
  {
    "old": "1110003353",
    "new": "110003286"
  },
  {
    "old": "1110003352",
    "new": "110003285"
  },
  {
    "old": "1110003351",
    "new": "110003284"
  },
  {
    "old": "1110003350",
    "new": "110003283"
  },
  {
    "old": "1110003349",
    "new": "110003282"
  },
  {
    "old": "1110003348",
    "new": "110003281"
  },
  {
    "old": "1110003347",
    "new": "110003280"
  },
  {
    "old": "1110003346",
    "new": "110003279"
  },
  {
    "old": "1110003345",
    "new": "110003278"
  },
  {
    "old": "1110003344",
    "new": "110003277"
  },
  {
    "old": "1110003343",
    "new": "110003276"
  },
  {
    "old": "1110003342",
    "new": "110003275"
  },
  {
    "old": "1110003341",
    "new": "110003274"
  },
  {
    "old": "1110003340",
    "new": "110003273"
  },
  {
    "old": "1110003339",
    "new": "110003272"
  },
  {
    "old": "1110003338",
    "new": "110003271"
  },
  {
    "old": "1110003337",
    "new": "110003270"
  },
  {
    "old": "1110003336",
    "new": "110003269"
  },
  {
    "old": "1110003335",
    "new": "110003268"
  },
  {
    "old": "1110003334",
    "new": "110003267"
  },
  {
    "old": "1110003333",
    "new": "110003266"
  },
  {
    "old": "1110003332",
    "new": "110003265"
  },
  {
    "old": "1110003331",
    "new": "110003264"
  },
  {
    "old": "1110003330",
    "new": "110003263"
  },
  {
    "old": "1110003329",
    "new": "110003262"
  },
  {
    "old": "1110003328",
    "new": "110003261"
  },
  {
    "old": "1110003327",
    "new": "110003260"
  },
  {
    "old": "1110003326",
    "new": "110003259"
  },
  {
    "old": "1110003325",
    "new": "110003258"
  },
  {
    "old": "1110003324",
    "new": "110003257"
  },
  {
    "old": "1110003323",
    "new": "110003256"
  },
  {
    "old": "1110003322",
    "new": "110003255"
  },
  {
    "old": "1110003321",
    "new": "110003254"
  },
  {
    "old": "1110003320",
    "new": "110003253"
  },
  {
    "old": "1110003319",
    "new": "110003252"
  },
  {
    "old": "1110003318",
    "new": "110003251"
  },
  {
    "old": "1110003317",
    "new": "110003250"
  },
  {
    "old": "1110003316",
    "new": "110003249"
  },
  {
    "old": "1110003315",
    "new": "110003248"
  },
  {
    "old": "1110003314",
    "new": "110003247"
  },
  {
    "old": "1110003313",
    "new": "110003246"
  },
  {
    "old": "1110003312",
    "new": "110003245"
  },
  {
    "old": "1110003311",
    "new": "110003244"
  },
  {
    "old": "1110003310",
    "new": "110003243"
  },
  {
    "old": "1110003309",
    "new": "110003242"
  },
  {
    "old": "1110003308",
    "new": "110003241"
  },
  {
    "old": "1110003307",
    "new": "110003240"
  },
  {
    "old": "1110003306",
    "new": "110003239"
  },
  {
    "old": "1110003305",
    "new": "110003238"
  },
  {
    "old": "1110003304",
    "new": "110003237"
  },
  {
    "old": "1110003303",
    "new": "110003236"
  },
  {
    "old": "1110003302",
    "new": "110003235"
  },
  {
    "old": "1110003301",
    "new": "110003234"
  },
  {
    "old": "1110003300",
    "new": "110003233"
  },
  {
    "old": "1110003299",
    "new": "110003232"
  },
  {
    "old": "1110003298",
    "new": "110003231"
  },
  {
    "old": "1110003297",
    "new": "110003230"
  },
  {
    "old": "1110003296",
    "new": "110003229"
  },
  {
    "old": "1110003295",
    "new": "110003228"
  },
  {
    "old": "1110003294",
    "new": "110003227"
  },
  {
    "old": "1110003293",
    "new": "110003226"
  },
  {
    "old": "1110003292",
    "new": "110003225"
  },
  {
    "old": "1110003291",
    "new": "110003224"
  },
  {
    "old": "1110003290",
    "new": "110003223"
  },
  {
    "old": "1110003289",
    "new": "110003222"
  },
  {
    "old": "1110003288",
    "new": "110003221"
  },
  {
    "old": "1110003287",
    "new": "110003220"
  },
  {
    "old": "1110003286",
    "new": "110003219"
  },
  {
    "old": "1110003285",
    "new": "110003218"
  },
  {
    "old": "1110003284",
    "new": "110003217"
  },
  {
    "old": "1110003283",
    "new": "110003216"
  },
  {
    "old": "1110003282",
    "new": "110003215"
  },
  {
    "old": "1110003281",
    "new": "110003214"
  },
  {
    "old": "1110003280",
    "new": "110003213"
  },
  {
    "old": "1110003279",
    "new": "110003212"
  },
  {
    "old": "1110003278",
    "new": "110003211"
  },
  {
    "old": "1110003277",
    "new": "110003210"
  },
  {
    "old": "1110003276",
    "new": "110003209"
  },
  {
    "old": "1110003275",
    "new": "110003208"
  },
  {
    "old": "1110003274",
    "new": "110003207"
  },
  {
    "old": "1110003273",
    "new": "110003206"
  },
  {
    "old": "1110003272",
    "new": "110003205"
  },
  {
    "old": "1110003271",
    "new": "110003204"
  },
  {
    "old": "1110003270",
    "new": "110003203"
  },
  {
    "old": "1110003269",
    "new": "110003202"
  },
  {
    "old": "1110003268",
    "new": "110003201"
  },
  {
    "old": "1110003267",
    "new": "110003200"
  },
  {
    "old": "1110003266",
    "new": "110003199"
  },
  {
    "old": "1110003265",
    "new": "110003198"
  },
  {
    "old": "1110003264",
    "new": "110003197"
  },
  {
    "old": "1110003263",
    "new": "110003196"
  },
  {
    "old": "1110003262",
    "new": "110003195"
  },
  {
    "old": "1110003261",
    "new": "110003194"
  },
  {
    "old": "1110003260",
    "new": "110003193"
  },
  {
    "old": "1110003259",
    "new": "110003192"
  },
  {
    "old": "1110003258",
    "new": "110003191"
  },
  {
    "old": "1110003257",
    "new": "110003190"
  },
  {
    "old": "1110003256",
    "new": "110003189"
  },
  {
    "old": "1110003255",
    "new": "110003188"
  },
  {
    "old": "1110003254",
    "new": "110003187"
  },
  {
    "old": "1110003253",
    "new": "110003186"
  },
  {
    "old": "1110003252",
    "new": "110003185"
  },
  {
    "old": "1110003251",
    "new": "110003184"
  },
  {
    "old": "1110003250",
    "new": "110003183"
  },
  {
    "old": "1110003249",
    "new": "110003182"
  },
  {
    "old": "1110003248",
    "new": "110003181"
  },
  {
    "old": "1110003247",
    "new": "110003180"
  },
  {
    "old": "1110003246",
    "new": "110003179"
  },
  {
    "old": "1110003245",
    "new": "110003178"
  },
  {
    "old": "1110003244",
    "new": "110003177"
  },
  {
    "old": "1110003243",
    "new": "110003176"
  },
  {
    "old": "1110003242",
    "new": "110003175"
  },
  {
    "old": "1110003241",
    "new": "110003174"
  },
  {
    "old": "1110003240",
    "new": "110003173"
  },
  {
    "old": "1110003239",
    "new": "110003172"
  },
  {
    "old": "1110003238",
    "new": "110003171"
  },
  {
    "old": "1110003237",
    "new": "110003170"
  },
  {
    "old": "1110003236",
    "new": "110003169"
  },
  {
    "old": "1110003235",
    "new": "110003168"
  },
  {
    "old": "1110003234",
    "new": "110003167"
  },
  {
    "old": "1110003233",
    "new": "110003166"
  },
  {
    "old": "1110003232",
    "new": "110003165"
  },
  {
    "old": "1110003231",
    "new": "110003164"
  },
  {
    "old": "1110003230",
    "new": "110003163"
  },
  {
    "old": "1110003229",
    "new": "110003162"
  },
  {
    "old": "1110003228",
    "new": "110003161"
  },
  {
    "old": "1110003227",
    "new": "110003160"
  },
  {
    "old": "1110003226",
    "new": "110003159"
  },
  {
    "old": "1110003225",
    "new": "110003158"
  },
  {
    "old": "1110003224",
    "new": "110003157"
  },
  {
    "old": "1110003223",
    "new": "110003156"
  },
  {
    "old": "1110003222",
    "new": "110003155"
  },
  {
    "old": "1110003221",
    "new": "110003154"
  },
  {
    "old": "1110003220",
    "new": "110003153"
  },
  {
    "old": "1110003219",
    "new": "110003152"
  },
  {
    "old": "1110003218",
    "new": "110003151"
  },
  {
    "old": "1110003217",
    "new": "110003150"
  },
  {
    "old": "1110003216",
    "new": "110003149"
  },
  {
    "old": "1110003215",
    "new": "110003148"
  },
  {
    "old": "1110003214",
    "new": "110003147"
  },
  {
    "old": "1110003213",
    "new": "110003146"
  },
  {
    "old": "1110003212",
    "new": "110003145"
  },
  {
    "old": "1110003211",
    "new": "110003144"
  },
  {
    "old": "1110003210",
    "new": "110003143"
  },
  {
    "old": "1110003209",
    "new": "110003142"
  },
  {
    "old": "1110003208",
    "new": "110003141"
  },
  {
    "old": "1110003207",
    "new": "110003140"
  },
  {
    "old": "1110003206",
    "new": "110003139"
  },
  {
    "old": "1110003205",
    "new": "110003138"
  },
  {
    "old": "1110003204",
    "new": "110003137"
  },
  {
    "old": "1110003203",
    "new": "110003136"
  },
  {
    "old": "1110003202",
    "new": "110003135"
  },
  {
    "old": "1110003201",
    "new": "110003134"
  },
  {
    "old": "1110003200",
    "new": "110003133"
  },
  {
    "old": "1110003199",
    "new": "110003132"
  },
  {
    "old": "1110003198",
    "new": "110003131"
  },
  {
    "old": "1110003197",
    "new": "110003130"
  },
  {
    "old": "1110003196",
    "new": "110003129"
  },
  {
    "old": "1110003195",
    "new": "110003128"
  },
  {
    "old": "1110003194",
    "new": "110003127"
  },
  {
    "old": "1110003193",
    "new": "110003126"
  },
  {
    "old": "1110003192",
    "new": "110003125"
  },
  {
    "old": "1110003191",
    "new": "110003124"
  },
  {
    "old": "1110003190",
    "new": "110003123"
  },
  {
    "old": "1110003189",
    "new": "110003122"
  },
  {
    "old": "1110003188",
    "new": "110003121"
  },
  {
    "old": "1110003187",
    "new": "110003120"
  },
  {
    "old": "1110003186",
    "new": "110003119"
  },
  {
    "old": "1110003185",
    "new": "110003118"
  },
  {
    "old": "1110003184",
    "new": "110003117"
  },
  {
    "old": "1110003183",
    "new": "110003116"
  },
  {
    "old": "1110003182",
    "new": "110003115"
  },
  {
    "old": "1110003181",
    "new": "110003114"
  },
  {
    "old": "1110003180",
    "new": "110003113"
  },
  {
    "old": "1110003179",
    "new": "110003112"
  },
  {
    "old": "1110003178",
    "new": "110003111"
  },
  {
    "old": "1110003177",
    "new": "110003110"
  },
  {
    "old": "1110003176",
    "new": "110003109"
  },
  {
    "old": "1110003175",
    "new": "110003108"
  },
  {
    "old": "1110003174",
    "new": "110003107"
  },
  {
    "old": "1110003173",
    "new": "110003106"
  },
  {
    "old": "1110003172",
    "new": "110003105"
  },
  {
    "old": "1110003171",
    "new": "110003104"
  },
  {
    "old": "1110003170",
    "new": "110003103"
  },
  {
    "old": "1110003169",
    "new": "110003102"
  },
  {
    "old": "1110003168",
    "new": "110003101"
  },
  {
    "old": "1110003167",
    "new": "110003100"
  },
  {
    "old": "1110003166",
    "new": "110003099"
  },
  {
    "old": "1110003165",
    "new": "110003098"
  },
  {
    "old": "1110003164",
    "new": "110003097"
  },
  {
    "old": "1110003163",
    "new": "110003096"
  },
  {
    "old": "1110003162",
    "new": "110003095"
  },
  {
    "old": "1110003161",
    "new": "110003094"
  },
  {
    "old": "1110003160",
    "new": "110003093"
  },
  {
    "old": "1110003159",
    "new": "110003092"
  },
  {
    "old": "1110003158",
    "new": "110003091"
  },
  {
    "old": "1110003157",
    "new": "110003090"
  },
  {
    "old": "1110003156",
    "new": "110003089"
  },
  {
    "old": "1110003155",
    "new": "110003088"
  },
  {
    "old": "1110003154",
    "new": "110003087"
  },
  {
    "old": "1110003153",
    "new": "110003086"
  },
  {
    "old": "1110003152",
    "new": "110003085"
  },
  {
    "old": "1110003151",
    "new": "110003084"
  },
  {
    "old": "1110003150",
    "new": "110003083"
  },
  {
    "old": "1110003149",
    "new": "110003082"
  },
  {
    "old": "1110003148",
    "new": "110003081"
  },
  {
    "old": "1110003147",
    "new": "110003080"
  },
  {
    "old": "1110003146",
    "new": "110003079"
  },
  {
    "old": "1110003145",
    "new": "110003078"
  },
  {
    "old": "1110003144",
    "new": "110003077"
  },
  {
    "old": "1110003143",
    "new": "110003076"
  },
  {
    "old": "1110003142",
    "new": "110003075"
  },
  {
    "old": "1110003141",
    "new": "110003074"
  },
  {
    "old": "1110003140",
    "new": "110003073"
  },
  {
    "old": "1110003139",
    "new": "110003072"
  },
  {
    "old": "1110003138",
    "new": "110003071"
  },
  {
    "old": "1110003137",
    "new": "110003070"
  },
  {
    "old": "1110003136",
    "new": "110003069"
  },
  {
    "old": "1110003135",
    "new": "110003068"
  },
  {
    "old": "1110003134",
    "new": "110003067"
  },
  {
    "old": "1110003133",
    "new": "110003066"
  },
  {
    "old": "1110003132",
    "new": "110003065"
  },
  {
    "old": "1110003131",
    "new": "110003064"
  },
  {
    "old": "1110003130",
    "new": "110003063"
  },
  {
    "old": "1110003129",
    "new": "110003062"
  },
  {
    "old": "1110003128",
    "new": "110003061"
  },
  {
    "old": "1110003127",
    "new": "110003060"
  },
  {
    "old": "1110003126",
    "new": "110003059"
  },
  {
    "old": "1110003125",
    "new": "110003058"
  },
  {
    "old": "1110003124",
    "new": "110003057"
  },
  {
    "old": "1110003123",
    "new": "110003056"
  },
  {
    "old": "1110003122",
    "new": "110003055"
  },
  {
    "old": "1110003121",
    "new": "110003054"
  },
  {
    "old": "1110003120",
    "new": "110003053"
  },
  {
    "old": "1110003119",
    "new": "110003052"
  },
  {
    "old": "1110003118",
    "new": "110003051"
  },
  {
    "old": "1110003117",
    "new": "110003050"
  },
  {
    "old": "1110003116",
    "new": "110003049"
  },
  {
    "old": "1110003115",
    "new": "110003048"
  },
  {
    "old": "1110003114",
    "new": "110003047"
  },
  {
    "old": "1110003113",
    "new": "110003046"
  },
  {
    "old": "1110003112",
    "new": "110003045"
  },
  {
    "old": "1110003111",
    "new": "110003044"
  },
  {
    "old": "1110003110",
    "new": "110003043"
  },
  {
    "old": "1110003109",
    "new": "110003042"
  },
  {
    "old": "1110003108",
    "new": "110003041"
  },
  {
    "old": "1110003107",
    "new": "110003040"
  },
  {
    "old": "1110003106",
    "new": "110003039"
  },
  {
    "old": "1110003105",
    "new": "110003038"
  },
  {
    "old": "1110003104",
    "new": "110003037"
  },
  {
    "old": "1110003103",
    "new": "110003036"
  },
  {
    "old": "1110003102",
    "new": "110003035"
  },
  {
    "old": "1110003101",
    "new": "110003034"
  },
  {
    "old": "1110003100",
    "new": "110003033"
  },
  {
    "old": "1110003099",
    "new": "110003032"
  },
  {
    "old": "1110003098",
    "new": "110003031"
  },
  {
    "old": "1110003097",
    "new": "110003030"
  },
  {
    "old": "1110003096",
    "new": "110003029"
  },
  {
    "old": "1110003095",
    "new": "110003028"
  },
  {
    "old": "1110003094",
    "new": "110003027"
  },
  {
    "old": "1110003093",
    "new": "110003026"
  },
  {
    "old": "1110003092",
    "new": "110003025"
  },
  {
    "old": "1110003091",
    "new": "110003024"
  },
  {
    "old": "1110003090",
    "new": "110003023"
  },
  {
    "old": "1110003089",
    "new": "110003022"
  },
  {
    "old": "1110003088",
    "new": "110003021"
  },
  {
    "old": "1110003087",
    "new": "110003020"
  },
  {
    "old": "1110003086",
    "new": "110003019"
  },
  {
    "old": "1110003085",
    "new": "110003018"
  },
  {
    "old": "1110003084",
    "new": "110003017"
  },
  {
    "old": "1110003083",
    "new": "110003016"
  },
  {
    "old": "1110003082",
    "new": "110003015"
  },
  {
    "old": "1110003081",
    "new": "110003014"
  },
  {
    "old": "1110003080",
    "new": "110003013"
  },
  {
    "old": "1110003079",
    "new": "110003012"
  },
  {
    "old": "1110003078",
    "new": "110003011"
  },
  {
    "old": "1110003077",
    "new": "110003010"
  },
  {
    "old": "1110003076",
    "new": "110003009"
  },
  {
    "old": "1110003075",
    "new": "110003008"
  },
  {
    "old": "1110003074",
    "new": "110003007"
  },
  {
    "old": "1110003073",
    "new": "110003006"
  },
  {
    "old": "1110003072",
    "new": "110003005"
  },
  {
    "old": "1110003071",
    "new": "110003004"
  },
  {
    "old": "1110003070",
    "new": "110003003"
  },
  {
    "old": "1110003069",
    "new": "110003002"
  },
  {
    "old": "1110003068",
    "new": "110003001"
  },
  {
    "old": "1110003067",
    "new": "110003000"
  },
  {
    "old": "1110003066",
    "new": "110002999"
  },
  {
    "old": "1110003065",
    "new": "110002998"
  },
  {
    "old": "1110003064",
    "new": "110002997"
  },
  {
    "old": "1110003063",
    "new": "110002996"
  },
  {
    "old": "1110003062",
    "new": "110002995"
  },
  {
    "old": "1110003061",
    "new": "110002994"
  },
  {
    "old": "1110003060",
    "new": "110002993"
  },
  {
    "old": "1110003059",
    "new": "110002992"
  },
  {
    "old": "1110003058",
    "new": "110002991"
  },
  {
    "old": "1110003057",
    "new": "110002990"
  },
  {
    "old": "1110003056",
    "new": "110002989"
  },
  {
    "old": "1110003055",
    "new": "110002988"
  },
  {
    "old": "1110003054",
    "new": "110002987"
  },
  {
    "old": "1110003053",
    "new": "110002986"
  },
  {
    "old": "1110003052",
    "new": "110002985"
  },
  {
    "old": "1110003051",
    "new": "110002984"
  },
  {
    "old": "1110003050",
    "new": "110002983"
  },
  {
    "old": "1110003049",
    "new": "110002982"
  },
  {
    "old": "1110003048",
    "new": "110002981"
  },
  {
    "old": "1110003047",
    "new": "110002980"
  },
  {
    "old": "1110003046",
    "new": "110002979"
  },
  {
    "old": "1110003045",
    "new": "110002978"
  },
  {
    "old": "1110003044",
    "new": "110002977"
  },
  {
    "old": "1110003043",
    "new": "110002976"
  },
  {
    "old": "1110003042",
    "new": "110002975"
  },
  {
    "old": "1110003041",
    "new": "110002974"
  },
  {
    "old": "1110003040",
    "new": "110002973"
  },
  {
    "old": "1110003039",
    "new": "110002972"
  },
  {
    "old": "1110003038",
    "new": "110002971"
  },
  {
    "old": "1110003037",
    "new": "110002970"
  },
  {
    "old": "1110003036",
    "new": "110002969"
  },
  {
    "old": "1110003035",
    "new": "110002968"
  },
  {
    "old": "1110003034",
    "new": "110002967"
  },
  {
    "old": "1110003033",
    "new": "110002966"
  },
  {
    "old": "1110003032",
    "new": "110002965"
  },
  {
    "old": "1110003031",
    "new": "110002964"
  },
  {
    "old": "1110003030",
    "new": "110002963"
  },
  {
    "old": "1110003029",
    "new": "110002962"
  },
  {
    "old": "1110003028",
    "new": "110002961"
  },
  {
    "old": "1110003027",
    "new": "110002960"
  },
  {
    "old": "1110003026",
    "new": "110002959"
  },
  {
    "old": "1110003025",
    "new": "110002958"
  },
  {
    "old": "1110003024",
    "new": "110002957"
  },
  {
    "old": "1110003023",
    "new": "110002956"
  },
  {
    "old": "1110003022",
    "new": "110002955"
  },
  {
    "old": "1110003021",
    "new": "110002954"
  },
  {
    "old": "1110003020",
    "new": "110002953"
  },
  {
    "old": "1110003019",
    "new": "110002952"
  },
  {
    "old": "1110003018",
    "new": "110002951"
  },
  {
    "old": "1110003017",
    "new": "110002950"
  },
  {
    "old": "1110003016",
    "new": "110002949"
  },
  {
    "old": "1110003015",
    "new": "110002948"
  },
  {
    "old": "1110003014",
    "new": "110002947"
  },
  {
    "old": "1110003013",
    "new": "110002946"
  },
  {
    "old": "1110003012",
    "new": "110002945"
  },
  {
    "old": "1110003011",
    "new": "110002944"
  },
  {
    "old": "1110003010",
    "new": "110002943"
  },
  {
    "old": "1110003009",
    "new": "110002942"
  },
  {
    "old": "1110003008",
    "new": "110002941"
  },
  {
    "old": "1110003007",
    "new": "110002940"
  },
  {
    "old": "1110003006",
    "new": "110002939"
  },
  {
    "old": "1110003005",
    "new": "110002938"
  },
  {
    "old": "1110003004",
    "new": "110002937"
  },
  {
    "old": "1110003003",
    "new": "110002936"
  },
  {
    "old": "1110003002",
    "new": "110002935"
  },
  {
    "old": "1110003001",
    "new": "110002934"
  },
  {
    "old": "1110003000",
    "new": "110002933"
  },
  {
    "old": "1110002999",
    "new": "110002932"
  },
  {
    "old": "1110002998",
    "new": "110002931"
  },
  {
    "old": "1110002997",
    "new": "110002930"
  },
  {
    "old": "1110002996",
    "new": "110002929"
  },
  {
    "old": "1110002995",
    "new": "110002928"
  },
  {
    "old": "1110002994",
    "new": "110002927"
  },
  {
    "old": "1110002993",
    "new": "110002926"
  },
  {
    "old": "1110002992",
    "new": "110002925"
  },
  {
    "old": "1110002991",
    "new": "110002924"
  },
  {
    "old": "1110002990",
    "new": "110002923"
  },
  {
    "old": "1110002989",
    "new": "110002922"
  },
  {
    "old": "1110002988",
    "new": "110002921"
  },
  {
    "old": "1110002987",
    "new": "110002920"
  },
  {
    "old": "1110002986",
    "new": "110002919"
  },
  {
    "old": "1110002985",
    "new": "110002918"
  },
  {
    "old": "1110002984",
    "new": "110002917"
  },
  {
    "old": "1110002983",
    "new": "110002916"
  },
  {
    "old": "1110002982",
    "new": "110002915"
  },
  {
    "old": "1110002981",
    "new": "110002914"
  },
  {
    "old": "1110002980",
    "new": "110002913"
  },
  {
    "old": "1110002979",
    "new": "110002912"
  },
  {
    "old": "1110002978",
    "new": "110002911"
  },
  {
    "old": "1110002977",
    "new": "110002910"
  },
  {
    "old": "1110002976",
    "new": "110002909"
  },
  {
    "old": "1110002975",
    "new": "110002908"
  },
  {
    "old": "1110002974",
    "new": "110002907"
  },
  {
    "old": "1110002973",
    "new": "110002906"
  },
  {
    "old": "1110002972",
    "new": "110002905"
  },
  {
    "old": "1110002971",
    "new": "110002904"
  },
  {
    "old": "1110002970",
    "new": "110002903"
  },
  {
    "old": "1110002969",
    "new": "110002902"
  },
  {
    "old": "1110002968",
    "new": "110002901"
  },
  {
    "old": "1110002967",
    "new": "110002900"
  },
  {
    "old": "1110002966",
    "new": "110002899"
  },
  {
    "old": "1110002965",
    "new": "110002898"
  },
  {
    "old": "1110002964",
    "new": "110002897"
  },
  {
    "old": "1110002963",
    "new": "110002896"
  },
  {
    "old": "1110002962",
    "new": "110002895"
  },
  {
    "old": "1110002961",
    "new": "110002894"
  },
  {
    "old": "1110002960",
    "new": "110002893"
  },
  {
    "old": "1110002959",
    "new": "110002892"
  },
  {
    "old": "1110002958",
    "new": "110002891"
  },
  {
    "old": "1110002957",
    "new": "110002890"
  },
  {
    "old": "1110002956",
    "new": "110002889"
  },
  {
    "old": "1110002955",
    "new": "110002888"
  },
  {
    "old": "1110002954",
    "new": "110002887"
  },
  {
    "old": "1110002953",
    "new": "110002886"
  },
  {
    "old": "1110002952",
    "new": "110002885"
  },
  {
    "old": "1110002951",
    "new": "110002884"
  },
  {
    "old": "1110002950",
    "new": "110002883"
  },
  {
    "old": "1110002949",
    "new": "110002882"
  },
  {
    "old": "1110002948",
    "new": "110002881"
  },
  {
    "old": "1110002947",
    "new": "110002880"
  },
  {
    "old": "1110002946",
    "new": "110002879"
  },
  {
    "old": "1110002945",
    "new": "110002878"
  },
  {
    "old": "1110002944",
    "new": "110002877"
  },
  {
    "old": "1110002943",
    "new": "110002876"
  },
  {
    "old": "1110002942",
    "new": "110002875"
  },
  {
    "old": "1110002941",
    "new": "110002874"
  },
  {
    "old": "1110002940",
    "new": "110002873"
  },
  {
    "old": "1110002939",
    "new": "110002872"
  },
  {
    "old": "1110002938",
    "new": "110002871"
  },
  {
    "old": "1110002937",
    "new": "110002870"
  },
  {
    "old": "1110002936",
    "new": "110002869"
  },
  {
    "old": "1110002935",
    "new": "110002868"
  },
  {
    "old": "1110002934",
    "new": "110002867"
  },
  {
    "old": "1110002933",
    "new": "110002866"
  },
  {
    "old": "1110002932",
    "new": "110002865"
  },
  {
    "old": "1110002931",
    "new": "110002864"
  },
  {
    "old": "1110002930",
    "new": "110002863"
  },
  {
    "old": "1110002929",
    "new": "110002862"
  },
  {
    "old": "1110002928",
    "new": "110002861"
  },
  {
    "old": "1110002927",
    "new": "110002860"
  },
  {
    "old": "1110002926",
    "new": "110002859"
  },
  {
    "old": "1110002925",
    "new": "110002858"
  },
  {
    "old": "1110002924",
    "new": "110002857"
  },
  {
    "old": "1110002923",
    "new": "110002856"
  },
  {
    "old": "1110002922",
    "new": "110002855"
  },
  {
    "old": "1110002921",
    "new": "110002854"
  },
  {
    "old": "1110002920",
    "new": "110002853"
  },
  {
    "old": "1110002919",
    "new": "110002852"
  },
  {
    "old": "1110002918",
    "new": "110002851"
  },
  {
    "old": "1110002917",
    "new": "110002850"
  },
  {
    "old": "1110002916",
    "new": "110002849"
  },
  {
    "old": "1110002915",
    "new": "110002848"
  },
  {
    "old": "1110002914",
    "new": "110002847"
  },
  {
    "old": "1110002913",
    "new": "110002846"
  },
  {
    "old": "1110002912",
    "new": "110002845"
  },
  {
    "old": "1110002911",
    "new": "110002844"
  },
  {
    "old": "1110002910",
    "new": "110002843"
  },
  {
    "old": "1110002909",
    "new": "110002842"
  },
  {
    "old": "1110002908",
    "new": "110002841"
  },
  {
    "old": "1110002907",
    "new": "110002840"
  },
  {
    "old": "1110002906",
    "new": "110002839"
  },
  {
    "old": "1110002905",
    "new": "110002838"
  },
  {
    "old": "1110002904",
    "new": "110002837"
  },
  {
    "old": "1110002903",
    "new": "110002836"
  },
  {
    "old": "1110002902",
    "new": "110002835"
  },
  {
    "old": "1110002901",
    "new": "110002834"
  },
  {
    "old": "1110002900",
    "new": "110002833"
  },
  {
    "old": "1110002899",
    "new": "110002832"
  },
  {
    "old": "1110002898",
    "new": "110002831"
  },
  {
    "old": "1110002897",
    "new": "110002830"
  },
  {
    "old": "1110002896",
    "new": "110002829"
  },
  {
    "old": "1110002895",
    "new": "110002828"
  },
  {
    "old": "1110002894",
    "new": "110002827"
  },
  {
    "old": "1110002893",
    "new": "110002826"
  },
  {
    "old": "1110002892",
    "new": "110002825"
  },
  {
    "old": "1110002891",
    "new": "110002824"
  },
  {
    "old": "1110002890",
    "new": "110002823"
  },
  {
    "old": "1110002889",
    "new": "110002822"
  },
  {
    "old": "1110002888",
    "new": "110002821"
  },
  {
    "old": "1110002887",
    "new": "110002820"
  },
  {
    "old": "1110002886",
    "new": "110002819"
  },
  {
    "old": "1110002885",
    "new": "110002818"
  },
  {
    "old": "1110002884",
    "new": "110002817"
  },
  {
    "old": "1110002883",
    "new": "110002816"
  },
  {
    "old": "1110002882",
    "new": "110002815"
  },
  {
    "old": "1110002881",
    "new": "110002814"
  },
  {
    "old": "1110002880",
    "new": "110002813"
  },
  {
    "old": "1110002879",
    "new": "110002812"
  },
  {
    "old": "1110002878",
    "new": "110002811"
  },
  {
    "old": "1110002877",
    "new": "110002810"
  },
  {
    "old": "1110002876",
    "new": "110002809"
  },
  {
    "old": "1110002875",
    "new": "110002808"
  },
  {
    "old": "1110002874",
    "new": "110002807"
  },
  {
    "old": "1110002873",
    "new": "110002806"
  },
  {
    "old": "1110002872",
    "new": "110002805"
  },
  {
    "old": "1110002871",
    "new": "110002804"
  },
  {
    "old": "1110002870",
    "new": "110002803"
  },
  {
    "old": "1110002869",
    "new": "110002802"
  },
  {
    "old": "1110002868",
    "new": "110002801"
  },
  {
    "old": "1110002867",
    "new": "110002800"
  },
  {
    "old": "1110002866",
    "new": "110002799"
  },
  {
    "old": "1110002865",
    "new": "110002798"
  },
  {
    "old": "1110002864",
    "new": "110002797"
  },
  {
    "old": "1110002863",
    "new": "110002796"
  },
  {
    "old": "1110002862",
    "new": "110002795"
  },
  {
    "old": "1110002861",
    "new": "110002794"
  },
  {
    "old": "1110002860",
    "new": "110002793"
  },
  {
    "old": "1110002859",
    "new": "110002792"
  },
  {
    "old": "1110002858",
    "new": "110002791"
  },
  {
    "old": "1110002857",
    "new": "110002790"
  },
  {
    "old": "1110002856",
    "new": "110002789"
  },
  {
    "old": "1110002855",
    "new": "110002788"
  },
  {
    "old": "1110002854",
    "new": "110002787"
  },
  {
    "old": "1110002853",
    "new": "110002786"
  },
  {
    "old": "1110002852",
    "new": "110002785"
  },
  {
    "old": "1110002851",
    "new": "110002784"
  },
  {
    "old": "1110002850",
    "new": "110002783"
  },
  {
    "old": "1110002849",
    "new": "110002782"
  },
  {
    "old": "1110002848",
    "new": "110002781"
  },
  {
    "old": "1110002847",
    "new": "110002780"
  },
  {
    "old": "1110002846",
    "new": "110002779"
  },
  {
    "old": "1110002845",
    "new": "110002778"
  },
  {
    "old": "1110002844",
    "new": "110002777"
  },
  {
    "old": "1110002843",
    "new": "110002776"
  },
  {
    "old": "1110002842",
    "new": "110002775"
  },
  {
    "old": "1110002841",
    "new": "110002774"
  },
  {
    "old": "1110002840",
    "new": "110002773"
  },
  {
    "old": "1110002839",
    "new": "110002772"
  },
  {
    "old": "1110002838",
    "new": "110002771"
  },
  {
    "old": "1110002837",
    "new": "110002770"
  },
  {
    "old": "1110002836",
    "new": "110002769"
  },
  {
    "old": "1110002835",
    "new": "110002768"
  },
  {
    "old": "1110002834",
    "new": "110002767"
  },
  {
    "old": "1110002833",
    "new": "110002766"
  },
  {
    "old": "1110002832",
    "new": "110002765"
  },
  {
    "old": "1110002831",
    "new": "110002764"
  },
  {
    "old": "1110002830",
    "new": "110002763"
  },
  {
    "old": "1110002829",
    "new": "110002762"
  },
  {
    "old": "1110002828",
    "new": "110002761"
  },
  {
    "old": "1110002827",
    "new": "110002760"
  },
  {
    "old": "1110002826",
    "new": "110002759"
  },
  {
    "old": "1110002825",
    "new": "110002758"
  },
  {
    "old": "1110002824",
    "new": "110002757"
  },
  {
    "old": "1110002823",
    "new": "110002756"
  },
  {
    "old": "1110002822",
    "new": "110002755"
  },
  {
    "old": "1110002821",
    "new": "110002754"
  },
  {
    "old": "1110002820",
    "new": "110002753"
  },
  {
    "old": "1110002819",
    "new": "110002752"
  },
  {
    "old": "1110002818",
    "new": "110002751"
  },
  {
    "old": "1110002817",
    "new": "110002750"
  },
  {
    "old": "1110002816",
    "new": "110002749"
  },
  {
    "old": "1110002815",
    "new": "110002748"
  },
  {
    "old": "1110002814",
    "new": "110002747"
  },
  {
    "old": "1110002813",
    "new": "110002746"
  },
  {
    "old": "1110002812",
    "new": "110002745"
  },
  {
    "old": "1110002811",
    "new": "110002744"
  },
  {
    "old": "1110002810",
    "new": "110002743"
  },
  {
    "old": "1110002809",
    "new": "110002742"
  },
  {
    "old": "1110002808",
    "new": "110002741"
  },
  {
    "old": "1110002807",
    "new": "110002740"
  },
  {
    "old": "1110002806",
    "new": "110002739"
  },
  {
    "old": "1110002805",
    "new": "110002738"
  },
  {
    "old": "1110002804",
    "new": "110002737"
  },
  {
    "old": "1110002803",
    "new": "110002736"
  },
  {
    "old": "1110002802",
    "new": "110002735"
  },
  {
    "old": "1110002801",
    "new": "110002734"
  },
  {
    "old": "1110002800",
    "new": "110002733"
  },
  {
    "old": "1110002799",
    "new": "110002732"
  },
  {
    "old": "1110002798",
    "new": "110002731"
  },
  {
    "old": "1110002797",
    "new": "110002730"
  },
  {
    "old": "1110002796",
    "new": "110002729"
  },
  {
    "old": "1110002795",
    "new": "110002728"
  },
  {
    "old": "1110002794",
    "new": "110002727"
  },
  {
    "old": "1110002793",
    "new": "110002726"
  },
  {
    "old": "1110002792",
    "new": "110002725"
  },
  {
    "old": "1110002791",
    "new": "110002724"
  },
  {
    "old": "1110002790",
    "new": "110002723"
  },
  {
    "old": "1110002789",
    "new": "110002722"
  },
  {
    "old": "1110002788",
    "new": "110002721"
  },
  {
    "old": "1110002787",
    "new": "110002720"
  },
  {
    "old": "1110002786",
    "new": "110002719"
  },
  {
    "old": "1110002785",
    "new": "110002718"
  },
  {
    "old": "1110002784",
    "new": "110002717"
  },
  {
    "old": "1110002783",
    "new": "110002716"
  },
  {
    "old": "1110002781",
    "new": "110002715"
  },
  {
    "old": "1110002780",
    "new": "110002714"
  },
  {
    "old": "1110002779",
    "new": "110002713"
  },
  {
    "old": "1110002778",
    "new": "110002712"
  },
  {
    "old": "1110002777",
    "new": "110002711"
  },
  {
    "old": "1110002776",
    "new": "110002710"
  },
  {
    "old": "1110002775",
    "new": "110002709"
  },
  {
    "old": "1110002774",
    "new": "110002708"
  },
  {
    "old": "1110002773",
    "new": "110002707"
  },
  {
    "old": "1110002772",
    "new": "110002706"
  },
  {
    "old": "1110002771",
    "new": "110002705"
  },
  {
    "old": "1110002770",
    "new": "110002704"
  },
  {
    "old": "1110002769",
    "new": "110002703"
  },
  {
    "old": "1110002768",
    "new": "110002702"
  },
  {
    "old": "1110002767",
    "new": "110002701"
  },
  {
    "old": "1110002766",
    "new": "110002700"
  },
  {
    "old": "1110002765",
    "new": "110002699"
  },
  {
    "old": "1110002764",
    "new": "110002698"
  },
  {
    "old": "1110002763",
    "new": "110002697"
  },
  {
    "old": "1110002762",
    "new": "110002696"
  },
  {
    "old": "1110002761",
    "new": "110002695"
  },
  {
    "old": "1110002760",
    "new": "110002694"
  },
  {
    "old": "1110002759",
    "new": "110002693"
  },
  {
    "old": "1110002758",
    "new": "110002692"
  },
  {
    "old": "1110002757",
    "new": "110002691"
  },
  {
    "old": "1110002756",
    "new": "110002690"
  },
  {
    "old": "1110002755",
    "new": "110002689"
  },
  {
    "old": "1110002754",
    "new": "110002688"
  },
  {
    "old": "1110002753",
    "new": "110002687"
  },
  {
    "old": "1110002752",
    "new": "110002686"
  },
  {
    "old": "1110002751",
    "new": "110002685"
  },
  {
    "old": "1110002750",
    "new": "110002684"
  },
  {
    "old": "1110002749",
    "new": "110002683"
  },
  {
    "old": "1110002748",
    "new": "110002682"
  },
  {
    "old": "1110002747",
    "new": "110002681"
  },
  {
    "old": "1110002746",
    "new": "110002680"
  },
  {
    "old": "1110002744",
    "new": "110002679"
  },
  {
    "old": "1110002743",
    "new": "110002678"
  },
  {
    "old": "1110002742",
    "new": "110002677"
  },
  {
    "old": "1110002741",
    "new": "110002676"
  },
  {
    "old": "1110002740",
    "new": "110002675"
  },
  {
    "old": "1110002739",
    "new": "110002674"
  },
  {
    "old": "1110002738",
    "new": "110002673"
  },
  {
    "old": "1110002737",
    "new": "110002672"
  },
  {
    "old": "1110002736",
    "new": "110002671"
  },
  {
    "old": "1110002735",
    "new": "110002670"
  },
  {
    "old": "1110002734",
    "new": "110002669"
  },
  {
    "old": "1110002733",
    "new": "110002668"
  },
  {
    "old": "1110002732",
    "new": "110002667"
  },
  {
    "old": "1110002731",
    "new": "110002666"
  },
  {
    "old": "1110002730",
    "new": "110002665"
  },
  {
    "old": "1110002729",
    "new": "110002664"
  },
  {
    "old": "1110002728",
    "new": "110002663"
  },
  {
    "old": "1110002727",
    "new": "110002662"
  },
  {
    "old": "1110002726",
    "new": "110002661"
  },
  {
    "old": "1110002725",
    "new": "110002660"
  },
  {
    "old": "1110002724",
    "new": "110002659"
  },
  {
    "old": "1110002723",
    "new": "110002658"
  },
  {
    "old": "1110002722",
    "new": "110002657"
  },
  {
    "old": "1110002721",
    "new": "110002656"
  },
  {
    "old": "1110002720",
    "new": "110002655"
  },
  {
    "old": "1110002719",
    "new": "110002654"
  },
  {
    "old": "1110002718",
    "new": "110002653"
  },
  {
    "old": "1110002717",
    "new": "110002652"
  },
  {
    "old": "1110002716",
    "new": "110002651"
  },
  {
    "old": "1110002715",
    "new": "110002650"
  },
  {
    "old": "1110002714",
    "new": "110002649"
  },
  {
    "old": "1110002713",
    "new": "110002648"
  },
  {
    "old": "1110002712",
    "new": "110002647"
  },
  {
    "old": "1110002711",
    "new": "110002646"
  },
  {
    "old": "1110002710",
    "new": "110002645"
  },
  {
    "old": "1110002709",
    "new": "110002644"
  },
  {
    "old": "1110002708",
    "new": "110002643"
  },
  {
    "old": "1110002707",
    "new": "110002642"
  },
  {
    "old": "1110002706",
    "new": "110002641"
  },
  {
    "old": "1110002705",
    "new": "110002640"
  },
  {
    "old": "1110002704",
    "new": "110002639"
  },
  {
    "old": "1110002703",
    "new": "110002638"
  },
  {
    "old": "1110002702",
    "new": "110002637"
  },
  {
    "old": "1110002701",
    "new": "110002636"
  },
  {
    "old": "1110002700",
    "new": "110002635"
  },
  {
    "old": "1110002699",
    "new": "110002634"
  },
  {
    "old": "1110002698",
    "new": "110002633"
  },
  {
    "old": "1110002697",
    "new": "110002632"
  },
  {
    "old": "1110002696",
    "new": "110002631"
  },
  {
    "old": "1110002694",
    "new": "110002630"
  },
  {
    "old": "1110002686",
    "new": "110002629"
  },
  {
    "old": "1110002684",
    "new": "110002628"
  },
  {
    "old": "1110002683",
    "new": "110002627"
  },
  {
    "old": "1110002682",
    "new": "110002626"
  },
  {
    "old": "1110002681",
    "new": "110002625"
  },
  {
    "old": "1110002680",
    "new": "110002624"
  },
  {
    "old": "1110002672",
    "new": "110002623"
  },
  {
    "old": "1110002660",
    "new": "110002622"
  },
  {
    "old": "1110002659",
    "new": "110002621"
  },
  {
    "old": "1110002658",
    "new": "110002620"
  },
  {
    "old": "1110002657",
    "new": "110002619"
  },
  {
    "old": "1110002656",
    "new": "110002618"
  },
  {
    "old": "1110002655",
    "new": "110002617"
  },
  {
    "old": "1110002654",
    "new": "110002616"
  },
  {
    "old": "1110002653",
    "new": "110002615"
  },
  {
    "old": "1110002652",
    "new": "110002614"
  },
  {
    "old": "1110002651",
    "new": "110002613"
  },
  {
    "old": "1110002650",
    "new": "110002612"
  },
  {
    "old": "1110002649",
    "new": "110002611"
  },
  {
    "old": "1110002648",
    "new": "110002610"
  },
  {
    "old": "1110002647",
    "new": "110002609"
  },
  {
    "old": "1110002646",
    "new": "110002608"
  },
  {
    "old": "1110002645",
    "new": "110002607"
  },
  {
    "old": "1110002644",
    "new": "110002606"
  },
  {
    "old": "1110002643",
    "new": "110002605"
  },
  {
    "old": "1110002642",
    "new": "110002604"
  },
  {
    "old": "1110002641",
    "new": "110002603"
  },
  {
    "old": "1110002640",
    "new": "110002602"
  },
  {
    "old": "1110002639",
    "new": "110002601"
  },
  {
    "old": "1110002638",
    "new": "110002600"
  },
  {
    "old": "1110002637",
    "new": "110002599"
  },
  {
    "old": "1110002636",
    "new": "110002598"
  },
  {
    "old": "1110002635",
    "new": "110002597"
  },
  {
    "old": "1110002634",
    "new": "110002596"
  },
  {
    "old": "1110002633",
    "new": "110002595"
  },
  {
    "old": "1110002632",
    "new": "110002594"
  },
  {
    "old": "1110002631",
    "new": "110002593"
  },
  {
    "old": "1110002630",
    "new": "110002592"
  },
  {
    "old": "1110002629",
    "new": "110002591"
  },
  {
    "old": "1110002628",
    "new": "110002590"
  },
  {
    "old": "1110002627",
    "new": "110002589"
  },
  {
    "old": "1110002626",
    "new": "110002588"
  },
  {
    "old": "1110002625",
    "new": "110002587"
  },
  {
    "old": "1110002624",
    "new": "110002586"
  },
  {
    "old": "1110002623",
    "new": "110002585"
  },
  {
    "old": "1110002622",
    "new": "110002584"
  },
  {
    "old": "1110002621",
    "new": "110002583"
  },
  {
    "old": "1110002620",
    "new": "110002582"
  },
  {
    "old": "1110002619",
    "new": "110002581"
  },
  {
    "old": "1110002618",
    "new": "110002580"
  },
  {
    "old": "1110002617",
    "new": "110002579"
  },
  {
    "old": "1110002616",
    "new": "110002578"
  },
  {
    "old": "1110002615",
    "new": "110002577"
  },
  {
    "old": "1110002614",
    "new": "110002576"
  },
  {
    "old": "1110002613",
    "new": "110002575"
  },
  {
    "old": "1110002612",
    "new": "110002574"
  },
  {
    "old": "1110002611",
    "new": "110002573"
  },
  {
    "old": "1110002610",
    "new": "110002572"
  },
  {
    "old": "1110002609",
    "new": "110002571"
  },
  {
    "old": "1110002608",
    "new": "110002570"
  },
  {
    "old": "1110002607",
    "new": "110002569"
  },
  {
    "old": "1110002606",
    "new": "110002568"
  },
  {
    "old": "1110002605",
    "new": "110002567"
  },
  {
    "old": "1110002604",
    "new": "110002566"
  },
  {
    "old": "1110002603",
    "new": "110002565"
  },
  {
    "old": "1110002602",
    "new": "110002564"
  },
  {
    "old": "1110002601",
    "new": "110002563"
  },
  {
    "old": "1110002600",
    "new": "110002562"
  },
  {
    "old": "1110002599",
    "new": "110002561"
  },
  {
    "old": "1110002598",
    "new": "110002560"
  },
  {
    "old": "1110002597",
    "new": "110002559"
  },
  {
    "old": "1110002596",
    "new": "110002558"
  },
  {
    "old": "1110002595",
    "new": "110002557"
  },
  {
    "old": "1110002594",
    "new": "110002556"
  },
  {
    "old": "1110002593",
    "new": "110002555"
  },
  {
    "old": "1110002592",
    "new": "110002554"
  },
  {
    "old": "1110002591",
    "new": "110002553"
  },
  {
    "old": "1110002590",
    "new": "110002552"
  },
  {
    "old": "1110002589",
    "new": "110002551"
  },
  {
    "old": "1110002588",
    "new": "110002550"
  },
  {
    "old": "1110002587",
    "new": "110002549"
  },
  {
    "old": "1110002586",
    "new": "110002548"
  },
  {
    "old": "1110002585",
    "new": "110002547"
  },
  {
    "old": "1110002584",
    "new": "110002546"
  },
  {
    "old": "1110002583",
    "new": "110002545"
  },
  {
    "old": "1110002582",
    "new": "110002544"
  },
  {
    "old": "1110002581",
    "new": "110002543"
  },
  {
    "old": "1110002580",
    "new": "110002542"
  },
  {
    "old": "1110002579",
    "new": "110002541"
  },
  {
    "old": "1110002578",
    "new": "110002540"
  },
  {
    "old": "1110002577",
    "new": "110002539"
  },
  {
    "old": "1110002576",
    "new": "110002538"
  },
  {
    "old": "1110002575",
    "new": "110002537"
  },
  {
    "old": "1110002574",
    "new": "110002536"
  },
  {
    "old": "1110002573",
    "new": "110002535"
  },
  {
    "old": "1110002572",
    "new": "110002534"
  },
  {
    "old": "1110002571",
    "new": "110002533"
  },
  {
    "old": "1110002570",
    "new": "110002532"
  },
  {
    "old": "1110002569",
    "new": "110002531"
  },
  {
    "old": "1110002568",
    "new": "110002530"
  },
  {
    "old": "1110002567",
    "new": "110002529"
  },
  {
    "old": "1110002566",
    "new": "110002528"
  },
  {
    "old": "1110002565",
    "new": "110002527"
  },
  {
    "old": "1110002564",
    "new": "110002526"
  },
  {
    "old": "1110002563",
    "new": "110002525"
  },
  {
    "old": "1110002562",
    "new": "110002524"
  },
  {
    "old": "1110002561",
    "new": "110002523"
  },
  {
    "old": "1110002560",
    "new": "110002522"
  },
  {
    "old": "1110002559",
    "new": "110002521"
  },
  {
    "old": "1110002558",
    "new": "110002520"
  },
  {
    "old": "1110002557",
    "new": "110002519"
  },
  {
    "old": "1110002556",
    "new": "110002518"
  },
  {
    "old": "1110002555",
    "new": "110002517"
  },
  {
    "old": "1110002554",
    "new": "110002516"
  },
  {
    "old": "1110002553",
    "new": "110002515"
  },
  {
    "old": "1110002552",
    "new": "110002514"
  },
  {
    "old": "1110002551",
    "new": "110002513"
  },
  {
    "old": "1110002550",
    "new": "110002512"
  },
  {
    "old": "1110002549",
    "new": "110002511"
  },
  {
    "old": "1110002548",
    "new": "110002510"
  },
  {
    "old": "1110002547",
    "new": "110002509"
  },
  {
    "old": "1110002546",
    "new": "110002508"
  },
  {
    "old": "1110002545",
    "new": "110002507"
  },
  {
    "old": "1110002544",
    "new": "110002506"
  },
  {
    "old": "1110002543",
    "new": "110002505"
  },
  {
    "old": "1110002542",
    "new": "110002504"
  },
  {
    "old": "1110002541",
    "new": "110002503"
  },
  {
    "old": "1110002540",
    "new": "110002502"
  },
  {
    "old": "1110002539",
    "new": "110002501"
  },
  {
    "old": "1110002538",
    "new": "110002500"
  },
  {
    "old": "1110002537",
    "new": "110002499"
  },
  {
    "old": "1110002536",
    "new": "110002498"
  },
  {
    "old": "1110002535",
    "new": "110002497"
  },
  {
    "old": "1110002534",
    "new": "110002496"
  },
  {
    "old": "1110002533",
    "new": "110002495"
  },
  {
    "old": "1110002532",
    "new": "110002494"
  },
  {
    "old": "1110002531",
    "new": "110002493"
  },
  {
    "old": "1110002528",
    "new": "110002492"
  },
  {
    "old": "1110002527",
    "new": "110002491"
  },
  {
    "old": "1110002525",
    "new": "110002490"
  },
  {
    "old": "1110002524",
    "new": "110002489"
  },
  {
    "old": "1110002523",
    "new": "110002488"
  },
  {
    "old": "1110002522",
    "new": "110002487"
  },
  {
    "old": "1110002521",
    "new": "110002486"
  },
  {
    "old": "1110002520",
    "new": "110002485"
  },
  {
    "old": "1110002519",
    "new": "110002484"
  },
  {
    "old": "1110002518",
    "new": "110002483"
  },
  {
    "old": "1110002517",
    "new": "110002482"
  },
  {
    "old": "1110002516",
    "new": "110002481"
  },
  {
    "old": "1110002515",
    "new": "110002480"
  },
  {
    "old": "1110002514",
    "new": "110002479"
  },
  {
    "old": "1110002513",
    "new": "110002478"
  },
  {
    "old": "1110002512",
    "new": "110002477"
  },
  {
    "old": "1110002511",
    "new": "110002476"
  },
  {
    "old": "1110002510",
    "new": "110002475"
  },
  {
    "old": "1110002509",
    "new": "110002474"
  },
  {
    "old": "1110002508",
    "new": "110002473"
  },
  {
    "old": "1110002507",
    "new": "110002472"
  },
  {
    "old": "1110002506",
    "new": "110002471"
  },
  {
    "old": "1110002505",
    "new": "110002470"
  },
  {
    "old": "1110002504",
    "new": "110002469"
  },
  {
    "old": "1110002503",
    "new": "110002468"
  },
  {
    "old": "1110002502",
    "new": "110002467"
  },
  {
    "old": "1110002501",
    "new": "110002466"
  },
  {
    "old": "1110002500",
    "new": "110002465"
  },
  {
    "old": "1110002499",
    "new": "110002464"
  },
  {
    "old": "1110002498",
    "new": "110002463"
  },
  {
    "old": "1110002497",
    "new": "110002462"
  },
  {
    "old": "1110002496",
    "new": "110002461"
  },
  {
    "old": "1110002495",
    "new": "110002460"
  },
  {
    "old": "1110002494",
    "new": "110002459"
  },
  {
    "old": "1110002493",
    "new": "110002458"
  },
  {
    "old": "1110002492",
    "new": "110002457"
  },
  {
    "old": "1110002491",
    "new": "110002456"
  },
  {
    "old": "1110002490",
    "new": "110002455"
  },
  {
    "old": "1110002489",
    "new": "110002454"
  },
  {
    "old": "1110002488",
    "new": "110002453"
  },
  {
    "old": "1110002487",
    "new": "110002452"
  },
  {
    "old": "1110002486",
    "new": "110002451"
  },
  {
    "old": "1110002485",
    "new": "110002450"
  },
  {
    "old": "1110002484",
    "new": "110002449"
  },
  {
    "old": "1110002483",
    "new": "110002448"
  },
  {
    "old": "1110002482",
    "new": "110002447"
  },
  {
    "old": "1110002481",
    "new": "110002446"
  },
  {
    "old": "1110002480",
    "new": "110002445"
  },
  {
    "old": "1110002479",
    "new": "110002444"
  },
  {
    "old": "1110002478",
    "new": "110002443"
  },
  {
    "old": "1110002477",
    "new": "110002442"
  },
  {
    "old": "1110002476",
    "new": "110002441"
  },
  {
    "old": "1110002475",
    "new": "110002440"
  },
  {
    "old": "1110002474",
    "new": "110002439"
  },
  {
    "old": "1110002473",
    "new": "110002438"
  },
  {
    "old": "1110002472",
    "new": "110002437"
  },
  {
    "old": "1110002471",
    "new": "110002436"
  },
  {
    "old": "1110002470",
    "new": "110002435"
  },
  {
    "old": "1110002469",
    "new": "110002434"
  },
  {
    "old": "1110002468",
    "new": "110002433"
  },
  {
    "old": "1110002467",
    "new": "110002432"
  },
  {
    "old": "1110002466",
    "new": "110002431"
  },
  {
    "old": "1110002465",
    "new": "110002430"
  },
  {
    "old": "1110002464",
    "new": "110002429"
  },
  {
    "old": "1110002463",
    "new": "110002428"
  },
  {
    "old": "1110002462",
    "new": "110002427"
  },
  {
    "old": "1110002461",
    "new": "110002426"
  },
  {
    "old": "1110002460",
    "new": "110002425"
  },
  {
    "old": "1110002459",
    "new": "110002424"
  },
  {
    "old": "1110002458",
    "new": "110002423"
  },
  {
    "old": "1110002457",
    "new": "110002422"
  },
  {
    "old": "1110002456",
    "new": "110002421"
  },
  {
    "old": "1110002455",
    "new": "110002420"
  },
  {
    "old": "1110002454",
    "new": "110002419"
  },
  {
    "old": "1110002453",
    "new": "110002418"
  },
  {
    "old": "1110002452",
    "new": "110002417"
  },
  {
    "old": "1110002451",
    "new": "110002416"
  },
  {
    "old": "1110002450",
    "new": "110002415"
  },
  {
    "old": "1110002449",
    "new": "110002414"
  },
  {
    "old": "1110002448",
    "new": "110002413"
  },
  {
    "old": "1110002447",
    "new": "110002412"
  },
  {
    "old": "1110002446",
    "new": "110002411"
  },
  {
    "old": "1110002445",
    "new": "110002410"
  },
  {
    "old": "1110002444",
    "new": "110002409"
  },
  {
    "old": "1110002443",
    "new": "110002408"
  },
  {
    "old": "1110002442",
    "new": "110002407"
  },
  {
    "old": "1110002441",
    "new": "110002406"
  },
  {
    "old": "1110002440",
    "new": "110002405"
  },
  {
    "old": "1110002439",
    "new": "110002404"
  },
  {
    "old": "1110002438",
    "new": "110002403"
  },
  {
    "old": "1110002437",
    "new": "110002402"
  },
  {
    "old": "1110002436",
    "new": "110002401"
  },
  {
    "old": "1110002435",
    "new": "110002400"
  },
  {
    "old": "1110002434",
    "new": "110002399"
  },
  {
    "old": "1110002433",
    "new": "110002398"
  },
  {
    "old": "1110002432",
    "new": "110002397"
  },
  {
    "old": "1110002431",
    "new": "110002396"
  },
  {
    "old": "1110002430",
    "new": "110002395"
  },
  {
    "old": "1110002429",
    "new": "110002394"
  },
  {
    "old": "1110002428",
    "new": "110002393"
  },
  {
    "old": "1110002427",
    "new": "110002392"
  },
  {
    "old": "1110002426",
    "new": "110002391"
  },
  {
    "old": "1110002425",
    "new": "110002390"
  },
  {
    "old": "1110002424",
    "new": "110002389"
  },
  {
    "old": "1110002423",
    "new": "110002388"
  },
  {
    "old": "1110002422",
    "new": "110002387"
  },
  {
    "old": "1110002421",
    "new": "110002386"
  },
  {
    "old": "1110002420",
    "new": "110002385"
  },
  {
    "old": "1110002419",
    "new": "110002384"
  },
  {
    "old": "1110002418",
    "new": "110002383"
  },
  {
    "old": "1110002417",
    "new": "110002382"
  },
  {
    "old": "1110002416",
    "new": "110002381"
  },
  {
    "old": "1110002415",
    "new": "110002380"
  },
  {
    "old": "1110002414",
    "new": "110002379"
  },
  {
    "old": "1110002413",
    "new": "110002378"
  },
  {
    "old": "1110002412",
    "new": "110002377"
  },
  {
    "old": "1110002411",
    "new": "110002376"
  },
  {
    "old": "1110002410",
    "new": "110002375"
  },
  {
    "old": "1110002409",
    "new": "110002374"
  },
  {
    "old": "1110002408",
    "new": "110002373"
  },
  {
    "old": "1110002407",
    "new": "110002372"
  },
  {
    "old": "1110002406",
    "new": "110002371"
  },
  {
    "old": "1110002405",
    "new": "110002370"
  },
  {
    "old": "1110002404",
    "new": "110002369"
  },
  {
    "old": "1110002403",
    "new": "110002368"
  },
  {
    "old": "1110002402",
    "new": "110002367"
  },
  {
    "old": "1110002401",
    "new": "110002366"
  },
  {
    "old": "1110002400",
    "new": "110002365"
  },
  {
    "old": "1110002399",
    "new": "110002364"
  },
  {
    "old": "1110002398",
    "new": "110002363"
  },
  {
    "old": "1110002397",
    "new": "110002362"
  },
  {
    "old": "1110002396",
    "new": "110002361"
  },
  {
    "old": "1110002395",
    "new": "110002360"
  },
  {
    "old": "1110002394",
    "new": "110002359"
  },
  {
    "old": "1110002393",
    "new": "110002358"
  },
  {
    "old": "1110002392",
    "new": "110002357"
  },
  {
    "old": "1110002391",
    "new": "110002356"
  },
  {
    "old": "1110002390",
    "new": "110002355"
  },
  {
    "old": "1110002389",
    "new": "110002354"
  },
  {
    "old": "1110002388",
    "new": "110002353"
  },
  {
    "old": "1110002387",
    "new": "110002352"
  },
  {
    "old": "1110002386",
    "new": "110002351"
  },
  {
    "old": "1110002385",
    "new": "110002350"
  },
  {
    "old": "1110002384",
    "new": "110002349"
  },
  {
    "old": "1110002383",
    "new": "110002348"
  },
  {
    "old": "1110002382",
    "new": "110002347"
  },
  {
    "old": "1110002381",
    "new": "110002346"
  },
  {
    "old": "1110002380",
    "new": "110002345"
  },
  {
    "old": "1110002379",
    "new": "110002344"
  },
  {
    "old": "1110002378",
    "new": "110002343"
  },
  {
    "old": "1110002377",
    "new": "110002342"
  },
  {
    "old": "1110002376",
    "new": "110002341"
  },
  {
    "old": "1110002375",
    "new": "110002340"
  },
  {
    "old": "1110002374",
    "new": "110002339"
  },
  {
    "old": "1110002373",
    "new": "110002338"
  },
  {
    "old": "1110002372",
    "new": "110002337"
  },
  {
    "old": "1110002371",
    "new": "110002336"
  },
  {
    "old": "1110002370",
    "new": "110002335"
  },
  {
    "old": "1110002369",
    "new": "110002334"
  },
  {
    "old": "1110002368",
    "new": "110002333"
  },
  {
    "old": "1110002367",
    "new": "110002332"
  },
  {
    "old": "1110002366",
    "new": "110002331"
  },
  {
    "old": "1110002365",
    "new": "110002330"
  },
  {
    "old": "1110002364",
    "new": "110002329"
  },
  {
    "old": "1110002363",
    "new": "110002328"
  },
  {
    "old": "1110002362",
    "new": "110002327"
  },
  {
    "old": "1110002361",
    "new": "110002326"
  },
  {
    "old": "1110002360",
    "new": "110002325"
  },
  {
    "old": "1110002359",
    "new": "110002324"
  },
  {
    "old": "1110002358",
    "new": "110002323"
  },
  {
    "old": "1110002357",
    "new": "110002322"
  },
  {
    "old": "1110002356",
    "new": "110002321"
  },
  {
    "old": "1110002355",
    "new": "110002320"
  },
  {
    "old": "1110002354",
    "new": "110002319"
  },
  {
    "old": "1110002353",
    "new": "110002318"
  },
  {
    "old": "1110002352",
    "new": "110002317"
  },
  {
    "old": "1110002351",
    "new": "110002316"
  },
  {
    "old": "1110002350",
    "new": "110002315"
  },
  {
    "old": "1110002349",
    "new": "110002314"
  },
  {
    "old": "1110002344",
    "new": "110002313"
  },
  {
    "old": "1110002343",
    "new": "110002312"
  },
  {
    "old": "1110002342",
    "new": "110002311"
  },
  {
    "old": "1110002341",
    "new": "110002310"
  },
  {
    "old": "1110002340",
    "new": "110002309"
  },
  {
    "old": "1110002339",
    "new": "110002308"
  },
  {
    "old": "1110002338",
    "new": "110002307"
  },
  {
    "old": "1110002337",
    "new": "110002306"
  },
  {
    "old": "1110002336",
    "new": "110002305"
  },
  {
    "old": "1110002335",
    "new": "110002304"
  },
  {
    "old": "1110002334",
    "new": "110002303"
  },
  {
    "old": "1110002333",
    "new": "110002302"
  },
  {
    "old": "1110002332",
    "new": "110002301"
  },
  {
    "old": "1110002331",
    "new": "110002300"
  },
  {
    "old": "1110002330",
    "new": "110002299"
  },
  {
    "old": "1110002329",
    "new": "110002298"
  },
  {
    "old": "1110002328",
    "new": "110002297"
  },
  {
    "old": "1110002327",
    "new": "110002296"
  },
  {
    "old": "1110002326",
    "new": "110002295"
  },
  {
    "old": "1110002325",
    "new": "110002294"
  },
  {
    "old": "1110002324",
    "new": "110002293"
  },
  {
    "old": "1110002323",
    "new": "110002292"
  },
  {
    "old": "1110002322",
    "new": "110002291"
  },
  {
    "old": "1110002321",
    "new": "110002290"
  },
  {
    "old": "1110002320",
    "new": "110002289"
  },
  {
    "old": "1110002319",
    "new": "110002288"
  },
  {
    "old": "1110002318",
    "new": "110002287"
  },
  {
    "old": "1110002317",
    "new": "110002286"
  },
  {
    "old": "1110002316",
    "new": "110002285"
  },
  {
    "old": "1110002315",
    "new": "110002284"
  },
  {
    "old": "1110002314",
    "new": "110002283"
  },
  {
    "old": "1110002313",
    "new": "110002282"
  },
  {
    "old": "1110002312",
    "new": "110002281"
  },
  {
    "old": "1110002311",
    "new": "110002280"
  },
  {
    "old": "1110002310",
    "new": "110002279"
  },
  {
    "old": "1110002309",
    "new": "110002278"
  },
  {
    "old": "1110002308",
    "new": "110002277"
  },
  {
    "old": "1110002307",
    "new": "110002276"
  },
  {
    "old": "1110002306",
    "new": "110002275"
  },
  {
    "old": "1110002305",
    "new": "110002274"
  },
  {
    "old": "1110002304",
    "new": "110002273"
  },
  {
    "old": "1110002303",
    "new": "110002272"
  },
  {
    "old": "1110002302",
    "new": "110002271"
  },
  {
    "old": "1110002301",
    "new": "110002270"
  },
  {
    "old": "1110002300",
    "new": "110002269"
  },
  {
    "old": "1110002299",
    "new": "110002268"
  },
  {
    "old": "1110002298",
    "new": "110002267"
  },
  {
    "old": "1110002297",
    "new": "110002266"
  },
  {
    "old": "1110002296",
    "new": "110002265"
  },
  {
    "old": "1110002295",
    "new": "110002264"
  },
  {
    "old": "1110002294",
    "new": "110002263"
  },
  {
    "old": "1110002293",
    "new": "110002262"
  },
  {
    "old": "1110002292",
    "new": "110002261"
  },
  {
    "old": "1110002291",
    "new": "110002260"
  },
  {
    "old": "1110002290",
    "new": "110002259"
  },
  {
    "old": "1110002289",
    "new": "110002258"
  },
  {
    "old": "1110002288",
    "new": "110002257"
  },
  {
    "old": "1110002287",
    "new": "110002256"
  },
  {
    "old": "1110002286",
    "new": "110002255"
  },
  {
    "old": "1110002285",
    "new": "110002254"
  },
  {
    "old": "1110002284",
    "new": "110002253"
  },
  {
    "old": "1110002283",
    "new": "110002252"
  },
  {
    "old": "1110002282",
    "new": "110002251"
  },
  {
    "old": "1110002281",
    "new": "110002250"
  },
  {
    "old": "1110002280",
    "new": "110002249"
  },
  {
    "old": "1110002279",
    "new": "110002248"
  },
  {
    "old": "1110002278",
    "new": "110002247"
  },
  {
    "old": "1110002277",
    "new": "110002246"
  },
  {
    "old": "1110002276",
    "new": "110002245"
  },
  {
    "old": "1110002275",
    "new": "110002244"
  },
  {
    "old": "1110002274",
    "new": "110002243"
  },
  {
    "old": "1110002273",
    "new": "110002242"
  },
  {
    "old": "1110002272",
    "new": "110002241"
  },
  {
    "old": "1110002271",
    "new": "110002240"
  },
  {
    "old": "1110002270",
    "new": "110002239"
  },
  {
    "old": "1110002269",
    "new": "110002238"
  },
  {
    "old": "1110002268",
    "new": "110002237"
  },
  {
    "old": "1110002267",
    "new": "110002236"
  },
  {
    "old": "1110002266",
    "new": "110002235"
  },
  {
    "old": "1110002265",
    "new": "110002234"
  },
  {
    "old": "1110002264",
    "new": "110002233"
  },
  {
    "old": "1110002263",
    "new": "110002232"
  },
  {
    "old": "1110002262",
    "new": "110002231"
  },
  {
    "old": "1110002261",
    "new": "110002230"
  },
  {
    "old": "1110002260",
    "new": "110002229"
  },
  {
    "old": "1110002259",
    "new": "110002228"
  },
  {
    "old": "1110002258",
    "new": "110002227"
  },
  {
    "old": "1110002257",
    "new": "110002226"
  },
  {
    "old": "1110002256",
    "new": "110002225"
  },
  {
    "old": "1110002255",
    "new": "110002224"
  },
  {
    "old": "1110002254",
    "new": "110002223"
  },
  {
    "old": "1110002253",
    "new": "110002222"
  },
  {
    "old": "1110002252",
    "new": "110002221"
  },
  {
    "old": "1110002251",
    "new": "110002220"
  },
  {
    "old": "1110002250",
    "new": "110002219"
  },
  {
    "old": "1110002249",
    "new": "110002218"
  },
  {
    "old": "1110002248",
    "new": "110002217"
  },
  {
    "old": "1110002247",
    "new": "110002216"
  },
  {
    "old": "1110002246",
    "new": "110002215"
  },
  {
    "old": "1110002245",
    "new": "110002214"
  },
  {
    "old": "1110002244",
    "new": "110002213"
  },
  {
    "old": "1110002243",
    "new": "110002212"
  },
  {
    "old": "1110002242",
    "new": "110002211"
  },
  {
    "old": "1110002241",
    "new": "110002210"
  },
  {
    "old": "1110002240",
    "new": "110002209"
  },
  {
    "old": "1110002239",
    "new": "110002208"
  },
  {
    "old": "1110002238",
    "new": "110002207"
  },
  {
    "old": "1110002237",
    "new": "110002206"
  },
  {
    "old": "1110002236",
    "new": "110002205"
  },
  {
    "old": "1110002235",
    "new": "110002204"
  },
  {
    "old": "1110002234",
    "new": "110002203"
  },
  {
    "old": "1110002233",
    "new": "110002202"
  },
  {
    "old": "1110002232",
    "new": "110002201"
  },
  {
    "old": "1110002231",
    "new": "110002200"
  },
  {
    "old": "1110002230",
    "new": "110002199"
  },
  {
    "old": "1110002229",
    "new": "110002198"
  },
  {
    "old": "1110002228",
    "new": "110002197"
  },
  {
    "old": "1110002227",
    "new": "110002196"
  },
  {
    "old": "1110002226",
    "new": "110002195"
  },
  {
    "old": "1110002225",
    "new": "110002194"
  },
  {
    "old": "1110002224",
    "new": "110002193"
  },
  {
    "old": "1110002223",
    "new": "110002192"
  },
  {
    "old": "1110002222",
    "new": "110002191"
  },
  {
    "old": "1110002221",
    "new": "110002190"
  },
  {
    "old": "1110002220",
    "new": "110002189"
  },
  {
    "old": "1110002219",
    "new": "110002188"
  },
  {
    "old": "1110002218",
    "new": "110002187"
  },
  {
    "old": "1110002217",
    "new": "110002186"
  },
  {
    "old": "1110002216",
    "new": "110002185"
  },
  {
    "old": "1110002215",
    "new": "110002184"
  },
  {
    "old": "1110002214",
    "new": "110002183"
  },
  {
    "old": "1110002213",
    "new": "110002182"
  },
  {
    "old": "1110002212",
    "new": "110002181"
  },
  {
    "old": "1110002211",
    "new": "110002180"
  },
  {
    "old": "1110002210",
    "new": "110002179"
  },
  {
    "old": "1110002209",
    "new": "110002178"
  },
  {
    "old": "1110002208",
    "new": "110002177"
  },
  {
    "old": "1110002207",
    "new": "110002176"
  },
  {
    "old": "1110002206",
    "new": "110002175"
  },
  {
    "old": "1110002205",
    "new": "110002174"
  },
  {
    "old": "1110002204",
    "new": "110002173"
  },
  {
    "old": "1110002203",
    "new": "110002172"
  },
  {
    "old": "1110002202",
    "new": "110002171"
  },
  {
    "old": "1110002201",
    "new": "110002170"
  },
  {
    "old": "1110002200",
    "new": "110002169"
  },
  {
    "old": "1110002199",
    "new": "110002168"
  },
  {
    "old": "1110002198",
    "new": "110002167"
  },
  {
    "old": "1110002197",
    "new": "110002166"
  },
  {
    "old": "1110002196",
    "new": "110002165"
  },
  {
    "old": "1110002195",
    "new": "110002164"
  },
  {
    "old": "1110002194",
    "new": "110002163"
  },
  {
    "old": "1110002193",
    "new": "110002162"
  },
  {
    "old": "1110002192",
    "new": "110002161"
  },
  {
    "old": "1110002191",
    "new": "110002160"
  },
  {
    "old": "1110002190",
    "new": "110002159"
  },
  {
    "old": "1110002189",
    "new": "110002158"
  },
  {
    "old": "1110002188",
    "new": "110002157"
  },
  {
    "old": "1110002187",
    "new": "110002156"
  },
  {
    "old": "1110002186",
    "new": "110002155"
  },
  {
    "old": "1110002185",
    "new": "110002154"
  },
  {
    "old": "1110002184",
    "new": "110002153"
  },
  {
    "old": "1110002183",
    "new": "110002152"
  },
  {
    "old": "1110002182",
    "new": "110002151"
  },
  {
    "old": "1110002181",
    "new": "110002150"
  },
  {
    "old": "1110002180",
    "new": "110002149"
  },
  {
    "old": "1110002179",
    "new": "110002148"
  },
  {
    "old": "1110002178",
    "new": "110002147"
  },
  {
    "old": "1110002177",
    "new": "110002146"
  },
  {
    "old": "1110002176",
    "new": "110002145"
  },
  {
    "old": "1110002175",
    "new": "110002144"
  },
  {
    "old": "1110002174",
    "new": "110002143"
  },
  {
    "old": "1110002173",
    "new": "110002142"
  },
  {
    "old": "1110002172",
    "new": "110002141"
  },
  {
    "old": "1110002171",
    "new": "110002140"
  },
  {
    "old": "1110002170",
    "new": "110002139"
  },
  {
    "old": "1110002169",
    "new": "110002138"
  },
  {
    "old": "1110002168",
    "new": "110002137"
  },
  {
    "old": "1110002167",
    "new": "110002136"
  },
  {
    "old": "1110002166",
    "new": "110002135"
  },
  {
    "old": "1110002165",
    "new": "110002134"
  },
  {
    "old": "1110002164",
    "new": "110002133"
  },
  {
    "old": "1110002163",
    "new": "110002132"
  },
  {
    "old": "1110002162",
    "new": "110002131"
  },
  {
    "old": "1110002161",
    "new": "110002130"
  },
  {
    "old": "1110002160",
    "new": "110002129"
  },
  {
    "old": "1110002159",
    "new": "110002128"
  },
  {
    "old": "1110002158",
    "new": "110002127"
  },
  {
    "old": "1110002157",
    "new": "110002126"
  },
  {
    "old": "1110002155",
    "new": "110002125"
  },
  {
    "old": "1110002154",
    "new": "110002124"
  },
  {
    "old": "1110002153",
    "new": "110002123"
  },
  {
    "old": "1110002152",
    "new": "110002122"
  },
  {
    "old": "1110002151",
    "new": "110002121"
  },
  {
    "old": "1110002150",
    "new": "110002120"
  },
  {
    "old": "1110002149",
    "new": "110002119"
  },
  {
    "old": "1110002148",
    "new": "110002118"
  },
  {
    "old": "1110002147",
    "new": "110002117"
  },
  {
    "old": "1110002146",
    "new": "110002116"
  },
  {
    "old": "1110002145",
    "new": "110002115"
  },
  {
    "old": "1110002144",
    "new": "110002114"
  },
  {
    "old": "1110002143",
    "new": "110002113"
  },
  {
    "old": "1110002141",
    "new": "110002112"
  },
  {
    "old": "1110002140",
    "new": "110002111"
  },
  {
    "old": "1110002139",
    "new": "110002110"
  },
  {
    "old": "1110002138",
    "new": "110002109"
  },
  {
    "old": "1110002137",
    "new": "110002108"
  },
  {
    "old": "1110002136",
    "new": "110002107"
  },
  {
    "old": "1110002135",
    "new": "110002106"
  },
  {
    "old": "1110002134",
    "new": "110002105"
  },
  {
    "old": "1110002133",
    "new": "110002104"
  },
  {
    "old": "1110002132",
    "new": "110002103"
  },
  {
    "old": "1110002131",
    "new": "110002102"
  },
  {
    "old": "1110002130",
    "new": "110002101"
  },
  {
    "old": "1110002129",
    "new": "110002100"
  },
  {
    "old": "1110002128",
    "new": "110002099"
  },
  {
    "old": "1110002127",
    "new": "110002098"
  },
  {
    "old": "1110002126",
    "new": "110002097"
  },
  {
    "old": "1110002125",
    "new": "110002096"
  },
  {
    "old": "1110002124",
    "new": "110002095"
  },
  {
    "old": "1110002123",
    "new": "110002094"
  },
  {
    "old": "1110002122",
    "new": "110002093"
  },
  {
    "old": "1110002121",
    "new": "110002092"
  },
  {
    "old": "1110002120",
    "new": "110002091"
  },
  {
    "old": "1110002119",
    "new": "110002090"
  },
  {
    "old": "1110002118",
    "new": "110002089"
  },
  {
    "old": "1110002117",
    "new": "110002088"
  },
  {
    "old": "1110002116",
    "new": "110002087"
  },
  {
    "old": "1110002115",
    "new": "110002086"
  },
  {
    "old": "1110002114",
    "new": "110002085"
  },
  {
    "old": "1110002113",
    "new": "110002084"
  },
  {
    "old": "1110002112",
    "new": "110002083"
  },
  {
    "old": "1110002111",
    "new": "110002082"
  },
  {
    "old": "1110002110",
    "new": "110002081"
  },
  {
    "old": "1110002109",
    "new": "110002080"
  },
  {
    "old": "1110002108",
    "new": "110002079"
  },
  {
    "old": "1110002107",
    "new": "110002078"
  },
  {
    "old": "1110002106",
    "new": "110002077"
  },
  {
    "old": "1110002105",
    "new": "110002076"
  },
  {
    "old": "1110002104",
    "new": "110002075"
  },
  {
    "old": "1110002103",
    "new": "110002074"
  },
  {
    "old": "1110002102",
    "new": "110002073"
  },
  {
    "old": "1110002101",
    "new": "110002072"
  },
  {
    "old": "1110002100",
    "new": "110002071"
  },
  {
    "old": "1110002099",
    "new": "110002070"
  },
  {
    "old": "1110002098",
    "new": "110002069"
  },
  {
    "old": "1110002097",
    "new": "110002068"
  },
  {
    "old": "1110002096",
    "new": "110002067"
  },
  {
    "old": "1110002095",
    "new": "110002066"
  },
  {
    "old": "1110002094",
    "new": "110002065"
  },
  {
    "old": "1110002093",
    "new": "110002064"
  },
  {
    "old": "1110002092",
    "new": "110002063"
  },
  {
    "old": "1110002091",
    "new": "110002062"
  },
  {
    "old": "1110002090",
    "new": "110002061"
  },
  {
    "old": "1110002089",
    "new": "110002060"
  },
  {
    "old": "1110002088",
    "new": "110002059"
  },
  {
    "old": "1110002087",
    "new": "110002058"
  },
  {
    "old": "1110002086",
    "new": "110002057"
  },
  {
    "old": "1110002085",
    "new": "110002056"
  },
  {
    "old": "1110002084",
    "new": "110002055"
  },
  {
    "old": "1110002083",
    "new": "110002054"
  },
  {
    "old": "1110002082",
    "new": "110002053"
  },
  {
    "old": "1110002081",
    "new": "110002052"
  },
  {
    "old": "1110002080",
    "new": "110002051"
  },
  {
    "old": "1110002079",
    "new": "110002050"
  },
  {
    "old": "1110002078",
    "new": "110002049"
  },
  {
    "old": "1110002077",
    "new": "110002048"
  },
  {
    "old": "1110002076",
    "new": "110002047"
  },
  {
    "old": "1110002075",
    "new": "110002046"
  },
  {
    "old": "1110002074",
    "new": "110002045"
  },
  {
    "old": "1110002073",
    "new": "110002044"
  },
  {
    "old": "1110002072",
    "new": "110002043"
  },
  {
    "old": "1110002071",
    "new": "110002042"
  },
  {
    "old": "1110002070",
    "new": "110002041"
  },
  {
    "old": "1110002069",
    "new": "110002040"
  },
  {
    "old": "1110002068",
    "new": "110002039"
  },
  {
    "old": "1110002067",
    "new": "110002038"
  },
  {
    "old": "1110002066",
    "new": "110002037"
  },
  {
    "old": "1110002065",
    "new": "110002036"
  },
  {
    "old": "1110002064",
    "new": "110002035"
  },
  {
    "old": "1110002063",
    "new": "110002034"
  },
  {
    "old": "1110002062",
    "new": "110002033"
  },
  {
    "old": "1110002061",
    "new": "110002032"
  },
  {
    "old": "1110002060",
    "new": "110002031"
  },
  {
    "old": "1110002059",
    "new": "110002030"
  },
  {
    "old": "1110002058",
    "new": "110002029"
  },
  {
    "old": "1110002057",
    "new": "110002028"
  },
  {
    "old": "1110002056",
    "new": "110002027"
  },
  {
    "old": "1110002055",
    "new": "110002026"
  },
  {
    "old": "1110002054",
    "new": "110002025"
  },
  {
    "old": "1110002053",
    "new": "110002024"
  },
  {
    "old": "1110002052",
    "new": "110002023"
  },
  {
    "old": "1110002051",
    "new": "110002022"
  },
  {
    "old": "1110002050",
    "new": "110002021"
  },
  {
    "old": "1110002049",
    "new": "110002020"
  },
  {
    "old": "1110002048",
    "new": "110002019"
  },
  {
    "old": "1110002047",
    "new": "110002018"
  },
  {
    "old": "1110002046",
    "new": "110002017"
  },
  {
    "old": "1110002045",
    "new": "110002016"
  },
  {
    "old": "1110002044",
    "new": "110002015"
  },
  {
    "old": "1110002043",
    "new": "110002014"
  },
  {
    "old": "1110002042",
    "new": "110002013"
  },
  {
    "old": "1110002041",
    "new": "110002012"
  },
  {
    "old": "1110002040",
    "new": "110002011"
  },
  {
    "old": "1110002039",
    "new": "110002010"
  },
  {
    "old": "1110002038",
    "new": "110002009"
  },
  {
    "old": "1110002037",
    "new": "110002008"
  },
  {
    "old": "1110002036",
    "new": "110002007"
  },
  {
    "old": "1110002035",
    "new": "110002006"
  },
  {
    "old": "1110002034",
    "new": "110002005"
  },
  {
    "old": "1110002033",
    "new": "110002004"
  },
  {
    "old": "1110002032",
    "new": "110002003"
  },
  {
    "old": "1110002031",
    "new": "110002002"
  },
  {
    "old": "1110002030",
    "new": "110002001"
  },
  {
    "old": "1110002029",
    "new": "110002000"
  },
  {
    "old": "1110002028",
    "new": "110001999"
  },
  {
    "old": "1110002023",
    "new": "110001998"
  },
  {
    "old": "1110002022",
    "new": "110001997"
  },
  {
    "old": "1110002021",
    "new": "110001996"
  },
  {
    "old": "1110002020",
    "new": "110001995"
  },
  {
    "old": "1110002018",
    "new": "110001994"
  },
  {
    "old": "1110002017",
    "new": "110001993"
  },
  {
    "old": "1110002016",
    "new": "110001992"
  },
  {
    "old": "1110002015",
    "new": "110001991"
  },
  {
    "old": "1110002014",
    "new": "110001990"
  },
  {
    "old": "1110002013",
    "new": "110001989"
  },
  {
    "old": "1110002012",
    "new": "110001988"
  },
  {
    "old": "1110002011",
    "new": "110001987"
  },
  {
    "old": "1110002010",
    "new": "110001986"
  },
  {
    "old": "1110002009",
    "new": "110001985"
  },
  {
    "old": "1110002008",
    "new": "110001984"
  },
  {
    "old": "1110002007",
    "new": "110001983"
  },
  {
    "old": "1110002006",
    "new": "110001982"
  },
  {
    "old": "1110002005",
    "new": "110001981"
  },
  {
    "old": "1110002004",
    "new": "110001980"
  },
  {
    "old": "1110002003",
    "new": "110001979"
  },
  {
    "old": "1110002002",
    "new": "110001978"
  },
  {
    "old": "1110002001",
    "new": "110001977"
  },
  {
    "old": "1110002000",
    "new": "110001976"
  },
  {
    "old": "1110001999",
    "new": "110001975"
  },
  {
    "old": "1110001998",
    "new": "110001974"
  },
  {
    "old": "1110001997",
    "new": "110001973"
  },
  {
    "old": "1110001996",
    "new": "110001972"
  },
  {
    "old": "1110001995",
    "new": "110001971"
  },
  {
    "old": "1110001994",
    "new": "110001970"
  },
  {
    "old": "1110001993",
    "new": "110001969"
  },
  {
    "old": "1110001992",
    "new": "110001968"
  },
  {
    "old": "1110001991",
    "new": "110001967"
  },
  {
    "old": "1110001990",
    "new": "110001966"
  },
  {
    "old": "1110001989",
    "new": "110001965"
  },
  {
    "old": "1110001988",
    "new": "110001964"
  },
  {
    "old": "1110001987",
    "new": "110001963"
  },
  {
    "old": "1110001986",
    "new": "110001962"
  },
  {
    "old": "1110001985",
    "new": "110001961"
  },
  {
    "old": "1110001984",
    "new": "110001960"
  },
  {
    "old": "1110001983",
    "new": "110001959"
  },
  {
    "old": "1110001982",
    "new": "110001958"
  },
  {
    "old": "1110001981",
    "new": "110001957"
  },
  {
    "old": "1110001980",
    "new": "110001956"
  },
  {
    "old": "1110001979",
    "new": "110001955"
  },
  {
    "old": "1110001978",
    "new": "110001954"
  },
  {
    "old": "1110001977",
    "new": "110001953"
  },
  {
    "old": "1110001976",
    "new": "110001952"
  },
  {
    "old": "1110001975",
    "new": "110001951"
  },
  {
    "old": "1110001974",
    "new": "110001950"
  },
  {
    "old": "1110001973",
    "new": "110001949"
  },
  {
    "old": "1110001972",
    "new": "110001948"
  },
  {
    "old": "1110001971",
    "new": "110001947"
  },
  {
    "old": "1110001970",
    "new": "110001946"
  },
  {
    "old": "1110001969",
    "new": "110001945"
  },
  {
    "old": "1110001968",
    "new": "110001944"
  },
  {
    "old": "1110001967",
    "new": "110001943"
  },
  {
    "old": "1110001966",
    "new": "110001942"
  },
  {
    "old": "1110001965",
    "new": "110001941"
  },
  {
    "old": "1110001964",
    "new": "110001940"
  },
  {
    "old": "1110001963",
    "new": "110001939"
  },
  {
    "old": "1110001962",
    "new": "110001938"
  },
  {
    "old": "1110001961",
    "new": "110001937"
  },
  {
    "old": "1110001960",
    "new": "110001936"
  },
  {
    "old": "1110001959",
    "new": "110001935"
  },
  {
    "old": "1110001958",
    "new": "110001934"
  },
  {
    "old": "1110001957",
    "new": "110001933"
  },
  {
    "old": "1110001956",
    "new": "110001932"
  },
  {
    "old": "1110001955",
    "new": "110001931"
  },
  {
    "old": "1110001954",
    "new": "110001930"
  },
  {
    "old": "1110001953",
    "new": "110001929"
  },
  {
    "old": "1110001952",
    "new": "110001928"
  },
  {
    "old": "1110001951",
    "new": "110001927"
  },
  {
    "old": "1110001950",
    "new": "110001926"
  },
  {
    "old": "1110001949",
    "new": "110001925"
  },
  {
    "old": "1110001948",
    "new": "110001924"
  },
  {
    "old": "1110001947",
    "new": "110001923"
  },
  {
    "old": "1110001946",
    "new": "110001922"
  },
  {
    "old": "1110001945",
    "new": "110001921"
  },
  {
    "old": "1110001944",
    "new": "110001920"
  },
  {
    "old": "1110001943",
    "new": "110001919"
  },
  {
    "old": "1110001942",
    "new": "110001918"
  },
  {
    "old": "1110001941",
    "new": "110001917"
  },
  {
    "old": "1110001940",
    "new": "110001916"
  },
  {
    "old": "1110001939",
    "new": "110001915"
  },
  {
    "old": "1110001938",
    "new": "110001914"
  },
  {
    "old": "1110001937",
    "new": "110001913"
  },
  {
    "old": "1110001936",
    "new": "110001912"
  },
  {
    "old": "1110001935",
    "new": "110001911"
  },
  {
    "old": "1110001934",
    "new": "110001910"
  },
  {
    "old": "1110001933",
    "new": "110001909"
  },
  {
    "old": "1110001932",
    "new": "110001908"
  },
  {
    "old": "1110001931",
    "new": "110001907"
  },
  {
    "old": "1110001930",
    "new": "110001906"
  },
  {
    "old": "1110001929",
    "new": "110001905"
  },
  {
    "old": "1110001928",
    "new": "110001904"
  },
  {
    "old": "1110001927",
    "new": "110001903"
  },
  {
    "old": "1110001926",
    "new": "110001902"
  },
  {
    "old": "1110001925",
    "new": "110001901"
  },
  {
    "old": "1110001924",
    "new": "110001900"
  },
  {
    "old": "1110001923",
    "new": "110001899"
  },
  {
    "old": "1110001922",
    "new": "110001898"
  },
  {
    "old": "1110001921",
    "new": "110001897"
  },
  {
    "old": "1110001920",
    "new": "110001896"
  },
  {
    "old": "1110001919",
    "new": "110001895"
  },
  {
    "old": "1110001918",
    "new": "110001894"
  },
  {
    "old": "1110001917",
    "new": "110001893"
  },
  {
    "old": "1110001916",
    "new": "110001892"
  },
  {
    "old": "1110001915",
    "new": "110001891"
  },
  {
    "old": "1110001914",
    "new": "110001890"
  },
  {
    "old": "1110001913",
    "new": "110001889"
  },
  {
    "old": "1110001912",
    "new": "110001888"
  },
  {
    "old": "1110001911",
    "new": "110001887"
  },
  {
    "old": "1110001910",
    "new": "110001886"
  },
  {
    "old": "1110001909",
    "new": "110001885"
  },
  {
    "old": "1110001908",
    "new": "110001884"
  },
  {
    "old": "1110001907",
    "new": "110001883"
  },
  {
    "old": "1110001906",
    "new": "110001882"
  },
  {
    "old": "1110001905",
    "new": "110001881"
  },
  {
    "old": "1110001904",
    "new": "110001880"
  },
  {
    "old": "1110001903",
    "new": "110001879"
  },
  {
    "old": "1110001902",
    "new": "110001878"
  },
  {
    "old": "1110001901",
    "new": "110001877"
  },
  {
    "old": "1110001900",
    "new": "110001876"
  },
  {
    "old": "1110001899",
    "new": "110001875"
  },
  {
    "old": "1110001898",
    "new": "110001874"
  },
  {
    "old": "1110001897",
    "new": "110001873"
  },
  {
    "old": "1110001896",
    "new": "110001872"
  },
  {
    "old": "1110001895",
    "new": "110001871"
  },
  {
    "old": "1110001894",
    "new": "110001870"
  },
  {
    "old": "1110001893",
    "new": "110001869"
  },
  {
    "old": "1110001892",
    "new": "110001868"
  },
  {
    "old": "1110001891",
    "new": "110001867"
  },
  {
    "old": "1110001890",
    "new": "110001866"
  },
  {
    "old": "1110001889",
    "new": "110001865"
  },
  {
    "old": "1110001888",
    "new": "110001864"
  },
  {
    "old": "1110001887",
    "new": "110001863"
  },
  {
    "old": "1110001886",
    "new": "110001862"
  },
  {
    "old": "1110001885",
    "new": "110001861"
  },
  {
    "old": "1110001884",
    "new": "110001860"
  },
  {
    "old": "1110001883",
    "new": "110001859"
  },
  {
    "old": "1110001882",
    "new": "110001858"
  },
  {
    "old": "1110001881",
    "new": "110001857"
  },
  {
    "old": "1110001880",
    "new": "110001856"
  },
  {
    "old": "1110001879",
    "new": "110001855"
  },
  {
    "old": "1110001878",
    "new": "110001854"
  },
  {
    "old": "1110001877",
    "new": "110001853"
  },
  {
    "old": "1110001876",
    "new": "110001852"
  },
  {
    "old": "1110001875",
    "new": "110001851"
  },
  {
    "old": "1110001874",
    "new": "110001850"
  },
  {
    "old": "1110001873",
    "new": "110001849"
  },
  {
    "old": "1110001872",
    "new": "110001848"
  },
  {
    "old": "1110001871",
    "new": "110001847"
  },
  {
    "old": "1110001870",
    "new": "110001846"
  },
  {
    "old": "1110001869",
    "new": "110001845"
  },
  {
    "old": "1110001868",
    "new": "110001844"
  },
  {
    "old": "1110001867",
    "new": "110001843"
  },
  {
    "old": "1110001866",
    "new": "110001842"
  },
  {
    "old": "1110001865",
    "new": "110001841"
  },
  {
    "old": "1110001864",
    "new": "110001840"
  },
  {
    "old": "1110001863",
    "new": "110001839"
  },
  {
    "old": "1110001862",
    "new": "110001838"
  },
  {
    "old": "1110001861",
    "new": "110001837"
  },
  {
    "old": "1110001860",
    "new": "110001836"
  },
  {
    "old": "1110001859",
    "new": "110001835"
  },
  {
    "old": "1110001858",
    "new": "110001834"
  },
  {
    "old": "1110001857",
    "new": "110001833"
  },
  {
    "old": "1110001856",
    "new": "110001832"
  },
  {
    "old": "1110001855",
    "new": "110001831"
  },
  {
    "old": "1110001854",
    "new": "110001830"
  },
  {
    "old": "1110001853",
    "new": "110001829"
  },
  {
    "old": "1110001852",
    "new": "110001828"
  },
  {
    "old": "1110001851",
    "new": "110001827"
  },
  {
    "old": "1110001850",
    "new": "110001826"
  },
  {
    "old": "1110001849",
    "new": "110001825"
  },
  {
    "old": "1110001848",
    "new": "110001824"
  },
  {
    "old": "1110001847",
    "new": "110001823"
  },
  {
    "old": "1110001846",
    "new": "110001822"
  },
  {
    "old": "1110001845",
    "new": "110001821"
  },
  {
    "old": "1110001844",
    "new": "110001820"
  },
  {
    "old": "1110001843",
    "new": "110001819"
  },
  {
    "old": "1110001842",
    "new": "110001818"
  },
  {
    "old": "1110001841",
    "new": "110001817"
  },
  {
    "old": "1110001840",
    "new": "110001816"
  },
  {
    "old": "1110001839",
    "new": "110001815"
  },
  {
    "old": "1110001838",
    "new": "110001814"
  },
  {
    "old": "1110001837",
    "new": "110001813"
  },
  {
    "old": "1110001836",
    "new": "110001812"
  },
  {
    "old": "1110001835",
    "new": "110001811"
  },
  {
    "old": "1110001834",
    "new": "110001810"
  },
  {
    "old": "1110001833",
    "new": "110001809"
  },
  {
    "old": "1110001832",
    "new": "110001808"
  },
  {
    "old": "1110001831",
    "new": "110001807"
  },
  {
    "old": "1110001830",
    "new": "110001806"
  },
  {
    "old": "1110001829",
    "new": "110001805"
  },
  {
    "old": "1110001828",
    "new": "110001804"
  },
  {
    "old": "1110001827",
    "new": "110001803"
  },
  {
    "old": "1110001826",
    "new": "110001802"
  },
  {
    "old": "1110001825",
    "new": "110001801"
  },
  {
    "old": "1110001824",
    "new": "110001800"
  },
  {
    "old": "1110001823",
    "new": "110001799"
  },
  {
    "old": "1110001822",
    "new": "110001798"
  },
  {
    "old": "1110001821",
    "new": "110001797"
  },
  {
    "old": "1110001820",
    "new": "110001796"
  },
  {
    "old": "1110001819",
    "new": "110001795"
  },
  {
    "old": "1110001818",
    "new": "110001794"
  },
  {
    "old": "1110001817",
    "new": "110001793"
  },
  {
    "old": "1110001816",
    "new": "110001792"
  },
  {
    "old": "1110001815",
    "new": "110001791"
  },
  {
    "old": "1110001814",
    "new": "110001790"
  },
  {
    "old": "1110001813",
    "new": "110001789"
  },
  {
    "old": "1110001812",
    "new": "110001788"
  },
  {
    "old": "1110001811",
    "new": "110001787"
  },
  {
    "old": "1110001810",
    "new": "110001786"
  },
  {
    "old": "1110001809",
    "new": "110001785"
  },
  {
    "old": "1110001808",
    "new": "110001784"
  },
  {
    "old": "1110001807",
    "new": "110001783"
  },
  {
    "old": "1110001806",
    "new": "110001782"
  },
  {
    "old": "1110001805",
    "new": "110001781"
  },
  {
    "old": "1110001804",
    "new": "110001780"
  },
  {
    "old": "1110001803",
    "new": "110001779"
  },
  {
    "old": "1110001802",
    "new": "110001778"
  },
  {
    "old": "1110001801",
    "new": "110001777"
  },
  {
    "old": "1110001800",
    "new": "110001776"
  },
  {
    "old": "1110001799",
    "new": "110001775"
  },
  {
    "old": "1110001798",
    "new": "110001774"
  },
  {
    "old": "1110001797",
    "new": "110001773"
  },
  {
    "old": "1110001796",
    "new": "110001772"
  },
  {
    "old": "1110001795",
    "new": "110001771"
  },
  {
    "old": "1110001794",
    "new": "110001770"
  },
  {
    "old": "1110001793",
    "new": "110001769"
  },
  {
    "old": "1110001792",
    "new": "110001768"
  },
  {
    "old": "1110001791",
    "new": "110001767"
  },
  {
    "old": "1110001790",
    "new": "110001766"
  },
  {
    "old": "1110001789",
    "new": "110001765"
  },
  {
    "old": "1110001788",
    "new": "110001764"
  },
  {
    "old": "1110001787",
    "new": "110001763"
  },
  {
    "old": "1110001786",
    "new": "110001762"
  },
  {
    "old": "1110001785",
    "new": "110001761"
  },
  {
    "old": "1110001784",
    "new": "110001760"
  },
  {
    "old": "1110001783",
    "new": "110001759"
  },
  {
    "old": "1110001782",
    "new": "110001758"
  },
  {
    "old": "1110001781",
    "new": "110001757"
  },
  {
    "old": "1110001780",
    "new": "110001756"
  },
  {
    "old": "1110001779",
    "new": "110001755"
  },
  {
    "old": "1110001778",
    "new": "110001754"
  },
  {
    "old": "1110001777",
    "new": "110001753"
  },
  {
    "old": "1110001776",
    "new": "110001752"
  },
  {
    "old": "1110001775",
    "new": "110001751"
  },
  {
    "old": "1110001774",
    "new": "110001750"
  },
  {
    "old": "1110001773",
    "new": "110001749"
  },
  {
    "old": "1110001772",
    "new": "110001748"
  },
  {
    "old": "1110001771",
    "new": "110001747"
  },
  {
    "old": "1110001770",
    "new": "110001746"
  },
  {
    "old": "1110001769",
    "new": "110001745"
  },
  {
    "old": "1110001768",
    "new": "110001744"
  },
  {
    "old": "1110001767",
    "new": "110001743"
  },
  {
    "old": "1110001766",
    "new": "110001742"
  },
  {
    "old": "1110001765",
    "new": "110001741"
  },
  {
    "old": "1110001764",
    "new": "110001740"
  },
  {
    "old": "1110001763",
    "new": "110001739"
  },
  {
    "old": "1110001762",
    "new": "110001738"
  },
  {
    "old": "1110001761",
    "new": "110001737"
  },
  {
    "old": "1110001760",
    "new": "110001736"
  },
  {
    "old": "1110001759",
    "new": "110001735"
  },
  {
    "old": "1110001758",
    "new": "110001734"
  },
  {
    "old": "1110001757",
    "new": "110001733"
  },
  {
    "old": "1110001756",
    "new": "110001732"
  },
  {
    "old": "1110001755",
    "new": "110001731"
  },
  {
    "old": "1110001754",
    "new": "110001730"
  },
  {
    "old": "1110001753",
    "new": "110001729"
  },
  {
    "old": "1110001752",
    "new": "110001728"
  },
  {
    "old": "1110001751",
    "new": "110001727"
  },
  {
    "old": "1110001750",
    "new": "110001726"
  },
  {
    "old": "1110001749",
    "new": "110001725"
  },
  {
    "old": "1110001748",
    "new": "110001724"
  },
  {
    "old": "1110001747",
    "new": "110001723"
  },
  {
    "old": "1110001746",
    "new": "110001722"
  },
  {
    "old": "1110001745",
    "new": "110001721"
  },
  {
    "old": "1110001744",
    "new": "110001720"
  },
  {
    "old": "1110001743",
    "new": "110001719"
  },
  {
    "old": "1110001742",
    "new": "110001718"
  },
  {
    "old": "1110001741",
    "new": "110001717"
  },
  {
    "old": "1110001740",
    "new": "110001716"
  },
  {
    "old": "1110001739",
    "new": "110001715"
  },
  {
    "old": "1110001738",
    "new": "110001714"
  },
  {
    "old": "1110001737",
    "new": "110001713"
  },
  {
    "old": "1110001736",
    "new": "110001712"
  },
  {
    "old": "1110001735",
    "new": "110001711"
  },
  {
    "old": "1110001734",
    "new": "110001710"
  },
  {
    "old": "1110001733",
    "new": "110001709"
  },
  {
    "old": "1110001732",
    "new": "110001708"
  },
  {
    "old": "1110001731",
    "new": "110001707"
  },
  {
    "old": "1110001730",
    "new": "110001706"
  },
  {
    "old": "1110001729",
    "new": "110001705"
  },
  {
    "old": "1110001728",
    "new": "110001704"
  },
  {
    "old": "1110001727",
    "new": "110001703"
  },
  {
    "old": "1110001726",
    "new": "110001702"
  },
  {
    "old": "1110001725",
    "new": "110001701"
  },
  {
    "old": "1110001724",
    "new": "110001700"
  },
  {
    "old": "1110001723",
    "new": "110001699"
  },
  {
    "old": "1110001722",
    "new": "110001698"
  },
  {
    "old": "1110001721",
    "new": "110001697"
  },
  {
    "old": "1110001720",
    "new": "110001696"
  },
  {
    "old": "1110001719",
    "new": "110001695"
  },
  {
    "old": "1110001718",
    "new": "110001694"
  },
  {
    "old": "1110001717",
    "new": "110001693"
  },
  {
    "old": "1110001716",
    "new": "110001692"
  },
  {
    "old": "1110001715",
    "new": "110001691"
  },
  {
    "old": "1110001714",
    "new": "110001690"
  },
  {
    "old": "1110001713",
    "new": "110001689"
  },
  {
    "old": "1110001712",
    "new": "110001688"
  },
  {
    "old": "1110001711",
    "new": "110001687"
  },
  {
    "old": "1110001710",
    "new": "110001686"
  },
  {
    "old": "1110001709",
    "new": "110001685"
  },
  {
    "old": "1110001708",
    "new": "110001684"
  },
  {
    "old": "1110001707",
    "new": "110001683"
  },
  {
    "old": "1110001706",
    "new": "110001682"
  },
  {
    "old": "1110001705",
    "new": "110001681"
  },
  {
    "old": "1110001704",
    "new": "110001680"
  },
  {
    "old": "1110001703",
    "new": "110001679"
  },
  {
    "old": "1110001702",
    "new": "110001678"
  },
  {
    "old": "1110001701",
    "new": "110001677"
  },
  {
    "old": "1110001700",
    "new": "110001676"
  },
  {
    "old": "1110001699",
    "new": "110001675"
  },
  {
    "old": "1110001698",
    "new": "110001674"
  },
  {
    "old": "1110001697",
    "new": "110001673"
  },
  {
    "old": "1110001696",
    "new": "110001672"
  },
  {
    "old": "1110001695",
    "new": "110001671"
  },
  {
    "old": "1110001694",
    "new": "110001670"
  },
  {
    "old": "1110001693",
    "new": "110001669"
  },
  {
    "old": "1110001692",
    "new": "110001668"
  },
  {
    "old": "1110001691",
    "new": "110001667"
  },
  {
    "old": "1110001690",
    "new": "110001666"
  },
  {
    "old": "1110001689",
    "new": "110001665"
  },
  {
    "old": "1110001688",
    "new": "110001664"
  },
  {
    "old": "1110001687",
    "new": "110001663"
  },
  {
    "old": "1110001686",
    "new": "110001662"
  },
  {
    "old": "1110001685",
    "new": "110001661"
  },
  {
    "old": "1110001684",
    "new": "110001660"
  },
  {
    "old": "1110001683",
    "new": "110001659"
  },
  {
    "old": "1110001682",
    "new": "110001658"
  },
  {
    "old": "1110001681",
    "new": "110001657"
  },
  {
    "old": "1110001680",
    "new": "110001656"
  },
  {
    "old": "1110001679",
    "new": "110001655"
  },
  {
    "old": "1110001678",
    "new": "110001654"
  },
  {
    "old": "1110001677",
    "new": "110001653"
  },
  {
    "old": "1110001676",
    "new": "110001652"
  },
  {
    "old": "1110001675",
    "new": "110001651"
  },
  {
    "old": "1110001674",
    "new": "110001650"
  },
  {
    "old": "1110001673",
    "new": "110001649"
  },
  {
    "old": "1110001672",
    "new": "110001648"
  },
  {
    "old": "1110001671",
    "new": "110001647"
  },
  {
    "old": "1110001670",
    "new": "110001646"
  },
  {
    "old": "1110001669",
    "new": "110001645"
  },
  {
    "old": "1110001668",
    "new": "110001644"
  },
  {
    "old": "1110001667",
    "new": "110001643"
  },
  {
    "old": "1110001666",
    "new": "110001642"
  },
  {
    "old": "1110001665",
    "new": "110001641"
  },
  {
    "old": "1110001664",
    "new": "110001640"
  },
  {
    "old": "1110001663",
    "new": "110001639"
  },
  {
    "old": "1110001662",
    "new": "110001638"
  },
  {
    "old": "1110001661",
    "new": "110001637"
  },
  {
    "old": "1110001660",
    "new": "110001636"
  },
  {
    "old": "1110001659",
    "new": "110001635"
  },
  {
    "old": "1110001658",
    "new": "110001634"
  },
  {
    "old": "1110001657",
    "new": "110001633"
  },
  {
    "old": "1110001656",
    "new": "110001632"
  },
  {
    "old": "1110001655",
    "new": "110001631"
  },
  {
    "old": "1110001654",
    "new": "110001630"
  },
  {
    "old": "1110001653",
    "new": "110001629"
  },
  {
    "old": "1110001652",
    "new": "110001628"
  },
  {
    "old": "1110001651",
    "new": "110001627"
  },
  {
    "old": "1110001650",
    "new": "110001626"
  },
  {
    "old": "1110001649",
    "new": "110001625"
  },
  {
    "old": "1110001648",
    "new": "110001624"
  },
  {
    "old": "1110001647",
    "new": "110001623"
  },
  {
    "old": "1110001646",
    "new": "110001622"
  },
  {
    "old": "1110001645",
    "new": "110001621"
  },
  {
    "old": "1110001644",
    "new": "110001620"
  },
  {
    "old": "1110001643",
    "new": "110001619"
  },
  {
    "old": "1110001642",
    "new": "110001618"
  },
  {
    "old": "1110001641",
    "new": "110001617"
  },
  {
    "old": "1110001640",
    "new": "110001616"
  },
  {
    "old": "1110001639",
    "new": "110001615"
  },
  {
    "old": "1110001638",
    "new": "110001614"
  },
  {
    "old": "1110001637",
    "new": "110001613"
  },
  {
    "old": "1110001636",
    "new": "110001612"
  },
  {
    "old": "1110001635",
    "new": "110001611"
  },
  {
    "old": "1110001634",
    "new": "110001610"
  },
  {
    "old": "1110001633",
    "new": "110001609"
  },
  {
    "old": "1110001632",
    "new": "110001608"
  },
  {
    "old": "1110001631",
    "new": "110001607"
  },
  {
    "old": "1110001630",
    "new": "110001606"
  },
  {
    "old": "1110001629",
    "new": "110001605"
  },
  {
    "old": "1110001628",
    "new": "110001604"
  },
  {
    "old": "1110001627",
    "new": "110001603"
  },
  {
    "old": "1110001626",
    "new": "110001602"
  },
  {
    "old": "1110001625",
    "new": "110001601"
  },
  {
    "old": "1110001624",
    "new": "110001600"
  },
  {
    "old": "1110001623",
    "new": "110001599"
  },
  {
    "old": "1110001622",
    "new": "110001598"
  },
  {
    "old": "1110001621",
    "new": "110001597"
  },
  {
    "old": "1110001620",
    "new": "110001596"
  },
  {
    "old": "1110001619",
    "new": "110001595"
  },
  {
    "old": "1110001618",
    "new": "110001594"
  },
  {
    "old": "1110001617",
    "new": "110001593"
  },
  {
    "old": "1110001616",
    "new": "110001592"
  },
  {
    "old": "1110001615",
    "new": "110001591"
  },
  {
    "old": "1110001614",
    "new": "110001590"
  },
  {
    "old": "1110001613",
    "new": "110001589"
  },
  {
    "old": "1110001612",
    "new": "110001588"
  },
  {
    "old": "1110001611",
    "new": "110001587"
  },
  {
    "old": "1110001610",
    "new": "110001586"
  },
  {
    "old": "1110001609",
    "new": "110001585"
  },
  {
    "old": "1110001608",
    "new": "110001584"
  },
  {
    "old": "1110001607",
    "new": "110001583"
  },
  {
    "old": "1110001606",
    "new": "110001582"
  },
  {
    "old": "1110001605",
    "new": "110001581"
  },
  {
    "old": "1110001604",
    "new": "110001580"
  },
  {
    "old": "1110001603",
    "new": "110001579"
  },
  {
    "old": "1110001602",
    "new": "110001578"
  },
  {
    "old": "1110001601",
    "new": "110001577"
  },
  {
    "old": "1110001600",
    "new": "110001576"
  },
  {
    "old": "1110001599",
    "new": "110001575"
  },
  {
    "old": "1110001598",
    "new": "110001574"
  },
  {
    "old": "1110001597",
    "new": "110001573"
  },
  {
    "old": "1110001596",
    "new": "110001572"
  },
  {
    "old": "1110001595",
    "new": "110001571"
  },
  {
    "old": "1110001594",
    "new": "110001570"
  },
  {
    "old": "1110001593",
    "new": "110001569"
  },
  {
    "old": "1110001592",
    "new": "110001568"
  },
  {
    "old": "1110001591",
    "new": "110001567"
  },
  {
    "old": "1110001590",
    "new": "110001566"
  },
  {
    "old": "1110001589",
    "new": "110001565"
  },
  {
    "old": "1110001588",
    "new": "110001564"
  },
  {
    "old": "1110001587",
    "new": "110001563"
  },
  {
    "old": "1110001586",
    "new": "110001562"
  },
  {
    "old": "1110001585",
    "new": "110001561"
  },
  {
    "old": "1110001584",
    "new": "110001560"
  },
  {
    "old": "1110001583",
    "new": "110001559"
  },
  {
    "old": "1110001582",
    "new": "110001558"
  },
  {
    "old": "1110001581",
    "new": "110001557"
  },
  {
    "old": "1110001580",
    "new": "110001556"
  },
  {
    "old": "1110001579",
    "new": "110001555"
  },
  {
    "old": "1110001578",
    "new": "110001554"
  },
  {
    "old": "1110001577",
    "new": "110001553"
  },
  {
    "old": "1110001576",
    "new": "110001552"
  },
  {
    "old": "1110001575",
    "new": "110001551"
  },
  {
    "old": "1110001574",
    "new": "110001550"
  },
  {
    "old": "1110001573",
    "new": "110001549"
  },
  {
    "old": "1110001572",
    "new": "110001548"
  },
  {
    "old": "1110001571",
    "new": "110001547"
  },
  {
    "old": "1110001570",
    "new": "110001546"
  },
  {
    "old": "1110001569",
    "new": "110001545"
  },
  {
    "old": "1110001568",
    "new": "110001544"
  },
  {
    "old": "1110001567",
    "new": "110001543"
  },
  {
    "old": "1110001566",
    "new": "110001542"
  },
  {
    "old": "1110001565",
    "new": "110001541"
  },
  {
    "old": "1110001564",
    "new": "110001540"
  },
  {
    "old": "1110001563",
    "new": "110001539"
  },
  {
    "old": "1110001562",
    "new": "110001538"
  },
  {
    "old": "1110001561",
    "new": "110001537"
  },
  {
    "old": "1110001560",
    "new": "110001536"
  },
  {
    "old": "1110001559",
    "new": "110001535"
  },
  {
    "old": "1110001558",
    "new": "110001534"
  },
  {
    "old": "1110001557",
    "new": "110001533"
  },
  {
    "old": "1110001556",
    "new": "110001532"
  },
  {
    "old": "1110001555",
    "new": "110001531"
  },
  {
    "old": "1110001554",
    "new": "110001530"
  },
  {
    "old": "1110001553",
    "new": "110001529"
  },
  {
    "old": "1110001552",
    "new": "110001528"
  },
  {
    "old": "1110001551",
    "new": "110001527"
  },
  {
    "old": "1110001550",
    "new": "110001526"
  },
  {
    "old": "1110001549",
    "new": "110001525"
  },
  {
    "old": "1110001548",
    "new": "110001524"
  },
  {
    "old": "1110001547",
    "new": "110001523"
  },
  {
    "old": "1110001546",
    "new": "110001522"
  },
  {
    "old": "1110001545",
    "new": "110001521"
  },
  {
    "old": "1110001544",
    "new": "110001520"
  },
  {
    "old": "1110001543",
    "new": "110001519"
  },
  {
    "old": "1110001542",
    "new": "110001518"
  },
  {
    "old": "1110001541",
    "new": "110001517"
  },
  {
    "old": "1110001540",
    "new": "110001516"
  },
  {
    "old": "1110001539",
    "new": "110001515"
  },
  {
    "old": "1110001538",
    "new": "110001514"
  },
  {
    "old": "1110001537",
    "new": "110001513"
  },
  {
    "old": "1110001536",
    "new": "110001512"
  },
  {
    "old": "1110001535",
    "new": "110001511"
  },
  {
    "old": "1110001534",
    "new": "110001510"
  },
  {
    "old": "1110001533",
    "new": "110001509"
  },
  {
    "old": "1110001532",
    "new": "110001508"
  },
  {
    "old": "1110001531",
    "new": "110001507"
  },
  {
    "old": "1110001530",
    "new": "110001506"
  },
  {
    "old": "1110001529",
    "new": "110001505"
  },
  {
    "old": "1110001528",
    "new": "110001504"
  },
  {
    "old": "1110001527",
    "new": "110001503"
  },
  {
    "old": "1110001526",
    "new": "110001502"
  },
  {
    "old": "1110001525",
    "new": "110001501"
  },
  {
    "old": "1110001524",
    "new": "110001500"
  },
  {
    "old": "1110001523",
    "new": "110001499"
  },
  {
    "old": "1110001522",
    "new": "110001498"
  },
  {
    "old": "1110001521",
    "new": "110001497"
  },
  {
    "old": "1110001520",
    "new": "110001496"
  },
  {
    "old": "1110001519",
    "new": "110001495"
  },
  {
    "old": "1110001518",
    "new": "110001494"
  },
  {
    "old": "1110001517",
    "new": "110001493"
  },
  {
    "old": "1110001516",
    "new": "110001492"
  },
  {
    "old": "1110001515",
    "new": "110001491"
  },
  {
    "old": "1110001514",
    "new": "110001490"
  },
  {
    "old": "1110001513",
    "new": "110001489"
  },
  {
    "old": "1110001512",
    "new": "110001488"
  },
  {
    "old": "1110001511",
    "new": "110001487"
  },
  {
    "old": "1110001510",
    "new": "110001486"
  },
  {
    "old": "1110001509",
    "new": "110001485"
  },
  {
    "old": "1110001508",
    "new": "110001484"
  },
  {
    "old": "1110001507",
    "new": "110001483"
  },
  {
    "old": "1110001506",
    "new": "110001482"
  },
  {
    "old": "1110001505",
    "new": "110001481"
  },
  {
    "old": "1110001504",
    "new": "110001480"
  },
  {
    "old": "1110001503",
    "new": "110001479"
  },
  {
    "old": "1110001502",
    "new": "110001478"
  },
  {
    "old": "1110001501",
    "new": "110001477"
  },
  {
    "old": "1110001500",
    "new": "110001476"
  },
  {
    "old": "1110001499",
    "new": "110001475"
  },
  {
    "old": "1110001498",
    "new": "110001474"
  },
  {
    "old": "1110001497",
    "new": "110001473"
  },
  {
    "old": "1110001496",
    "new": "110001472"
  },
  {
    "old": "1110001495",
    "new": "110001471"
  },
  {
    "old": "1110001494",
    "new": "110001470"
  },
  {
    "old": "1110001493",
    "new": "110001469"
  },
  {
    "old": "1110001492",
    "new": "110001468"
  },
  {
    "old": "1110001491",
    "new": "110001467"
  },
  {
    "old": "1110001490",
    "new": "110001466"
  },
  {
    "old": "1110001489",
    "new": "110001465"
  },
  {
    "old": "1110001488",
    "new": "110001464"
  },
  {
    "old": "1110001487",
    "new": "110001463"
  },
  {
    "old": "1110001486",
    "new": "110001462"
  },
  {
    "old": "1110001485",
    "new": "110001461"
  },
  {
    "old": "1110001484",
    "new": "110001460"
  },
  {
    "old": "1110001483",
    "new": "110001459"
  },
  {
    "old": "1110001482",
    "new": "110001458"
  },
  {
    "old": "1110001481",
    "new": "110001457"
  },
  {
    "old": "1110001480",
    "new": "110001456"
  },
  {
    "old": "1110001479",
    "new": "110001455"
  },
  {
    "old": "1110001478",
    "new": "110001454"
  },
  {
    "old": "1110001477",
    "new": "110001453"
  },
  {
    "old": "1110001476",
    "new": "110001452"
  },
  {
    "old": "1110001475",
    "new": "110001451"
  },
  {
    "old": "1110001474",
    "new": "110001450"
  },
  {
    "old": "1110001473",
    "new": "110001449"
  },
  {
    "old": "1110001472",
    "new": "110001448"
  },
  {
    "old": "1110001471",
    "new": "110001447"
  },
  {
    "old": "1110001470",
    "new": "110001446"
  },
  {
    "old": "1110001469",
    "new": "110001445"
  },
  {
    "old": "1110001468",
    "new": "110001444"
  },
  {
    "old": "1110001467",
    "new": "110001443"
  },
  {
    "old": "1110001466",
    "new": "110001442"
  },
  {
    "old": "1110001465",
    "new": "110001441"
  },
  {
    "old": "1110001464",
    "new": "110001440"
  },
  {
    "old": "1110001463",
    "new": "110001439"
  },
  {
    "old": "1110001462",
    "new": "110001438"
  },
  {
    "old": "1110001461",
    "new": "110001437"
  },
  {
    "old": "1110001460",
    "new": "110001436"
  },
  {
    "old": "1110001459",
    "new": "110001435"
  },
  {
    "old": "1110001458",
    "new": "110001434"
  },
  {
    "old": "1110001457",
    "new": "110001433"
  },
  {
    "old": "1110001456",
    "new": "110001432"
  },
  {
    "old": "1110001455",
    "new": "110001431"
  },
  {
    "old": "1110001454",
    "new": "110001430"
  },
  {
    "old": "1110001453",
    "new": "110001429"
  },
  {
    "old": "1110001452",
    "new": "110001428"
  },
  {
    "old": "1110001451",
    "new": "110001427"
  },
  {
    "old": "1110001450",
    "new": "110001426"
  },
  {
    "old": "1110001449",
    "new": "110001425"
  },
  {
    "old": "1110001448",
    "new": "110001424"
  },
  {
    "old": "1110001447",
    "new": "110001423"
  },
  {
    "old": "1110001446",
    "new": "110001422"
  },
  {
    "old": "1110001445",
    "new": "110001421"
  },
  {
    "old": "1110001444",
    "new": "110001420"
  },
  {
    "old": "1110001443",
    "new": "110001419"
  },
  {
    "old": "1110001442",
    "new": "110001418"
  },
  {
    "old": "1110001441",
    "new": "110001417"
  },
  {
    "old": "1110001440",
    "new": "110001416"
  },
  {
    "old": "1110001439",
    "new": "110001415"
  },
  {
    "old": "1110001438",
    "new": "110001414"
  },
  {
    "old": "1110001437",
    "new": "110001413"
  },
  {
    "old": "1110001436",
    "new": "110001412"
  },
  {
    "old": "1110001435",
    "new": "110001411"
  },
  {
    "old": "1110001434",
    "new": "110001410"
  },
  {
    "old": "1110001433",
    "new": "110001409"
  },
  {
    "old": "1110001432",
    "new": "110001408"
  },
  {
    "old": "1110001431",
    "new": "110001407"
  },
  {
    "old": "1110001430",
    "new": "110001406"
  },
  {
    "old": "1110001429",
    "new": "110001405"
  },
  {
    "old": "1110001428",
    "new": "110001404"
  },
  {
    "old": "1110001427",
    "new": "110001403"
  },
  {
    "old": "1110001426",
    "new": "110001402"
  },
  {
    "old": "1110001425",
    "new": "110001401"
  },
  {
    "old": "1110001424",
    "new": "110001400"
  },
  {
    "old": "1110001423",
    "new": "110001399"
  },
  {
    "old": "1110001422",
    "new": "110001398"
  },
  {
    "old": "1110001421",
    "new": "110001397"
  },
  {
    "old": "1110001420",
    "new": "110001396"
  },
  {
    "old": "1110001419",
    "new": "110001395"
  },
  {
    "old": "1110001418",
    "new": "110001394"
  },
  {
    "old": "1110001417",
    "new": "110001393"
  },
  {
    "old": "1110001416",
    "new": "110001392"
  },
  {
    "old": "1110001415",
    "new": "110001391"
  },
  {
    "old": "1110001414",
    "new": "110001390"
  },
  {
    "old": "1110001413",
    "new": "110001389"
  },
  {
    "old": "1110001412",
    "new": "110001388"
  },
  {
    "old": "1110001411",
    "new": "110001387"
  },
  {
    "old": "1110001410",
    "new": "110001386"
  },
  {
    "old": "1110001409",
    "new": "110001385"
  },
  {
    "old": "1110001408",
    "new": "110001384"
  },
  {
    "old": "1110001407",
    "new": "110001383"
  },
  {
    "old": "1110001406",
    "new": "110001382"
  },
  {
    "old": "1110001405",
    "new": "110001381"
  },
  {
    "old": "1110001404",
    "new": "110001380"
  },
  {
    "old": "1110001403",
    "new": "110001379"
  },
  {
    "old": "1110001402",
    "new": "110001378"
  },
  {
    "old": "1110001401",
    "new": "110001377"
  },
  {
    "old": "1110001400",
    "new": "110001376"
  },
  {
    "old": "1110001399",
    "new": "110001375"
  },
  {
    "old": "1110001398",
    "new": "110001374"
  },
  {
    "old": "1110001397",
    "new": "110001373"
  },
  {
    "old": "1110001396",
    "new": "110001372"
  },
  {
    "old": "1110001395",
    "new": "110001371"
  },
  {
    "old": "1110001394",
    "new": "110001370"
  },
  {
    "old": "1110001393",
    "new": "110001369"
  },
  {
    "old": "1110001392",
    "new": "110001368"
  },
  {
    "old": "1110001391",
    "new": "110001367"
  },
  {
    "old": "1110001390",
    "new": "110001366"
  },
  {
    "old": "1110001389",
    "new": "110001365"
  },
  {
    "old": "1110001388",
    "new": "110001364"
  },
  {
    "old": "1110001387",
    "new": "110001363"
  },
  {
    "old": "1110001386",
    "new": "110001362"
  },
  {
    "old": "1110001385",
    "new": "110001361"
  },
  {
    "old": "1110001384",
    "new": "110001360"
  },
  {
    "old": "1110001383",
    "new": "110001359"
  },
  {
    "old": "1110001382",
    "new": "110001358"
  },
  {
    "old": "1110001381",
    "new": "110001357"
  },
  {
    "old": "1110001380",
    "new": "110001356"
  },
  {
    "old": "1110001378",
    "new": "110001355"
  },
  {
    "old": "1110001377",
    "new": "110001354"
  },
  {
    "old": "1110001376",
    "new": "110001353"
  },
  {
    "old": "1110001375",
    "new": "110001352"
  },
  {
    "old": "1110001374",
    "new": "110001351"
  },
  {
    "old": "1110001373",
    "new": "110001350"
  },
  {
    "old": "1110001372",
    "new": "110001349"
  },
  {
    "old": "1110001371",
    "new": "110001348"
  },
  {
    "old": "1110001370",
    "new": "110001347"
  },
  {
    "old": "1110001369",
    "new": "110001346"
  },
  {
    "old": "1110001368",
    "new": "110001345"
  },
  {
    "old": "1110001367",
    "new": "110001344"
  },
  {
    "old": "1110001365",
    "new": "110001343"
  },
  {
    "old": "1110001364",
    "new": "110001342"
  },
  {
    "old": "1110001363",
    "new": "110001341"
  },
  {
    "old": "1110001362",
    "new": "110001340"
  },
  {
    "old": "1110001361",
    "new": "110001339"
  },
  {
    "old": "1110001360",
    "new": "110001338"
  },
  {
    "old": "1110001359",
    "new": "110001337"
  },
  {
    "old": "1110001358",
    "new": "110001336"
  },
  {
    "old": "1110001357",
    "new": "110001335"
  },
  {
    "old": "1110001356",
    "new": "110001334"
  },
  {
    "old": "1110001355",
    "new": "110001333"
  },
  {
    "old": "1110001354",
    "new": "110001332"
  },
  {
    "old": "1110001353",
    "new": "110001331"
  },
  {
    "old": "1110001352",
    "new": "110001330"
  },
  {
    "old": "1110001351",
    "new": "110001329"
  },
  {
    "old": "1110001350",
    "new": "110001328"
  },
  {
    "old": "1110001349",
    "new": "110001327"
  },
  {
    "old": "1110001348",
    "new": "110001326"
  },
  {
    "old": "1110001347",
    "new": "110001325"
  },
  {
    "old": "1110001346",
    "new": "110001324"
  },
  {
    "old": "1110001345",
    "new": "110001323"
  },
  {
    "old": "1110001344",
    "new": "110001322"
  },
  {
    "old": "1110001343",
    "new": "110001321"
  },
  {
    "old": "1110001342",
    "new": "110001320"
  },
  {
    "old": "1110001341",
    "new": "110001319"
  },
  {
    "old": "1110001340",
    "new": "110001318"
  },
  {
    "old": "1110001339",
    "new": "110001317"
  },
  {
    "old": "1110001338",
    "new": "110001316"
  },
  {
    "old": "1110001337",
    "new": "110001315"
  },
  {
    "old": "1110001336",
    "new": "110001314"
  },
  {
    "old": "1110001335",
    "new": "110001313"
  },
  {
    "old": "1110001334",
    "new": "110001312"
  },
  {
    "old": "1110001333",
    "new": "110001311"
  },
  {
    "old": "1110001332",
    "new": "110001310"
  },
  {
    "old": "1110001331",
    "new": "110001309"
  },
  {
    "old": "1110001330",
    "new": "110001308"
  },
  {
    "old": "1110001329",
    "new": "110001307"
  },
  {
    "old": "1110001328",
    "new": "110001306"
  },
  {
    "old": "1110001327",
    "new": "110001305"
  },
  {
    "old": "1110001326",
    "new": "110001304"
  },
  {
    "old": "1110001325",
    "new": "110001303"
  },
  {
    "old": "1110001324",
    "new": "110001302"
  },
  {
    "old": "1110001323",
    "new": "110001301"
  },
  {
    "old": "1110001322",
    "new": "110001300"
  },
  {
    "old": "1110001321",
    "new": "110001299"
  },
  {
    "old": "1110001320",
    "new": "110001298"
  },
  {
    "old": "1110001319",
    "new": "110001297"
  },
  {
    "old": "1110001318",
    "new": "110001296"
  },
  {
    "old": "1110001317",
    "new": "110001295"
  },
  {
    "old": "1110001316",
    "new": "110001294"
  },
  {
    "old": "1110001315",
    "new": "110001293"
  },
  {
    "old": "1110001314",
    "new": "110001292"
  },
  {
    "old": "1110001313",
    "new": "110001291"
  },
  {
    "old": "1110001312",
    "new": "110001290"
  },
  {
    "old": "1110001311",
    "new": "110001289"
  },
  {
    "old": "1110001310",
    "new": "110001288"
  },
  {
    "old": "1110001309",
    "new": "110001287"
  },
  {
    "old": "1110001308",
    "new": "110001286"
  },
  {
    "old": "1110001307",
    "new": "110001285"
  },
  {
    "old": "1110001306",
    "new": "110001284"
  },
  {
    "old": "1110001305",
    "new": "110001283"
  },
  {
    "old": "1110001304",
    "new": "110001282"
  },
  {
    "old": "1110001303",
    "new": "110001281"
  },
  {
    "old": "1110001302",
    "new": "110001280"
  },
  {
    "old": "1110001301",
    "new": "110001279"
  },
  {
    "old": "1110001300",
    "new": "110001278"
  },
  {
    "old": "1110001299",
    "new": "110001277"
  },
  {
    "old": "1110001298",
    "new": "110001276"
  },
  {
    "old": "1110001297",
    "new": "110001275"
  },
  {
    "old": "1110001296",
    "new": "110001274"
  },
  {
    "old": "1110001295",
    "new": "110001273"
  },
  {
    "old": "1110001294",
    "new": "110001272"
  },
  {
    "old": "1110001293",
    "new": "110001271"
  },
  {
    "old": "1110001292",
    "new": "110001270"
  },
  {
    "old": "1110001291",
    "new": "110001269"
  },
  {
    "old": "1110001290",
    "new": "110001268"
  },
  {
    "old": "1110001289",
    "new": "110001267"
  },
  {
    "old": "1110001288",
    "new": "110001266"
  },
  {
    "old": "1110001287",
    "new": "110001265"
  },
  {
    "old": "1110001286",
    "new": "110001264"
  },
  {
    "old": "1110001285",
    "new": "110001263"
  },
  {
    "old": "1110001284",
    "new": "110001262"
  },
  {
    "old": "1110001283",
    "new": "110001261"
  },
  {
    "old": "1110001282",
    "new": "110001260"
  },
  {
    "old": "1110001281",
    "new": "110001259"
  },
  {
    "old": "1110001280",
    "new": "110001258"
  },
  {
    "old": "1110001279",
    "new": "110001257"
  },
  {
    "old": "1110001278",
    "new": "110001256"
  },
  {
    "old": "1110001277",
    "new": "110001255"
  },
  {
    "old": "1110001276",
    "new": "110001254"
  },
  {
    "old": "1110001275",
    "new": "110001253"
  },
  {
    "old": "1110001274",
    "new": "110001252"
  },
  {
    "old": "1110001273",
    "new": "110001251"
  },
  {
    "old": "1110001272",
    "new": "110001250"
  },
  {
    "old": "1110001271",
    "new": "110001249"
  },
  {
    "old": "1110001270",
    "new": "110001248"
  },
  {
    "old": "1110001269",
    "new": "110001247"
  },
  {
    "old": "1110001268",
    "new": "110001246"
  },
  {
    "old": "1110001267",
    "new": "110001245"
  },
  {
    "old": "1110001266",
    "new": "110001244"
  },
  {
    "old": "1110001265",
    "new": "110001243"
  },
  {
    "old": "1110001264",
    "new": "110001242"
  },
  {
    "old": "1110001263",
    "new": "110001241"
  },
  {
    "old": "1110001262",
    "new": "110001240"
  },
  {
    "old": "1110001261",
    "new": "110001239"
  },
  {
    "old": "1110001260",
    "new": "110001238"
  },
  {
    "old": "1110001259",
    "new": "110001237"
  },
  {
    "old": "1110001258",
    "new": "110001236"
  },
  {
    "old": "1110001257",
    "new": "110001235"
  },
  {
    "old": "1110001256",
    "new": "110001234"
  },
  {
    "old": "1110001255",
    "new": "110001233"
  },
  {
    "old": "1110001254",
    "new": "110001232"
  },
  {
    "old": "1110001253",
    "new": "110001231"
  },
  {
    "old": "1110001252",
    "new": "110001230"
  },
  {
    "old": "1110001251",
    "new": "110001229"
  },
  {
    "old": "1110001250",
    "new": "110001228"
  },
  {
    "old": "1110001249",
    "new": "110001227"
  },
  {
    "old": "1110001248",
    "new": "110001226"
  },
  {
    "old": "1110001247",
    "new": "110001225"
  },
  {
    "old": "1110001246",
    "new": "110001224"
  },
  {
    "old": "1110001245",
    "new": "110001223"
  },
  {
    "old": "1110001244",
    "new": "110001222"
  },
  {
    "old": "1110001243",
    "new": "110001221"
  },
  {
    "old": "1110001242",
    "new": "110001220"
  },
  {
    "old": "1110001241",
    "new": "110001219"
  },
  {
    "old": "1110001240",
    "new": "110001218"
  },
  {
    "old": "1110001239",
    "new": "110001217"
  },
  {
    "old": "1110001238",
    "new": "110001216"
  },
  {
    "old": "1110001237",
    "new": "110001215"
  },
  {
    "old": "1110001236",
    "new": "110001214"
  },
  {
    "old": "1110001235",
    "new": "110001213"
  },
  {
    "old": "1110001234",
    "new": "110001212"
  },
  {
    "old": "1110001233",
    "new": "110001211"
  },
  {
    "old": "1110001232",
    "new": "110001210"
  },
  {
    "old": "1110001231",
    "new": "110001209"
  },
  {
    "old": "1110001230",
    "new": "110001208"
  },
  {
    "old": "1110001229",
    "new": "110001207"
  },
  {
    "old": "1110001228",
    "new": "110001206"
  },
  {
    "old": "1110001227",
    "new": "110001205"
  },
  {
    "old": "1110001226",
    "new": "110001204"
  },
  {
    "old": "1110001225",
    "new": "110001203"
  },
  {
    "old": "1110001224",
    "new": "110001202"
  },
  {
    "old": "1110001223",
    "new": "110001201"
  },
  {
    "old": "1110001222",
    "new": "110001200"
  },
  {
    "old": "1110001221",
    "new": "110001199"
  },
  {
    "old": "1110001220",
    "new": "110001198"
  },
  {
    "old": "1110001219",
    "new": "110001197"
  },
  {
    "old": "1110001218",
    "new": "110001196"
  },
  {
    "old": "1110001217",
    "new": "110001195"
  },
  {
    "old": "1110001216",
    "new": "110001194"
  },
  {
    "old": "1110001214",
    "new": "110001193"
  },
  {
    "old": "1110001213",
    "new": "110001192"
  },
  {
    "old": "1110001212",
    "new": "110001191"
  },
  {
    "old": "1110001211",
    "new": "110001190"
  },
  {
    "old": "1110001210",
    "new": "110001189"
  },
  {
    "old": "1110001209",
    "new": "110001188"
  },
  {
    "old": "1110001208",
    "new": "110001187"
  },
  {
    "old": "1110001207",
    "new": "110001186"
  },
  {
    "old": "1110001206",
    "new": "110001185"
  },
  {
    "old": "1110001205",
    "new": "110001184"
  },
  {
    "old": "1110001204",
    "new": "110001183"
  },
  {
    "old": "1110001203",
    "new": "110001182"
  },
  {
    "old": "1110001202",
    "new": "110001181"
  },
  {
    "old": "1110001201",
    "new": "110001180"
  },
  {
    "old": "1110001200",
    "new": "110001179"
  },
  {
    "old": "1110001199",
    "new": "110001178"
  },
  {
    "old": "1110001198",
    "new": "110001177"
  },
  {
    "old": "1110001197",
    "new": "110001176"
  },
  {
    "old": "1110001196",
    "new": "110001175"
  },
  {
    "old": "1110001195",
    "new": "110001174"
  },
  {
    "old": "1110001194",
    "new": "110001173"
  },
  {
    "old": "1110001193",
    "new": "110001172"
  },
  {
    "old": "1110001192",
    "new": "110001171"
  },
  {
    "old": "1110001191",
    "new": "110001170"
  },
  {
    "old": "1110001190",
    "new": "110001169"
  },
  {
    "old": "1110001189",
    "new": "110001168"
  },
  {
    "old": "1110001188",
    "new": "110001167"
  },
  {
    "old": "1110001187",
    "new": "110001166"
  },
  {
    "old": "1110001186",
    "new": "110001165"
  },
  {
    "old": "1110001185",
    "new": "110001164"
  },
  {
    "old": "1110001184",
    "new": "110001163"
  },
  {
    "old": "1110001183",
    "new": "110001162"
  },
  {
    "old": "1110001182",
    "new": "110001161"
  },
  {
    "old": "1110001181",
    "new": "110001160"
  },
  {
    "old": "1110001180",
    "new": "110001159"
  },
  {
    "old": "1110001179",
    "new": "110001158"
  },
  {
    "old": "1110001178",
    "new": "110001157"
  },
  {
    "old": "1110001177",
    "new": "110001156"
  },
  {
    "old": "1110001176",
    "new": "110001155"
  },
  {
    "old": "1110001175",
    "new": "110001154"
  },
  {
    "old": "1110001174",
    "new": "110001153"
  },
  {
    "old": "1110001173",
    "new": "110001152"
  },
  {
    "old": "1110001172",
    "new": "110001151"
  },
  {
    "old": "1110001171",
    "new": "110001150"
  },
  {
    "old": "1110001170",
    "new": "110001149"
  },
  {
    "old": "1110001169",
    "new": "110001148"
  },
  {
    "old": "1110001168",
    "new": "110001147"
  },
  {
    "old": "1110001167",
    "new": "110001146"
  },
  {
    "old": "1110001166",
    "new": "110001145"
  },
  {
    "old": "1110001165",
    "new": "110001144"
  },
  {
    "old": "1110001164",
    "new": "110001143"
  },
  {
    "old": "1110001163",
    "new": "110001142"
  },
  {
    "old": "1110001162",
    "new": "110001141"
  },
  {
    "old": "1110001161",
    "new": "110001140"
  },
  {
    "old": "1110001160",
    "new": "110001139"
  },
  {
    "old": "1110001159",
    "new": "110001138"
  },
  {
    "old": "1110001158",
    "new": "110001137"
  },
  {
    "old": "1110001157",
    "new": "110001136"
  },
  {
    "old": "1110001156",
    "new": "110001135"
  },
  {
    "old": "1110001155",
    "new": "110001134"
  },
  {
    "old": "1110001154",
    "new": "110001133"
  },
  {
    "old": "1110001153",
    "new": "110001132"
  },
  {
    "old": "1110001152",
    "new": "110001131"
  },
  {
    "old": "1110001151",
    "new": "110001130"
  },
  {
    "old": "1110001150",
    "new": "110001129"
  },
  {
    "old": "1110001149",
    "new": "110001128"
  },
  {
    "old": "1110001148",
    "new": "110001127"
  },
  {
    "old": "1110001147",
    "new": "110001126"
  },
  {
    "old": "1110001146",
    "new": "110001125"
  },
  {
    "old": "1110001145",
    "new": "110001124"
  },
  {
    "old": "1110001144",
    "new": "110001123"
  },
  {
    "old": "1110001143",
    "new": "110001122"
  },
  {
    "old": "1110001142",
    "new": "110001121"
  },
  {
    "old": "1110001141",
    "new": "110001120"
  },
  {
    "old": "1110001140",
    "new": "110001119"
  },
  {
    "old": "1110001139",
    "new": "110001118"
  },
  {
    "old": "1110001138",
    "new": "110001117"
  },
  {
    "old": "1110001137",
    "new": "110001116"
  },
  {
    "old": "1110001136",
    "new": "110001115"
  },
  {
    "old": "1110001135",
    "new": "110001114"
  },
  {
    "old": "1110001134",
    "new": "110001113"
  },
  {
    "old": "1110001133",
    "new": "110001112"
  },
  {
    "old": "1110001132",
    "new": "110001111"
  },
  {
    "old": "1110001131",
    "new": "110001110"
  },
  {
    "old": "1110001130",
    "new": "110001109"
  },
  {
    "old": "1110001129",
    "new": "110001108"
  },
  {
    "old": "1110001128",
    "new": "110001107"
  },
  {
    "old": "1110001127",
    "new": "110001106"
  },
  {
    "old": "1110001126",
    "new": "110001105"
  },
  {
    "old": "1110001125",
    "new": "110001104"
  },
  {
    "old": "1110001124",
    "new": "110001103"
  },
  {
    "old": "1110001123",
    "new": "110001102"
  },
  {
    "old": "1110001122",
    "new": "110001101"
  },
  {
    "old": "1110001121",
    "new": "110001100"
  },
  {
    "old": "1110001120",
    "new": "110001099"
  },
  {
    "old": "1110001119",
    "new": "110001098"
  },
  {
    "old": "1110001118",
    "new": "110001097"
  },
  {
    "old": "1110001117",
    "new": "110001096"
  },
  {
    "old": "1110001116",
    "new": "110001095"
  },
  {
    "old": "1110001115",
    "new": "110001094"
  },
  {
    "old": "1110001114",
    "new": "110001093"
  },
  {
    "old": "1110001113",
    "new": "110001092"
  },
  {
    "old": "1110001112",
    "new": "110001091"
  },
  {
    "old": "1110001111",
    "new": "110001090"
  },
  {
    "old": "1110001110",
    "new": "110001089"
  },
  {
    "old": "1110001109",
    "new": "110001088"
  },
  {
    "old": "1110001108",
    "new": "110001087"
  },
  {
    "old": "1110001107",
    "new": "110001086"
  },
  {
    "old": "1110001106",
    "new": "110001085"
  },
  {
    "old": "1110001105",
    "new": "110001084"
  },
  {
    "old": "1110001104",
    "new": "110001083"
  },
  {
    "old": "1110001103",
    "new": "110001082"
  },
  {
    "old": "1110001102",
    "new": "110001081"
  },
  {
    "old": "1110001101",
    "new": "110001080"
  },
  {
    "old": "1110001100",
    "new": "110001079"
  },
  {
    "old": "1110001099",
    "new": "110001078"
  },
  {
    "old": "1110001098",
    "new": "110001077"
  },
  {
    "old": "1110001097",
    "new": "110001076"
  },
  {
    "old": "1110001096",
    "new": "110001075"
  },
  {
    "old": "1110001095",
    "new": "110001074"
  },
  {
    "old": "1110001094",
    "new": "110001073"
  },
  {
    "old": "1110001093",
    "new": "110001072"
  },
  {
    "old": "1110001092",
    "new": "110001071"
  },
  {
    "old": "1110001091",
    "new": "110001070"
  },
  {
    "old": "1110001090",
    "new": "110001069"
  },
  {
    "old": "1110001089",
    "new": "110001068"
  },
  {
    "old": "1110001088",
    "new": "110001067"
  },
  {
    "old": "1110001087",
    "new": "110001066"
  },
  {
    "old": "1110001086",
    "new": "110001065"
  },
  {
    "old": "1110001085",
    "new": "110001064"
  },
  {
    "old": "1110001084",
    "new": "110001063"
  },
  {
    "old": "1110001083",
    "new": "110001062"
  },
  {
    "old": "1110001082",
    "new": "110001061"
  },
  {
    "old": "1110001081",
    "new": "110001060"
  },
  {
    "old": "1110001080",
    "new": "110001059"
  },
  {
    "old": "1110001079",
    "new": "110001058"
  },
  {
    "old": "1110001078",
    "new": "110001057"
  },
  {
    "old": "1110001077",
    "new": "110001056"
  },
  {
    "old": "1110001076",
    "new": "110001055"
  },
  {
    "old": "1110001075",
    "new": "110001054"
  },
  {
    "old": "1110001074",
    "new": "110001053"
  },
  {
    "old": "1110001073",
    "new": "110001052"
  },
  {
    "old": "1110001072",
    "new": "110001051"
  },
  {
    "old": "1110001071",
    "new": "110001050"
  },
  {
    "old": "1110001070",
    "new": "110001049"
  },
  {
    "old": "1110001069",
    "new": "110001048"
  },
  {
    "old": "1110001068",
    "new": "110001047"
  },
  {
    "old": "1110001067",
    "new": "110001046"
  },
  {
    "old": "1110001066",
    "new": "110001045"
  },
  {
    "old": "1110001065",
    "new": "110001044"
  },
  {
    "old": "1110001064",
    "new": "110001043"
  },
  {
    "old": "1110001063",
    "new": "110001042"
  },
  {
    "old": "1110001062",
    "new": "110001041"
  },
  {
    "old": "1110001061",
    "new": "110001040"
  },
  {
    "old": "1110001060",
    "new": "110001039"
  },
  {
    "old": "1110001059",
    "new": "110001038"
  },
  {
    "old": "1110001058",
    "new": "110001037"
  },
  {
    "old": "1110001057",
    "new": "110001036"
  },
  {
    "old": "1110001056",
    "new": "110001035"
  },
  {
    "old": "1110001055",
    "new": "110001034"
  },
  {
    "old": "1110001054",
    "new": "110001033"
  },
  {
    "old": "1110001053",
    "new": "110001032"
  },
  {
    "old": "1110001052",
    "new": "110001031"
  },
  {
    "old": "1110001051",
    "new": "110001030"
  },
  {
    "old": "1110001050",
    "new": "110001029"
  },
  {
    "old": "1110001049",
    "new": "110001028"
  },
  {
    "old": "1110001048",
    "new": "110001027"
  },
  {
    "old": "1110001047",
    "new": "110001026"
  },
  {
    "old": "1110001046",
    "new": "110001025"
  },
  {
    "old": "1110001045",
    "new": "110001024"
  },
  {
    "old": "1110001044",
    "new": "110001023"
  },
  {
    "old": "1110001043",
    "new": "110001022"
  },
  {
    "old": "1110001042",
    "new": "110001021"
  },
  {
    "old": "1110001041",
    "new": "110001020"
  },
  {
    "old": "1110001040",
    "new": "110001019"
  },
  {
    "old": "1110001039",
    "new": "110001018"
  },
  {
    "old": "1110001038",
    "new": "110001017"
  },
  {
    "old": "1110001037",
    "new": "110001016"
  },
  {
    "old": "1110001036",
    "new": "110001015"
  },
  {
    "old": "1110001035",
    "new": "110001014"
  },
  {
    "old": "1110001034",
    "new": "110001013"
  },
  {
    "old": "1110001033",
    "new": "110001012"
  },
  {
    "old": "1110001032",
    "new": "110001011"
  },
  {
    "old": "1110001031",
    "new": "110001010"
  },
  {
    "old": "1110001030",
    "new": "110001009"
  },
  {
    "old": "1110001029",
    "new": "110001008"
  },
  {
    "old": "1110001028",
    "new": "110001007"
  },
  {
    "old": "1110001027",
    "new": "110001006"
  },
  {
    "old": "1110001026",
    "new": "110001005"
  },
  {
    "old": "1110001025",
    "new": "110001004"
  },
  {
    "old": "1110001024",
    "new": "110001003"
  },
  {
    "old": "1110001023",
    "new": "110001002"
  },
  {
    "old": "1110001022",
    "new": "110001001"
  },
  {
    "old": "1110001021",
    "new": "110001000"
  },
  {
    "old": "1110001020",
    "new": "110000999"
  },
  {
    "old": "1110001019",
    "new": "110000998"
  },
  {
    "old": "1110001018",
    "new": "110000997"
  },
  {
    "old": "1110001017",
    "new": "110000996"
  },
  {
    "old": "1110001016",
    "new": "110000995"
  },
  {
    "old": "1110001015",
    "new": "110000994"
  },
  {
    "old": "1110001014",
    "new": "110000993"
  },
  {
    "old": "1110001013",
    "new": "110000992"
  },
  {
    "old": "1110001012",
    "new": "110000991"
  },
  {
    "old": "1110001011",
    "new": "110000990"
  },
  {
    "old": "1110001010",
    "new": "110000989"
  },
  {
    "old": "1110001009",
    "new": "110000988"
  },
  {
    "old": "1110001008",
    "new": "110000987"
  },
  {
    "old": "1110001007",
    "new": "110000986"
  },
  {
    "old": "1110001006",
    "new": "110000985"
  },
  {
    "old": "1110001005",
    "new": "110000984"
  },
  {
    "old": "1110001004",
    "new": "110000983"
  },
  {
    "old": "1110001003",
    "new": "110000982"
  },
  {
    "old": "1110001002",
    "new": "110000981"
  },
  {
    "old": "1110001001",
    "new": "110000980"
  },
  {
    "old": "1110001000",
    "new": "110000979"
  },
  {
    "old": "1110000999",
    "new": "110000978"
  },
  {
    "old": "1110000998",
    "new": "110000977"
  },
  {
    "old": "1110000997",
    "new": "110000976"
  },
  {
    "old": "1110000996",
    "new": "110000975"
  },
  {
    "old": "1110000995",
    "new": "110000974"
  },
  {
    "old": "1110000994",
    "new": "110000973"
  },
  {
    "old": "1110000993",
    "new": "110000972"
  },
  {
    "old": "1110000992",
    "new": "110000971"
  },
  {
    "old": "1110000991",
    "new": "110000970"
  },
  {
    "old": "1110000990",
    "new": "110000969"
  },
  {
    "old": "1110000989",
    "new": "110000968"
  },
  {
    "old": "1110000988",
    "new": "110000967"
  },
  {
    "old": "1110000987",
    "new": "110000966"
  },
  {
    "old": "1110000986",
    "new": "110000965"
  },
  {
    "old": "1110000985",
    "new": "110000964"
  },
  {
    "old": "1110000984",
    "new": "110000963"
  },
  {
    "old": "1110000983",
    "new": "110000962"
  },
  {
    "old": "1110000982",
    "new": "110000961"
  },
  {
    "old": "1110000981",
    "new": "110000960"
  },
  {
    "old": "1110000980",
    "new": "110000959"
  },
  {
    "old": "1110000979",
    "new": "110000958"
  },
  {
    "old": "1110000978",
    "new": "110000957"
  },
  {
    "old": "1110000977",
    "new": "110000956"
  },
  {
    "old": "1110000976",
    "new": "110000955"
  },
  {
    "old": "1110000975",
    "new": "110000954"
  },
  {
    "old": "1110000974",
    "new": "110000953"
  },
  {
    "old": "1110000973",
    "new": "110000952"
  },
  {
    "old": "1110000972",
    "new": "110000951"
  },
  {
    "old": "1110000971",
    "new": "110000950"
  },
  {
    "old": "1110000970",
    "new": "110000949"
  },
  {
    "old": "1110000969",
    "new": "110000948"
  },
  {
    "old": "1110000968",
    "new": "110000947"
  },
  {
    "old": "1110000967",
    "new": "110000946"
  },
  {
    "old": "1110000966",
    "new": "110000945"
  },
  {
    "old": "1110000965",
    "new": "110000944"
  },
  {
    "old": "1110000964",
    "new": "110000943"
  },
  {
    "old": "1110000963",
    "new": "110000942"
  },
  {
    "old": "1110000962",
    "new": "110000941"
  },
  {
    "old": "1110000961",
    "new": "110000940"
  },
  {
    "old": "1110000960",
    "new": "110000939"
  },
  {
    "old": "1110000959",
    "new": "110000938"
  },
  {
    "old": "1110000958",
    "new": "110000937"
  },
  {
    "old": "1110000957",
    "new": "110000936"
  },
  {
    "old": "1110000956",
    "new": "110000935"
  },
  {
    "old": "1110000955",
    "new": "110000934"
  },
  {
    "old": "1110000954",
    "new": "110000933"
  },
  {
    "old": "1110000953",
    "new": "110000932"
  },
  {
    "old": "1110000952",
    "new": "110000931"
  },
  {
    "old": "1110000951",
    "new": "110000930"
  },
  {
    "old": "1110000950",
    "new": "110000929"
  },
  {
    "old": "1110000949",
    "new": "110000928"
  },
  {
    "old": "1110000948",
    "new": "110000927"
  },
  {
    "old": "1110000947",
    "new": "110000926"
  },
  {
    "old": "1110000946",
    "new": "110000925"
  },
  {
    "old": "1110000945",
    "new": "110000924"
  },
  {
    "old": "1110000944",
    "new": "110000923"
  },
  {
    "old": "1110000943",
    "new": "110000922"
  },
  {
    "old": "1110000942",
    "new": "110000921"
  },
  {
    "old": "1110000941",
    "new": "110000920"
  },
  {
    "old": "1110000940",
    "new": "110000919"
  },
  {
    "old": "1110000939",
    "new": "110000918"
  },
  {
    "old": "1110000938",
    "new": "110000917"
  },
  {
    "old": "1110000937",
    "new": "110000916"
  },
  {
    "old": "1110000936",
    "new": "110000915"
  },
  {
    "old": "1110000935",
    "new": "110000914"
  },
  {
    "old": "1110000934",
    "new": "110000913"
  },
  {
    "old": "1110000933",
    "new": "110000912"
  },
  {
    "old": "1110000932",
    "new": "110000911"
  },
  {
    "old": "1110000931",
    "new": "110000910"
  },
  {
    "old": "1110000930",
    "new": "110000909"
  },
  {
    "old": "1110000929",
    "new": "110000908"
  },
  {
    "old": "1110000928",
    "new": "110000907"
  },
  {
    "old": "1110000927",
    "new": "110000906"
  },
  {
    "old": "1110000926",
    "new": "110000905"
  },
  {
    "old": "1110000925",
    "new": "110000904"
  },
  {
    "old": "1110000924",
    "new": "110000903"
  },
  {
    "old": "1110000923",
    "new": "110000902"
  },
  {
    "old": "1110000922",
    "new": "110000901"
  },
  {
    "old": "1110000921",
    "new": "110000900"
  },
  {
    "old": "1110000920",
    "new": "110000899"
  },
  {
    "old": "1110000919",
    "new": "110000898"
  },
  {
    "old": "1110000918",
    "new": "110000897"
  },
  {
    "old": "1110000917",
    "new": "110000896"
  },
  {
    "old": "1110000916",
    "new": "110000895"
  },
  {
    "old": "1110000915",
    "new": "110000894"
  },
  {
    "old": "1110000914",
    "new": "110000893"
  },
  {
    "old": "1110000913",
    "new": "110000892"
  },
  {
    "old": "1110000912",
    "new": "110000891"
  },
  {
    "old": "1110000911",
    "new": "110000890"
  },
  {
    "old": "1110000910",
    "new": "110000889"
  },
  {
    "old": "1110000909",
    "new": "110000888"
  },
  {
    "old": "1110000908",
    "new": "110000887"
  },
  {
    "old": "1110000907",
    "new": "110000886"
  },
  {
    "old": "1110000906",
    "new": "110000885"
  },
  {
    "old": "1110000905",
    "new": "110000884"
  },
  {
    "old": "1110000904",
    "new": "110000883"
  },
  {
    "old": "1110000903",
    "new": "110000882"
  },
  {
    "old": "1110000902",
    "new": "110000881"
  },
  {
    "old": "1110000901",
    "new": "110000880"
  },
  {
    "old": "1110000900",
    "new": "110000879"
  },
  {
    "old": "1110000899",
    "new": "110000878"
  },
  {
    "old": "1110000898",
    "new": "110000877"
  },
  {
    "old": "1110000897",
    "new": "110000876"
  },
  {
    "old": "1110000896",
    "new": "110000875"
  },
  {
    "old": "1110000895",
    "new": "110000874"
  },
  {
    "old": "1110000894",
    "new": "110000873"
  },
  {
    "old": "1110000893",
    "new": "110000872"
  },
  {
    "old": "1110000892",
    "new": "110000871"
  },
  {
    "old": "1110000891",
    "new": "110000870"
  },
  {
    "old": "1110000890",
    "new": "110000869"
  },
  {
    "old": "1110000889",
    "new": "110000868"
  },
  {
    "old": "1110000888",
    "new": "110000867"
  },
  {
    "old": "1110000887",
    "new": "110000866"
  },
  {
    "old": "1110000886",
    "new": "110000865"
  },
  {
    "old": "1110000885",
    "new": "110000864"
  },
  {
    "old": "1110000884",
    "new": "110000863"
  },
  {
    "old": "1110000883",
    "new": "110000862"
  },
  {
    "old": "1110000882",
    "new": "110000861"
  },
  {
    "old": "1110000881",
    "new": "110000860"
  },
  {
    "old": "1110000880",
    "new": "110000859"
  },
  {
    "old": "1110000879",
    "new": "110000858"
  },
  {
    "old": "1110000878",
    "new": "110000857"
  },
  {
    "old": "1110000877",
    "new": "110000856"
  },
  {
    "old": "1110000876",
    "new": "110000855"
  },
  {
    "old": "1110000875",
    "new": "110000854"
  },
  {
    "old": "1110000874",
    "new": "110000853"
  },
  {
    "old": "1110000873",
    "new": "110000852"
  },
  {
    "old": "1110000872",
    "new": "110000851"
  },
  {
    "old": "1110000871",
    "new": "110000850"
  },
  {
    "old": "1110000870",
    "new": "110000849"
  },
  {
    "old": "1110000869",
    "new": "110000848"
  },
  {
    "old": "1110000868",
    "new": "110000847"
  },
  {
    "old": "1110000867",
    "new": "110000846"
  },
  {
    "old": "1110000866",
    "new": "110000845"
  },
  {
    "old": "1110000865",
    "new": "110000844"
  },
  {
    "old": "1110000864",
    "new": "110000843"
  },
  {
    "old": "1110000863",
    "new": "110000842"
  },
  {
    "old": "1110000862",
    "new": "110000841"
  },
  {
    "old": "1110000861",
    "new": "110000840"
  },
  {
    "old": "1110000860",
    "new": "110000839"
  },
  {
    "old": "1110000859",
    "new": "110000838"
  },
  {
    "old": "1110000858",
    "new": "110000837"
  },
  {
    "old": "1110000857",
    "new": "110000836"
  },
  {
    "old": "1110000856",
    "new": "110000835"
  },
  {
    "old": "1110000855",
    "new": "110000834"
  },
  {
    "old": "1110000854",
    "new": "110000833"
  },
  {
    "old": "1110000853",
    "new": "110000832"
  },
  {
    "old": "1110000852",
    "new": "110000831"
  },
  {
    "old": "1110000851",
    "new": "110000830"
  },
  {
    "old": "1110000850",
    "new": "110000829"
  },
  {
    "old": "1110000849",
    "new": "110000828"
  },
  {
    "old": "1110000848",
    "new": "110000827"
  },
  {
    "old": "1110000847",
    "new": "110000826"
  },
  {
    "old": "1110000846",
    "new": "110000825"
  },
  {
    "old": "1110000845",
    "new": "110000824"
  },
  {
    "old": "1110000844",
    "new": "110000823"
  },
  {
    "old": "1110000843",
    "new": "110000822"
  },
  {
    "old": "1110000842",
    "new": "110000821"
  },
  {
    "old": "1110000841",
    "new": "110000820"
  },
  {
    "old": "1110000840",
    "new": "110000819"
  },
  {
    "old": "1110000839",
    "new": "110000818"
  },
  {
    "old": "1110000838",
    "new": "110000817"
  },
  {
    "old": "1110000837",
    "new": "110000816"
  },
  {
    "old": "1110000836",
    "new": "110000815"
  },
  {
    "old": "1110000835",
    "new": "110000814"
  },
  {
    "old": "1110000834",
    "new": "110000813"
  },
  {
    "old": "1110000833",
    "new": "110000812"
  },
  {
    "old": "1110000832",
    "new": "110000811"
  },
  {
    "old": "1110000831",
    "new": "110000810"
  },
  {
    "old": "1110000830",
    "new": "110000809"
  },
  {
    "old": "1110000829",
    "new": "110000808"
  },
  {
    "old": "1110000828",
    "new": "110000807"
  },
  {
    "old": "1110000827",
    "new": "110000806"
  },
  {
    "old": "1110000826",
    "new": "110000805"
  },
  {
    "old": "1110000825",
    "new": "110000804"
  },
  {
    "old": "1110000824",
    "new": "110000803"
  },
  {
    "old": "1110000823",
    "new": "110000802"
  },
  {
    "old": "1110000822",
    "new": "110000801"
  },
  {
    "old": "1110000821",
    "new": "110000800"
  },
  {
    "old": "1110000820",
    "new": "110000799"
  },
  {
    "old": "1110000819",
    "new": "110000798"
  },
  {
    "old": "1110000818",
    "new": "110000797"
  },
  {
    "old": "1110000817",
    "new": "110000796"
  },
  {
    "old": "1110000816",
    "new": "110000795"
  },
  {
    "old": "1110000815",
    "new": "110000794"
  },
  {
    "old": "1110000814",
    "new": "110000793"
  },
  {
    "old": "1110000813",
    "new": "110000792"
  },
  {
    "old": "1110000812",
    "new": "110000791"
  },
  {
    "old": "1110000811",
    "new": "110000790"
  },
  {
    "old": "1110000810",
    "new": "110000789"
  },
  {
    "old": "1110000809",
    "new": "110000788"
  },
  {
    "old": "1110000808",
    "new": "110000787"
  },
  {
    "old": "1110000807",
    "new": "110000786"
  },
  {
    "old": "1110000806",
    "new": "110000785"
  },
  {
    "old": "1110000805",
    "new": "110000784"
  },
  {
    "old": "1110000804",
    "new": "110000783"
  },
  {
    "old": "1110000803",
    "new": "110000782"
  },
  {
    "old": "1110000802",
    "new": "110000781"
  },
  {
    "old": "1110000801",
    "new": "110000780"
  },
  {
    "old": "1110000800",
    "new": "110000779"
  },
  {
    "old": "1110000799",
    "new": "110000778"
  },
  {
    "old": "1110000798",
    "new": "110000777"
  },
  {
    "old": "1110000797",
    "new": "110000776"
  },
  {
    "old": "1110000796",
    "new": "110000775"
  },
  {
    "old": "1110000795",
    "new": "110000774"
  },
  {
    "old": "1110000794",
    "new": "110000773"
  },
  {
    "old": "1110000793",
    "new": "110000772"
  },
  {
    "old": "1110000792",
    "new": "110000771"
  },
  {
    "old": "1110000791",
    "new": "110000770"
  },
  {
    "old": "1110000790",
    "new": "110000769"
  },
  {
    "old": "1110000789",
    "new": "110000768"
  },
  {
    "old": "1110000788",
    "new": "110000767"
  },
  {
    "old": "1110000787",
    "new": "110000766"
  },
  {
    "old": "1110000786",
    "new": "110000765"
  },
  {
    "old": "1110000785",
    "new": "110000764"
  },
  {
    "old": "1110000784",
    "new": "110000763"
  },
  {
    "old": "1110000783",
    "new": "110000762"
  },
  {
    "old": "1110000782",
    "new": "110000761"
  },
  {
    "old": "1110000781",
    "new": "110000760"
  },
  {
    "old": "1110000780",
    "new": "110000759"
  },
  {
    "old": "1110000779",
    "new": "110000758"
  },
  {
    "old": "1110000778",
    "new": "110000757"
  },
  {
    "old": "1110000777",
    "new": "110000756"
  },
  {
    "old": "1110000776",
    "new": "110000755"
  },
  {
    "old": "1110000775",
    "new": "110000754"
  },
  {
    "old": "1110000774",
    "new": "110000753"
  },
  {
    "old": "1110000773",
    "new": "110000752"
  },
  {
    "old": "1110000772",
    "new": "110000751"
  },
  {
    "old": "1110000771",
    "new": "110000750"
  },
  {
    "old": "1110000770",
    "new": "110000749"
  },
  {
    "old": "1110000769",
    "new": "110000748"
  },
  {
    "old": "1110000768",
    "new": "110000747"
  },
  {
    "old": "1110000767",
    "new": "110000746"
  },
  {
    "old": "1110000766",
    "new": "110000745"
  },
  {
    "old": "1110000765",
    "new": "110000744"
  },
  {
    "old": "1110000764",
    "new": "110000743"
  },
  {
    "old": "1110000763",
    "new": "110000742"
  },
  {
    "old": "1110000762",
    "new": "110000741"
  },
  {
    "old": "1110000761",
    "new": "110000740"
  },
  {
    "old": "1110000760",
    "new": "110000739"
  },
  {
    "old": "1110000759",
    "new": "110000738"
  },
  {
    "old": "1110000758",
    "new": "110000737"
  },
  {
    "old": "1110000757",
    "new": "110000736"
  },
  {
    "old": "1110000756",
    "new": "110000735"
  },
  {
    "old": "1110000755",
    "new": "110000734"
  },
  {
    "old": "1110000754",
    "new": "110000733"
  },
  {
    "old": "1110000753",
    "new": "110000732"
  },
  {
    "old": "1110000752",
    "new": "110000731"
  },
  {
    "old": "1110000751",
    "new": "110000730"
  },
  {
    "old": "1110000750",
    "new": "110000729"
  },
  {
    "old": "1110000749",
    "new": "110000728"
  },
  {
    "old": "1110000748",
    "new": "110000727"
  },
  {
    "old": "1110000747",
    "new": "110000726"
  },
  {
    "old": "1110000746",
    "new": "110000725"
  },
  {
    "old": "1110000745",
    "new": "110000724"
  },
  {
    "old": "1110000744",
    "new": "110000723"
  },
  {
    "old": "1110000743",
    "new": "110000722"
  },
  {
    "old": "1110000742",
    "new": "110000721"
  },
  {
    "old": "1110000741",
    "new": "110000720"
  },
  {
    "old": "1110000740",
    "new": "110000719"
  },
  {
    "old": "1110000739",
    "new": "110000718"
  },
  {
    "old": "1110000738",
    "new": "110000717"
  },
  {
    "old": "1110000737",
    "new": "110000716"
  },
  {
    "old": "1110000736",
    "new": "110000715"
  },
  {
    "old": "1110000735",
    "new": "110000714"
  },
  {
    "old": "1110000734",
    "new": "110000713"
  },
  {
    "old": "1110000733",
    "new": "110000712"
  },
  {
    "old": "1110000732",
    "new": "110000711"
  },
  {
    "old": "1110000731",
    "new": "110000710"
  },
  {
    "old": "1110000730",
    "new": "110000709"
  },
  {
    "old": "1110000729",
    "new": "110000708"
  },
  {
    "old": "1110000728",
    "new": "110000707"
  },
  {
    "old": "1110000727",
    "new": "110000706"
  },
  {
    "old": "1110000726",
    "new": "110000705"
  },
  {
    "old": "1110000725",
    "new": "110000704"
  },
  {
    "old": "1110000724",
    "new": "110000703"
  },
  {
    "old": "1110000723",
    "new": "110000702"
  },
  {
    "old": "1110000722",
    "new": "110000701"
  },
  {
    "old": "1110000721",
    "new": "110000700"
  },
  {
    "old": "1110000720",
    "new": "110000699"
  },
  {
    "old": "1110000719",
    "new": "110000698"
  },
  {
    "old": "1110000718",
    "new": "110000697"
  },
  {
    "old": "1110000717",
    "new": "110000696"
  },
  {
    "old": "1110000716",
    "new": "110000695"
  },
  {
    "old": "1110000715",
    "new": "110000694"
  },
  {
    "old": "1110000714",
    "new": "110000693"
  },
  {
    "old": "1110000713",
    "new": "110000692"
  },
  {
    "old": "1110000712",
    "new": "110000691"
  },
  {
    "old": "1110000711",
    "new": "110000690"
  },
  {
    "old": "1110000710",
    "new": "110000689"
  },
  {
    "old": "1110000709",
    "new": "110000688"
  },
  {
    "old": "1110000708",
    "new": "110000687"
  },
  {
    "old": "1110000707",
    "new": "110000686"
  },
  {
    "old": "1110000706",
    "new": "110000685"
  },
  {
    "old": "1110000705",
    "new": "110000684"
  },
  {
    "old": "1110000704",
    "new": "110000683"
  },
  {
    "old": "1110000703",
    "new": "110000682"
  },
  {
    "old": "1110000702",
    "new": "110000681"
  },
  {
    "old": "1110000701",
    "new": "110000680"
  },
  {
    "old": "1110000700",
    "new": "110000679"
  },
  {
    "old": "1110000699",
    "new": "110000678"
  },
  {
    "old": "1110000698",
    "new": "110000677"
  },
  {
    "old": "1110000697",
    "new": "110000676"
  },
  {
    "old": "1110000696",
    "new": "110000675"
  },
  {
    "old": "1110000695",
    "new": "110000674"
  },
  {
    "old": "1110000694",
    "new": "110000673"
  },
  {
    "old": "1110000693",
    "new": "110000672"
  },
  {
    "old": "1110000692",
    "new": "110000671"
  },
  {
    "old": "1110000691",
    "new": "110000670"
  },
  {
    "old": "1110000690",
    "new": "110000669"
  },
  {
    "old": "1110000689",
    "new": "110000668"
  },
  {
    "old": "1110000688",
    "new": "110000667"
  },
  {
    "old": "1110000687",
    "new": "110000666"
  },
  {
    "old": "1110000686",
    "new": "110000665"
  },
  {
    "old": "1110000685",
    "new": "110000664"
  },
  {
    "old": "1110000684",
    "new": "110000663"
  },
  {
    "old": "1110000683",
    "new": "110000662"
  },
  {
    "old": "1110000682",
    "new": "110000661"
  },
  {
    "old": "1110000681",
    "new": "110000660"
  },
  {
    "old": "1110000680",
    "new": "110000659"
  },
  {
    "old": "1110000679",
    "new": "110000658"
  },
  {
    "old": "1110000678",
    "new": "110000657"
  },
  {
    "old": "1110000677",
    "new": "110000656"
  },
  {
    "old": "1110000676",
    "new": "110000655"
  },
  {
    "old": "1110000675",
    "new": "110000654"
  },
  {
    "old": "1110000674",
    "new": "110000653"
  },
  {
    "old": "1110000673",
    "new": "110000652"
  },
  {
    "old": "1110000672",
    "new": "110000651"
  },
  {
    "old": "1110000671",
    "new": "110000650"
  },
  {
    "old": "1110000670",
    "new": "110000649"
  },
  {
    "old": "1110000669",
    "new": "110000648"
  },
  {
    "old": "1110000668",
    "new": "110000647"
  },
  {
    "old": "1110000667",
    "new": "110000646"
  },
  {
    "old": "1110000666",
    "new": "110000645"
  },
  {
    "old": "1110000665",
    "new": "110000644"
  },
  {
    "old": "1110000664",
    "new": "110000643"
  },
  {
    "old": "1110000663",
    "new": "110000642"
  },
  {
    "old": "1110000662",
    "new": "110000641"
  },
  {
    "old": "1110000661",
    "new": "110000640"
  },
  {
    "old": "1110000660",
    "new": "110000639"
  },
  {
    "old": "1110000659",
    "new": "110000638"
  },
  {
    "old": "1110000658",
    "new": "110000637"
  },
  {
    "old": "1110000657",
    "new": "110000636"
  },
  {
    "old": "1110000656",
    "new": "110000635"
  },
  {
    "old": "1110000655",
    "new": "110000634"
  },
  {
    "old": "1110000654",
    "new": "110000633"
  },
  {
    "old": "1110000653",
    "new": "110000632"
  },
  {
    "old": "1110000652",
    "new": "110000631"
  },
  {
    "old": "1110000651",
    "new": "110000630"
  },
  {
    "old": "1110000650",
    "new": "110000629"
  },
  {
    "old": "1110000649",
    "new": "110000628"
  },
  {
    "old": "1110000648",
    "new": "110000627"
  },
  {
    "old": "1110000647",
    "new": "110000626"
  },
  {
    "old": "1110000646",
    "new": "110000625"
  },
  {
    "old": "1110000645",
    "new": "110000624"
  },
  {
    "old": "1110000644",
    "new": "110000623"
  },
  {
    "old": "1110000643",
    "new": "110000622"
  },
  {
    "old": "1110000642",
    "new": "110000621"
  },
  {
    "old": "1110000641",
    "new": "110000620"
  },
  {
    "old": "1110000640",
    "new": "110000619"
  },
  {
    "old": "1110000639",
    "new": "110000618"
  },
  {
    "old": "1110000638",
    "new": "110000617"
  },
  {
    "old": "1110000637",
    "new": "110000616"
  },
  {
    "old": "1110000636",
    "new": "110000615"
  },
  {
    "old": "1110000635",
    "new": "110000614"
  },
  {
    "old": "1110000634",
    "new": "110000613"
  },
  {
    "old": "1110000633",
    "new": "110000612"
  },
  {
    "old": "1110000632",
    "new": "110000611"
  },
  {
    "old": "1110000631",
    "new": "110000610"
  },
  {
    "old": "1110000630",
    "new": "110000609"
  },
  {
    "old": "1110000629",
    "new": "110000608"
  },
  {
    "old": "1110000628",
    "new": "110000607"
  },
  {
    "old": "1110000627",
    "new": "110000606"
  },
  {
    "old": "1110000626",
    "new": "110000605"
  },
  {
    "old": "1110000625",
    "new": "110000604"
  },
  {
    "old": "1110000624",
    "new": "110000603"
  },
  {
    "old": "1110000623",
    "new": "110000602"
  },
  {
    "old": "1110000622",
    "new": "110000601"
  },
  {
    "old": "1110000621",
    "new": "110000600"
  },
  {
    "old": "1110000620",
    "new": "110000599"
  },
  {
    "old": "1110000619",
    "new": "110000598"
  },
  {
    "old": "1110000618",
    "new": "110000597"
  },
  {
    "old": "1110000617",
    "new": "110000596"
  },
  {
    "old": "1110000616",
    "new": "110000595"
  },
  {
    "old": "1110000615",
    "new": "110000594"
  },
  {
    "old": "1110000614",
    "new": "110000593"
  },
  {
    "old": "1110000613",
    "new": "110000592"
  },
  {
    "old": "1110000612",
    "new": "110000591"
  },
  {
    "old": "1110000611",
    "new": "110000590"
  },
  {
    "old": "1110000610",
    "new": "110000589"
  },
  {
    "old": "1110000609",
    "new": "110000588"
  },
  {
    "old": "1110000608",
    "new": "110000587"
  },
  {
    "old": "1110000607",
    "new": "110000586"
  },
  {
    "old": "1110000606",
    "new": "110000585"
  },
  {
    "old": "1110000605",
    "new": "110000584"
  },
  {
    "old": "1110000604",
    "new": "110000583"
  },
  {
    "old": "1110000603",
    "new": "110000582"
  },
  {
    "old": "1110000602",
    "new": "110000581"
  },
  {
    "old": "1110000601",
    "new": "110000580"
  },
  {
    "old": "1110000600",
    "new": "110000579"
  },
  {
    "old": "1110000599",
    "new": "110000578"
  },
  {
    "old": "1110000598",
    "new": "110000577"
  },
  {
    "old": "1110000597",
    "new": "110000576"
  },
  {
    "old": "1110000596",
    "new": "110000575"
  },
  {
    "old": "1110000595",
    "new": "110000574"
  },
  {
    "old": "1110000594",
    "new": "110000573"
  },
  {
    "old": "1110000593",
    "new": "110000572"
  },
  {
    "old": "1110000592",
    "new": "110000571"
  },
  {
    "old": "1110000591",
    "new": "110000570"
  },
  {
    "old": "1110000590",
    "new": "110000569"
  },
  {
    "old": "1110000589",
    "new": "110000568"
  },
  {
    "old": "1110000588",
    "new": "110000567"
  },
  {
    "old": "1110000587",
    "new": "110000566"
  },
  {
    "old": "1110000586",
    "new": "110000565"
  },
  {
    "old": "1110000585",
    "new": "110000564"
  },
  {
    "old": "1110000584",
    "new": "110000563"
  },
  {
    "old": "1110000583",
    "new": "110000562"
  },
  {
    "old": "1110000582",
    "new": "110000561"
  },
  {
    "old": "1110000581",
    "new": "110000560"
  },
  {
    "old": "1110000580",
    "new": "110000559"
  },
  {
    "old": "1110000579",
    "new": "110000558"
  },
  {
    "old": "1110000578",
    "new": "110000557"
  },
  {
    "old": "1110000577",
    "new": "110000556"
  },
  {
    "old": "1110000576",
    "new": "110000555"
  },
  {
    "old": "1110000575",
    "new": "110000554"
  },
  {
    "old": "1110000574",
    "new": "110000553"
  },
  {
    "old": "1110000573",
    "new": "110000552"
  },
  {
    "old": "1110000572",
    "new": "110000551"
  },
  {
    "old": "1110000571",
    "new": "110000550"
  },
  {
    "old": "1110000570",
    "new": "110000549"
  },
  {
    "old": "1110000569",
    "new": "110000548"
  },
  {
    "old": "1110000568",
    "new": "110000547"
  },
  {
    "old": "1110000567",
    "new": "110000546"
  },
  {
    "old": "1110000566",
    "new": "110000545"
  },
  {
    "old": "1110000565",
    "new": "110000544"
  },
  {
    "old": "1110000564",
    "new": "110000543"
  },
  {
    "old": "1110000563",
    "new": "110000542"
  },
  {
    "old": "1110000562",
    "new": "110000541"
  },
  {
    "old": "1110000561",
    "new": "110000540"
  },
  {
    "old": "1110000560",
    "new": "110000539"
  },
  {
    "old": "1110000559",
    "new": "110000538"
  },
  {
    "old": "1110000558",
    "new": "110000537"
  },
  {
    "old": "1110000557",
    "new": "110000536"
  },
  {
    "old": "1110000556",
    "new": "110000535"
  },
  {
    "old": "1110000555",
    "new": "110000534"
  },
  {
    "old": "1110000554",
    "new": "110000533"
  },
  {
    "old": "1110000553",
    "new": "110000532"
  },
  {
    "old": "1110000552",
    "new": "110000531"
  },
  {
    "old": "1110000551",
    "new": "110000530"
  },
  {
    "old": "1110000550",
    "new": "110000529"
  },
  {
    "old": "1110000549",
    "new": "110000528"
  },
  {
    "old": "1110000548",
    "new": "110000527"
  },
  {
    "old": "1110000547",
    "new": "110000526"
  },
  {
    "old": "1110000546",
    "new": "110000525"
  },
  {
    "old": "1110000545",
    "new": "110000524"
  },
  {
    "old": "1110000544",
    "new": "110000523"
  },
  {
    "old": "1110000543",
    "new": "110000522"
  },
  {
    "old": "1110000542",
    "new": "110000521"
  },
  {
    "old": "1110000541",
    "new": "110000520"
  },
  {
    "old": "1110000540",
    "new": "110000519"
  },
  {
    "old": "1110000539",
    "new": "110000518"
  },
  {
    "old": "1110000538",
    "new": "110000517"
  },
  {
    "old": "1110000537",
    "new": "110000516"
  },
  {
    "old": "1110000536",
    "new": "110000515"
  },
  {
    "old": "1110000535",
    "new": "110000514"
  },
  {
    "old": "1110000534",
    "new": "110000513"
  },
  {
    "old": "1110000533",
    "new": "110000512"
  },
  {
    "old": "1110000532",
    "new": "110000511"
  },
  {
    "old": "1110000531",
    "new": "110000510"
  },
  {
    "old": "1110000530",
    "new": "110000509"
  },
  {
    "old": "1110000529",
    "new": "110000508"
  },
  {
    "old": "1110000528",
    "new": "110000507"
  },
  {
    "old": "1110000527",
    "new": "110000506"
  },
  {
    "old": "1110000526",
    "new": "110000505"
  },
  {
    "old": "1110000525",
    "new": "110000504"
  },
  {
    "old": "1110000524",
    "new": "110000503"
  },
  {
    "old": "1110000523",
    "new": "110000502"
  },
  {
    "old": "1110000522",
    "new": "110000501"
  },
  {
    "old": "1110000521",
    "new": "110000500"
  },
  {
    "old": "1110000520",
    "new": "110000499"
  },
  {
    "old": "1110000519",
    "new": "110000498"
  },
  {
    "old": "1110000518",
    "new": "110000497"
  },
  {
    "old": "1110000517",
    "new": "110000496"
  },
  {
    "old": "1110000516",
    "new": "110000495"
  },
  {
    "old": "1110000515",
    "new": "110000494"
  },
  {
    "old": "1110000514",
    "new": "110000493"
  },
  {
    "old": "1110000513",
    "new": "110000492"
  },
  {
    "old": "1110000512",
    "new": "110000491"
  },
  {
    "old": "1110000511",
    "new": "110000490"
  },
  {
    "old": "1110000510",
    "new": "110000489"
  },
  {
    "old": "1110000509",
    "new": "110000488"
  },
  {
    "old": "1110000508",
    "new": "110000487"
  },
  {
    "old": "1110000507",
    "new": "110000486"
  },
  {
    "old": "1110000506",
    "new": "110000485"
  },
  {
    "old": "1110000505",
    "new": "110000484"
  },
  {
    "old": "1110000504",
    "new": "110000483"
  },
  {
    "old": "1110000503",
    "new": "110000482"
  },
  {
    "old": "1110000502",
    "new": "110000481"
  },
  {
    "old": "1110000501",
    "new": "110000480"
  },
  {
    "old": "1110000500",
    "new": "110000479"
  },
  {
    "old": "1110000499",
    "new": "110000478"
  },
  {
    "old": "1110000498",
    "new": "110000477"
  },
  {
    "old": "1110000497",
    "new": "110000476"
  },
  {
    "old": "1110000496",
    "new": "110000475"
  },
  {
    "old": "1110000495",
    "new": "110000474"
  },
  {
    "old": "1110000494",
    "new": "110000473"
  },
  {
    "old": "1110000493",
    "new": "110000472"
  },
  {
    "old": "1110000492",
    "new": "110000471"
  },
  {
    "old": "1110000491",
    "new": "110000470"
  },
  {
    "old": "1110000490",
    "new": "110000469"
  },
  {
    "old": "1110000489",
    "new": "110000468"
  },
  {
    "old": "1110000488",
    "new": "110000467"
  },
  {
    "old": "1110000487",
    "new": "110000466"
  },
  {
    "old": "1110000486",
    "new": "110000465"
  },
  {
    "old": "1110000485",
    "new": "110000464"
  },
  {
    "old": "1110000484",
    "new": "110000463"
  },
  {
    "old": "1110000483",
    "new": "110000462"
  },
  {
    "old": "1110000482",
    "new": "110000461"
  },
  {
    "old": "1110000481",
    "new": "110000460"
  },
  {
    "old": "1110000480",
    "new": "110000459"
  },
  {
    "old": "1110000479",
    "new": "110000458"
  },
  {
    "old": "1110000478",
    "new": "110000457"
  },
  {
    "old": "1110000477",
    "new": "110000456"
  },
  {
    "old": "1110000476",
    "new": "110000455"
  },
  {
    "old": "1110000475",
    "new": "110000454"
  },
  {
    "old": "1110000474",
    "new": "110000453"
  },
  {
    "old": "1110000473",
    "new": "110000452"
  },
  {
    "old": "1110000472",
    "new": "110000451"
  },
  {
    "old": "1110000471",
    "new": "110000450"
  },
  {
    "old": "1110000470",
    "new": "110000449"
  },
  {
    "old": "1110000469",
    "new": "110000448"
  },
  {
    "old": "1110000468",
    "new": "110000447"
  },
  {
    "old": "1110000467",
    "new": "110000446"
  },
  {
    "old": "1110000466",
    "new": "110000445"
  },
  {
    "old": "1110000465",
    "new": "110000444"
  },
  {
    "old": "1110000464",
    "new": "110000443"
  },
  {
    "old": "1110000463",
    "new": "110000442"
  },
  {
    "old": "1110000462",
    "new": "110000441"
  },
  {
    "old": "1110000461",
    "new": "110000440"
  },
  {
    "old": "1110000460",
    "new": "110000439"
  },
  {
    "old": "1110000459",
    "new": "110000438"
  },
  {
    "old": "1110000458",
    "new": "110000437"
  },
  {
    "old": "1110000457",
    "new": "110000436"
  },
  {
    "old": "1110000456",
    "new": "110000435"
  },
  {
    "old": "1110000455",
    "new": "110000434"
  },
  {
    "old": "1110000454",
    "new": "110000433"
  },
  {
    "old": "1110000453",
    "new": "110000432"
  },
  {
    "old": "1110000452",
    "new": "110000431"
  },
  {
    "old": "1110000451",
    "new": "110000430"
  },
  {
    "old": "1110000450",
    "new": "110000429"
  },
  {
    "old": "1110000449",
    "new": "110000428"
  },
  {
    "old": "1110000448",
    "new": "110000427"
  },
  {
    "old": "1110000446",
    "new": "110000426"
  },
  {
    "old": "1110000445",
    "new": "110000425"
  },
  {
    "old": "1110000441",
    "new": "110000424"
  },
  {
    "old": "1110000440",
    "new": "110000423"
  },
  {
    "old": "1110000438",
    "new": "110000422"
  },
  {
    "old": "1110000437",
    "new": "110000421"
  },
  {
    "old": "1110000436",
    "new": "110000420"
  },
  {
    "old": "1110000435",
    "new": "110000419"
  },
  {
    "old": "1110000434",
    "new": "110000418"
  },
  {
    "old": "1110000433",
    "new": "110000417"
  },
  {
    "old": "1110000432",
    "new": "110000416"
  },
  {
    "old": "1110000431",
    "new": "110000415"
  },
  {
    "old": "1110000430",
    "new": "110000414"
  },
  {
    "old": "1110000429",
    "new": "110000413"
  },
  {
    "old": "1110000428",
    "new": "110000412"
  },
  {
    "old": "1110000427",
    "new": "110000411"
  },
  {
    "old": "1110000426",
    "new": "110000410"
  },
  {
    "old": "1110000425",
    "new": "110000409"
  },
  {
    "old": "1110000424",
    "new": "110000408"
  },
  {
    "old": "1110000423",
    "new": "110000407"
  },
  {
    "old": "1110000422",
    "new": "110000406"
  },
  {
    "old": "1110000421",
    "new": "110000405"
  },
  {
    "old": "1110000420",
    "new": "110000404"
  },
  {
    "old": "1110000419",
    "new": "110000403"
  },
  {
    "old": "1110000418",
    "new": "110000402"
  },
  {
    "old": "1110000416",
    "new": "110000401"
  },
  {
    "old": "1110000415",
    "new": "110000400"
  },
  {
    "old": "1110000414",
    "new": "110000399"
  },
  {
    "old": "1110000413",
    "new": "110000398"
  },
  {
    "old": "1110000412",
    "new": "110000397"
  },
  {
    "old": "1110000411",
    "new": "110000396"
  },
  {
    "old": "1110000410",
    "new": "110000395"
  },
  {
    "old": "1110000409",
    "new": "110000394"
  },
  {
    "old": "1110000408",
    "new": "110000393"
  },
  {
    "old": "1110000407",
    "new": "110000392"
  },
  {
    "old": "1110000406",
    "new": "110000391"
  },
  {
    "old": "1110000405",
    "new": "110000390"
  },
  {
    "old": "1110000404",
    "new": "110000389"
  },
  {
    "old": "1110000403",
    "new": "110000388"
  },
  {
    "old": "1110000402",
    "new": "110000387"
  },
  {
    "old": "1110000401",
    "new": "110000386"
  },
  {
    "old": "1110000400",
    "new": "110000385"
  },
  {
    "old": "1110000399",
    "new": "110000384"
  },
  {
    "old": "1110000398",
    "new": "110000383"
  },
  {
    "old": "1110000397",
    "new": "110000382"
  },
  {
    "old": "1110000396",
    "new": "110000381"
  },
  {
    "old": "1110000395",
    "new": "110000380"
  },
  {
    "old": "1110000394",
    "new": "110000379"
  },
  {
    "old": "1110000393",
    "new": "110000378"
  },
  {
    "old": "1110000392",
    "new": "110000377"
  },
  {
    "old": "1110000391",
    "new": "110000376"
  },
  {
    "old": "1110000390",
    "new": "110000375"
  },
  {
    "old": "1110000389",
    "new": "110000374"
  },
  {
    "old": "1110000388",
    "new": "110000373"
  },
  {
    "old": "1110000387",
    "new": "110000372"
  },
  {
    "old": "1110000386",
    "new": "110000371"
  },
  {
    "old": "1110000385",
    "new": "110000370"
  },
  {
    "old": "1110000384",
    "new": "110000369"
  },
  {
    "old": "1110000383",
    "new": "110000368"
  },
  {
    "old": "1110000382",
    "new": "110000367"
  },
  {
    "old": "1110000381",
    "new": "110000366"
  },
  {
    "old": "1110000380",
    "new": "110000365"
  },
  {
    "old": "1110000379",
    "new": "110000364"
  },
  {
    "old": "1110000378",
    "new": "110000363"
  },
  {
    "old": "1110000377",
    "new": "110000362"
  },
  {
    "old": "1110000376",
    "new": "110000361"
  },
  {
    "old": "1110000375",
    "new": "110000360"
  },
  {
    "old": "1110000374",
    "new": "110000359"
  },
  {
    "old": "1110000373",
    "new": "110000358"
  },
  {
    "old": "1110000372",
    "new": "110000357"
  },
  {
    "old": "1110000371",
    "new": "110000356"
  },
  {
    "old": "1110000370",
    "new": "110000355"
  },
  {
    "old": "1110000369",
    "new": "110000354"
  },
  {
    "old": "1110000368",
    "new": "110000353"
  },
  {
    "old": "1110000367",
    "new": "110000352"
  },
  {
    "old": "1110000366",
    "new": "110000351"
  },
  {
    "old": "1110000365",
    "new": "110000350"
  },
  {
    "old": "1110000364",
    "new": "110000349"
  },
  {
    "old": "1110000363",
    "new": "110000348"
  },
  {
    "old": "1110000362",
    "new": "110000347"
  },
  {
    "old": "1110000361",
    "new": "110000346"
  },
  {
    "old": "1110000360",
    "new": "110000345"
  },
  {
    "old": "1110000359",
    "new": "110000344"
  },
  {
    "old": "1110000358",
    "new": "110000343"
  },
  {
    "old": "1110000357",
    "new": "110000342"
  },
  {
    "old": "1110000356",
    "new": "110000341"
  },
  {
    "old": "1110000355",
    "new": "110000340"
  },
  {
    "old": "1110000354",
    "new": "110000339"
  },
  {
    "old": "1110000353",
    "new": "110000338"
  },
  {
    "old": "1110000352",
    "new": "110000337"
  },
  {
    "old": "1110000351",
    "new": "110000336"
  },
  {
    "old": "1110000350",
    "new": "110000335"
  },
  {
    "old": "1110000349",
    "new": "110000334"
  },
  {
    "old": "1110000348",
    "new": "110000333"
  },
  {
    "old": "1110000347",
    "new": "110000332"
  },
  {
    "old": "1110000346",
    "new": "110000331"
  },
  {
    "old": "1110000345",
    "new": "110000330"
  },
  {
    "old": "1110000344",
    "new": "110000329"
  },
  {
    "old": "1110000343",
    "new": "110000328"
  },
  {
    "old": "1110000337",
    "new": "110000327"
  },
  {
    "old": "1110000336",
    "new": "110000326"
  },
  {
    "old": "1110000335",
    "new": "110000325"
  },
  {
    "old": "1110000334",
    "new": "110000324"
  },
  {
    "old": "1110000333",
    "new": "110000323"
  },
  {
    "old": "1110000332",
    "new": "110000322"
  },
  {
    "old": "1110000331",
    "new": "110000321"
  },
  {
    "old": "1110000330",
    "new": "110000320"
  },
  {
    "old": "1110000329",
    "new": "110000319"
  },
  {
    "old": "1110000327",
    "new": "110000318"
  },
  {
    "old": "1110000326",
    "new": "110000317"
  },
  {
    "old": "1110000325",
    "new": "110000316"
  },
  {
    "old": "1110000324",
    "new": "110000315"
  },
  {
    "old": "1110000323",
    "new": "110000314"
  },
  {
    "old": "1110000322",
    "new": "110000313"
  },
  {
    "old": "1110000321",
    "new": "110000312"
  },
  {
    "old": "1110000320",
    "new": "110000311"
  },
  {
    "old": "1110000319",
    "new": "110000310"
  },
  {
    "old": "1110000318",
    "new": "110000309"
  },
  {
    "old": "1110000317",
    "new": "110000308"
  },
  {
    "old": "1110000316",
    "new": "110000307"
  },
  {
    "old": "1110000315",
    "new": "110000306"
  },
  {
    "old": "1110000314",
    "new": "110000305"
  },
  {
    "old": "1110000313",
    "new": "110000304"
  },
  {
    "old": "1110000312",
    "new": "110000303"
  },
  {
    "old": "1110000311",
    "new": "110000302"
  },
  {
    "old": "1110000310",
    "new": "110000301"
  },
  {
    "old": "1110000309",
    "new": "110000300"
  },
  {
    "old": "1110000308",
    "new": "110000299"
  },
  {
    "old": "1110000307",
    "new": "110000298"
  },
  {
    "old": "1110000306",
    "new": "110000297"
  },
  {
    "old": "1110000305",
    "new": "110000296"
  },
  {
    "old": "1110000304",
    "new": "110000295"
  },
  {
    "old": "1110000303",
    "new": "110000294"
  },
  {
    "old": "1110000302",
    "new": "110000293"
  },
  {
    "old": "1110000301",
    "new": "110000292"
  },
  {
    "old": "1110000300",
    "new": "110000291"
  },
  {
    "old": "1110000299",
    "new": "110000290"
  },
  {
    "old": "1110000298",
    "new": "110000289"
  },
  {
    "old": "1110000297",
    "new": "110000288"
  },
  {
    "old": "1110000296",
    "new": "110000287"
  },
  {
    "old": "1110000295",
    "new": "110000286"
  },
  {
    "old": "1110000294",
    "new": "110000285"
  },
  {
    "old": "1110000293",
    "new": "110000284"
  },
  {
    "old": "1110000292",
    "new": "110000283"
  },
  {
    "old": "1110000291",
    "new": "110000282"
  },
  {
    "old": "1110000290",
    "new": "110000281"
  },
  {
    "old": "1110000289",
    "new": "110000280"
  },
  {
    "old": "1110000288",
    "new": "110000279"
  },
  {
    "old": "1110000287",
    "new": "110000278"
  },
  {
    "old": "1110000286",
    "new": "110000277"
  },
  {
    "old": "1110000285",
    "new": "110000276"
  },
  {
    "old": "1110000284",
    "new": "110000275"
  },
  {
    "old": "1110000283",
    "new": "110000274"
  },
  {
    "old": "1110000282",
    "new": "110000273"
  },
  {
    "old": "1110000281",
    "new": "110000272"
  },
  {
    "old": "1110000280",
    "new": "110000271"
  },
  {
    "old": "1110000279",
    "new": "110000270"
  },
  {
    "old": "1110000278",
    "new": "110000269"
  },
  {
    "old": "1110000277",
    "new": "110000268"
  },
  {
    "old": "1110000276",
    "new": "110000267"
  },
  {
    "old": "1110000275",
    "new": "110000266"
  },
  {
    "old": "1110000274",
    "new": "110000265"
  },
  {
    "old": "1110000273",
    "new": "110000264"
  },
  {
    "old": "1110000272",
    "new": "110000263"
  },
  {
    "old": "1110000271",
    "new": "110000262"
  },
  {
    "old": "1110000270",
    "new": "110000261"
  },
  {
    "old": "1110000269",
    "new": "110000260"
  },
  {
    "old": "1110000268",
    "new": "110000259"
  },
  {
    "old": "1110000267",
    "new": "110000258"
  },
  {
    "old": "1110000266",
    "new": "110000257"
  },
  {
    "old": "1110000265",
    "new": "110000256"
  },
  {
    "old": "1110000264",
    "new": "110000255"
  },
  {
    "old": "1110000263",
    "new": "110000254"
  },
  {
    "old": "1110000262",
    "new": "110000253"
  },
  {
    "old": "1110000261",
    "new": "110000252"
  },
  {
    "old": "1110000260",
    "new": "110000251"
  },
  {
    "old": "1110000259",
    "new": "110000250"
  },
  {
    "old": "1110000258",
    "new": "110000249"
  },
  {
    "old": "1110000257",
    "new": "110000248"
  },
  {
    "old": "1110000256",
    "new": "110000247"
  },
  {
    "old": "1110000255",
    "new": "110000246"
  },
  {
    "old": "1110000254",
    "new": "110000245"
  },
  {
    "old": "1110000253",
    "new": "110000244"
  },
  {
    "old": "1110000252",
    "new": "110000243"
  },
  {
    "old": "1110000251",
    "new": "110000242"
  },
  {
    "old": "1110000250",
    "new": "110000241"
  },
  {
    "old": "1110000249",
    "new": "110000240"
  },
  {
    "old": "1110000248",
    "new": "110000239"
  },
  {
    "old": "1110000247",
    "new": "110000238"
  },
  {
    "old": "1110000246",
    "new": "110000237"
  },
  {
    "old": "1110000245",
    "new": "110000236"
  },
  {
    "old": "1110000244",
    "new": "110000235"
  },
  {
    "old": "1110000243",
    "new": "110000234"
  },
  {
    "old": "1110000242",
    "new": "110000233"
  },
  {
    "old": "1110000241",
    "new": "110000232"
  },
  {
    "old": "1110000240",
    "new": "110000231"
  },
  {
    "old": "1110000239",
    "new": "110000230"
  },
  {
    "old": "1110000238",
    "new": "110000229"
  },
  {
    "old": "1110000237",
    "new": "110000228"
  },
  {
    "old": "1110000236",
    "new": "110000227"
  },
  {
    "old": "1110000235",
    "new": "110000226"
  },
  {
    "old": "1110000234",
    "new": "110000225"
  },
  {
    "old": "1110000233",
    "new": "110000224"
  },
  {
    "old": "1110000232",
    "new": "110000223"
  },
  {
    "old": "1110000230",
    "new": "110000222"
  },
  {
    "old": "1110000229",
    "new": "110000221"
  },
  {
    "old": "1110000228",
    "new": "110000220"
  },
  {
    "old": "1110000227",
    "new": "110000219"
  },
  {
    "old": "1110000226",
    "new": "110000218"
  },
  {
    "old": "1110000225",
    "new": "110000217"
  },
  {
    "old": "1110000224",
    "new": "110000216"
  },
  {
    "old": "1110000223",
    "new": "110000215"
  },
  {
    "old": "1110000222",
    "new": "110000214"
  },
  {
    "old": "1110000221",
    "new": "110000213"
  },
  {
    "old": "1110000220",
    "new": "110000212"
  },
  {
    "old": "1110000219",
    "new": "110000211"
  },
  {
    "old": "1110000218",
    "new": "110000210"
  },
  {
    "old": "1110000216",
    "new": "110000209"
  },
  {
    "old": "1110000215",
    "new": "110000208"
  },
  {
    "old": "1110000214",
    "new": "110000207"
  },
  {
    "old": "1110000213",
    "new": "110000206"
  },
  {
    "old": "1110000212",
    "new": "110000205"
  },
  {
    "old": "1110000211",
    "new": "110000204"
  },
  {
    "old": "1110000210",
    "new": "110000203"
  },
  {
    "old": "1110000209",
    "new": "110000202"
  },
  {
    "old": "1110000208",
    "new": "110000201"
  },
  {
    "old": "1110000207",
    "new": "110000200"
  },
  {
    "old": "1110000206",
    "new": "110000199"
  },
  {
    "old": "1110000205",
    "new": "110000198"
  },
  {
    "old": "1110000204",
    "new": "110000197"
  },
  {
    "old": "1110000203",
    "new": "110000196"
  },
  {
    "old": "1110000202",
    "new": "110000195"
  },
  {
    "old": "1110000201",
    "new": "110000194"
  },
  {
    "old": "1110000200",
    "new": "110000193"
  },
  {
    "old": "1110000199",
    "new": "110000192"
  },
  {
    "old": "1110000198",
    "new": "110000191"
  },
  {
    "old": "1110000197",
    "new": "110000190"
  },
  {
    "old": "1110000196",
    "new": "110000189"
  },
  {
    "old": "1110000195",
    "new": "110000188"
  },
  {
    "old": "1110000194",
    "new": "110000187"
  },
  {
    "old": "1110000193",
    "new": "110000186"
  },
  {
    "old": "1110000192",
    "new": "110000185"
  },
  {
    "old": "1110000191",
    "new": "110000184"
  },
  {
    "old": "1110000190",
    "new": "110000183"
  },
  {
    "old": "1110000189",
    "new": "110000182"
  },
  {
    "old": "1110000188",
    "new": "110000181"
  },
  {
    "old": "1110000187",
    "new": "110000180"
  },
  {
    "old": "1110000186",
    "new": "110000179"
  },
  {
    "old": "1110000185",
    "new": "110000178"
  },
  {
    "old": "1110000184",
    "new": "110000177"
  },
  {
    "old": "1110000183",
    "new": "110000176"
  },
  {
    "old": "1110000182",
    "new": "110000175"
  },
  {
    "old": "1110000181",
    "new": "110000174"
  },
  {
    "old": "1110000180",
    "new": "110000173"
  },
  {
    "old": "1110000179",
    "new": "110000172"
  },
  {
    "old": "1110000178",
    "new": "110000171"
  },
  {
    "old": "1110000177",
    "new": "110000170"
  },
  {
    "old": "1110000176",
    "new": "110000169"
  },
  {
    "old": "1110000175",
    "new": "110000168"
  },
  {
    "old": "1110000174",
    "new": "110000167"
  },
  {
    "old": "1110000173",
    "new": "110000166"
  },
  {
    "old": "1110000172",
    "new": "110000165"
  },
  {
    "old": "1110000171",
    "new": "110000164"
  },
  {
    "old": "1110000170",
    "new": "110000163"
  },
  {
    "old": "1110000169",
    "new": "110000162"
  },
  {
    "old": "1110000168",
    "new": "110000161"
  },
  {
    "old": "1110000167",
    "new": "110000160"
  },
  {
    "old": "1110000166",
    "new": "110000159"
  },
  {
    "old": "1110000165",
    "new": "110000158"
  },
  {
    "old": "1110000164",
    "new": "110000157"
  },
  {
    "old": "1110000163",
    "new": "110000156"
  },
  {
    "old": "1110000162",
    "new": "110000155"
  },
  {
    "old": "1110000161",
    "new": "110000154"
  },
  {
    "old": "1110000160",
    "new": "110000153"
  },
  {
    "old": "1110000159",
    "new": "110000152"
  },
  {
    "old": "1110000158",
    "new": "110000151"
  },
  {
    "old": "1110000157",
    "new": "110000150"
  },
  {
    "old": "1110000156",
    "new": "110000149"
  },
  {
    "old": "1110000155",
    "new": "110000148"
  },
  {
    "old": "1110000154",
    "new": "110000147"
  },
  {
    "old": "1110000153",
    "new": "110000146"
  },
  {
    "old": "1110000152",
    "new": "110000145"
  },
  {
    "old": "1110000151",
    "new": "110000144"
  },
  {
    "old": "1110000150",
    "new": "110000143"
  },
  {
    "old": "1110000149",
    "new": "110000142"
  },
  {
    "old": "1110000148",
    "new": "110000141"
  },
  {
    "old": "1110000147",
    "new": "110000140"
  },
  {
    "old": "1110000146",
    "new": "110000139"
  },
  {
    "old": "1110000145",
    "new": "110000138"
  },
  {
    "old": "1110000144",
    "new": "110000137"
  },
  {
    "old": "1110000143",
    "new": "110000136"
  },
  {
    "old": "1110000142",
    "new": "110000135"
  },
  {
    "old": "1110000141",
    "new": "110000134"
  },
  {
    "old": "1110000140",
    "new": "110000133"
  },
  {
    "old": "1110000139",
    "new": "110000132"
  },
  {
    "old": "1110000138",
    "new": "110000131"
  },
  {
    "old": "1110000137",
    "new": "110000130"
  },
  {
    "old": "1110000136",
    "new": "110000129"
  },
  {
    "old": "1110000135",
    "new": "110000128"
  },
  {
    "old": "1110000134",
    "new": "110000127"
  },
  {
    "old": "1110000133",
    "new": "110000126"
  },
  {
    "old": "1110000132",
    "new": "110000125"
  },
  {
    "old": "1110000131",
    "new": "110000124"
  },
  {
    "old": "1110000129",
    "new": "110000123"
  },
  {
    "old": "1110000128",
    "new": "110000122"
  },
  {
    "old": "1110000127",
    "new": "110000121"
  },
  {
    "old": "1110000126",
    "new": "110000120"
  },
  {
    "old": "1110000125",
    "new": "110000119"
  },
  {
    "old": "1110000124",
    "new": "110000118"
  },
  {
    "old": "1110000123",
    "new": "110000117"
  },
  {
    "old": "1110000122",
    "new": "110000116"
  },
  {
    "old": "1110000121",
    "new": "110000115"
  },
  {
    "old": "1110000119",
    "new": "110000114"
  },
  {
    "old": "1110000118",
    "new": "110000113"
  },
  {
    "old": "1110000117",
    "new": "110000112"
  },
  {
    "old": "1110000116",
    "new": "110000111"
  },
  {
    "old": "1110000115",
    "new": "110000110"
  },
  {
    "old": "1110000114",
    "new": "110000109"
  },
  {
    "old": "1110000113",
    "new": "110000108"
  },
  {
    "old": "1110000112",
    "new": "110000107"
  },
  {
    "old": "1110000111",
    "new": "110000106"
  },
  {
    "old": "1110000110",
    "new": "110000105"
  },
  {
    "old": "1110000109",
    "new": "110000104"
  },
  {
    "old": "1110000108",
    "new": "110000103"
  },
  {
    "old": "1110000107",
    "new": "110000102"
  },
  {
    "old": "1110000106",
    "new": "110000101"
  },
  {
    "old": "1110000105",
    "new": "110000100"
  },
  {
    "old": "1110000104",
    "new": "110000099"
  },
  {
    "old": "1110000103",
    "new": "110000098"
  },
  {
    "old": "1110000102",
    "new": "110000097"
  },
  {
    "old": "1110000101",
    "new": "110000096"
  },
  {
    "old": "1110000100",
    "new": "110000095"
  },
  {
    "old": "1110000099",
    "new": "110000094"
  },
  {
    "old": "1110000098",
    "new": "110000093"
  },
  {
    "old": "1110000097",
    "new": "110000092"
  },
  {
    "old": "1110000096",
    "new": "110000091"
  },
  {
    "old": "1110000095",
    "new": "110000090"
  },
  {
    "old": "1110000094",
    "new": "110000089"
  },
  {
    "old": "1110000093",
    "new": "110000088"
  },
  {
    "old": "1110000092",
    "new": "110000087"
  },
  {
    "old": "1110000091",
    "new": "110000086"
  },
  {
    "old": "1110000090",
    "new": "110000085"
  },
  {
    "old": "1110000089",
    "new": "110000084"
  },
  {
    "old": "1110000088",
    "new": "110000083"
  },
  {
    "old": "1110000087",
    "new": "110000082"
  },
  {
    "old": "1110000086",
    "new": "110000081"
  },
  {
    "old": "1110000085",
    "new": "110000080"
  },
  {
    "old": "1110000084",
    "new": "110000079"
  },
  {
    "old": "1110000083",
    "new": "110000078"
  },
  {
    "old": "1110000082",
    "new": "110000077"
  },
  {
    "old": "1110000081",
    "new": "110000076"
  },
  {
    "old": "1110000080",
    "new": "110000075"
  },
  {
    "old": "1110000079",
    "new": "110000074"
  },
  {
    "old": "1110000078",
    "new": "110000073"
  },
  {
    "old": "1110000077",
    "new": "110000072"
  },
  {
    "old": "1110000076",
    "new": "110000071"
  },
  {
    "old": "1110000075",
    "new": "110000070"
  },
  {
    "old": "1110000074",
    "new": "110000069"
  },
  {
    "old": "1110000073",
    "new": "110000068"
  },
  {
    "old": "1110000072",
    "new": "110000067"
  },
  {
    "old": "1110000071",
    "new": "110000066"
  },
  {
    "old": "1110000070",
    "new": "110000065"
  },
  {
    "old": "1110000069",
    "new": "110000064"
  },
  {
    "old": "1110000068",
    "new": "110000063"
  },
  {
    "old": "1110000067",
    "new": "110000062"
  },
  {
    "old": "1110000066",
    "new": "110000061"
  },
  {
    "old": "1110000065",
    "new": "110000060"
  },
  {
    "old": "1110000064",
    "new": "110000059"
  },
  {
    "old": "1110000063",
    "new": "110000058"
  },
  {
    "old": "1110000062",
    "new": "110000057"
  },
  {
    "old": "1110000061",
    "new": "110000056"
  },
  {
    "old": "1110000060",
    "new": "110000055"
  },
  {
    "old": "1110000059",
    "new": "110000054"
  },
  {
    "old": "1110000058",
    "new": "110000053"
  },
  {
    "old": "1110000057",
    "new": "110000052"
  },
  {
    "old": "1110000056",
    "new": "110000051"
  },
  {
    "old": "1110000055",
    "new": "110000050"
  },
  {
    "old": "1110000054",
    "new": "110000049"
  },
  {
    "old": "1110000053",
    "new": "110000048"
  },
  {
    "old": "1110000052",
    "new": "110000047"
  },
  {
    "old": "1110000051",
    "new": "110000046"
  },
  {
    "old": "1110000050",
    "new": "110000045"
  },
  {
    "old": "1110000049",
    "new": "110000044"
  },
  {
    "old": "1110000048",
    "new": "110000043"
  },
  {
    "old": "1110000047",
    "new": "110000042"
  },
  {
    "old": "1110000046",
    "new": "110000041"
  },
  {
    "old": "1110000045",
    "new": "110000040"
  },
  {
    "old": "1110000044",
    "new": "110000039"
  },
  {
    "old": "1110000043",
    "new": "110000038"
  },
  {
    "old": "1110000042",
    "new": "110000037"
  },
  {
    "old": "1110000041",
    "new": "110000036"
  },
  {
    "old": "1110000040",
    "new": "110000035"
  },
  {
    "old": "1110000039",
    "new": "110000034"
  },
  {
    "old": "1110000038",
    "new": "110000033"
  },
  {
    "old": "1110000037",
    "new": "110000032"
  },
  {
    "old": "1110000036",
    "new": "110000031"
  },
  {
    "old": "1110000035",
    "new": "110000030"
  },
  {
    "old": "1110000034",
    "new": "110000029"
  },
  {
    "old": "1110000033",
    "new": "110000028"
  },
  {
    "old": "1110000032",
    "new": "110000027"
  },
  {
    "old": "1110000031",
    "new": "110000026"
  },
  {
    "old": "1110000030",
    "new": "110000025"
  },
  {
    "old": "1110000029",
    "new": "110000024"
  },
  {
    "old": "1110000028",
    "new": "110000023"
  },
  {
    "old": "1110000027",
    "new": "110000022"
  },
  {
    "old": "1110000026",
    "new": "110000021"
  },
  {
    "old": "1110000024",
    "new": "110000020"
  },
  {
    "old": "1110000023",
    "new": "110000019"
  },
  {
    "old": "1110000022",
    "new": "110000018"
  },
  {
    "old": "1110000021",
    "new": "110000017"
  },
  {
    "old": "1110000020",
    "new": "110000016"
  },
  {
    "old": "1110000019",
    "new": "110000015"
  },
  {
    "old": "1110000018",
    "new": "110000014"
  },
  {
    "old": "1110000017",
    "new": "110000013"
  },
  {
    "old": "1110000016",
    "new": "110000012"
  },
  {
    "old": "1110000015",
    "new": "110000011"
  },
  {
    "old": "1110000014",
    "new": "110000010"
  },
  {
    "old": "1110000013",
    "new": "110000009"
  },
  {
    "old": "1110000012",
    "new": "110000008"
  },
  {
    "old": "1110000011",
    "new": "110000007"
  },
  {
    "old": "1110000010",
    "new": "110000006"
  },
  {
    "old": "1110000009",
    "new": "110000005"
  },
  {
    "old": "1110000008",
    "new": "110000004"
  },
  {
    "old": "1110000007",
    "new": "110000003"
  },
  {
    "old": "1110000005",
    "new": "110000002"
  },
  {
    "old": "1110000004",
    "new": "110000001"
  }
];
const entities = {
  "hits": "14970", "data": {
    "item": [{
      "text": "-šrqn",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000038.xml adlib1110000039.xml"
    }, {
      "text": "Mryb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000086.xml"
    }, {
      "text": "Qnʾ",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110003316.xml"
    }, {
      "text": "Tmlḥ",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000060.xml"
    }, {
      "text": "b= ʿṯtr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003318.xml"
    }, {
      "text": "b= ḥr= m",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003321.xml"
    }, {
      "text": "bdr",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000321.xml 1110000078.xml"
    }, {
      "text": "bklm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003318.xml"
    }, {
      "text": "bklmy",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "bklnhn",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "bmhl ʿzy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000034.xml"
    }, {
      "text": "bnʾ",
      "occurences": "19",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml"
    }, {
      "text": "bnʾl",
      "occurences": "7",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "bqṯt",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "brg",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000248.xml 1110000391.xml 1110000391.xml 1110001776.xml"
    }, {
      "text": "brm",
      "occurences": "29",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000766.xml adlib1110000765.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000874.xml adlib1110000898.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml adlib1110000897.xml adlib1110000897.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110003343.xml 1110003343.xml 1110003344.xml 1110003344.xml 1110003345.xml 1110003345.xml 1110003391.xml 1110003391.xml"
    }, {
      "text": "brn",
      "occurences": "8",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000250.xml 1110000248.xml 1110001285.xml 1110001285.xml 1110001792.xml 1110001792.xml 1110001797.xml 1110001797.xml"
    }, {
      "text": "brqm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003318.xml"
    }, {
      "text": "brqn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml"
    }, {
      "text": "bry",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000380.xml"
    }, {
      "text": "btln",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "btʿ",
      "occurences": "10",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml 1110000390.xml 1110000390.xml 1110000390.xml 1110000390.xml 1110000390.xml 1110000390.xml 1110000391.xml 1110000391.xml 1110000391.xml"
    }, {
      "text": "btʿn",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003409.xml 1110003410.xml 1110003410.xml 1110003411.xml 1110003411.xml"
    }, {
      "text": "by= lt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000033.xml"
    }, {
      "text": "bydʾl",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000849.xml adlib1110000849.xml adlib1110000848.xml adlib1110000848.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "byn",
      "occurences": "44",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000781.xml adlib1110000758.xml adlib1110000758.xml adlib1110000757.xml adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml adlib1110000399.xml adlib1110000237.xml adlib1110000122.xml adlib1110000122.xml adlib1110000115.xml adlib1110000844.xml adlib1110000841.xml adlib1110000841.xml adlib1110000842.xml adlib1110000843.xml adlib1110000843.xml adlib1110000839.xml adlib1110000838.xml 1110000120.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110001574.xml 1110001576.xml 1110001769.xml 1110001777.xml 1110001801.xml 1110001835.xml 1110001836.xml 1110002530.xml 1110003326.xml 1110003327.xml 1110003401.xml 1110003402.xml 1110003413.xml 1110003414.xml"
    }, {
      "text": "bšmm",
      "occurences": "2",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110002525.xml 1110000225.xml"
    }, {
      "text": "bšmt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000072.xml"
    }, {
      "text": "bʾs",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000777.xml 1110000777.xml"
    }, {
      "text": "bʿ= ṯtr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000251.xml"
    }, {
      "text": "bʿdʾl",
      "occurences": "4",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000065.xml 1110003324.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "bʿl ʾ= wm",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000159.xml"
    }, {
      "text": "bʿl-šbʿn",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "bʿlkrb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000382.xml"
    }, {
      "text": "bʿlm",
      "occurences": "3",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "bʿm",
      "occurences": "3",
      "maintype": "persName",
      "type": "royal",
      "subtype": "not specified",
      "doc": "1110000335.xml 1110000335.xml 1110000336.xml"
    }, {
      "text": "bʿnn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "bʿṯtr",
      "occurences": "8",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000170.xml adlib1110000170.xml adlib1110000169.xml adlib1110000168.xml adlib1110000168.xml adlib1110000167.xml adlib1110000016.xml 1110001845.xml"
    }, {
      "text": "bᶜṯ= tr",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000031.xml"
    }, {
      "text": "bḥgm",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000373.xml adlib1110000371.xml adlib1110000370.xml adlib1110000370.xml"
    }, {
      "text": "bṯm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "d-ḏrʾn",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "d= dn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000032.xml"
    }, {
      "text": "d= hsm",
      "occurences": "13",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml 1110001611.xml"
    }, {
      "text": "dbsw",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "dd= ʾmr",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000849.xml adlib1110000848.xml adlib1110000848.xml adlib1110000850.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "ddn",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000780.xml adlib1110000375.xml 1110000053.xml 1110000055.xml"
    }, {
      "text": "dhr",
      "occurences": "5",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "dhsm",
      "occurences": "4",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml 1110001565.xml"
    }, {
      "text": "dlg",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml 1110003320.xml"
    }, {
      "text": "dlwn",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "dmhn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml adlib1110000086.xml"
    }, {
      "text": "dnm",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "drʿn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000785.xml"
    }, {
      "text": "dtnt",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml"
    }, {
      "text": "dwsm",
      "occurences": "24",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "dΓd˥n",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000034.xml adlib1110000036.xml"
    }, {
      "text": "fhdm",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "fqḍtn",
      "occurences": "11",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "fr= ʿm",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royalWithTitle",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "frʿkrb",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000293.xml 1110001575.xml"
    }, {
      "text": "frʿtm",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "frḫ",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000070.xml 1110000073.xml 1110000407.xml"
    }, {
      "text": "ftrm",
      "occurences": "132",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "fyšn",
      "occurences": "91",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "fʿ= rn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000367.xml"
    }, {
      "text": "fʿrn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000367.xml"
    }, {
      "text": "g= bΓʾ˥n",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000040.xml"
    }, {
      "text": "gbnn",
      "occurences": "6",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000111.xml adlib1110000107.xml adlib1110000075.xml 1110003328.xml"
    }, {
      "text": "gbrm",
      "occurences": "44",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "gbʾ= n",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000046.xml"
    }, {
      "text": "gbʾn",
      "occurences": "29",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000411.xml adlib1110000410.xml adlib1110000410.xml adlib1110000409.xml adlib1110000408.xml adlib1110000112.xml adlib1110000111.xml adlib1110000107.xml adlib1110000107.xml adlib1110000107.xml adlib1110000108.xml adlib1110000049.xml adlib1110000056.xml adlib1110000036.xml adlib1110000075.xml adlib1110000048.xml adlib1110000033.xml adlib1110000047.xml 1110000053.xml 1110000059.xml 1110000066.xml 1110000070.xml 1110000074.xml 1110000076.xml 1110003325.xml 1110003325.xml 1110003328.xml 1110003328.xml"
    }, {
      "text": "gbʾΓn˥",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "gddn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000248.xml"
    }, {
      "text": "gdn",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000107.xml adlib1110000108.xml 1110003328.xml"
    }, {
      "text": "gdrt",
      "occurences": "9",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110000220.xml 1110000220.xml 1110000220.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "glgln",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "grmʿṯt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml"
    }, {
      "text": "grt",
      "occurences": "6",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000171.xml 1110000171.xml 1110000171.xml 1110000171.xml 1110000171.xml 1110000171.xml"
    }, {
      "text": "grtn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001791.xml"
    }, {
      "text": "gw",
      "occurences": "89",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "gyrm",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "gšmm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110001621.xml"
    }, {
      "text": "gʾnn",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "gḥd",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000406.xml"
    }, {
      "text": "gḥḏ",
      "occurences": "3",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000030.xml 1110000064.xml 1110003324.xml"
    }, {
      "text": "hbs",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000240.xml"
    }, {
      "text": "hbsl",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000273.xml adlib1110000273.xml adlib1110000272.xml"
    }, {
      "text": "hfnm",
      "occurences": "14",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "hgrm",
      "occurences": "6",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000243.xml 1110000243.xml 1110000244.xml 1110000244.xml 1110000245.xml 1110000245.xml"
    }, {
      "text": "hkrm",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000038.xml adlib1110000038.xml adlib1110000039.xml adlib1110000039.xml"
    }, {
      "text": "hlkʾmr",
      "occurences": "5",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000812.xml adlib1110000380.xml adlib1110000911.xml 1110000088.xml 1110000785.xml"
    }, {
      "text": "hll",
      "occurences": "30",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110001542.xml 1110001542.xml 1110001553.xml 1110001563.xml 1110001586.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003391.xml 1110003415.xml"
    }, {
      "text": "hlqh",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000788.xml 1110000789.xml"
    }, {
      "text": "hmdn",
      "occurences": "18",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000779.xml adlib1110000385.xml adlib1110000380.xml adlib1110000369.xml adlib1110000367.xml adlib1110000363.xml adlib1110000362.xml adlib1110000362.xml adlib1110000250.xml 1110000248.xml 1110000248.xml 1110000248.xml 1110000391.xml 1110000391.xml 1110001776.xml 1110003320.xml 1110003320.xml"
    }, {
      "text": "hnwm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000783.xml"
    }, {
      "text": "hnʾ",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000040.xml"
    }, {
      "text": "hnʾm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000874.xml"
    }, {
      "text": "hrbt",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml"
    }, {
      "text": "hrgb",
      "occurences": "2",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000213.xml adlib1110000212.xml"
    }, {
      "text": "hrmm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001570.xml"
    }, {
      "text": "hrn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000240.xml adlib1110000233.xml 1110001776.xml"
    }, {
      "text": "hw= bs",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml"
    }, {
      "text": "hwbs",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000787.xml adlib1110000125.xml 1110001842.xml 1110001842.xml"
    }, {
      "text": "hwfm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110002525.xml 1110000225.xml"
    }, {
      "text": "hwfʾl",
      "occurences": "20",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000305.xml adlib1110000304.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110000777.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "hwfʾΓl˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000113.xml"
    }, {
      "text": "hwfʿm",
      "occurences": "34",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000307.xml adlib1110000306.xml adlib1110000884.xml adlib1110000884.xml adlib1110000883.xml adlib1110000883.xml adlib1110000885.xml adlib1110000886.xml adlib1110000886.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "hwfʿśt",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml"
    }, {
      "text": "hwfʿṯt",
      "occurences": "35",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml adlib1110000772.xml adlib1110000320.xml adlib1110000319.xml adlib1110000319.xml adlib1110000318.xml adlib1110000317.xml adlib1110000314.xml adlib1110000314.xml adlib1110000313.xml adlib1110000312.xml adlib1110000311.xml adlib1110000310.xml adlib1110000309.xml adlib1110000308.xml adlib1110000251.xml adlib1110000236.xml adlib1110000235.xml adlib1110000164.xml adlib1110000163.xml adlib1110000163.xml adlib1110000316.xml adlib1110000316.xml adlib1110000315.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "hwtrʿṯt",
      "occurences": "12",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "1110001570.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "hwzn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "hy= br",
      "occurences": "13",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "hybr",
      "occurences": "28",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000903.xml adlib1110000904.xml adlib1110000904.xml adlib1110000902.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "hyśʿʾl",
      "occurences": "14",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "hyṯʿʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000911.xml"
    }, {
      "text": "hʿn",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000782.xml adlib1110000385.xml adlib1110000250.xml adlib1110000250.xml 1110000171.xml 1110000171.xml 1110000248.xml"
    }, {
      "text": "hṯb",
      "occurences": "15",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000248.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "k= brʾl",
      "occurences": "6",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000852.xml adlib1110000853.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml"
    }, {
      "text": "kbr",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000811.xml adlib1110000810.xml adlib1110000809.xml adlib1110000866.xml"
    }, {
      "text": "kbr-ḫll",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003348.xml"
    }, {
      "text": "kbrʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110001893.xml"
    }, {
      "text": "kbšm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000890.xml"
    }, {
      "text": "kdr",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "khlm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003321.xml"
    }, {
      "text": "khnl",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "klbnsšm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "klbt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000241.xml"
    }, {
      "text": "kmdm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "krb",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000388.xml adlib1110000388.xml adlib1110000846.xml"
    }, {
      "text": "krbʾl",
      "occurences": "107",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000812.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000146.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000856.xml adlib1110000820.xml adlib1110000820.xml adlib1110000846.xml adlib1110000824.xml adlib1110000823.xml adlib1110000821.xml adlib1110000822.xml adlib1110000005.xml adlib1110000005.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001785.xml 1110001842.xml 1110001916.xml"
    }, {
      "text": "krbʿṯt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "krdn",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000785.xml"
    }, {
      "text": "krwm",
      "occurences": "44",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "kt= lm",
      "occurences": "7",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000857.xml adlib1110000852.xml adlib1110000836.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml adlib1110000855.xml"
    }, {
      "text": "ktlm",
      "occurences": "53",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000836.xml adlib1110000820.xml adlib1110000820.xml adlib1110000824.xml adlib1110000823.xml adlib1110000821.xml adlib1110000822.xml adlib1110000822.xml adlib1110000005.xml"
    }, {
      "text": "kwkbn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110001770.xml"
    }, {
      "text": "kšḥt",
      "occurences": "7",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000323.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000326.xml"
    }, {
      "text": "kʿdn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000375.xml"
    }, {
      "text": "kḥd",
      "occurences": "35",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml adlib1110000897.xml 1110001565.xml 1110001611.xml"
    }, {
      "text": "kḫbr",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000367.xml adlib1110000367.xml adlib1110000367.xml"
    }, {
      "text": "l- ḥyn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000037.xml"
    }, {
      "text": "lbʾn",
      "occurences": "20",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "lbḫ",
      "occurences": "21",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "lgʾm",
      "occurences": "9",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "lqṭ",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "lqẓ",
      "occurences": "45",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "lġbt",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000914.xml 1110001567.xml 1110001567.xml"
    }, {
      "text": "lśb",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "lḥy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000035.xml"
    }, {
      "text": "lḥym",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000030.xml 1110000052.xml"
    }, {
      "text": "lḥyn",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000109.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "lḥyʾb",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000111.xml adlib1110000107.xml adlib1110000075.xml 1110000074.xml"
    }, {
      "text": "lḥyʿm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000874.xml"
    }, {
      "text": "lḥyʿt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000092.xml"
    }, {
      "text": "lḥyʿṯt",
      "occurences": "18",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000254.xml adlib1110000836.xml adlib1110000890.xml 1110000396.xml 1110000785.xml 1110001770.xml 1110001770.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "lḥyᶜt",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000091.xml adlib1110000091.xml"
    }, {
      "text": "lḥyᶜṯt",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000079.xml 1110000053.xml"
    }, {
      "text": "m= rṯdm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000376.xml 1110000377.xml"
    }, {
      "text": "m= ʿn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000775.xml"
    }, {
      "text": "mblqt",
      "occurences": "6",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000896.xml adlib1110000898.xml adlib1110000898.xml adlib1110000895.xml adlib1110000895.xml adlib1110000897.xml"
    }, {
      "text": "mbḥḍ",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000038.xml adlib1110000039.xml adlib1110000039.xml"
    }, {
      "text": "mdhm",
      "occurences": "19",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000896.xml adlib1110000896.xml adlib1110000895.xml adlib1110000895.xml 1110001611.xml"
    }, {
      "text": "mfrśm",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "mfʿlm",
      "occurences": "88",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "mgdlt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000086.xml"
    }, {
      "text": "mhgwm",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mhqmm",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000849.xml adlib1110000848.xml adlib1110000850.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "mlkkrb",
      "occurences": "10",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml 1110001887.xml 1110001888.xml"
    }, {
      "text": "mlkn",
      "occurences": "44",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mlkt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000407.xml"
    }, {
      "text": "mlšn",
      "occurences": "9",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000283.xml adlib1110000282.xml adlib1110000270.xml adlib1110000269.xml adlib1110000268.xml adlib1110000267.xml adlib1110000266.xml 1110000265.xml 1110003316.xml"
    }, {
      "text": "mlḥn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000914.xml 1110001567.xml 1110001567.xml"
    }, {
      "text": "mnhbm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "mrdm",
      "occurences": "4",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000869.xml adlib1110000868.xml 1110003320.xml"
    }, {
      "text": "mrdʿm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000292.xml"
    }, {
      "text": "mrfdm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "mrqdm",
      "occurences": "17",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml"
    }, {
      "text": "mrs",
      "occurences": "50",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000884.xml adlib1110000883.xml adlib1110000885.xml adlib1110000886.xml adlib1110000005.xml"
    }, {
      "text": "mryb",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000126.xml 1110000391.xml 1110000391.xml"
    }, {
      "text": "mrʾt",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000109.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "mrḫ",
      "occurences": "8",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000331.xml 1110000331.xml 1110000332.xml 1110000332.xml 1110000333.xml 1110000333.xml 1110000334.xml 1110000334.xml"
    }, {
      "text": "mrṯd",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000230.xml 1110003733.xml"
    }, {
      "text": "mrṯdm",
      "occurences": "10",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "mrṯdsmʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000097.xml"
    }, {
      "text": "msbm",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "msk",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000056.xml"
    }, {
      "text": "msqy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000037.xml"
    }, {
      "text": "msʿm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000846.xml"
    }, {
      "text": "mtʿʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000044.xml"
    }, {
      "text": "mtᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000045.xml"
    }, {
      "text": "mwhbm",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000012.xml"
    }, {
      "text": "mwqh",
      "occurences": "9",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000321.xml adlib1110000026.xml adlib1110000109.xml adlib1110000107.xml 1110000069.xml 1110000078.xml 1110003328.xml"
    }, {
      "text": "mwyt",
      "occurences": "13",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000283.xml adlib1110000283.xml adlib1110000282.xml adlib1110000282.xml adlib1110000270.xml adlib1110000269.xml adlib1110000268.xml adlib1110000268.xml adlib1110000267.xml adlib1110000266.xml 1110000265.xml 1110003316.xml 1110003316.xml"
    }, {
      "text": "mwṯbtm",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "my= fʿt",
      "occurences": "7",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "myd= ʿyn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003404.xml"
    }, {
      "text": "myfʿ",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "myfʿt",
      "occurences": "26",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000748.xml adlib1110000748.xml adlib1110000747.xml adlib1110000747.xml adlib1110000746.xml adlib1110000746.xml adlib1110000745.xml adlib1110000745.xml adlib1110000744.xml adlib1110000744.xml adlib1110000744.xml adlib1110000743.xml adlib1110000743.xml adlib1110000743.xml adlib1110000742.xml adlib1110000742.xml adlib1110000742.xml adlib1110000273.xml adlib1110000272.xml adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "mġbtn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001769.xml"
    }, {
      "text": "mśrr",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mškrm",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "mšrqytn",
      "occurences": "9",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "mʾrm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000794.xml"
    }, {
      "text": "mʾḏnm",
      "occurences": "28",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml 1110003348.xml 1110003348.xml 1110003348.xml 1110003348.xml 1110003348.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "mʿdkrb",
      "occurences": "30",
      "maintype": "persName",
      "type": "royal",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000905.xml adlib1110000914.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml 1110000088.xml 1110001567.xml 1110001567.xml 1110001570.xml 1110003318.xml"
    }, {
      "text": "mʿdn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000763.xml"
    }, {
      "text": "mʿdrb= m",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000380.xml"
    }, {
      "text": "mʿdʾl",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "mʿhr",
      "occurences": "23",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "mʿlln",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "mʿn",
      "occurences": "168",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml 1110000100.xml 1110000777.xml 1110000777.xml 1110000777.xml 1110000777.xml"
    }, {
      "text": "mʿnm",
      "occurences": "32",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml 1110003394.xml 1110003395.xml 1110003396.xml 1110003397.xml 1110003398.xml 1110003399.xml"
    }, {
      "text": "mʿrbn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml"
    }, {
      "text": "mʿšqn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000012.xml"
    }, {
      "text": "mΓṣ˥r",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000029.xml"
    }, {
      "text": "mḍyqt",
      "occurences": "92",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "mḍḥym",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "mḏbn",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mḏy",
      "occurences": "20",
      "maintype": "orgName",
      "type": "ethnonym",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml"
    }, {
      "text": "mḏḫrm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000259.xml"
    }, {
      "text": "mḥ= myn",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mḥrṯm",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "mḥylm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003318.xml"
    }, {
      "text": "mḫd",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000374.xml"
    }, {
      "text": "mḫlym",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110001791.xml"
    }, {
      "text": "mḫlyn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "mḫṭrn",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000376.xml 1110000377.xml 1110000377.xml 1110000390.xml 1110000390.xml"
    }, {
      "text": "mṣr",
      "occurences": "94",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000411.xml adlib1110000410.xml adlib1110000410.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000321.xml adlib1110000112.xml adlib1110000110.xml adlib1110000107.xml adlib1110000107.xml adlib1110000030.xml 1110000059.xml 1110000076.xml 1110000078.xml 1110003328.xml"
    }, {
      "text": "mṣrn",
      "occurences": "79",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml"
    }, {
      "text": "mṯwbm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000894.xml"
    }, {
      "text": "n lbm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000870.xml adlib1110000871.xml"
    }, {
      "text": "nbṭkrb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "nbṭyfʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "nbṭʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000053.xml"
    }, {
      "text": "nbṭʿly",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "nbṭʿm",
      "occurences": "52",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000772.xml adlib1110000320.xml adlib1110000319.xml adlib1110000319.xml adlib1110000318.xml adlib1110000318.xml adlib1110000317.xml adlib1110000314.xml adlib1110000314.xml adlib1110000313.xml adlib1110000313.xml adlib1110000312.xml adlib1110000312.xml adlib1110000311.xml adlib1110000311.xml adlib1110000310.xml adlib1110000309.xml adlib1110000308.xml adlib1110000316.xml adlib1110000316.xml adlib1110000315.xml adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml 1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "nfʾ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003321.xml"
    }, {
      "text": "ngy",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "nhfn",
      "occurences": "4",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000228.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "nhmm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000240.xml"
    }, {
      "text": "nkrḥ",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110000100.xml"
    }, {
      "text": "nkrḥm",
      "occurences": "64",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml"
    }, {
      "text": "nmrm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000890.xml"
    }, {
      "text": "nmrn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000375.xml adlib1110000237.xml 1110003318.xml"
    }, {
      "text": "nsrm",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "nswr",
      "occurences": "21",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml adlib1110000067.xml adlib1110000037.xml 1110000072.xml"
    }, {
      "text": "nwf",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000794.xml"
    }, {
      "text": "nšqm",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000016.xml 1110000200.xml 1110001801.xml 1110001801.xml"
    }, {
      "text": "nšʾkrb",
      "occurences": "16",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml adlib1110000368.xml adlib1110000224.xml adlib1110000164.xml adlib1110000163.xml adlib1110000163.xml adlib1110000873.xml 1110000390.xml 1110000390.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "nšʾʾmr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001785.xml"
    }, {
      "text": "nʾd",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000072.xml"
    }, {
      "text": "nʿwt",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "nʿwt ḏt fddm",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "nʿḍ",
      "occurences": "19",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml"
    }, {
      "text": "q= tbn",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml 1110001542.xml 1110001542.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003391.xml 1110003415.xml"
    }, {
      "text": "qdmn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml adlib1110000086.xml"
    }, {
      "text": "qdr",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000028.xml adlib1110000077.xml 1110000073.xml"
    }, {
      "text": "qdΓr˥",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000027.xml"
    }, {
      "text": "qlbn",
      "occurences": "17",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml"
    }, {
      "text": "qlt",
      "occurences": "14",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "qly",
      "occurences": "25",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000896.xml adlib1110000896.xml adlib1110000898.xml adlib1110000895.xml adlib1110000895.xml adlib1110000897.xml adlib1110000897.xml 1110001575.xml"
    }, {
      "text": "qlḥn",
      "occurences": "8",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000120.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110002530.xml 1110003413.xml 1110003414.xml"
    }, {
      "text": "qmš",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000046.xml"
    }, {
      "text": "qnt",
      "occurences": "133",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "qny hwrn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110001563.xml"
    }, {
      "text": "qnʾ",
      "occurences": "13",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000283.xml adlib1110000282.xml adlib1110000270.xml adlib1110000270.xml adlib1110000269.xml adlib1110000269.xml adlib1110000268.xml adlib1110000267.xml adlib1110000267.xml adlib1110000266.xml adlib1110000266.xml 1110000265.xml 1110000265.xml"
    }, {
      "text": "qrn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000035.xml"
    }, {
      "text": "qrnw",
      "occurences": "22",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "qrnʾ",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000224.xml adlib1110000873.xml adlib1110000873.xml"
    }, {
      "text": "qryn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000035.xml"
    }, {
      "text": "qrΓnʾ˥",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000224.xml"
    }, {
      "text": "qt= bn",
      "occurences": "11",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml 1110001542.xml 1110001542.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003391.xml"
    }, {
      "text": "qtb= n",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003394.xml 1110003395.xml 1110003396.xml 1110003397.xml 1110003398.xml 1110003399.xml"
    }, {
      "text": "qtbn",
      "occurences": "269",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000293.xml adlib1110000292.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000279.xml adlib1110000278.xml adlib1110000884.xml adlib1110000884.xml adlib1110000883.xml adlib1110000883.xml adlib1110000874.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000896.xml adlib1110000885.xml adlib1110000885.xml adlib1110000898.xml adlib1110000898.xml adlib1110000898.xml adlib1110000898.xml adlib1110000906.xml adlib1110000903.xml adlib1110000895.xml adlib1110000895.xml adlib1110000897.xml adlib1110000897.xml adlib1110000897.xml adlib1110000886.xml adlib1110000886.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000018.xml 1110000335.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001563.xml 1110001565.xml 1110001565.xml 1110001586.xml 1110001611.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003364.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml 1110003388.xml 1110003388.xml 1110003389.xml 1110003389.xml 1110003389.xml 1110003389.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003392.xml 1110003392.xml 1110003393.xml 1110003393.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003399.xml"
    }, {
      "text": "qwmm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "qyhrn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "qynt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000035.xml"
    }, {
      "text": "qśmm",
      "occurences": "18",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml"
    }, {
      "text": "qṭb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110001770.xml"
    }, {
      "text": "qṭntn",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "r= mtm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000158.xml"
    }, {
      "text": "r= ymm",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000782.xml adlib1110000782.xml"
    }, {
      "text": "r= ḥbn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110000243.xml 1110000244.xml 1110000245.xml"
    }, {
      "text": "rbbm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001612.xml"
    }, {
      "text": "rbḥ",
      "occurences": "21",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "rbḥm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "rdmn",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "rdʿ",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "rfzn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml"
    }, {
      "text": "rfšn",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000368.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001776.xml"
    }, {
      "text": "rgmtm",
      "occurences": "20",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "rkbn",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "rssʿdm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003321.xml"
    }, {
      "text": "rtbn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000305.xml adlib1110000304.xml adlib1110000113.xml"
    }, {
      "text": "rwym",
      "occurences": "4",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000237.xml 1110000171.xml 1110000171.xml 1110001842.xml"
    }, {
      "text": "ry= mm",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000782.xml adlib1110000385.xml"
    }, {
      "text": "rybm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "ryd= n",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110001570.xml"
    }, {
      "text": "rymm",
      "occurences": "59",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000782.xml adlib1110000780.xml adlib1110000779.xml adlib1110000387.xml adlib1110000379.xml adlib1110000374.xml adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml adlib1110000368.xml adlib1110000368.xml adlib1110000367.xml adlib1110000367.xml adlib1110000366.xml adlib1110000365.xml adlib1110000364.xml adlib1110000250.xml adlib1110000250.xml adlib1110000233.xml adlib1110000228.xml adlib1110000086.xml adlib1110000084.xml adlib1110000011.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000243.xml 1110000243.xml 1110000243.xml 1110000243.xml 1110000244.xml 1110000244.xml 1110000244.xml 1110000244.xml 1110000245.xml 1110000245.xml 1110000245.xml 1110000245.xml 1110000248.xml 1110000248.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000391.xml 1110000391.xml 1110000391.xml 1110000391.xml 1110001776.xml 1110001776.xml 1110003320.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "rymn",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000856.xml adlib1110000016.xml 1110000243.xml 1110000244.xml 1110000245.xml"
    }, {
      "text": "ryʿ= n",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "1110001563.xml"
    }, {
      "text": "ršḥm",
      "occurences": "12",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "rʾb",
      "occurences": "5",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000112.xml adlib1110000107.xml 1110000076.xml"
    }, {
      "text": "rʾbm",
      "occurences": "45",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "rʾbʿm",
      "occurences": "15",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "rḍw t",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000031.xml"
    }, {
      "text": "rḍwn",
      "occurences": "7",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "rḥb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000015.xml"
    }, {
      "text": "rḥbn",
      "occurences": "5",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000369.xml adlib1110000240.xml adlib1110000079.xml 1110003320.xml"
    }, {
      "text": "rḥbtn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000391.xml"
    }, {
      "text": "rṣfm",
      "occurences": "19",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "rṯd",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000102.xml adlib1110000044.xml"
    }, {
      "text": "rṯdn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000072.xml"
    }, {
      "text": "rṯdšmsm",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "rṯdʾl",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000066.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "s= mʿ",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml"
    }, {
      "text": "s= mʿm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000388.xml"
    }, {
      "text": "sbʾ",
      "occurences": "217",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000792.xml adlib1110000399.xml adlib1110000369.xml adlib1110000337.xml adlib1110000237.xml adlib1110000228.xml adlib1110000228.xml adlib1110000222.xml adlib1110000221.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000159.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000129.xml adlib1110000856.xml adlib1110000844.xml adlib1110000841.xml adlib1110000841.xml adlib1110000820.xml adlib1110000846.xml adlib1110000842.xml adlib1110000824.xml adlib1110000843.xml adlib1110000843.xml adlib1110000823.xml adlib1110000823.xml adlib1110000821.xml adlib1110000821.xml adlib1110000839.xml adlib1110000822.xml adlib1110000038.xml adlib1110000039.xml adlib1110000838.xml adlib1110000016.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml 1110000120.xml 1110000172.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000390.xml 1110000390.xml 1110000397.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110000784.xml 1110001574.xml 1110001574.xml 1110001576.xml 1110001576.xml 1110001769.xml 1110001776.xml 1110001777.xml 1110001777.xml 1110001801.xml 1110001916.xml 1110002530.xml 1110003401.xml 1110003401.xml 1110003402.xml 1110003402.xml 1110003413.xml 1110003414.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml 1110000384.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "sflyn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000012.xml"
    }, {
      "text": "sfwtm",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "shrm",
      "occurences": "17",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml"
    }, {
      "text": "shrt= n",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "slf",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000790.xml"
    }, {
      "text": "slm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000042.xml 1110000407.xml"
    }, {
      "text": "slm= n",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000156.xml adlib1110000155.xml"
    }, {
      "text": "slmb= w",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000409.xml 1110003328.xml"
    }, {
      "text": "slmn",
      "occurences": "10",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000337.xml adlib1110000337.xml adlib1110000337.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml"
    }, {
      "text": "slmt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000046.xml"
    }, {
      "text": "slqn",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "slḥm",
      "occurences": "46",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "slḥn",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110000220.xml 1110000390.xml 1110003315.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "sm hʿly",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000399.xml"
    }, {
      "text": "sm= hkrb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000911.xml"
    }, {
      "text": "sm= hʿly",
      "occurences": "18",
      "maintype": "persName",
      "type": "royal",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000852.xml adlib1110000853.xml adlib1110000853.xml adlib1110000854.xml adlib1110000854.xml adlib1110000854.xml adlib1110000855.xml adlib1110000855.xml adlib1110000855.xml 1110000120.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110002530.xml 1110003413.xml 1110003414.xml"
    }, {
      "text": "sm= ʿy",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000391.xml"
    }, {
      "text": "smh- wtr",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000018.xml"
    }, {
      "text": "smh= ʿly",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withoutTitle",
      "doc": "1110003403.xml"
    }, {
      "text": "smhkrb",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml"
    }, {
      "text": "smhsmʿ",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "smhwtr",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000884.xml adlib1110000883.xml adlib1110000885.xml adlib1110000886.xml"
    }, {
      "text": "smhyfʿ",
      "occurences": "10",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000748.xml adlib1110000748.xml adlib1110000747.xml adlib1110000747.xml adlib1110000746.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "smhʿly",
      "occurences": "8",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000844.xml adlib1110000841.xml adlib1110000842.xml adlib1110000843.xml adlib1110000839.xml adlib1110000104.xml adlib1110000101.xml adlib1110000838.xml"
    }, {
      "text": "smnm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000248.xml"
    }, {
      "text": "smydʿ",
      "occurences": "23",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "smyʿm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml 1110001564.xml"
    }, {
      "text": "smʿ",
      "occurences": "7",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000857.xml adlib1110000836.xml 1110001842.xml 1110001842.xml 1110003318.xml 1110003318.xml 1110003318.xml"
    }, {
      "text": "smʿy",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000233.xml adlib1110000031.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001776.xml"
    }, {
      "text": "smᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000048.xml"
    }, {
      "text": "smᶜy",
      "occurences": "1",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "sqmn",
      "occurences": "12",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000914.xml adlib1110000914.xml adlib1110000914.xml adlib1110000914.xml adlib1110000914.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml"
    }, {
      "text": "sqny",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001575.xml"
    }, {
      "text": "srʿ",
      "occurences": "10",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "sybn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000915.xml"
    }, {
      "text": "syn",
      "occurences": "35",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000762.xml adlib1110000762.xml adlib1110000761.xml adlib1110000761.xml adlib1110000761.xml adlib1110000760.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml adlib1110000759.xml adlib1110000758.xml adlib1110000758.xml adlib1110000757.xml adlib1110000757.xml adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000743.xml adlib1110000742.xml adlib1110000742.xml adlib1110000122.xml adlib1110000115.xml adlib1110000115.xml 1110001835.xml 1110001836.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml 1110001897.xml 1110001898.xml 1110001905.xml"
    }, {
      "text": "s¹ʿdm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001612.xml"
    }, {
      "text": "sʾrn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003318.xml 1110003318.xml"
    }, {
      "text": "sʿd",
      "occurences": "41",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000406.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml"
    }, {
      "text": "sʿd= tʾlb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000390.xml"
    }, {
      "text": "sʿdm",
      "occurences": "25",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml 1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "sʿdmšm",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000248.xml 1110000248.xml 1110000248.xml"
    }, {
      "text": "sʿdtʾl= b",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000376.xml 1110000377.xml"
    }, {
      "text": "sʿdtʾlb",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000390.xml 1110000390.xml"
    }, {
      "text": "sʿdšms",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000391.xml 1110000391.xml"
    }, {
      "text": "sʿdšmsm",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml"
    }, {
      "text": "sʿdʾl",
      "occurences": "9",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000213.xml adlib1110000212.xml adlib1110000109.xml adlib1110000107.xml adlib1110000071.xml 1110000172.xml 1110000397.xml 1110003324.xml 1110003328.xml"
    }, {
      "text": "sʿdʾwm",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "sʿdʿṯtr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "sʿdṯwn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000213.xml adlib1110000212.xml"
    }, {
      "text": "sΓl˥mΓb˥w",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000040.xml"
    }, {
      "text": "sᶜdʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000064.xml"
    }, {
      "text": "sḫymm",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000243.xml 1110000244.xml 1110000245.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110001285.xml 1110001285.xml 1110001792.xml 1110001792.xml 1110001797.xml 1110001797.xml"
    }, {
      "text": "t= rʿt",
      "occurences": "4",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110001776.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "t= ʾlb",
      "occurences": "3",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000375.xml 1110003320.xml"
    }, {
      "text": "tb= nw",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000898.xml adlib1110000897.xml"
    }, {
      "text": "tbnw",
      "occurences": "17",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml 1110001565.xml 1110001611.xml"
    }, {
      "text": "tbʾ",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000030.xml adlib1110000029.xml"
    }, {
      "text": "tbʿkr= b",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000785.xml"
    }, {
      "text": "tbʿkrb",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000825.xml adlib1110000826.xml 1110001842.xml"
    }, {
      "text": "tbʿm",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000213.xml adlib1110000212.xml"
    }, {
      "text": "tdd",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000063.xml"
    }, {
      "text": "tfš",
      "occurences": "44",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "tlnn",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "tlṭ",
      "occurences": "5",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000914.xml adlib1110000914.xml 1110001567.xml 1110001567.xml 1110001567.xml"
    }, {
      "text": "tmlḥ",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000407.xml"
    }, {
      "text": "tmnʿ",
      "occurences": "161",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml adlib1110000005.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110003340.xml 1110003340.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003388.xml 1110003389.xml 1110003389.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003399.xml 1110003399.xml 1110003399.xml 1110003415.xml"
    }, {
      "text": "tmsm",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "tnzbn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000335.xml 1110000335.xml 1110000336.xml"
    }, {
      "text": "tnʿm",
      "occurences": "20",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "tr= ʿt",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000228.xml"
    }, {
      "text": "trʿm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "trʿt",
      "occurences": "15",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000387.xml adlib1110000379.xml adlib1110000374.xml adlib1110000368.xml adlib1110000367.xml adlib1110000366.xml adlib1110000365.xml adlib1110000364.xml adlib1110000363.xml adlib1110000363.xml adlib1110000362.xml adlib1110000233.xml 1110000376.xml 1110000377.xml 1110000391.xml"
    }, {
      "text": "twdd",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000042.xml"
    }, {
      "text": "tywsm",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "tʾ= lb",
      "occurences": "6",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000368.xml adlib1110000366.xml adlib1110000086.xml 1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "tʾlb",
      "occurences": "100",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml adlib1110000782.xml adlib1110000782.xml adlib1110000782.xml adlib1110000782.xml adlib1110000782.xml adlib1110000780.xml adlib1110000780.xml adlib1110000779.xml adlib1110000779.xml adlib1110000779.xml adlib1110000392.xml adlib1110000392.xml adlib1110000388.xml adlib1110000387.xml adlib1110000387.xml adlib1110000386.xml adlib1110000385.xml adlib1110000379.xml adlib1110000379.xml adlib1110000379.xml adlib1110000374.xml adlib1110000373.xml adlib1110000371.xml adlib1110000371.xml adlib1110000370.xml adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml adlib1110000368.xml adlib1110000368.xml adlib1110000368.xml adlib1110000368.xml adlib1110000367.xml adlib1110000367.xml adlib1110000366.xml adlib1110000366.xml adlib1110000365.xml adlib1110000364.xml adlib1110000363.xml adlib1110000363.xml adlib1110000363.xml adlib1110000362.xml adlib1110000362.xml adlib1110000362.xml adlib1110000250.xml adlib1110000250.xml adlib1110000233.xml adlib1110000228.xml adlib1110000228.xml adlib1110000086.xml adlib1110000084.xml adlib1110000011.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110000243.xml 1110000243.xml 1110000243.xml 1110000243.xml 1110000244.xml 1110000244.xml 1110000244.xml 1110000244.xml 1110000245.xml 1110000245.xml 1110000245.xml 1110000245.xml 1110000248.xml 1110000248.xml 1110000248.xml 1110000248.xml 1110000248.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000391.xml 1110000391.xml 1110000391.xml 1110000391.xml 1110001776.xml 1110001776.xml 1110001776.xml 1110001791.xml 1110003320.xml 1110003320.xml 1110003320.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "tʾlqm",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000248.xml 1110000248.xml"
    }, {
      "text": "tʿly",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000071.xml"
    }, {
      "text": "tḥrbhn",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml"
    }, {
      "text": "tḥyw",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000110.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "tḫbṯ",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000044.xml 1110000059.xml"
    }, {
      "text": "wd",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110000015.xml"
    }, {
      "text": "wddʾl",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000211.xml adlib1110000016.xml adlib1110000016.xml adlib1110000016.xml"
    }, {
      "text": "wddΓʾl˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000158.xml"
    }, {
      "text": "wdm",
      "occurences": "76",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000237.xml adlib1110000896.xml adlib1110000896.xml adlib1110000898.xml adlib1110000898.xml adlib1110002525.xml adlib1110000895.xml adlib1110000090.xml adlib1110000897.xml 1110000225.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "wdʾ= b",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "wdʾl",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml"
    }, {
      "text": "wfd",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000050.xml"
    }, {
      "text": "wgʾ",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000067.xml 1110000064.xml 1110003324.xml"
    }, {
      "text": "whbm",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000743.xml adlib1110000742.xml adlib1110000742.xml 1110001770.xml 1110001770.xml"
    }, {
      "text": "whbʾl",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000409.xml adlib1110000102.xml adlib1110000047.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000390.xml 1110001776.xml 1110003328.xml"
    }, {
      "text": "whbʾwm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "whbΓʾw˥m",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000102.xml"
    }, {
      "text": "whbΓʾ˥l",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "whty",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110000100.xml"
    }, {
      "text": "wnb",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "wq hʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000079.xml"
    }, {
      "text": "wqbm",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "wrfw",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml"
    }, {
      "text": "wrqm",
      "occurences": "45",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "wrḫ",
      "occurences": "37",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml 1110001575.xml"
    }, {
      "text": "wrḫn",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ws²ḥt",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110001612.xml"
    }, {
      "text": "wtr",
      "occurences": "59",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000812.xml adlib1110000240.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000856.xml adlib1110000820.xml adlib1110000820.xml adlib1110000824.xml adlib1110000823.xml adlib1110000821.xml adlib1110000822.xml adlib1110000005.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001769.xml 1110001801.xml"
    }, {
      "text": "wtrm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "wʿln",
      "occurences": "57",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "wΓd˥m",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000092.xml"
    }, {
      "text": "wḥyn",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000248.xml"
    }, {
      "text": "y= dʿʾb",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000292.xml"
    }, {
      "text": "y= hrḥb",
      "occurences": "2",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "y= ḥmn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000866.xml adlib1110000866.xml"
    }, {
      "text": "y= ḥḍb",
      "occurences": "3",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "y= ḫḍf",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000375.xml"
    }, {
      "text": "y= ṯbr",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "ybḥr= Γʾ˥l",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "yd= ʿʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000240.xml"
    }, {
      "text": "ydm",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ydʿʾb",
      "occurences": "133",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withoutTitle",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000758.xml adlib1110000757.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000289.xml adlib1110000288.xml adlib1110000288.xml adlib1110000287.xml adlib1110000287.xml adlib1110000286.xml adlib1110000286.xml adlib1110000285.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000122.xml adlib1110000115.xml adlib1110000857.xml adlib1110000836.xml adlib1110000836.xml adlib1110000874.xml adlib1110000874.xml adlib1110000905.xml adlib1110000837.xml adlib1110000837.xml adlib1110000896.xml adlib1110000896.xml adlib1110000896.xml adlib1110000896.xml adlib1110000898.xml adlib1110000906.xml adlib1110000903.xml adlib1110000895.xml adlib1110000895.xml adlib1110000897.xml adlib1110000897.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110000220.xml 1110001542.xml 1110001542.xml 1110001563.xml 1110001575.xml 1110001586.xml 1110001611.xml 1110001611.xml 1110001835.xml 1110001836.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003388.xml 1110003388.xml 1110003389.xml 1110003391.xml 1110003415.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ydʿʾl",
      "occurences": "30",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000758.xml adlib1110000758.xml adlib1110000757.xml adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml adlib1110000125.xml adlib1110000122.xml adlib1110000122.xml adlib1110000115.xml adlib1110000870.xml adlib1110000836.xml adlib1110000836.xml adlib1110000846.xml adlib1110000871.xml 1110001769.xml 1110001801.xml 1110001802.xml 1110001835.xml 1110001836.xml 1110001887.xml 1110001888.xml 1110001916.xml 1110003406.xml 1110003408.xml"
    }, {
      "text": "yfrʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000367.xml"
    }, {
      "text": "yfʿ",
      "occurences": "9",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "yfʿn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000241.xml adlib1110000890.xml"
    }, {
      "text": "yfʿt",
      "occurences": "21",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000772.xml adlib1110000320.xml adlib1110000319.xml adlib1110000319.xml adlib1110000318.xml adlib1110000318.xml adlib1110000317.xml adlib1110000314.xml adlib1110000314.xml adlib1110000313.xml adlib1110000313.xml adlib1110000312.xml adlib1110000312.xml adlib1110000311.xml adlib1110000311.xml adlib1110000310.xml adlib1110000309.xml adlib1110000308.xml adlib1110000316.xml adlib1110000316.xml adlib1110000315.xml"
    }, {
      "text": "ygl",
      "occurences": "23",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003388.xml 1110003388.xml 1110003389.xml"
    }, {
      "text": "yhgl",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "yhnʿm",
      "occurences": "30",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000812.xml adlib1110000292.xml adlib1110000203.xml adlib1110000884.xml adlib1110000884.xml adlib1110000883.xml adlib1110000883.xml adlib1110000885.xml adlib1110000038.xml adlib1110000039.xml adlib1110000886.xml adlib1110000886.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000018.xml 1110001563.xml 1110001586.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "yhqm",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000828.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml"
    }, {
      "text": "yhrʿš",
      "occurences": "9",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000038.xml adlib1110000039.xml 1110003315.xml"
    }, {
      "text": "yhrḥb",
      "occurences": "7",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000250.xml 1110000248.xml 1110000248.xml 1110000391.xml 1110001776.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "yhskr",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000779.xml 1110003320.xml"
    }, {
      "text": "yhwḍʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000888.xml"
    }, {
      "text": "yhyfʿ",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000373.xml adlib1110000371.xml adlib1110000370.xml"
    }, {
      "text": "yhyṯʿ",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000811.xml adlib1110000811.xml adlib1110000811.xml adlib1110000810.xml adlib1110000810.xml adlib1110000810.xml adlib1110000809.xml adlib1110000809.xml adlib1110000809.xml 1110003348.xml 1110003348.xml 1110003348.xml"
    }, {
      "text": "yhʿn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001564.xml"
    }, {
      "text": "yhḥmd",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000307.xml adlib1110000306.xml"
    }, {
      "text": "ykn",
      "occurences": "9",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "ykrbmlk",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withoutTitle",
      "doc": "adlib1110000158.xml"
    }, {
      "text": "ylqẓ",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000110.xml adlib1110000107.xml adlib1110000071.xml adlib1110000042.xml 1110000060.xml 1110003328.xml"
    }, {
      "text": "ylṭ",
      "occurences": "45",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ymyṯ",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000065.xml 1110003324.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "ynf",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000399.xml adlib1110000292.xml adlib1110000846.xml 1110000120.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110002530.xml 1110003413.xml 1110003414.xml"
    }, {
      "text": "ynfʾ",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ynhb",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royalWithTitle",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "ynʿm",
      "occurences": "15",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000323.xml 1110000323.xml 1110000324.xml 1110000324.xml 1110000324.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000396.xml 1110000326.xml 1110000326.xml 1110000326.xml 1110000326.xml"
    }, {
      "text": "ynʿmʾl",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000065.xml 1110003324.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "yqd= mʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110001845.xml"
    }, {
      "text": "yqdm= ʾl",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000785.xml 1110000785.xml"
    }, {
      "text": "yqhmlk",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000866.xml"
    }, {
      "text": "yr= m",
      "occurences": "4",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000228.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "yrfʾ",
      "occurences": "17",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml 1110001611.xml"
    }, {
      "text": "yrm",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000375.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001776.xml"
    }, {
      "text": "yrsm",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000243.xml 1110000244.xml 1110000245.xml"
    }, {
      "text": "yrybm",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000331.xml 1110000332.xml 1110000333.xml 1110000334.xml"
    }, {
      "text": "yrḥb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "ys= ʿdʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000873.xml"
    }, {
      "text": "ysl",
      "occurences": "4",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000880.xml adlib1110000879.xml adlib1110000840.xml adlib1110000881.xml"
    }, {
      "text": "ysmʿʾl",
      "occurences": "9",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000409.xml adlib1110000110.xml adlib1110000063.xml adlib1110002525.xml 1110000060.xml 1110000225.xml 1110003324.xml 1110003328.xml 1110003328.xml"
    }, {
      "text": "ysmᶜ ʾ l",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000031.xml"
    }, {
      "text": "ysmᶜʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000107.xml"
    }, {
      "text": "ysrm",
      "occurences": "2",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000038.xml adlib1110000039.xml"
    }, {
      "text": "ysrn",
      "occurences": "226",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000203.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ywnm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000046.xml"
    }, {
      "text": "yzd",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000305.xml adlib1110000304.xml adlib1110000113.xml"
    }, {
      "text": "yzʾn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001564.xml"
    }, {
      "text": "yġbr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "yġnm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "yšhrmlk",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml adlib1110000232.xml"
    }, {
      "text": "yšhrʾl",
      "occurences": "7",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "yšmr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000890.xml"
    }, {
      "text": "yšrḥʾl",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "yšrḥʿm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000908.xml adlib1110000907.xml"
    }, {
      "text": "yšΓh˥= rmlk",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml"
    }, {
      "text": "yšḥrʿm",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "yšṭ",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000825.xml adlib1110000826.xml"
    }, {
      "text": "yʾmn",
      "occurences": "2",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "yʾwsʾ= l",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000073.xml"
    }, {
      "text": "yʾwsʾl",
      "occurences": "8",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml 1110003733.xml"
    }, {
      "text": "yʾzl",
      "occurences": "5",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "yʾzm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000782.xml 1110000391.xml"
    }, {
      "text": "yʾzn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001787.xml"
    }, {
      "text": "yʾḏn",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "yʿd",
      "occurences": "8",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000305.xml adlib1110000304.xml 1110003409.xml 1110003409.xml 1110003410.xml 1110003410.xml 1110003411.xml 1110003411.xml"
    }, {
      "text": "yʿgf",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "yʿrr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml"
    }, {
      "text": "yʿrtm",
      "occurences": "91",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "yʿṯq",
      "occurences": "44",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "yᶜd",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000113.xml"
    }, {
      "text": "yḏkr",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000224.xml adlib1110000873.xml"
    }, {
      "text": "yḏmrʾl",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000849.xml adlib1110000848.xml adlib1110000850.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "yḏtʾn",
      "occurences": "7",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "yḏʾn",
      "occurences": "8",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "yḥmd",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000782.xml adlib1110000782.xml adlib1110000782.xml"
    }, {
      "text": "yḥmn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000866.xml adlib1110000866.xml"
    }, {
      "text": "yḥmʾl",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000049.xml adlib1110000048.xml 1110000059.xml 1110000069.xml 1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "yḥmΓʾ˥l",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "yḥr",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "yḥz",
      "occurences": "7",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000390.xml 1110001776.xml"
    }, {
      "text": "yḥḍb",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royalWithTitle",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "yḥṯt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml"
    }, {
      "text": "yṣrʿm",
      "occurences": "18",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000896.xml adlib1110000895.xml adlib1110000895.xml 1110001611.xml"
    }, {
      "text": "yṯl",
      "occurences": "107",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "yṯrb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000070.xml"
    }, {
      "text": "yṯʿ",
      "occurences": "22",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml 1110000100.xml 1110001887.xml 1110001888.xml"
    }, {
      "text": "yṯʿkrb",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "yṯʿkrb˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml"
    }, {
      "text": "yṯʿm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000785.xml"
    }, {
      "text": "yṯʿʾmr",
      "occurences": "16",
      "maintype": "persName",
      "type": "royal",
      "subtype": "not specified",
      "doc": "adlib1110000146.xml adlib1110000870.xml adlib1110000844.xml adlib1110000841.xml adlib1110000841.xml adlib1110000836.xml adlib1110000836.xml adlib1110000842.xml adlib1110000871.xml adlib1110000843.xml adlib1110000843.xml adlib1110000839.xml adlib1110000838.xml 1110001769.xml 1110001801.xml 1110001916.xml"
    }, {
      "text": "yṯᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "znyt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000055.xml"
    }, {
      "text": "zrrn",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "zwt",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "zyd",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000056.xml 1110000065.xml 1110003324.xml 1110003325.xml"
    }, {
      "text": "zydlt",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000230.xml 1110003733.xml"
    }, {
      "text": "zydm",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "zydʾ= l",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003733.xml"
    }, {
      "text": "zydʾl",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000411.xml adlib1110000411.xml adlib1110000410.xml adlib1110000410.xml adlib1110000321.xml adlib1110000111.xml adlib1110000107.xml adlib1110000075.xml 1110000060.xml 1110000078.xml 1110003328.xml"
    }, {
      "text": "zʿ= mm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003403.xml"
    }, {
      "text": "zḫnn",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ġ- zt",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000040.xml"
    }, {
      "text": "ġ= zt",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000071.xml adlib1110000049.xml adlib1110000048.xml adlib1110000047.xml"
    }, {
      "text": "ġlbm",
      "occurences": "18",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml"
    }, {
      "text": "ġny",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000073.xml"
    }, {
      "text": "ġrbn",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ġwṯʾl",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ġyln",
      "occurences": "18",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000758.xml adlib1110000757.xml adlib1110000122.xml adlib1110000115.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml 1110000220.xml 1110000335.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110000336.xml 1110001565.xml 1110001835.xml 1110001836.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ġzt",
      "occurences": "16",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000408.xml adlib1110000406.xml adlib1110000111.xml adlib1110000107.xml adlib1110000107.xml adlib1110000108.xml adlib1110000075.xml adlib1110000045.xml adlib1110000044.xml 1110000054.xml 1110000069.xml 1110000072.xml 1110003328.xml 1110003328.xml"
    }, {
      "text": "ġztm",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000050.xml adlib1110000033.xml"
    }, {
      "text": "ġΓz˥t",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "ġḍrn",
      "occurences": "18",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml"
    }, {
      "text": "ġṯm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000036.xml"
    }, {
      "text": "ślmn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000162.xml"
    }, {
      "text": "śmrm",
      "occurences": "5",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml"
    }, {
      "text": "śmrw",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "śnḥn",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "śyrm",
      "occurences": "11",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "š= hrʿly",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000785.xml"
    }, {
      "text": "š= ms",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000170.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml"
    }, {
      "text": "š= rqn",
      "occurences": "8",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "šbm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000164.xml adlib1110000163.xml adlib1110000163.xml"
    }, {
      "text": "šbt",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "šbzn",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "šbʿn",
      "occurences": "9",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "šddm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml"
    }, {
      "text": "šdm",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "šfwt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000791.xml"
    }, {
      "text": "šgb",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000273.xml adlib1110000272.xml"
    }, {
      "text": "šhr",
      "occurences": "226",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000874.xml adlib1110000874.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000896.xml adlib1110000898.xml adlib1110000898.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000895.xml adlib1110000895.xml adlib1110000897.xml adlib1110000897.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml 1110000335.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110000336.xml 1110001542.xml 1110001542.xml 1110001553.xml 1110001563.xml 1110001565.xml 1110001575.xml 1110001586.xml 1110001611.xml 1110003340.xml 1110003340.xml 1110003340.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003388.xml 1110003388.xml 1110003388.xml 1110003388.xml 1110003388.xml 1110003389.xml 1110003389.xml 1110003389.xml 1110003389.xml 1110003391.xml 1110003415.xml"
    }, {
      "text": "šhrm",
      "occurences": "28",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110001575.xml 1110001887.xml 1110001888.xml 1110003340.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "šhrn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000386.xml"
    }, {
      "text": "škmm",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "škΓr˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000042.xml"
    }, {
      "text": "šm= r",
      "occurences": "8",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "1110001563.xml 1110003394.xml 1110003395.xml 1110003396.xml 1110003397.xml 1110003398.xml 1110003398.xml 1110003399.xml"
    }, {
      "text": "šmr",
      "occurences": "112",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000794.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000766.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000279.xml adlib1110000278.xml adlib1110000038.xml adlib1110000039.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001565.xml 1110001586.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003343.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003344.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003345.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003391.xml 1110003392.xml 1110003392.xml 1110003393.xml 1110003393.xml 1110003394.xml 1110003394.xml 1110003394.xml 1110003395.xml 1110003395.xml 1110003395.xml 1110003396.xml 1110003396.xml 1110003396.xml 1110003397.xml 1110003397.xml 1110003397.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003398.xml 1110003399.xml 1110003399.xml 1110003399.xml"
    }, {
      "text": "šmrm",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "šms",
      "occurences": "31",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml 1110000276.xml 1110001534.xml 1110003315.xml"
    }, {
      "text": "šmsm",
      "occurences": "6",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000170.xml adlib1110000170.xml adlib1110000169.xml adlib1110000168.xml adlib1110000168.xml adlib1110000167.xml"
    }, {
      "text": "šmsᶜly",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "šmt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000054.xml"
    }, {
      "text": "šrqn",
      "occurences": "36",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000240.xml adlib1110000170.xml adlib1110000169.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml adlib1110000167.xml adlib1110000038.xml"
    }, {
      "text": "šrḥ",
      "occurences": "5",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml 1110000230.xml 1110003733.xml"
    }, {
      "text": "šrḥm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "šrḥʾl",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000366.xml 1110000791.xml"
    }, {
      "text": "šrḥʿṯt",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000790.xml adlib1110000869.xml adlib1110000868.xml 1110000171.xml 1110000335.xml 1110000335.xml 1110000336.xml"
    }, {
      "text": "šymn",
      "occurences": "11",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml"
    }, {
      "text": "šśwn",
      "occurences": "43",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "šʿbm",
      "occurences": "50",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000305.xml adlib1110000304.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000113.xml adlib1110000005.xml"
    }, {
      "text": "šʿrm",
      "occurences": "4",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000228.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "šʿrn",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000305.xml adlib1110000304.xml adlib1110000113.xml"
    }, {
      "text": "šʿṯm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000070.xml"
    }, {
      "text": "šΓhr˥mlk",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml"
    }, {
      "text": "šΓḥ˥r",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000050.xml"
    }, {
      "text": "šḫb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110001565.xml"
    }, {
      "text": "šẓfm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "ʾ= bkrb",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000869.xml adlib1110000868.xml 1110000785.xml 1110000785.xml"
    }, {
      "text": "ʾ= lmqh",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml adlib1110000836.xml"
    }, {
      "text": "ʾ= lmqw",
      "occurences": "2",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000869.xml adlib1110000868.xml"
    }, {
      "text": "ʾ= nby",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001621.xml"
    }, {
      "text": "ʾ= ḫṭr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000079.xml"
    }, {
      "text": "ʾb= ʿm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000866.xml"
    }, {
      "text": "ʾbbʿ",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000108.xml 1110003328.xml"
    }, {
      "text": "ʾbbᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000107.xml"
    }, {
      "text": "ʾbh",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110003326.xml 1110003327.xml"
    }, {
      "text": "ʾbkrb",
      "occurences": "17",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000812.xml adlib1110000779.xml adlib1110000382.xml adlib1110000869.xml adlib1110000869.xml adlib1110000869.xml adlib1110000087.xml adlib1110000868.xml adlib1110000868.xml adlib1110000868.xml adlib1110000102.xml adlib1110000016.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110003320.xml"
    }, {
      "text": "ʾbn",
      "occurences": "13",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ʾbrd",
      "occurences": "14",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000283.xml adlib1110000282.xml adlib1110000270.xml adlib1110000270.xml adlib1110000269.xml adlib1110000269.xml adlib1110000268.xml adlib1110000267.xml adlib1110000267.xml adlib1110000266.xml adlib1110000266.xml 1110000265.xml 1110000265.xml 1110003316.xml"
    }, {
      "text": "ʾbrn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "ʾbrḍw",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000074.xml"
    }, {
      "text": "ʾbrḥm",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000409.xml adlib1110000050.xml adlib1110000048.xml 1110003328.xml"
    }, {
      "text": "ʾbsmy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "ʾbsmᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000030.xml"
    }, {
      "text": "ʾbydʿ",
      "occurences": "23",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000148.xml adlib1110000872.xml 1110001887.xml 1110001888.xml"
    }, {
      "text": "ʾbyn",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ʾbyśʿ",
      "occurences": "8",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "ʾbyṯʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000888.xml"
    }, {
      "text": "ʾbšbm",
      "occurences": "19",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001565.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʾbšfq",
      "occurences": "23",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʾbʾmr",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000828.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml adlib1110000045.xml"
    }, {
      "text": "ʾbʾns",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000874.xml"
    }, {
      "text": "ʾbḥḍ",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000038.xml adlib1110000039.xml adlib1110000039.xml"
    }, {
      "text": "ʾfqn",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʾknṭ",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "ʾkryy",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʾl fḫr",
      "occurences": "18",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml"
    }, {
      "text": "ʾl= mqh",
      "occurences": "3",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000241.xml 1110000088.xml 1110001770.xml"
    }, {
      "text": "ʾl= smʿ",
      "occurences": "7",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "ʾlfdy",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000388.xml"
    }, {
      "text": "ʾlhn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml"
    }, {
      "text": "ʾlkrb",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000392.xml adlib1110000388.xml adlib1110000870.xml adlib1110000871.xml 1110001785.xml"
    }, {
      "text": "ʾlm= qh",
      "occurences": "2",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000866.xml 1110003404.xml"
    }, {
      "text": "ʾlmlk",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ʾlmq= h",
      "occurences": "9",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000852.xml adlib1110000853.xml adlib1110000853.xml adlib1110000854.xml adlib1110000854.xml adlib1110000855.xml adlib1110000855.xml 1110003403.xml"
    }, {
      "text": "ʾlmqh",
      "occurences": "167",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000808.xml adlib1110000807.xml adlib1110000807.xml adlib1110000806.xml adlib1110000806.xml adlib1110000787.xml adlib1110000337.xml adlib1110000337.xml adlib1110000337.xml adlib1110000337.xml adlib1110000251.xml adlib1110000240.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000170.xml adlib1110000169.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml adlib1110000167.xml adlib1110000159.xml adlib1110000159.xml adlib1110000159.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000156.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000155.xml adlib1110000152.xml adlib1110000151.xml adlib1110000151.xml adlib1110000150.xml adlib1110000149.xml adlib1110000148.xml adlib1110000146.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000833.xml adlib1110000825.xml adlib1110000866.xml adlib1110000834.xml adlib1110000837.xml adlib1110000826.xml adlib1110000869.xml adlib1110002525.xml adlib1110000868.xml adlib1110000102.xml adlib1110000914.xml adlib1110000911.xml adlib1110000872.xml adlib1110000005.xml adlib1110000005.xml 1110000171.xml 1110000202.xml 1110000225.xml 1110000331.xml 1110000332.xml 1110000332.xml 1110000333.xml 1110000333.xml 1110000334.xml 1110000334.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110001567.xml 1110001785.xml 1110001842.xml 1110001842.xml"
    }, {
      "text": "ʾlmqhw",
      "occurences": "11",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000236.xml adlib1110000235.xml adlib1110000866.xml adlib1110000869.xml adlib1110000869.xml adlib1110000869.xml adlib1110000869.xml adlib1110000868.xml adlib1110000868.xml adlib1110000868.xml adlib1110000868.xml"
    }, {
      "text": "ʾlqdm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000388.xml 1110001842.xml"
    }, {
      "text": "ʾlqwm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001845.xml 1110001845.xml"
    }, {
      "text": "ʾlrm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "ʾlsmʿ",
      "occurences": "13",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml"
    }, {
      "text": "ʾlyfʿ",
      "occurences": "20",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "royal",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ʾlzʾd",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000788.xml 1110000789.xml"
    }, {
      "text": "ʾlšrḥ",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000866.xml 1110001574.xml 1110001576.xml 1110001777.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "ʾlʾmn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000274.xml"
    }, {
      "text": "ʾlʾws",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000152.xml adlib1110000151.xml adlib1110000150.xml adlib1110000149.xml adlib1110000149.xml adlib1110000146.xml"
    }, {
      "text": "ʾlʿz",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000381.xml adlib1110002525.xml 1110000225.xml"
    }, {
      "text": "ʾlʿḏ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001905.xml"
    }, {
      "text": "ʾmr",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000257.xml adlib1110000234.xml 1110000230.xml 1110003733.xml"
    }, {
      "text": "ʾmrm",
      "occurences": "3",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110001574.xml 1110001576.xml 1110001777.xml"
    }, {
      "text": "ʾmt",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110003326.xml 1110003327.xml"
    }, {
      "text": "ʾmt šms",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000112.xml adlib1110000107.xml 1110000076.xml"
    }, {
      "text": "ʾmt ʾbh",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000781.xml"
    }, {
      "text": "ʾmtʾṯ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000050.xml"
    }, {
      "text": "ʾmy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000406.xml"
    }, {
      "text": "ʾmynm",
      "occurences": "7",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000758.xml adlib1110000757.xml adlib1110000757.xml adlib1110000122.xml adlib1110000115.xml 1110001835.xml 1110001836.xml"
    }, {
      "text": "ʾmʿṯtr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000083.xml"
    }, {
      "text": "ʾnb= y",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001563.xml"
    }, {
      "text": "ʾnby",
      "occurences": "109",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000772.xml adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000320.xml adlib1110000319.xml adlib1110000318.xml adlib1110000317.xml adlib1110000314.xml adlib1110000313.xml adlib1110000313.xml adlib1110000312.xml adlib1110000312.xml adlib1110000311.xml adlib1110000311.xml adlib1110000310.xml adlib1110000309.xml adlib1110000308.xml adlib1110000305.xml adlib1110000304.xml adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000292.xml adlib1110000292.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000281.xml adlib1110000280.xml adlib1110000280.xml adlib1110000279.xml adlib1110000278.xml adlib1110000113.xml adlib1110000014.xml adlib1110000876.xml adlib1110000316.xml adlib1110000315.xml adlib1110000315.xml adlib1110000875.xml adlib1110000874.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000898.xml adlib1110000898.xml adlib1110000906.xml adlib1110000903.xml adlib1110000897.xml adlib1110000897.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001553.xml 1110001563.xml 1110001565.xml 1110001565.xml 1110001575.xml 1110001586.xml 1110001611.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003394.xml 1110003395.xml 1110003396.xml 1110003397.xml 1110003398.xml 1110003399.xml"
    }, {
      "text": "ʾndrr",
      "occurences": "7",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml"
    }, {
      "text": "ʾnmr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "ʾnmrm",
      "occurences": "19",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml"
    }, {
      "text": "ʾnsm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000388.xml"
    }, {
      "text": "ʾqdʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000388.xml"
    }, {
      "text": "ʾqyn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110001785.xml"
    }, {
      "text": "ʾrśl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000369.xml"
    }, {
      "text": "ʾsdm",
      "occurences": "8",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml adlib1110000393.xml adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "ʾslm",
      "occurences": "5",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000408.xml adlib1110000406.xml 1110000055.xml 1110003401.xml 1110003402.xml"
    }, {
      "text": "ʾsʾr",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000363.xml adlib1110000362.xml adlib1110000362.xml"
    }, {
      "text": "ʾwm",
      "occurences": "6",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000337.xml adlib1110000158.xml adlib1110000156.xml adlib1110000156.xml adlib1110000155.xml adlib1110000155.xml"
    }, {
      "text": "ʾws",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000050.xml adlib1110000071.xml adlib1110000049.xml adlib1110000036.xml"
    }, {
      "text": "ʾwslt",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000368.xml adlib1110000368.xml adlib1110000368.xml adlib1110000368.xml 1110001776.xml"
    }, {
      "text": "ʾwsn",
      "occurences": "26",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000375.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml adlib1110000897.xml 1110000055.xml 1110000074.xml 1110001565.xml 1110001611.xml"
    }, {
      "text": "ʾwsʿm",
      "occurences": "17",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000896.xml adlib1110000895.xml adlib1110000895.xml 1110001611.xml"
    }, {
      "text": "ʾwsʿṯt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000096.xml"
    }, {
      "text": "ʾwtr",
      "occurences": "4",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000228.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʾwwm",
      "occurences": "90",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ʾwys",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000037.xml"
    }, {
      "text": "ʾyhr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001621.xml"
    }, {
      "text": "ʾymn",
      "occurences": "8",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000228.xml 1110000220.xml 1110000243.xml 1110000244.xml 1110000245.xml 1110001776.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʾġ= wṯm",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000256.xml adlib1110000255.xml"
    }, {
      "text": "ʾšms",
      "occurences": "5",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000038.xml adlib1110000039.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʾšrʿ",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110001285.xml 1110001792.xml 1110001797.xml"
    }, {
      "text": "ʾšwʿ",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000250.xml 1110000248.xml"
    }, {
      "text": "ʾʾšr",
      "occurences": "20",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ʾʾḏn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "ethnonym",
      "subtype": "not specified",
      "doc": "1110003348.xml"
    }, {
      "text": "ʾʿrś",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml"
    }, {
      "text": "ʾʿsyfr",
      "occurences": "12",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʾʿyn",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000368.xml"
    }, {
      "text": "ʾʿzz",
      "occurences": "14",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000323.xml 1110000323.xml 1110000324.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000327.xml 1110000327.xml 1110000326.xml 1110000326.xml"
    }, {
      "text": "ʾḏn= t",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʾḥbšn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "ethnonym",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʾḥms",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000791.xml"
    }, {
      "text": "ʾḫlḥy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000028.xml"
    }, {
      "text": "ʾṣ= rm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000045.xml adlib1110000044.xml"
    }, {
      "text": "ʾṣrm",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000034.xml adlib1110000077.xml 1110000052.xml 1110000054.xml"
    }, {
      "text": "ʾṣḥḥ",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ʾṯr= t",
      "occurences": "13",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ʾṯrt",
      "occurences": "17",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000880.xml adlib1110000905.xml adlib1110000905.xml adlib1110000879.xml adlib1110000840.xml adlib1110000896.xml adlib1110000896.xml adlib1110000898.xml adlib1110000898.xml adlib1110000881.xml adlib1110000906.xml adlib1110000903.xml adlib1110000895.xml adlib1110000897.xml adlib1110000904.xml adlib1110000902.xml 1110003349.xml"
    }, {
      "text": "ʾṯʾb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000034.xml"
    }, {
      "text": "ʾṯʾbn",
      "occurences": "89",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ʿ= mʾmr",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "ʿ= mḏrʾ",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000849.xml adlib1110000849.xml adlib1110000848.xml adlib1110000848.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "ʿ= ṯtr",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000832.xml"
    }, {
      "text": "ʿb= dm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110002525.xml 1110000225.xml"
    }, {
      "text": "ʿbd",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000411.xml adlib1110000411.xml adlib1110000410.xml adlib1110000410.xml adlib1110000321.xml adlib1110000112.xml adlib1110000107.xml adlib1110000033.xml 1110000054.xml 1110000078.xml 1110003733.xml"
    }, {
      "text": "ʿbdm= rʾhw",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ʿbdmrʾhw",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ʿbdʾl",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000874.xml 1110000335.xml 1110000335.xml 1110000336.xml"
    }, {
      "text": "ʿbdʿṯ= tr",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000869.xml adlib1110000868.xml"
    }, {
      "text": "ʿbr nhrn",
      "occurences": "20",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ʿbydm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001787.xml"
    }, {
      "text": "ʿdnt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000052.xml"
    }, {
      "text": "ʿhd",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000055.xml"
    }, {
      "text": "ʿhrʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000763.xml"
    }, {
      "text": "ʿkbr",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003325.xml 1110003325.xml"
    }, {
      "text": "ʿkm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000783.xml"
    }, {
      "text": "ʿlbm",
      "occurences": "20",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000772.xml adlib1110000320.xml adlib1110000319.xml adlib1110000318.xml adlib1110000318.xml adlib1110000317.xml adlib1110000314.xml adlib1110000313.xml adlib1110000313.xml adlib1110000312.xml adlib1110000312.xml adlib1110000311.xml adlib1110000311.xml adlib1110000310.xml adlib1110000309.xml adlib1110000308.xml adlib1110000316.xml adlib1110000316.xml adlib1110000315.xml adlib1110000315.xml"
    }, {
      "text": "ʿlg",
      "occurences": "20",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ʿlhn",
      "occurences": "19",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml adlib1110000228.xml 1110000220.xml 1110000220.xml 1110000220.xml 1110001887.xml 1110001888.xml 1110003315.xml 1110000383.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "ʿlym",
      "occurences": "16",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000259.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ʿlyn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʿm",
      "occurences": "463",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000767.xml adlib1110000767.xml adlib1110000766.xml adlib1110000766.xml adlib1110000765.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000764.xml adlib1110000756.xml adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml adlib1110000303.xml adlib1110000303.xml adlib1110000303.xml adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000302.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000301.xml adlib1110000301.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000299.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000297.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000292.xml adlib1110000291.xml adlib1110000291.xml adlib1110000291.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000290.xml adlib1110000290.xml adlib1110000290.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000289.xml adlib1110000289.xml adlib1110000289.xml adlib1110000289.xml adlib1110000289.xml adlib1110000289.xml adlib1110000288.xml adlib1110000288.xml adlib1110000288.xml adlib1110000288.xml adlib1110000288.xml adlib1110000288.xml adlib1110000288.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000286.xml adlib1110000286.xml adlib1110000286.xml adlib1110000286.xml adlib1110000286.xml adlib1110000285.xml adlib1110000285.xml adlib1110000285.xml adlib1110000285.xml adlib1110000285.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000281.xml adlib1110000280.xml adlib1110000280.xml adlib1110000280.xml adlib1110000279.xml adlib1110000278.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000014.xml adlib1110000876.xml adlib1110000024.xml adlib1110000884.xml adlib1110000884.xml adlib1110000875.xml adlib1110000883.xml adlib1110000883.xml adlib1110000874.xml adlib1110000874.xml adlib1110000874.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000885.xml adlib1110000898.xml adlib1110000898.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000897.xml adlib1110000897.xml adlib1110000897.xml adlib1110000897.xml adlib1110000886.xml adlib1110000886.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000018.xml adlib1110000012.xml adlib1110000005.xml adlib1110000021.xml 1110000335.xml 1110000335.xml 1110000335.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110000336.xml 1110000336.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001542.xml 1110001563.xml 1110001565.xml 1110001565.xml 1110001575.xml 1110001575.xml 1110001575.xml 1110001575.xml 1110001611.xml 1110001611.xml 1110001611.xml 1110001611.xml 1110001611.xml 1110003340.xml 1110003343.xml 1110003343.xml 1110003344.xml 1110003344.xml 1110003345.xml 1110003345.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003391.xml 1110003391.xml"
    }, {
      "text": "ʿm= ydʿ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000794.xml"
    }, {
      "text": "ʿmdm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000388.xml"
    }, {
      "text": "ʿmkrb",
      "occurences": "19",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000380.xml adlib1110000870.xml adlib1110000871.xml adlib1110000033.xml adlib1110000016.xml adlib1110000016.xml 1110001916.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʿmm",
      "occurences": "23",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000278.xml 1110001563.xml 1110001565.xml 1110001575.xml"
    }, {
      "text": "ʿmn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000052.xml"
    }, {
      "text": "ʿmry= ʿm",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000292.xml"
    }, {
      "text": "ʿmsmʿ",
      "occurences": "19",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ʿmwqh",
      "occurences": "43",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʿmydʿ",
      "occurences": "15",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ʿmyṯʿ",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʿmšfq",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000828.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml adlib1110000911.xml 1110001916.xml"
    }, {
      "text": "ʿmʾmn",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʿmʾns",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ʿmʿly",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml"
    }, {
      "text": "ʿmḏḫr",
      "occurences": "23",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ʿmṣdq",
      "occurences": "59",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml"
    }, {
      "text": "ʿn.yn",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʿnnn",
      "occurences": "15",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000393.xml adlib1110000365.xml adlib1110000364.xml adlib1110000211.xml adlib1110000170.xml adlib1110000169.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml adlib1110000167.xml adlib1110000158.xml 1110000088.xml 1110000785.xml 1110000785.xml 1110000785.xml"
    }, {
      "text": "ʿqb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000032.xml"
    }, {
      "text": "ʿqbn",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʿqbrn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001564.xml"
    }, {
      "text": "ʿqrbtm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000247.xml adlib1110000246.xml"
    }, {
      "text": "ʿqrtm",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ʿrbm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110000335.xml 1110000335.xml 1110000336.xml"
    }, {
      "text": "ʿrbn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "ʿrbyt",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000411.xml adlib1110000410.xml"
    }, {
      "text": "ʿrm",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ʿrrt= m",
      "occurences": "6",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000849.xml adlib1110000848.xml adlib1110000848.xml adlib1110000850.xml adlib1110000850.xml adlib1110000851.xml"
    }, {
      "text": "ʿrrtm",
      "occurences": "8",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000856.xml adlib1110000844.xml adlib1110000841.xml adlib1110000842.xml adlib1110000843.xml adlib1110000843.xml adlib1110000839.xml adlib1110000838.xml"
    }, {
      "text": "ʿtb",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ʿynʾl",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000109.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "ʿztm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000083.xml"
    }, {
      "text": "ʿzzm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003404.xml"
    }, {
      "text": "ʿśtr",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001896.xml"
    }, {
      "text": "ʿśtrm",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001909.xml"
    }, {
      "text": "ʿšrm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "ʿṯ= tr",
      "occurences": "22",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000240.xml adlib1110000240.xml adlib1110000874.xml"
    }, {
      "text": "ʿṯkln",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000331.xml 1110000332.xml 1110000333.xml 1110000334.xml"
    }, {
      "text": "ʿṯmn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000254.xml"
    }, {
      "text": "ʿṯr",
      "occurences": "7",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml"
    }, {
      "text": "ʿṯrb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "ʿṯt= r",
      "occurences": "4",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000852.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml"
    }, {
      "text": "ʿṯtr",
      "occurences": "372",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml adlib1110000775.xml adlib1110000756.xml adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000754.xml adlib1110000753.xml adlib1110000753.xml adlib1110000752.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000750.xml adlib1110000749.xml adlib1110000749.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000337.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000279.xml adlib1110000278.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000170.xml adlib1110000169.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml adlib1110000167.xml adlib1110000162.xml adlib1110000157.xml adlib1110000156.xml adlib1110000156.xml adlib1110000155.xml adlib1110000155.xml adlib1110000154.xml adlib1110000152.xml adlib1110000151.xml adlib1110000150.xml adlib1110000150.xml adlib1110000149.xml adlib1110000148.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000836.xml adlib1110000878.xml adlib1110000898.xml adlib1110000098.xml adlib1110000038.xml adlib1110000038.xml adlib1110000090.xml adlib1110000872.xml adlib1110000897.xml adlib1110000897.xml adlib1110000039.xml adlib1110000016.xml adlib1110000016.xml adlib1110000016.xml adlib1110000016.xml adlib1110000011.xml adlib1110000005.xml adlib1110000005.xml 1110000171.xml 1110000172.xml 1110000201.xml 1110000323.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000331.xml 1110000332.xml 1110000332.xml 1110000333.xml 1110000333.xml 1110000334.xml 1110000334.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000397.xml 1110000791.xml 1110001565.xml 1110001575.xml 1110001770.xml 1110001785.xml 1110001842.xml 1110001842.xml 1110001887.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml 1110001888.xml 1110001916.xml 1110000326.xml"
    }, {
      "text": "Γs˥= ʿdΓʾw˥m",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000102.xml"
    }, {
      "text": "Γybḥ˥rʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000029.xml"
    }, {
      "text": "Γy˥ʾwsʾl",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000230.xml"
    }, {
      "text": "Γy˥ṯrb",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000056.xml"
    }, {
      "text": "Γʾ˥lmqh",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110000201.xml"
    }, {
      "text": "Γʾḫl˥ḥy",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000027.xml"
    }, {
      "text": "Γᶜ˥qb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "Γḏ-rd˥ᶜ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000049.xml"
    }, {
      "text": "Γḏ-ġ˥rbt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "Γḏ-˥b= ẓᶜ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000027.xml"
    }, {
      "text": "Γḥyw˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "Γḥ˥fd",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000107.xml"
    }, {
      "text": "Γḥ˥nΓb˥ṣ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000027.xml"
    }, {
      "text": "Γḥ˥yΓw˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000027.xml"
    }, {
      "text": "ᶜ= qb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000029.xml"
    }, {
      "text": "ᶜbd",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000040.xml 1110000076.xml"
    }, {
      "text": "ᶜkbr",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000066.xml"
    }, {
      "text": "ᶜlyʾl",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000031.xml"
    }, {
      "text": "ᶜmd",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000027.xml adlib1110000028.xml"
    }, {
      "text": "ᶜmḏḫr",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000074.xml"
    }, {
      "text": "ᶜrbyt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000077.xml"
    }, {
      "text": "ᶜzz",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000067.xml"
    }, {
      "text": "ᶜṯtr",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000127.xml"
    }, {
      "text": "ḍbʾm",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḍbʿ",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000067.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "ḍbᶜ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000066.xml"
    }, {
      "text": "ḍfw",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110000777.xml"
    }, {
      "text": "ḍmd",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000846.xml adlib1110000032.xml"
    }, {
      "text": "ḍrhmw",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001897.xml"
    }, {
      "text": "ḍrn",
      "occurences": "5",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ḍyfthn",
      "occurences": "8",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "ḍyftn",
      "occurences": "6",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml"
    }, {
      "text": "ḍʾsm",
      "occurences": "8",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "ḍʿf",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ fdhm",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḏ ġylm",
      "occurences": "6",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml"
    }, {
      "text": "ḏ ʾwṯnm",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ ḥbbm",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ- bwsn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000107.xml"
    }, {
      "text": "ḏ- ᶜdr",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "ḏ-= bwsn",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000111.xml adlib1110000075.xml"
    }, {
      "text": "ḏ-= mḥfdn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000102.xml"
    }, {
      "text": "ḏ-= sḥr",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000337.xml"
    }, {
      "text": "ḏ-= śʾfg",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000055.xml"
    }, {
      "text": "ḏ-= ʾwsn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000072.xml"
    }, {
      "text": "ḏ-= ẓhrn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000053.xml"
    }, {
      "text": "ḏ-Z= ʿm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000409.xml"
    }, {
      "text": "ḏ-b= ẓᶜ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000028.xml"
    }, {
      "text": "ḏ-bdš",
      "occurences": "13",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000283.xml adlib1110000283.xml adlib1110000282.xml adlib1110000282.xml adlib1110000270.xml adlib1110000269.xml adlib1110000268.xml adlib1110000268.xml adlib1110000267.xml adlib1110000266.xml 1110000265.xml 1110003316.xml 1110003316.xml"
    }, {
      "text": "ḏ-blḥ",
      "occurences": "20",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-brr",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000045.xml 1110000052.xml"
    }, {
      "text": "ḏ-brʾn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000213.xml adlib1110000212.xml"
    }, {
      "text": "ḏ-bw= sn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000036.xml"
    }, {
      "text": "ḏ-bwsn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000407.xml"
    }, {
      "text": "ḏ-dbr",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000042.xml"
    }, {
      "text": "ḏ-drʾn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000088.xml"
    }, {
      "text": "ḏ-dtnt",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml"
    }, {
      "text": "ḏ-dwnm",
      "occurences": "31",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml adlib1110000905.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ḏ-frʿtm",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000157.xml"
    }, {
      "text": "ḏ-fṣd",
      "occurences": "45",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-gdrn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000029.xml"
    }, {
      "text": "ḏ-gnd",
      "occurences": "6",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml adlib1110000775.xml"
    }, {
      "text": "ḏ-gʿrn",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-hqn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000873.xml"
    }, {
      "text": "ḏ-hrmw",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-hrn",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-hΓq˥n",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000224.xml"
    }, {
      "text": "ḏ-hṣbḥ",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-hṯʿr lḥy",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-lbḫ",
      "occurences": "140",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000905.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000900.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000906.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000903.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000904.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml adlib1110000907.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003352.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003355.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003356.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003357.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003358.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003359.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003360.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003361.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml 1110003362.xml"
    }, {
      "text": "ḏ-m= rn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ḏ-mfʿlm",
      "occurences": "178",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-mkrbm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000259.xml"
    }, {
      "text": "ḏ-mlg",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000064.xml 1110003324.xml"
    }, {
      "text": "ḏ-mrḥbm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000157.xml"
    }, {
      "text": "ḏ-mrḥḍw",
      "occurences": "9",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "ḏ-myfʿn",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000237.xml"
    }, {
      "text": "ḏ-mʾḏnm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "ḏ-mʿhrm",
      "occurences": "6",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000812.xml adlib1110000812.xml adlib1110000812.xml adlib1110000812.xml adlib1110000812.xml"
    }, {
      "text": "ḏ-mΓl˥g",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000030.xml"
    }, {
      "text": "ḏ-mḥfd= n",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000102.xml"
    }, {
      "text": "ḏ-nmr",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000066.xml 1110003325.xml 1110003325.xml"
    }, {
      "text": "ḏ-ntgm",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000837.xml"
    }, {
      "text": "ḏ-nyṭ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000777.xml"
    }, {
      "text": "ḏ-nḍrn",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-q= bḍm",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "1110001887.xml 1110001888.xml"
    }, {
      "text": "ḏ-qbḍ",
      "occurences": "21",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-qbḍm",
      "occurences": "119",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000361.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000358.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000357.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000356.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000355.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000349.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000348.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000347.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml adlib1110000343.xml 1110001887.xml 1110001887.xml 1110001888.xml 1110001888.xml"
    }, {
      "text": "ḏ-qlḥn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000399.xml"
    }, {
      "text": "ḏ-qwm",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000110.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "ḏ-rbqn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000047.xml"
    }, {
      "text": "ḏ-rbḍt",
      "occurences": "9",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000756.xml adlib1110000755.xml adlib1110000754.xml adlib1110000753.xml adlib1110000752.xml adlib1110000751.xml adlib1110000751.xml adlib1110000750.xml adlib1110000749.xml"
    }, {
      "text": "ḏ-rdʿ",
      "occurences": "20",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-rf= dn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000785.xml"
    }, {
      "text": "ḏ-rft",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-rfz= n",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000775.xml"
    }, {
      "text": "ḏ-rgz",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml adlib1110000369.xml"
    }, {
      "text": "ḏ-rmḍn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000073.xml"
    }, {
      "text": "ḏ-rt= ʿ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000059.xml"
    }, {
      "text": "ḏ-ryd= n",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000376.xml 1110000377.xml"
    }, {
      "text": "ḏ-rydn",
      "occurences": "32",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000792.xml adlib1110000116.xml adlib1110000038.xml adlib1110000038.xml adlib1110000039.xml adlib1110000039.xml 1110000220.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110001574.xml 1110001576.xml 1110001777.xml 1110003401.xml 1110003401.xml 1110003402.xml 1110003402.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ḏ-rydt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003318.xml"
    }, {
      "text": "ḏ-rymn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000171.xml"
    }, {
      "text": "ḏ-rymtm",
      "occurences": "18",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml 1110001611.xml"
    }, {
      "text": "ḏ-ršm",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-smwy",
      "occurences": "5",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000781.xml adlib1110000778.xml 1110003326.xml 1110003327.xml 1110003412.xml"
    }, {
      "text": "ḏ-smy",
      "occurences": "6",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001574.xml 1110001574.xml 1110001576.xml 1110001576.xml 1110001777.xml 1110001777.xml"
    }, {
      "text": "ḏ-sqm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000040.xml adlib1110000046.xml"
    }, {
      "text": "ḏ-syl",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000031.xml"
    }, {
      "text": "ḏ-s¹mwy",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001612.xml"
    }, {
      "text": "ḏ-sḥr",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000156.xml adlib1110000155.xml adlib1110000155.xml"
    }, {
      "text": "ḏ-wkl",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000776.xml adlib1110000776.xml adlib1110000775.xml"
    }, {
      "text": "ḏ-wqbm",
      "occurences": "45",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-yfʿm",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-yfʿn",
      "occurences": "20",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-yfᶜn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000074.xml"
    }, {
      "text": "ḏ-ygr",
      "occurences": "26",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000241.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003340.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-yh= r",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000109.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "ḏ-yhrq",
      "occurences": "20",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-ynʿm",
      "occurences": "7",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000323.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000326.xml"
    }, {
      "text": "ḏ-yqhmlk",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-yrrt",
      "occurences": "44",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-ysr= m",
      "occurences": "2",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "1110000335.xml 1110000336.xml"
    }, {
      "text": "ḏ-ysrm",
      "occurences": "3",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000876.xml adlib1110000875.xml adlib1110000874.xml"
    }, {
      "text": "ḏ-yt= mt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000032.xml"
    }, {
      "text": "ḏ-yšbm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000763.xml"
    }, {
      "text": "ḏ-yʿgf",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-yṯl",
      "occurences": "20",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-yṯmt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000043.xml"
    }, {
      "text": "ḏ-yṯt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000067.xml"
    }, {
      "text": "ḏ-z= ʿm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003328.xml"
    }, {
      "text": "ḏ-ġr= n",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000069.xml"
    }, {
      "text": "ḏ-ġrbm",
      "occurences": "17",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-ġrn",
      "occurences": "46",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-ġylm",
      "occurences": "17",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ḏ-ġṯrbn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000379.xml"
    }, {
      "text": "ḏ-śdw",
      "occurences": "15",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000908.xml adlib1110000907.xml 1110001565.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ḏ-šbʿn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000050.xml"
    }, {
      "text": "ḏ-šf= tn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000065.xml 1110003324.xml 1110003325.xml"
    }, {
      "text": "ḏ-šhr",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-škmm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000763.xml"
    }, {
      "text": "ḏ-šqr",
      "occurences": "39",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000289.xml adlib1110000288.xml adlib1110000288.xml adlib1110000287.xml adlib1110000287.xml adlib1110000286.xml adlib1110000286.xml adlib1110000285.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml adlib1110000874.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001611.xml 1110001611.xml"
    }, {
      "text": "ḏ-šrgn",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-šrwm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000832.xml"
    }, {
      "text": "ḏ-ʾlm",
      "occurences": "20",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000762.xml adlib1110000762.xml adlib1110000761.xml adlib1110000761.xml adlib1110000761.xml adlib1110000760.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml adlib1110000759.xml adlib1110000758.xml adlib1110000758.xml adlib1110000757.xml adlib1110000757.xml adlib1110000122.xml adlib1110000115.xml adlib1110000115.xml adlib1110000874.xml 1110001835.xml 1110001836.xml"
    }, {
      "text": "ḏ-ʾmr",
      "occurences": "8",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000279.xml adlib1110000278.xml 1110001563.xml 1110001565.xml 1110001586.xml"
    }, {
      "text": "ḏ-ʾmrm",
      "occurences": "45",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-ʾmʿdm",
      "occurences": "5",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml adlib1110000759.xml"
    }, {
      "text": "ḏ-ʾnfm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000195.xml"
    }, {
      "text": "ḏ-ʾnfn",
      "occurences": "89",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḏ-ʾṯʾb",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000054.xml"
    }, {
      "text": "ḏ-ʿgḏ",
      "occurences": "11",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-ʿΓd˥sm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000092.xml"
    }, {
      "text": "ḏ-ʿḏḏm",
      "occurences": "7",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "ḏ-ᶜdr",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000048.xml"
    }, {
      "text": "ḏ-ᶜm= rtᶜ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000071.xml"
    }, {
      "text": "ḏ-ḍfgn",
      "occurences": "20",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏ-ḏ= rḥn",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000899.xml adlib1110000900.xml"
    }, {
      "text": "ḏ-ḏbn",
      "occurences": "11",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "1110000172.xml 1110000323.xml 1110000324.xml 1110000325.xml 1110000325.xml 1110000327.xml 1110000327.xml 1110000397.xml 1110001916.xml 1110003416.xml 1110000326.xml"
    }, {
      "text": "ḏ-ḏrʾn",
      "occurences": "21",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000170.xml adlib1110000169.xml adlib1110000169.xml adlib1110000168.xml adlib1110000167.xml adlib1110000167.xml 1110000785.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml 1110003388.xml 1110003389.xml"
    }, {
      "text": "ḏ-ḏrḥn",
      "occurences": "32",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000899.xml adlib1110000900.xml adlib1110000900.xml 1110001575.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḏ-ḥbb",
      "occurences": "9",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000222.xml adlib1110000221.xml adlib1110000129.xml adlib1110000869.xml adlib1110000868.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml"
    }, {
      "text": "ḏ-ḥmy",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000077.xml"
    }, {
      "text": "ḏ-ḥzmn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000037.xml"
    }, {
      "text": "ḏ-ḥšdm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000233.xml 1110001776.xml"
    }, {
      "text": "ḏ-ḥΓḏ˥= kt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000035.xml"
    }, {
      "text": "ḏ-ḫll",
      "occurences": "6",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000016.xml adlib1110000016.xml adlib1110000016.xml 1110001845.xml 1110001845.xml 1110001916.xml"
    }, {
      "text": "ḏ-ḫwln",
      "occurences": "48",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000880.xml adlib1110000879.xml adlib1110000840.xml adlib1110000881.xml adlib1110000005.xml 1110003349.xml"
    }, {
      "text": "ḏ-ḫḍln",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000033.xml"
    }, {
      "text": "ḏ-ḫṭlm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml 1110003320.xml"
    }, {
      "text": "ḏ-ḫṯʿ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000406.xml"
    }, {
      "text": "ḏ-ṣmʿ",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000112.xml adlib1110000107.xml"
    }, {
      "text": "ḏ-ṣmᶜ",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000076.xml"
    }, {
      "text": "ḏ-ẓ= lwmn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000408.xml"
    }, {
      "text": "ḏ-ẓlwm= n",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000107.xml adlib1110000108.xml 1110003328.xml"
    }, {
      "text": "ḏ-ẓrb",
      "occurences": "12",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏ-ẓy= rn",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000321.xml 1110000078.xml"
    }, {
      "text": "ḏ= bn",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000794.xml"
    }, {
      "text": "ḏ= mrʿly",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000376.xml 1110000377.xml"
    }, {
      "text": "ḏbyn",
      "occurences": "63",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000874.xml adlib1110000874.xml adlib1110000896.xml adlib1110000896.xml adlib1110000898.xml adlib1110000895.xml adlib1110000897.xml adlib1110000897.xml 1110001575.xml 1110001611.xml 1110001887.xml 1110001888.xml 1110003340.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003415.xml"
    }, {
      "text": "ḏhbn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110000390.xml 1110000390.xml"
    }, {
      "text": "ḏmrkrb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000234.xml"
    }, {
      "text": "ḏmrydʿ",
      "occurences": "8",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000914.xml adlib1110000914.xml adlib1110000914.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml 1110001567.xml"
    }, {
      "text": "ḏmrʿly",
      "occurences": "70",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000399.xml adlib1110000237.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000116.xml adlib1110000856.xml adlib1110000820.xml adlib1110000824.xml adlib1110000823.xml adlib1110000821.xml adlib1110000821.xml adlib1110000822.xml adlib1110000005.xml 1110000120.xml 1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml 1110000377.xml 1110000398.xml 1110000400.xml 1110000401.xml 1110000402.xml 1110001785.xml 1110002530.xml 1110003413.xml 1110003414.xml"
    }, {
      "text": "ḏrʾkrb",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏrḥ",
      "occurences": "2",
      "maintype": "persName",
      "type": "royal",
      "subtype": "not specified",
      "doc": "1110001802.xml 1110003406.xml"
    }, {
      "text": "ḏrḥn",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110001621.xml"
    }, {
      "text": "ḏt b= ʿdn",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "ḏt bʿdnm",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000237.xml"
    }, {
      "text": "ḏt nšqm",
      "occurences": "20",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ḏt rḥb= n",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000874.xml"
    }, {
      "text": "ḏt rḥbn",
      "occurences": "22",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001611.xml"
    }, {
      "text": "ḏt smyʿm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000086.xml"
    }, {
      "text": "ḏt ḥmym",
      "occurences": "11",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000237.xml adlib1110000852.xml adlib1110000836.xml adlib1110000836.xml adlib1110000836.xml adlib1110000853.xml adlib1110000854.xml adlib1110000855.xml 1110001889.xml 1110001890.xml 1110001891.xml"
    }, {
      "text": "ḏt ḥmymm",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "ḏt ṣntm",
      "occurences": "47",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000297.xml adlib1110000296.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000292.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000278.xml adlib1110000874.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001565.xml 1110001575.xml 1110001611.xml"
    }, {
      "text": "ḏt ẓhrn",
      "occurences": "30",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000281.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000278.xml adlib1110000874.xml adlib1110000898.xml adlib1110000897.xml adlib1110000897.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001565.xml 1110001611.xml"
    }, {
      "text": "ḏt-b= ʿdn",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000835.xml"
    }, {
      "text": "ḏt-bʿdn",
      "occurences": "1",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000157.xml"
    }, {
      "text": "ḏt-ḥ= mym",
      "occurences": "1",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "1110001842.xml"
    }, {
      "text": "ḏt-ḥmym",
      "occurences": "7",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000157.xml adlib1110000828.xml adlib1110000835.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml 1110001785.xml"
    }, {
      "text": "ḏydm",
      "occurences": "22",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003340.xml 1110003364.xml 1110003364.xml 1110003367.xml 1110003367.xml 1110003368.xml 1110003368.xml 1110003369.xml 1110003369.xml 1110003370.xml 1110003370.xml 1110003371.xml 1110003371.xml 1110003372.xml 1110003372.xml 1110003373.xml 1110003373.xml 1110003374.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḏʾb",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000034.xml adlib1110000110.xml adlib1110000107.xml 1110003328.xml"
    }, {
      "text": "ḏʿbm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000836.xml"
    }, {
      "text": "ḏʿfm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000365.xml adlib1110000364.xml"
    }, {
      "text": "ḏḫrt",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000224.xml adlib1110000873.xml"
    }, {
      "text": "ḏḫwln",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000376.xml 1110000377.xml 1110000377.xml"
    }, {
      "text": "ḥ= fnm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000236.xml adlib1110000235.xml"
    }, {
      "text": "ḥ= lḥlm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000171.xml"
    }, {
      "text": "ḥ= šdm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110001776.xml"
    }, {
      "text": "ḥbb",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000164.xml adlib1110000164.xml adlib1110000163.xml"
    }, {
      "text": "ḥbš",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ḥbšt",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml 1110003320.xml"
    }, {
      "text": "ḥbštn",
      "occurences": "6",
      "maintype": "orgName",
      "type": "ethnonym",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000220.xml 1110000383.xml 1110000383.xml 1110000384.xml 1110000384.xml"
    }, {
      "text": "ḥfd",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000108.xml 1110003328.xml"
    }, {
      "text": "ḥfnm",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "1110000100.xml"
    }, {
      "text": "ḥgn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110001563.xml"
    }, {
      "text": "ḥgr",
      "occurences": "7",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000260.xml 1110003315.xml"
    }, {
      "text": "ḥgrm",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000783.xml"
    }, {
      "text": "ḥlyʾl",
      "occurences": "8",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000745.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "ḥlḥlm",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000171.xml 1110000171.xml 1110000171.xml"
    }, {
      "text": "ḥm= nm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml"
    }, {
      "text": "ḥmln",
      "occurences": "2",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000391.xml 1110000391.xml"
    }, {
      "text": "ḥmnm",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000232.xml"
    }, {
      "text": "ḥmrr",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110001565.xml"
    }, {
      "text": "ḥmty",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000045.xml"
    }, {
      "text": "ḥmy",
      "occurences": "5",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000034.xml adlib1110000077.xml 1110000054.xml"
    }, {
      "text": "ḥmym",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003403.xml"
    }, {
      "text": "ḥmyrm",
      "occurences": "9",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml adlib1110000779.xml adlib1110000779.xml 1110001574.xml 1110001576.xml 1110001777.xml 1110003315.xml 1110003320.xml 1110003320.xml"
    }, {
      "text": "ḥmʿṯt",
      "occurences": "21",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000793.xml adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml adlib1110000343.xml"
    }, {
      "text": "ḥmᶜṯt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "ḥnbṣ",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000028.xml"
    }, {
      "text": "ḥnt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000047.xml"
    }, {
      "text": "ḥnḏfm",
      "occurences": "91",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḥnẓt",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ḥqln",
      "occurences": "3",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ḥr",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000880.xml adlib1110000879.xml adlib1110000840.xml adlib1110000881.xml"
    }, {
      "text": "ḥr= d",
      "occurences": "2",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110003401.xml 1110003402.xml"
    }, {
      "text": "ḥrb",
      "occurences": "10",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000844.xml adlib1110000841.xml adlib1110000842.xml adlib1110000842.xml adlib1110000843.xml adlib1110000898.xml adlib1110000839.xml adlib1110000897.xml adlib1110000897.xml adlib1110000838.xml"
    }, {
      "text": "ḥrd",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110003401.xml 1110003401.xml 1110003402.xml 1110003402.xml"
    }, {
      "text": "ḥrfn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000890.xml"
    }, {
      "text": "ḥrm",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000778.xml adlib1110000046.xml adlib1110000047.xml 1110003412.xml"
    }, {
      "text": "ḥrmn",
      "occurences": "34",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml 1110001575.xml 1110001575.xml"
    }, {
      "text": "ḥrmtn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "1110003318.xml"
    }, {
      "text": "ḥrnm",
      "occurences": "2",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000102.xml adlib1110000102.xml"
    }, {
      "text": "ḥrtn",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḥrw= nm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ḥrṯm",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ḥwfʿm",
      "occurences": "1",
      "maintype": "persName",
      "type": "royal",
      "subtype": "withTitle",
      "doc": "adlib1110000018.xml"
    }, {
      "text": "ḥwhm",
      "occurences": "3",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000059.xml 1110003324.xml 1110003325.xml"
    }, {
      "text": "ḥwkm",
      "occurences": "77",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000767.xml adlib1110000766.xml adlib1110000765.xml adlib1110000764.xml adlib1110000764.xml adlib1110000303.xml adlib1110000303.xml adlib1110000302.xml adlib1110000302.xml adlib1110000301.xml adlib1110000301.xml adlib1110000300.xml adlib1110000300.xml adlib1110000299.xml adlib1110000299.xml adlib1110000298.xml adlib1110000298.xml adlib1110000298.xml adlib1110000297.xml adlib1110000297.xml adlib1110000297.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000296.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000295.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000294.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000293.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000289.xml adlib1110000288.xml adlib1110000287.xml adlib1110000286.xml adlib1110000285.xml adlib1110000284.xml adlib1110000281.xml adlib1110000280.xml adlib1110000279.xml adlib1110000279.xml adlib1110000278.xml adlib1110000278.xml adlib1110000874.xml adlib1110000898.xml adlib1110000898.xml adlib1110000897.xml 1110000335.xml 1110000335.xml 1110000336.xml 1110001542.xml 1110001542.xml 1110001563.xml 1110001565.xml 1110001575.xml 1110001575.xml 1110001586.xml 1110001611.xml 1110003343.xml 1110003344.xml 1110003345.xml 1110003391.xml"
    }, {
      "text": "ḥwl",
      "occurences": "8",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000748.xml adlib1110000747.xml adlib1110000746.xml adlib1110000745.xml adlib1110000744.xml adlib1110000744.xml adlib1110000743.xml adlib1110000742.xml"
    }, {
      "text": "ḥwym",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000065.xml"
    }, {
      "text": "ḥymtr",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000911.xml"
    }, {
      "text": "ḥyw",
      "occurences": "20",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000408.xml adlib1110000037.xml adlib1110000035.xml adlib1110000908.xml adlib1110000907.xml adlib1110000907.xml adlib1110000032.xml adlib1110000029.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ḥywm",
      "occurences": "3",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000382.xml adlib1110000022.xml adlib1110000911.xml"
    }, {
      "text": "ḥywn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000866.xml 1110000052.xml"
    }, {
      "text": "ḥywt",
      "occurences": "6",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000152.xml adlib1110000152.xml adlib1110000151.xml adlib1110000151.xml adlib1110000150.xml adlib1110000149.xml"
    }, {
      "text": "ḥyΓw˥",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000028.xml"
    }, {
      "text": "ḥzfrm",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110000785.xml 1110003318.xml"
    }, {
      "text": "ḥzfrt",
      "occurences": "1",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110001916.xml"
    }, {
      "text": "ḥšdm",
      "occurences": "12",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000779.xml adlib1110000779.xml adlib1110000387.xml adlib1110000387.xml adlib1110000385.xml adlib1110000369.xml adlib1110000367.xml 1110000391.xml 1110000391.xml 1110000396.xml 1110003320.xml 1110003320.xml"
    }, {
      "text": "ḥḍrhmw",
      "occurences": "180",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḥḍrm= t",
      "occurences": "2",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "1110001887.xml 1110001888.xml"
    }, {
      "text": "ḥḍrmt",
      "occurences": "62",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "adlib1110000758.xml adlib1110000758.xml adlib1110000758.xml adlib1110000758.xml adlib1110000757.xml adlib1110000757.xml adlib1110000757.xml adlib1110000757.xml adlib1110000748.xml adlib1110000748.xml adlib1110000748.xml adlib1110000748.xml adlib1110000747.xml adlib1110000747.xml adlib1110000747.xml adlib1110000747.xml adlib1110000746.xml adlib1110000746.xml adlib1110000746.xml adlib1110000746.xml adlib1110000745.xml adlib1110000745.xml adlib1110000745.xml adlib1110000745.xml adlib1110000744.xml adlib1110000744.xml adlib1110000744.xml adlib1110000743.xml adlib1110000743.xml adlib1110000743.xml adlib1110000742.xml adlib1110000742.xml adlib1110000742.xml adlib1110000264.xml adlib1110000264.xml adlib1110000264.xml adlib1110000264.xml adlib1110000263.xml adlib1110000263.xml adlib1110000263.xml adlib1110000262.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000260.xml adlib1110000122.xml adlib1110000122.xml adlib1110000115.xml adlib1110000115.xml adlib1110000115.xml adlib1110000042.xml 1110001835.xml 1110001835.xml 1110001836.xml 1110001836.xml 1110001887.xml 1110001888.xml 1110003315.xml 1110003315.xml 1110003315.xml 1110003315.xml"
    }, {
      "text": "ḥḍrmwt",
      "occurences": "3",
      "maintype": "orgName",
      "type": "state",
      "subtype": "not specified",
      "doc": "1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ḥḍrn",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000250.xml adlib1110000250.xml 1110000248.xml"
    }, {
      "text": "ḥḍrw",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḥḍrʾb",
      "occurences": "44",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḥṭbm",
      "occurences": "21",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000905.xml adlib1110000905.xml adlib1110000906.xml adlib1110000903.xml adlib1110000904.xml adlib1110000902.xml adlib1110000908.xml adlib1110000908.xml adlib1110000907.xml 1110003352.xml 1110003353.xml 1110003354.xml 1110003354.xml 1110003355.xml 1110003356.xml 1110003357.xml 1110003358.xml 1110003359.xml 1110003360.xml 1110003361.xml 1110003362.xml"
    }, {
      "text": "ḥṭʾn",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000152.xml adlib1110000151.xml adlib1110000150.xml adlib1110000149.xml"
    }, {
      "text": "ḥṭṭ",
      "occurences": "3",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000063.xml 1110000407.xml 1110003324.xml"
    }, {
      "text": "ḥẓyn",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ḫbbt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000070.xml"
    }, {
      "text": "ḫbʾm",
      "occurences": "92",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḫbʾt",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "1110000788.xml 1110000789.xml"
    }, {
      "text": "ḫbḏn",
      "occurences": "12",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ḫdnn",
      "occurences": "45",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ḫlbn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000780.xml adlib1110000375.xml"
    }, {
      "text": "ḫld",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000064.xml 1110003324.xml"
    }, {
      "text": "ḫlfm",
      "occurences": "1",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000251.xml"
    }, {
      "text": "ḫlkrb",
      "occurences": "47",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml 1110000100.xml"
    }, {
      "text": "ḫll",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000811.xml adlib1110000810.xml adlib1110000809.xml adlib1110000866.xml"
    }, {
      "text": "ḫlʾmr",
      "occurences": "89",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ḫmrn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000887.xml"
    }, {
      "text": "ḫmʿ",
      "occurences": "3",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000411.xml adlib1110000410.xml adlib1110000077.xml"
    }, {
      "text": "ḫrf",
      "occurences": "2",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "1110001887.xml 1110001888.xml"
    }, {
      "text": "ḫršynᶜmt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000053.xml"
    }, {
      "text": "ḫsʾm",
      "occurences": "2",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000247.xml adlib1110000246.xml"
    }, {
      "text": "ḫtmw",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000049.xml"
    }, {
      "text": "ḫwln",
      "occurences": "23",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml 1110000220.xml 1110000383.xml 1110000384.xml"
    }, {
      "text": "ḫyl",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "ḫšm",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000026.xml"
    }, {
      "text": "ḫḍʿtn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "sanctuary",
      "subtype": "not specified",
      "doc": "adlib1110000780.xml"
    }, {
      "text": "ṣb= ḥm",
      "occurences": "4",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000828.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml"
    }, {
      "text": "ṣbḥ",
      "occurences": "2",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000036.xml adlib1110000032.xml"
    }, {
      "text": "ṣbḥhmw",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000373.xml adlib1110000373.xml adlib1110000371.xml adlib1110000370.xml adlib1110000370.xml"
    }, {
      "text": "ṣbḥkrb",
      "occurences": "11",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ṣbḥm",
      "occurences": "14",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000224.xml adlib1110000873.xml 1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml 1110003379.xml"
    }, {
      "text": "ṣbḥrm",
      "occurences": "3",
      "maintype": "orgName",
      "type": "group",
      "subtype": "not specified",
      "doc": "adlib1110000016.xml adlib1110000016.xml adlib1110000016.xml"
    }, {
      "text": "ṣdqʾmr",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "adlib1110000828.xml adlib1110000831.xml adlib1110000830.xml adlib1110000827.xml"
    }, {
      "text": "ṣhbn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "adlib1110000063.xml 1110003324.xml"
    }, {
      "text": "ṣnwt",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ṣnʿw",
      "occurences": "4",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "1110000376.xml 1110000376.xml 1110000377.xml 1110000377.xml"
    }, {
      "text": "ṣrwḥ",
      "occurences": "8",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000869.xml adlib1110000868.xml 1110000088.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml 1110000785.xml"
    }, {
      "text": "ṣydm",
      "occurences": "14",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000283.xml adlib1110000282.xml adlib1110000270.xml adlib1110000270.xml adlib1110000269.xml adlib1110000269.xml adlib1110000268.xml adlib1110000267.xml adlib1110000267.xml adlib1110000266.xml adlib1110000266.xml 1110000265.xml 1110000265.xml 1110003316.xml"
    }, {
      "text": "ṣydΓn˥",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000041.xml"
    }, {
      "text": "ṣyḥw",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ṭb",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "f",
      "doc": "1110000069.xml"
    }, {
      "text": "ṭmḥn",
      "occurences": "1",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000782.xml"
    }, {
      "text": "ṭrq",
      "occurences": "45",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ṭssm",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "u",
      "doc": "1110000172.xml 1110000397.xml"
    }, {
      "text": "ṭwyn",
      "occurences": "11",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "1110003340.xml 1110003364.xml 1110003367.xml 1110003368.xml 1110003369.xml 1110003370.xml 1110003371.xml 1110003372.xml 1110003373.xml 1110003374.xml 1110003379.xml"
    }, {
      "text": "ṭyb",
      "occurences": "91",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000198.xml adlib1110000197.xml adlib1110000197.xml adlib1110000196.xml adlib1110000196.xml adlib1110000195.xml adlib1110000195.xml adlib1110000194.xml adlib1110000194.xml adlib1110000193.xml adlib1110000193.xml adlib1110000192.xml adlib1110000192.xml adlib1110000192.xml adlib1110000191.xml adlib1110000191.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000189.xml adlib1110000188.xml adlib1110000188.xml adlib1110000187.xml adlib1110000187.xml adlib1110000187.xml adlib1110000186.xml adlib1110000186.xml adlib1110000185.xml adlib1110000185.xml adlib1110000184.xml adlib1110000184.xml adlib1110000183.xml adlib1110000183.xml adlib1110000182.xml adlib1110000182.xml adlib1110000181.xml adlib1110000181.xml adlib1110000180.xml adlib1110000180.xml adlib1110000179.xml adlib1110000179.xml adlib1110000178.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000176.xml adlib1110000175.xml adlib1110000175.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000145.xml adlib1110000144.xml adlib1110000144.xml adlib1110000143.xml adlib1110000143.xml adlib1110000142.xml adlib1110000142.xml adlib1110000141.xml adlib1110000141.xml adlib1110000140.xml adlib1110000140.xml adlib1110000139.xml adlib1110000139.xml adlib1110000138.xml adlib1110000138.xml adlib1110000137.xml adlib1110000137.xml adlib1110000136.xml adlib1110000136.xml adlib1110000135.xml adlib1110000135.xml adlib1110000134.xml adlib1110000134.xml adlib1110000134.xml adlib1110000133.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000131.xml adlib1110000130.xml adlib1110000130.xml adlib1110000005.xml adlib1110000005.xml"
    }, {
      "text": "ṯ= wbn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000250.xml 1110000248.xml"
    }, {
      "text": "ṯbt",
      "occurences": "1",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000393.xml"
    }, {
      "text": "ṯh= wn",
      "occurences": "3",
      "maintype": "name",
      "type": "epithet",
      "subtype": "divine",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ṯlm",
      "occurences": "5",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000762.xml adlib1110000761.xml adlib1110000761.xml adlib1110000760.xml adlib1110000759.xml"
    }, {
      "text": "ṯmd",
      "occurences": "1",
      "maintype": "orgName",
      "type": "tribe",
      "subtype": "not specified",
      "doc": "1110000073.xml"
    }, {
      "text": "ṯmdt",
      "occurences": "46",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml"
    }, {
      "text": "ṯwbn",
      "occurences": "4",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000778.xml 1110000248.xml 1110000248.xml 1110003412.xml"
    }, {
      "text": "ṯwbʾl",
      "occurences": "4",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000305.xml adlib1110000304.xml adlib1110000113.xml 1110001621.xml"
    }, {
      "text": "ṯwbṯ= wn",
      "occurences": "2",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000869.xml adlib1110000868.xml"
    }, {
      "text": "ṯwr",
      "occurences": "3",
      "maintype": "name",
      "type": "theonym",
      "subtype": "not specified",
      "doc": "adlib1110000808.xml adlib1110000807.xml adlib1110000806.xml"
    }, {
      "text": "ṯwrm",
      "occurences": "5",
      "maintype": "persName",
      "type": "gender",
      "subtype": "m",
      "doc": "adlib1110000802.xml adlib1110000801.xml adlib1110000800.xml adlib1110000799.xml adlib1110000798.xml"
    }, {
      "text": "ẓbyn",
      "occurences": "2",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000812.xml adlib1110000866.xml"
    }, {
      "text": "ẓrb",
      "occurences": "52",
      "maintype": "persName",
      "type": "patronymic",
      "subtype": "not specified",
      "doc": "adlib1110000264.xml adlib1110000263.xml adlib1110000262.xml adlib1110000261.xml adlib1110000261.xml adlib1110000260.xml adlib1110000199.xml adlib1110000199.xml adlib1110000198.xml adlib1110000197.xml adlib1110000196.xml adlib1110000195.xml adlib1110000194.xml adlib1110000193.xml adlib1110000192.xml adlib1110000191.xml adlib1110000190.xml adlib1110000189.xml adlib1110000188.xml adlib1110000187.xml adlib1110000186.xml adlib1110000185.xml adlib1110000184.xml adlib1110000183.xml adlib1110000182.xml adlib1110000181.xml adlib1110000180.xml adlib1110000179.xml adlib1110000178.xml adlib1110000177.xml adlib1110000177.xml adlib1110000176.xml adlib1110000175.xml adlib1110000174.xml adlib1110000145.xml adlib1110000144.xml adlib1110000143.xml adlib1110000142.xml adlib1110000141.xml adlib1110000140.xml adlib1110000139.xml adlib1110000138.xml adlib1110000137.xml adlib1110000136.xml adlib1110000135.xml adlib1110000134.xml adlib1110000133.xml adlib1110000132.xml adlib1110000131.xml adlib1110000130.xml adlib1110000005.xml 1110003315.xml"
    }, {
      "text": "ẓrbn",
      "occurences": "19",
      "maintype": "placeName",
      "type": "building",
      "subtype": "not specified",
      "doc": "adlib1110000361.xml adlib1110000360.xml adlib1110000359.xml adlib1110000358.xml adlib1110000357.xml adlib1110000356.xml adlib1110000355.xml adlib1110000354.xml adlib1110000353.xml adlib1110000352.xml adlib1110000351.xml adlib1110000350.xml adlib1110000349.xml adlib1110000348.xml adlib1110000347.xml adlib1110000346.xml adlib1110000345.xml adlib1110000344.xml adlib1110000343.xml"
    }, {
      "text": "ẓrm",
      "occurences": "33",
      "maintype": "placeName",
      "type": "not specified",
      "subtype": "not specified",
      "doc": "adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000771.xml adlib1110000770.xml adlib1110000770.xml adlib1110000770.xml adlib1110000769.xml adlib1110000769.xml adlib1110000769.xml adlib1110000768.xml adlib1110000768.xml adlib1110000768.xml adlib1110000291.xml adlib1110000291.xml adlib1110000290.xml adlib1110000290.xml adlib1110000289.xml adlib1110000289.xml adlib1110000288.xml adlib1110000288.xml adlib1110000287.xml adlib1110000287.xml adlib1110000287.xml adlib1110000286.xml adlib1110000286.xml adlib1110000285.xml adlib1110000285.xml adlib1110000284.xml adlib1110000284.xml adlib1110000284.xml 1110001611.xml 1110001611.xml"
    }]
  }
};


var AdlibServices = angular.module('AdlibServices', ['ngStorage']);
AdlibServices
    .service('opacsearch', ['$http', '$localStorage', function ($http, $localStorage) {
      if (!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
      if ($localStorage[Config.localStorage]['history']) this.history = $localStorage[Config.localStorage]['history'];
      else {
        var obj = {"history": {"querystring": [], "query": [], "result": []}}
        $localStorage[Config.localStorage] = obj;
        this.history = $localStorage[Config.localStorage]['history'];
      }
      this.pagesize = Config.pagesize;
      this.sortField = Config.sortField;
      this.sortOrder = Config.sortOrder;
      //////////Parameter Parsers///////////////////////////////
      this.parseFields = function (fields) {
        var fieldstring = "";
        if (fields && fields != []) {
          fieldstring += "&fields=";
          fields.forEach(function (field) {
            fieldstring += field + ",%20"
          })
        }
        return fieldstring;
      }
      this.parseLimit = function (limit, page) {
        var limitstring = "";
        if (!limit) var limit = this.pagesize;
        if (!page) var page = 1;
        var skip = (page - 1) * limit + 1;
        limitstring = "&limit=" + limit + "&startfrom=" + skip;
        return limitstring;
      }
      this.parseDB = function (database) {
        var dbString = "";
        if (database && database != "") dbString += "&database=" + database;
        return dbString;
      }
      this.parseSorting = function () {
        var sortString = "";
        return "%20sort%20" + this.sortField + "%20" + this.sortOrder;
      }
      //////////Callable retrieval functions///////////////////////////////
      this.getFullListbyDB = function (database, fields, page, limit) {
        console.log('getFullList Query: ', database, fields, page, limit);
        return $http.get(Config.baseURL + "&action=search&search=all" + this.parseSorting() + "&output=JSON&span=false" + this.parseLimit(limit, page) + this.parseDB(database) + this.parseFields(fields));
      }
      this.getPointerList = function (database, pointerfile) {
        console.log('getPointerList Query: ', database, pointerfile);
        if (pointerfile) return $http.get(Config.baseURL + "&command=getpointerfile&number=" + pointerfile + "&output=JSON&span=false" + this.parseDB(database));
        else console.log('Parameters Missing');
      }
      this.getRecordsbyPointer = function (database, pointerfile, fields, page, limit) {
        console.log('getRecordsbyPointer Query: ', database, pointerfile, fields, page, limit);
        if (pointerfile) return $http.get(Config.baseURL + "&action=search&search=pointer " + pointerfile + "&output=JSON&span=false" + this.parseLimit(limit, page) + this.parseDB(database) + this.parseFields(fields));
        else console.log('Parameters Missing');
      }
      this.getSingleRecordbyRef = function (database, reference, fields) {
        console.log('getSingleRecord Query: ', database, reference, fields);
        if (reference) return $http.get(Config.baseURL + "&action=search&search=priref=" + reference + "&output=JSON&span=false" + this.parseDB(database) + this.parseFields(fields));
        else console.log('Parameters Missing');
      }
      this.getRecordsbyIndex = function (database, index, logic, pointer, fields, page, limit) {
        console.log('getRecordsbyIndex Query: ', database, index, logic, pointer, page, fields, limit);
        if (!logic) logic = "OR";
        if (index) {
          var searchstring = "";
          index.forEach(function (query) {
            for (var key in query) {
              if (searchstring != "") searchstring += "%20" + logic + "%20";
              searchstring += key + "=%27" + query[key] + "%27";
            }
          });
          if (pointer) {
            searchstring = "(pointer%20" + pointer + ")%20AND%20(" + searchstring + ")";
          }
          return $http.get(Config.baseURL + "&action=search&search=" + searchstring + this.parseSorting() + "&output=JSON&span=false" + this.parseLimit(limit, page) + this.parseDB(database) + this.parseFields(fields));
        } else console.log('Parameters Missing');
      }
      //////////// Parameter getters / setters ///////////////////////////////
      this.updateHistory = function (string, query, page, result) {
        console.log('addtoHistory: ', query, result);
        this.history.querystring.unshift(string);
        this.history.query.unshift(query);
        if (page && result) {
          var obj = {};
          obj[page] = result;
          this.history.result.unshift(obj);
        } else this.history.result.unshift({});
      }
      this.clearHistory = function () {
        console.log('clearing History upon user request.');
        $localStorage[Config.localStorage]['history'] = {"querystring": [], "query": [], "result": []};
        this.history = $localStorage[Config.localStorage]['history'];
      }
      this.updatePage = function (queryno, page, result) {
        console.log('updatePage: ', queryno, page, result);
        if (this.history.result[queryno]) {
          this.history.result[queryno][page] = result;
        } else {
          var obj = {};
          obj[page] = result;
          this.history.result[queryno] = obj;
        }
      }
      this.updateSize = function (newsize) {
        console.log('updateSize: ', newsize);
        this.pagesize = newsize;
        $localStorage[Config.localStorage]['history']['result'] = [];
        this.history = $localStorage[Config.localStorage]['history'];
      };
      this.updateSorting = function (sort, field) {
        console.log('updateSorting: ', sort, field);
        this.sortOrder = sort;
        this.sortField = field;
        this.history.result = [];
      }
    }])
    .service('legacyPrirefs', ['$http', function ($http) {
      var OldToNew = function (oldPriref) {
        let res = legacyPrirefs.filter(p => p.old == oldPriref);
        if (res.length === 1) return res[0]['new'];
        else return false;
      };
      var NewToOld = function (newPriref) {
        let res = legacyPrirefs.filter(p => p.new == newPriref);
        if (res.length === 1) return res[0]['old'];
        else return false;
      }
      return {
        OldToNew,
        NewToOld
      }
    }])
    .service('contentrtrvl', ['$http', '$q', function ($http, $q) {
      var getImage = function (id, width, height, scalemode, fillmode) {
        console.log('getFullList Query: ', database);
        if (database) var promise = $http.get(Config.baseURL + "database=" + database + "&search=all&output=JSON&limit=1000");
        else var promise = $http.get(Config.baseURL + "search=all&output=JSON&limit=1000");
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
GeoNamesServices.service('GeoNamesServices', ['$http', '$localStorage', '$q', function ($http, $localStorage, $q) {
  const staticcache = sites;
  if (!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
  if ($localStorage[Config.localStorage]['geocache']) var geocache = $localStorage[Config.localStorage]['geocache'];
  else {
    $localStorage[Config.localStorage]['geocache'] = {};
    var geocache = $localStorage[Config.localStorage]['cache'];
  }
  var getByID = function (id) {
    console.log('GeoNames getByID: ', id);
    if (Number.isInteger(parseInt(id)) && (!this.geocache[id] || !this.geocache[id]['$$status'])) {
      var promise = $http.get("http://api.geonames.org/getJSON?formatted=true&geonameId=" + id + "&username=" + Config.geoNamesID);
      return promise;
    }
    if (id && this.geocache.id) return this.geocache.id;
    if (!Number.isInteger(id)) return $q.reject("invalid Parameters");
  }
  var addtoCache = function (ID, promise) {
    console.log('addtoCache', promise);
    if (ID && promise) {
      this.geocache[ID] = promise;
    }
  }
  var clearCache = function () {
    console.log('clearing geocache upon user request');
    if ($localStorage[Config.localStorage]['geocache']) $localStorage[Config.localStorage]['geocache'] = {};
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
ZoteroService.service('ZoteroService', function ($http, $localStorage, $q, $log) {
  this.ZoteroConfig = {
    BASEURL: "https://api.zotero.org/",
    BASEPARAMS: {
      "format": "json",
      "sort": "title",
      "limit": 10,
      "direction": "asc",
      "start": 0,
      "defaultlib": "3808523"
    }
  }
  this.initStorage = function () {
    $log.debug('initializing local storage');
    if (!$localStorage[Config.LOCALSTORAGE]) $localStorage[Config.LOCALSTORAGE] = {};
    if ($localStorage[Config.LOCALSTORAGE]['zoterocache']) this.zoterocache = $localStorage[Config.LOCALSTORAGE]['zoterocache'];
    else {
      $localStorage[Config.LOCALSTORAGE]['zoterocache'] = {};
      this.zoterocache = $localStorage[Config.LOCALSTORAGE]['zoterocache'];
    }
  }
  this.getList = function (inputparams) {
    $log.debug('GeoNames getList: ', inputparams);
    var params = JSON.parse(JSON.stringify(this.ZoteroConfig.BASEPARAMS));
    Object.assign(params, inputparams);
    return $q(function (resolve, reject) {
      $http.get(
          this.ZoteroConfig.BASEURL + params.path,
          {
            params: params
          }
      ).then(
          function (res) {
            resolve(res);
          }.bind(this),
          function (err) {
            reject(err);
          });
    }.bind(this));
  }
  this.getItem = function (path) {
    $log.debug('GeoNames getByID: ', path);
    return $q(function (resolve, reject) {
      if (this.zoterocache[path]) resolve(this.zoterocache[path]);
      else if (!this.zoterocache[path]) {
        $http.get(
            this.ZoteroConfig.BASEURL + path,
            {}
        ).then(
            function (res) {
              console.log(res);
              resolve(res.data);
              //this.zoterocache[params.geonameId] = res.data;
            }.bind(this),
            function (err) {
              reject(err);
            });
      }
    }.bind(this));
  }
  this.updateSize = function (newsize) {
    this.ZoteroConfig.BASEPARAMS.limit = newsize;
    return this.ZoteroConfig.BASEPARAMS.limit;
  }
  this.updateSorting = function (direction, param) {
    this.ZoteroConfig.BASEPARAMS.direction = direction;
    this.ZoteroConfig.BASEPARAMS.sort = param;
    return {direction: this.ZoteroConfig.BASEPARAMS.direction, sort: this.ZoteroConfig.BASEPARAMS.sort}
  }
  this.updateStart = function (start) {
    this.ZoteroConfig.BASEPARAMS.start = start;
    return this.ZoteroConfig.BASEPARAMS.start;
  }
  this.initStorage();
});

/**
 * Service providing convenience Methods and Cacheing for the ExistDB API
 */
var ExistService = angular.module('ExistService', ['ngStorage']);
ExistService.service('ExistService', function ($http, $localStorage, $q, $log) {
  this.Manifest = $q;
  this.Meta = {HITS: 0}
  this.ExistConfig = {
    BASEURL: "https://glaser-tei.acdh.oeaw.ac.at/exist/restxq/glaser-tei/done/",
    PAGESIZE: 10
  }
  this.initStorage = function () {
    $log.debug('initializing local storage');
    if (!$localStorage[Config.LOCALSTORAGE]) $localStorage[Config.LOCALSTORAGE] = {};
    if ($localStorage[Config.LOCALSTORAGE]['existcache']) this.existcache = $localStorage[Config.LOCALSTORAGE]['existcache'];
    else {
      $localStorage[Config.LOCALSTORAGE]['existcache'] = {};
      this.existcache = $localStorage[Config.LOCALSTORAGE]['existcache'];
    }
    //TODO: make TEI records queryable by ID
    //as the single record id_s are not trivial since they contain the ingest time/database
    //well have to fetch the entire manifest in the beginning to have the proper urls independent of the current page
    this.Manifest = $q(function (resolve, reject) {
      $http.get(this.ExistConfig.BASEURL + 'json?page[number]=1&page[size]=1000').then(function (res) {
        var idx = res.data.data.length;
        var m = {};
        while (idx--) {
          var key = res.data.data[idx].id.split('_')[0];
          m[key] = res.data.data[idx];
        }
        this.Meta.HITS = res.data.meta.hits;
        resolve(m);
      }.bind(this));
    }.bind(this));
  }
  this.getPage = function (pageno, pagesize) {
    $log.debug('fetching Exist Page', pageno, pagesize);
    if (!pageno) pageno = 1;
    if (!pagesize) pagesize = this.ExistConfig.PAGESIZE;
    return $q(function (resolve, reject) {
      $http.get(
          this.ExistConfig.BASEURL + 'json' + '?page[number]=' + pageno + '&page[size]=' + pagesize,
          {}
      ).then(
          function (res) {
            this.Page = {};
            var idx = res.data.data.length;
            while (idx--) {
              var key = res.data.data[idx].id.split('.')[0];
              this.Page[key] = res.data.data[idx];
            }
            this.Meta.HITS = res.data.meta.hits;
            resolve(this.Page);
          }.bind(this),
          function (err) {
            reject(err);
          });
    }.bind(this));
  }
  this.getItem = function (id, format) {
    console.log('Exist getByID: ', id, format);
    if (!format) var format = "xml";
    return $q(function (resolve, reject) {
      if (this.existcache[id]) resolve(this.existcache[id]);
      else if (!this.existcache[id]) {
        this.Manifest.then(function (m) {
          $http.get(
              this.ExistConfig.BASEURL + id + '.xml/' + format,
          ).then(
              function (res) {
                resolve(res.data);
              }.bind(this),
              function (err) {
                reject(err);
              });
        }.bind(this));
      }
    }.bind(this));
  }
  this.updatePage = function (queryno, page, result) {
    console.log('updatePage: ', queryno, page, result);
    if (this.history.result[queryno]) {
      this.history.result[queryno][page] = result;
    } else {
      var obj = {};
      obj[page] = result;
      this.history.result[queryno] = obj;
    }
  }
  this.updateSize = function (newsize) {
    console.log('updateSize: ', newsize);
    this.pagesize = newsize;
    $localStorage[Config.localStorage]['history']['result'] = [];
    this.history = $localStorage[Config.localStorage]['history'];
  };
  this.getEntities = function () {
    $log.debug('fetching Entity List');
    return $q(function (resolve, reject) {
      $http.get(
          'https://glaser-tei.acdh.oeaw.ac.at/analyze/entities.xql',
          {}
      ).then(
          function (res) {
            resolve(res.data);
          }.bind(this),
          function (err) {
            resolve(entities);
          });
    }.bind(this));
  }
  this.initStorage();
});
