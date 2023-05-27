let tralivali;

const base = [{
    id: 0,
    question: 'выносливый',
    answer: 'hardy',
}, {
    id: 1,
    question: 'выкачивать',
    answer: 'deflate'
}, {
    id: 2,
    question: 'успокаивать',
    answer: 'mollify'
}, {
    id: 3,
    question: 'застенчивый',
    answer: 'gawky'
}, {
    id: 4,
    question: 'изодранный',
    answer: 'tattered'
}, {
    id: 5,
    question: 'козырек',
    answer: 'visor'
}, {
    id: 6,
    question: 'душить',
    answer: 'smother'

}, {
    id: 7,
    question: 'заметный',
    answer: 'discernible'
}, {
    id: 8,
    question: 'наполняться до краев',
    answer: 'brim'
}, {
    id: 9,
    question: 'бандитский',
    answer: 'thuggish'
}, {
    id: 10,
    question: 'делать вывод /выводить значение',
    answer: 'infer'
}, {
    id: 11,
    question: 'презрительно',
    answer: 'scornfully'
}, {
    id: 12,
    question: 'извергающийся',
    answer: 'gushing'
}, {
    id: 13,
    question: 'третичный',
    answer: 'tertiary'
}, {
    id: 14,
    question: 'подметать',
    answer: 'sweep'
}, {
    id: 15,
    question: 'гипнотизировать',
    answer: 'mesmerize'
}, {
    id: 16,
    question: 'не одобрать',
    answer: 'disapprove'
}, {
    id: 17,
    question: 'деревушка',
    answer: 'hamlet'
}, {
    id: 18,
    question: 'рассеивать',
    answer: 'dispel'
}, {
    id: 19,
    question: 'озадачивать',
    answer: 'bewilder'
}, {
    id: 20,
    question: 'сквозняк',
    answer: 'draught'
}, {
    id: 21,
    question: 'обдуманно',
    answer: 'deliberately'
}, {
    id: 22,
    question: 'уничижительный',
    answer: 'derogatory'
}, {
    id: 23,
    question: 'придирчиво',
    answer: 'meticulously'
}, {
    id: 24,
    question: 'местонахождение',
    answer: 'whereabouts'
}, {
    id: 25,
    question: 'жеманный',
    answer: 'affected'
}, {
    id: 26,
    question: 'разъединять',
    answer: 'sever'
}, {
    id: 27,
    question: 'разобрать',
    answer: 'make out'
}, {
    id: 28,
    question: 'украшать',
    answer: 'emblazon'
}, {
    id: 29,
    question: 'повсеместный',
    answer: 'ubiquitous'
}, {
    id: 30,
    question: 'в этом отношении',
    answer: 'for that matter'
}, {
    id: 31,
    question: 'чтобы избавиться от',
    answer: 'to be done away with'
}, {
    id: 32,
    question: 'продуманный',
    answer: 'elaborate'
}, {
    id: 33,
    question: 'непостижимый',
    answer: 'unfathomable'
}, {
    id: 34,
    question: 'бухта',
    answer: 'cove'
}, {
    id: 35,
    question: 'сюда',
    answer: 'hither'
}, {
    id: 36,
    question: 'туда',
    answer: 'thither'
}, {
    id: 37,
    question: 'архипелаг',
    answer: 'archipelago'
}, {
    id: 38,
    question: 'осуществимый',
    answer: 'feasible'
}, {
    id: 39,
    question: 'лесоповал',
    answer: 'felling'
}, {
    id: 40,
    question: 'назначение',
    answer: 'assignment'
}, {
    id: 41,
    question: 'переполнять',
    answer: 'congest'
}, {
    id: 42,
    question: 'отрешенно',
    answer: 'absentmindedly'
}, {
    id: 43,
    question: 'высыхать',
    answer: 'shrivel'
}, {
    id: 44,
    question: 'колебание',
    answer: 'demur'
}, {
    id: 45,
    question: 'предупреждение',
    answer: 'premonition'
}, {
    id: 46,
    question: 'сугроб',
    answer: 'bank of snow'

}, {
    id: 47,
    question: 'пошлина',
    answer: 'toll'
}, {
    id: 48,
    question: 'сельхоз рабочий',
    answer: 'farmhand'
}, {
    id: 49,
    question: 'нападавший',
    answer: 'assailant'
}, {
    id: 50,
    question: 'приводить к',
    answer: 'yield'
}, {
    id: 51,
    question: 'грубый',
    answer: 'roughshod'
}, {
    id: 52,
    question: 'сад',
    answer: 'orchard'

}, {
    id: 53,
    question: 'складывать',
    answer: 'add up'
}, {
    id: 54,
    question: 'спускаться по веревке',
    answer: 'abseil'
}, {
    id: 55,
    question: 'плавучая льдина',
    answer: 'floe'
}, {
    id: 56,
    question: 'медленный',
    answer: 'dilatory'
}, {
    id: 57,
    question: 'вялый',
    answer: 'sluggish'
}, {
    id: 58,
    question: 'тосковать',
    answer: 'yearn'
}, {
    id: 59,
    question: 'приход',
    answer: 'parish'
}, {
    id: 60,
    question: 'истощаться',
    answer: 'dwindle'
}, {
    id: 61,
    question: 'сбегать от',
    answer: 'flake out on'
}, {
    id: 62,
    question: 'несоответствие',
    answer: 'discrepancy'
}, {
    id: 63,
    question: 'импровизированный',
    answer: 'makeshift'
}, {
    id: 64,
    question: 'искажать',
    answer: 'contort'
}, {
    id: 65,
    question: 'возмутительный',
    answer: 'outrageous'
}, {
    id: 66,
    question: 'непристойный',
    answer: 'obscene'
}, {
    id: 67,
    question: 'промокший',
    answer: 'sodden'
}, {
    id: 68,
    question: 'стопка',
    answer: 'ream'
}, {
    id: 69,
    question: 'бесспорно',
    answer: 'unarguably'
}, {
    id: 70,
    question: 'посягнуть',
    answer: 'infringe'
}, {
    id: 71,
    question: 'соединенный из',
    answer: 'amalgamated from'
}, {
    id: 72,
    question: 'надевать',
    answer: 'don'
}, {
    id: 73,
    question: 'уборная',
    answer: 'latrIne'
}, {
    id: 74,
    question: 'навязчивый',
    answer: 'intrusive'
}, {
    id: 75,
    question: 'самоуверяющиеся',
    answer: 'self-assertive'
}, {
    id: 76,
    question: 'псих',
    answer: 'nutter'
}, {
    id: 77,
    question: 'радость',
    answer: 'mirth'
}, {
    id: 78,
    question: 'ошпаривать',
    answer: 'scald'
}, {
    id: 79,
    question: 'пенистый (капуччино)',
    answer: 'frothy'
}, {
    id: 80,
    question: 'задумчивый',
    answer: 'wistful'
}, {
    id: 81,
    question: 'изобретать, умудряться',
    answer: 'contrive'
}, {
    id: 82,
    question: 'дрянной, сырный',
    answer: 'cheesy'
}, {
    id: 83,
    question: 'скомкать',
    answer: 'crumple'
}, {
    id: 84,
    question: 'локоны',
    answer: 'ringlets'
}, {
    id: 85,
    question: 'пламенный',
    answer: 'fiery'
}, {
    id: 86,
    question: 'ссора',
    answer: 'sqabble'
}, {
    id: 89,
    question: 'рискнуть',
    answer: 'jeopardise'
}, {
    id: 90,
    question: 'корпеть, размышлять',
    answer: 'pore over'
}, {
    id: 91,
    question: 'насмешливый',
    answer: 'derisive/dirAIsiv'
}, {
    id: 92,
    question: 'ликование',
    answer: 'glee'
}, {
    id: 93,
    question: 'контрольный/сигнальный',
    answer: 'telltale'
}, {
    id: 94,
    question: 'безбожный',
    answer: 'ungodly'
}, {
    id: 95,
    question: 'пульсировать',
    answer: 'throb'
}, {
    id: 96,
    question: 'погибнуть',
    answer: 'perish'
}, {
    id: 97,
    question: 'хриплый',
    answer: 'raucous'
}, {
    id: 98,
    question: 'бормотать/тараторить',
    answer: 'gabble'
}, {
    id: 99,
    question: 'малыш',
    answer: 'tot'
}, {
    id: 100,
    question: 'упрощенный',
    answer: 'nofrills'
}, {
    id: 101,
    question: 'нападение',
    answer: 'Onslaught'
}, {
    id: 102,
    question: 'вот это да',
    answer: 'blimey/blAimi'
}, {
    id: 103,
    question: 'поразительный',
    answer: 'astound'
}, {
    id: 104,
    question: 'перемирие',
    answer: 'truce'
}, {
    id: 105,
    question: 'всё же',
    answer: 'nonetheless'
}, {
    id: 106,
    question: 'острый',
    answer: 'pUngent'
}, {
    id: 107,
    question: 'содрогание',
    answer: 'wince'
}, {
    id: 108,
    question: 'приободриться',
    answer: 'perk up'
}, {
    id: 109,
    question: 'форма для выпечки',
    answer: 'cake tin'
}, {
    id: 110,
    question: 'камбуз/галера/гранка',
    answer: 'gAlley'
}, {
    id: 111,
    question: 'бутерброд',
    answer: 'sarnie'
}, {
    id: 112,
    question: 'неразборчиво',
    answer: 'unintelligibly'
}, {
    id: 113,
    question: 'лепетать',
    answer: 'babble'
}, {
    id: 114,
    question: 'исказить',
    answer: 'garble'
}, {
    id: 115,
    question: 'высокомерный',
    answer: 'contemptuous'
}, {
    id: 116,
    question: 'завод/стан/мельница',
    answer: 'mill'
}, {
    id: 117,
    question: 'ухмылка',
    answer: 'smirk'
}, {
    id: 118,
    question: 'пустельга',
    answer: 'kesTrel'
}, {
    id: 119,
    question: 'щетина',
    answer: 'stubble'
}, {
    id: 120,
    question: 'мученик',
    answer: 'martyr/mAte'
}, {
    id: 121,
    question: 'прикосновение',
    answer: 'dab'
}, {
    id: 122,
    question: 'папоротник',
    answer: 'fern'
}, {
    id: 123,
    question: 'хрустеть',
    answer: 'crunch'
}, {
    id: 124,
    question: 'подгонять/убедить',
    answer: 'urge on'
}, {
    id: 125,
    question: 'сухожилие',
    answer: 'sinew'
}, {
    id: 126,
    question: 'яростно',
    answer: 'vehemently/vEementli'
}, {
    id: 127,
    question: 'рассердить',
    answer: 'disgrUntle'
}, {
    id: 128,
    question: 'ограничение',
    answer: 'confine/kenfAIn'
}, {
    id: 129,
    question: 'завязнуть в трясине/болото',
    answer: 'mire/mAIe'
}, {
    id: 130,
    question: 'празднество',
    answer: 'jamboree/jЭmberi'
}, {
    id: 131,
    question: 'ручная мельница',
    answer: 'quern'
}, {
    id: 132,
    question: 'потерявший голову/опьяненный',
    answer: 'besotted'
}, {
    id: 133,
    question: 'игра слов/каламбур',
    answer: 'pun'
}, {
    id: 134,
    question: 'надоедливый',
    answer: 'pesky'
}, {
    id: 135,
    question: 'утомительный',
    answer: 'tedious/tIdies'
}, {
    id: 136,
    question: 'топ-менеджер',
    answer: 'chief executive'
}, {
    id: 137,
    question: 'заманивать',
    answer: 'entice'
}, {
    id: 138,
    question: 'подчиненный',
    answer: 'underling'
}, {
    id: 139,
    question: 'венок',
    answer: 'wreath/rith'
}, {
    id: 140,
    question: 'загрязнять',
    answer: 'bismirch my name with I/mEtch'
}, {
    id: 141,
    question: 'швейцар/сопровождать',
    answer: 'usher'
}, {
    id: 141,
    question: 'проигравший',
    answer: 'underdog'
}, {
    id: 141,
    question: 'очаг',
    answer: 'hearth/hath'
}, {
    id: 142,
    question: 'дамба',
    answer: 'dam'
}, {
    id: 143,
    question: 'долбить/долото',
    answer: 'gouge/gaudj'
}, {
    id: 144,
    question: 'тяжелая работа/скукота',
    answer: 'drUdgery'
}, {
    id: 145,
    question: 'толчок локтем/подталкивать',
    answer: 'nudge'
}, {
    id: 146,
    question: 'липкий',
    answer: 'clammy/klЭmi'
}, {
    id: 147,
    question: 'шуршать/шелестеть',
    answer: 'rustling'
}, {
    id: 148,
    question: 'нервотрепка/трудности',
    answer: 'hassle'
}, {
    id: 149,
    question: 'переполнять/зубрить',
    answer: 'cram'
}, {
    id: 150,
    question: 'фыркать',
    answer: 'snort'
}, {
    id: 151,
    question: 'наклоняться',
    answer: 'tilt'
}, {
    id: 152,
    question: 'боярышник',
    answer: 'hauthorn/hoTHon'
    }, {
        id: 153,
        question: 'замкнутый',
        answer: 'insular'
}, {
    id: 154,
    question: 'само по себе',
    answer: 'in its own right'
// Self-development is important in its own right, not only in combination with education.
}, {
    id: 155,
    question: 'бесстрашный ',
    answer: 'intrEpid'
}, {
    id: 156,
    question: 'неуверенный',
    answer: 'tEntative'
}, {
    id: 157,
    question: 'непреклонный',
    answer: 'Adamant'
}, {
    id: 158,
    question: 'лозоискатель',
    answer: 'dowser'
}, {
    id: 159,
    question: 'лишайник',
    answer: 'lichen/lAiken'
}, {
    id: 160,
    question: 'встревоженный',
    answer: 'dismAyed'
}, {
    id: 161,
    question: 'ошибочность',
    answer: 'fallibility/fэlibIliti'
}, {
    id: 162,
    question: 'истощиться',
    answer: 'dwindle'
}, {
    id: 163,
    question: 'перевозчик',
    answer: 'haulier/hOlje'
}, {
    id: 164,
    question: 'грязь',
    answer: 'grime/graim'
}, {
    id: 165,
    question: 'создавать помехи/ковылять',
    answer: 'hobble'
}, {
    id: 166,
    question: 'пашня/пахотный',
    answer: 'arable/Эrebl/land'
}, {
    id: 167,
    question: 'сумрачный',
    answer: 'sulky'
// sulky teenager
}, {
    id: 168,
    question: 'лысуха/простак',
    answer: 'coot'
}, {
    id: 169,
    question: 'кряква',
    answer: 'mallard/mЭled'
}, {
    id: 170,
    question: 'дергать',
       answer: 'yank/jЭnk'
}, {
    id: 171,
    question: 'исключать',
    answer: 'rule out smth./smb.'
}, {
    id: 172,
    question: 'медь',
    answer: 'brass'
}, {
    id: 173,
    question: 'сланец',
    answer: 'shale'
}, {
    id: 174,
    question: 'дрок',
    answer: 'gorse'
}, {
    id: 175,
    question: 'глыба/скопление',
    answer: 'clump'
}, {
    id: 176,
    question: 'горностай',
    answer: 'stoat'
}, {
    id: 177,
    question: 'невозмутимый',
    answer: 'unpertUrbed'
}, {
    id: 178,
    question: 'вздрагивать',
    answer: 'flinch'
}, {
    id: 179,
    question: 'сверхпрочный/сверхмощный',
    answer: 'heavy-duty'
}, {
    id: 180,
    question: 'осторожный',
    answer: 'precautious'
}, {
    id: 181,
    question: 'отвалить/бесить',
    answer: 'piss off'
}, {
    id: 182,
    question: 'нюхать/фыркать',
    answer: 'snort'
}, {
    id: 183,
    question: 'туберкулезный',
    answer: 'consumptive'
}, {
    id: 184,
    question: 'рвано',
    answer: 'raggedly'
}, {
    id: 185,
    question: 'обострение  /вспышка огня',
    answer: 'flare-up'
}, {
    id: 186,
    question: 'ограничение',
    answer: 'stint'
}, {
    id: 187,
    question: 'резкий',
    answer: 'garish'

}, {
    id: 188,
    question: 'мрачный',
    answer: 'dIsmal'
}, {
    id: 189,
    question: 'специфический/свойственный to',
    answer: 'peculiar'
}, {
    id: 190,
    question: 'угрюмый',
    answer: 'morose/merEuz'
}, {
    id: 191,
    question: 'падение/провал/погружение',
    answer: 'dip'

}, {
    id: 192,
    question: 'неосторожный',
    answer: 'unwary'
}, {
    id: 193,
    question: 'лакомый кусочек',
    answer: 'tIdbit'
}, {
    id: 194,
    question: 'соблюдение/соответствие/согласие',
    answer: 'compliance'
}, {
    id: 195,
    question: 'несоответствие',
    answer: 'discrEpancy'

}, {
    id: 196,
    question: 'пособие',
    answer: 'dole/deul'

}, {
    id: 197,
    question: 'злобный',
    answer: 'spitefule/ai'
}, {
    id: 198,
    question: 'потрепанный',
    answer: 'scruffy'
}, {
    id: 199,
    question: 'ветхий/дряхлый',
    answer: 'decrepit/dikrEpit'
}, {
    id: 200,
    question: 'сделанный на заказ',
    answer: 'bespoke'
}, {
    id: 201,
    question: 'протокол результатов/карта показателей',
    answer: 'scorecard'

}, {
    id: 202,
    question: 'дождевик',
    answer: 'cagoule/kəˈɡuːl'
}, {
    id: 203,
    question: 'отменять/упразднять',
    answer: 'abOlish'
}, {
    id: 204,
    question: 'доверчивый',
    answer: 'crEdulous'
}, {
    id: 205,
    question: 'фыркать/нюхать',
    answer: 'snort'
}, {
    id: 206,
    question: 'страх/трепет/благоговение',
    answer: 'awe/o:'
}, {
    id: 207,
    question: 'присяга/клятва',
    answer: 'oath/outh'
}, {
    id: 208,
    question: 'клятва',
    answer: 'vow/vau'
}, {
    id: 209,
    question: 'ученичество',
    answer: 'apprenticeship'
}, {
    id: 210,
    question: 'превзойти (кого-то)',
    answer: 'outdo smb'
}, {
    id: 211,
    question: 'проницательность',
    answer: 'astuteness/ə-stüt'

}, {
    id: 212,
    question: 'торопливо',
    answer: 'hastily/hEistili'
}, {
    id: 213,
    question: 'выносить/выдерживать',
    answer: 'put up with'
}, {
    id: 214,
    question: 'претерпевать/пребывать',
    answer: 'abide'
}, {
    id: 215,
    question: 'автомобилист',
    answer: 'mOtorist'

}, {
    id: 216,
    question: 'укреплять',
    answer: 'stiffen'

}, {
    id: 217,
    question: 'раздражительно',
    answer: 'petulantly/pEtʃ.ə.lənt.li'
}, {
    id: 218,
    question: 'безрассудство',
    answer: 'temErity'
}, {
    id: 219,
    question: 'установленный законом',
    answer: 'stAtutory'
}, {
    id: 220,
    question: 'сдерживание',
    answer: 'detErrence'
}, {
    "id": 221,
    "answer": "look down on",
    "question": "смотреть сверху вниз"
}, {
    "id": 222,
    "answer": "to get wearing",
    "question": "надоедать"
}, {
    "id": 223,
    "answer": "to do one\'s head in",
    "question": "раздражать/смущать"
}, {
    "id": 224,
    "answer": "to build up",
    "question": "собираться/накапливаться"
}, {
    "id": 225,
    "answer": "to bug smb. with smth.",
    "question": "доставать кого-л. чем-л."
}, {
    "id": 226,
    "answer": "clock in",
    "question": "начинать работать/открываться"
}, {
    "id": 227,
    "answer": "gruelling",
    "question": "изнурительный"
}, {
    "id": 228,
    "answer": "courtesy bus",
    "question": "бесплатный автобус"
}, {
    "id": 229, 
    "question": "трещина", 
    "answer": "cranny"
}, {
    "id": 230,
    "question": "придумать",
    "answer": "concoct/kenkOkt"
}, {
    "id": 231,
    "question": "выдумка/сливочная помадка/уклоняться",
    "answer": "fudge"
    }, {
        "id": 232,
        "question": "снимать с должности /свергать /выгнать",
        "answer": "oust/aust"
    }, {
        "id": 233,
        "question": "произносить (звуки)",
        "answer": "to get one's tongue round"
    }, {
        "id": 234,
        "question": "что побуждает тебя",
        "answer": "What spurred you"
    }, {
        "id": 235,
        "question": "приобретать",
        "answer": "to take up a new habit"
    }, {
        "id": 236,
        "question": "правдоподобно",
        "answer": "plausibly"
    }, {
        "id": 237,
        "question": "уныло",
        "answer": "gloomily"
    }, {
        "id": 238,
        "question": "выскользнуть",
        "answer": "slip out of"
    }, {
        "id": 239,
        "question": "предположительно",
        "answer": "presumably"
    }, {
        "id": 240,
        "question": "быть НА собрании",
        "answer": "to be IN a meeting"
    }, {
        "id": 241,
        "question": "целиком",
        "answer": "by and large"
    }, {
        "id": 242,
        "question": "головокружительный/very fast and dangerous",
        "answer": "break-neck"
    }, {
        "id": 243,
        "question": "to try to get or win something",
        "answer": "to go for"
    }, {
        "id": 244,
        "question": "not as good as people say",
        "answer": "not all it is cracked up to be"
    }, {
        "id": 245,
        "question": "трудоголизм",
        "answer": "workaholism"
    }, {
        "id": 246,
        "question": "страдание",
        "answer": "anguish"
    }, {
        "id": 247,
        "question": "сходиться",
        "answer": "converge"
    }, {
        "id": 248,
        "question": "стабильный/устойчивый",
        "answer": "sustainable"
    }, {
        "id": 249,
        "question": "вносить свою лепту",
        "answer": "to do one's share"
    }, {
        "id": 250,
        "question": "суетливый",
        "answer": "fussy"
    }, {
        "id": 251,
        "question": "рутина/колея",
        "answer": "a rut/а"
    }, {
        "id": 252,
        "question": "хныкать",
        "answer": "whine"
    }, {
        "id": 253,
        "question": "пасмурный",
        "answer": "overcast"
    }, {
        "id": 254,
        "question": "баловать",
        "answer": "indulge"
    }, {
        "id": 255,
        "question": "прихорошиться",
        "answer": "preen"
    }, {
        "id": 256,
        "question": "рисковать",
        "answer": "hazard"
    }, {
        "id": 257,
        "question": "откровенный",
        "answer": "outspoken"
    }, {
        "id": 258,
        "question": "снисходительный",
        "answer": "lenient"
    }, {
        "id": 259,
        "question": "whip into a frenzy",
        "answer": "become very excited"
    }, {
        "id": 260,
        "question": "дуться /надувать губы",
        "answer": "to pout about"
    }, {
        "id": 261,
        "question": "срыв",
        "answer": "disruption"
    }, {
        "id": 262,
        "question": "продумать/придумать",
        "answer": "think up"
    }, {
        "id": 263,
        "question": "сэкономить",
        "answer": "squirrel away some money"
    }, {
        "id": 264,
        "question": "сверх меры",
        "answer": "beyond belief"
    }, {
        "id": 265,
        "question": "попытаться",
        "answer": "give it a shot"
    }, {
        "id": 266,
        "question": "идти по стопам людей",
        "answer": "follow in the footsteps of people"
    }, {
        "id": 267,
        "question": "избавиться от привычки",
        "answer": "subtract a habit"
    }, {
        "id": 268,
        "question": "вести себя по-детски",
        "answer": "go into child mode"
   }, {
        "id": 269,
        "question": "надевать",
        "answer": "don"
    }, {
        "id": 270,
        "question": "несостоятельный",
        "answer": "untenable"
    }, {
        "id": 271,
        "question": "хотя",
        "answer": "albeit"
    }, {
        "id": 272,
        "question": "не соответствует действительности",
        "answer": "it was beyond the realms of plausibility"
    }, {
        "id": 273,
        "question": "быть привязанным к чему-то",
        "answer": "to be hooked on something"
    }, {
        "id": 274,
        "question": "выйти за рамки/расширить границы возможностей",
        "answer": "to push the limits/to exceed the bounds of"
    }, {
        "id": 275,
        "question": "оживленный/быстрый",
        "answer": "brisk"
    }, {
        "id": 276,
        "question": "пожирать (еду)/бормотать",
        "answer": "gobble"
    }, {
        "id": 277,
        "question": "резко покончить с дурной привычкой",
        "answer": "to go cold turkey"
    }, {
        "id": 278,
        "question": "отвыкать от лекарств /пристастий",
        "answer": "to wean somebody off smth (a substance)"
    }, {
        "id": 279,
        "question": "отрава",
        "answer": "the bane of my life"
    }, {
        "id": 280,
        "question": "to become difficult to control",
        "answer": "to get out of hand"
    }, {
        "id": 281,
        "question": "выясниться",
        "answer": "transpire"
    }, {
        "id": 282,
        "question": "элитный",
        "answer": "upmarket"
    }, {
        "id": 283,
        "question": "захват/конфискация",
        "answer": "seizure"
    }, {
        "id": 284,
        "question": "нежелание",
        "answer": "reluctance"
    }, {
        "id": 285,
        "question": "ссора/шум",
        "answer": "row (BR)"
    }, {
        "id": 286,
        "question": "проблеск",
        "answer": "spark"
    }, {
        "id": 287,
        "question": "укреплять отношения или соглашения",
        "answer": "to cement"
    }, {
        "id": 288,
        "question": "подсовывать",
        "answer": "to slip"
    }, {
        "id": 289,
        "question": "вставлять свои 5 копеек",
        "answer": "someone’s two cents"
    }, {
        "id": 290,
        "question": "создавать напряжение",
        "answer": "to put a strain on"
    }, {
        "id": 291,
        "question": "совместимый",
        "answer": "compatible"
    }, {
        "id": 292,
        "question": "испортившийся",
        "answer": "This milk smells off./Who knows if the food isn't off?"
    }, {
        "id": 293,
        "question": "выгонять",
        "answer": "to put out"
    }, {
        "id": 294,
        "question": "разобраться",
        "answer": "to put your finger on something"
    }, {
        "id": 295,
        "question": "приглашать",
        "answer": "to ask out"
    }, {
        "id": 296,
        "question": "попасться на крючок",
        "answer": "to fall for"
}, {
    "id": 297,
    "question": "изнашивать",
    "answer": "to wear down"
}, {
    "id": 298,
    "question": "разойтись (о паре/семье)",
    "answer": "to split up"
}, {
    "id": 299,
    "question": "помириться",
    "answer": "make up"
}, {
    "id": 300,
    "question": "нудный",
    "answer": "humdrum"
}, {
    "id": 301,
    "question": "причуда, конек",
    "answer": "fad"
}, {
    "id": 302,
    "question": "коммуникабельный",
    "answer": "outgoing"
}, {
    "id": 303,
    "question": "добиться",
    "answer": "notch up"
}, {
    "id": 304,
    "question": "обман",
    "answer": "deception"
}, {
    "id": 305,
    "question": "колебаться/трепетать",
    "answer": "dither"
}, {
    "id": 306,
    "question": "раздражительность",
    "answer": "fretfulness"
}, {
    "id": 307,
    "question": "препятствовать",
    "answer": "hinder"
}, {
    "id": 308,
    "question": "неуловимый",
    "answer": "elusive"
}, {
    "id": 309,
    "question": "подающий надежды",
    "answer": "aspiring"
}, {
    "id": 310,
    "question": "приемлемый",
    "answer": "eligible"
}, {
    "id": 311,
    "question": "неустойчивый",
    "answer": "erratic"
}, {
    "id": 312,
    "question": "истощиться",
    "answer": "dwindle"
},
{
    "id": 313,
    "question": "усилитель",
    "answer": "amp"
}, {
    "id": 314,
    "question": "кривой",
    "answer": "wry/rai"
}, {
    "id": 315,
    "question": "вызывающе",
    "answer": "defiantly"
}, {
    "id": 316,
    "question": "идиот",
    "answer": "prat"
}, {
    "id": 317,
    "question": "мужлан",
    "answer": "loon"
}, {
    "id": 318,
    "question": "проходить украдкой",
    "answer": "sidle/saidl"
}, {
    "id": 319,
    "question": "потрясение",
    "answer": "bemusement"
},
{
    "id": 320,
    "question": "могущий быть удостоверенным",
    "answer": "certifiable"
}, {
    "id": 321,
    "question": "зловещий",
    "answer": "ominous"
}, {
    "id": 322,
    "question": "место проведения",
    "answer": "venue"
}, {
    "id": 323,
    "question": "падать в обморок",
    "answer": "swoon"
}, {
    "id": 324,
    "question": "жажда",
    "answer": "lust/A"
}, {
    "id": 325,
    "question": "перебивать (в разговоре)",
    "answer": "heckle"
}, {
    "id": 326,
    "question": "хитрый/хитрость",
    "answer": "cunning"
}, {
    "id": 327,
    "question": "вдрызг пьяный",
    "answer": "sozzled"
}, {
    "id": 328,
    "question": "бездельничать",
    "answer": "faff around"
}, {
    "id": 329,
    "question": "нетронутый",
    "answer": "pristine/pristAIn"
}, {
    "id": 330,
    "question": "бедствие",
    "answer": "calAmity"
}, {
    "id": 331,
    "question": "тошнота",
    "answer": "nausea/nOsje"
}, {
    "id": 332,
    "question": "удар/колотить",
    "answer": "bash"
}, {
    "id": 333,
    "question": "явный",
    "answer": "blatant/blEitent"
}, {
    "id": 334,
    "question": "разврат",
    "answer": "lechery/lEtcheri"
}, {
    "id": 335,
    "question": "толпа",
    "answer": "scrum"
}, {
    "id": 336,
    "question": "сдерживание",
    "answer": "deterrence"
},
{"id":337,"question":"проверенный человек","answer":"safe pair of hands"},
{"id":338,"question":"быть в компании с","answer":"to knock around with"},
{"id":339,"question":"держаться особняком","answer":"to keep themselves to themselves"},
{"id":340,"question":"привязываться","answer":"to bond"},
{"id":341,"question":"ответить взаимностью","answer":"to recIprocate"},
{"id":342,"question":"засиживаться","answer":"to outstay"},
{"id":343,"question":"не разговаривать друг с другом","answer":"not to be on speaking terms"},
{"id":344,"question":"из всех слоев","answer":"from all walks of life"},
{"id":345,"question":"подружиться","answer":"hit it off with"},
{"id":346,"question":"вносить свою долю, вклад","answer":"to pitch in"},
{"id":347,"question":"грабительский","answer":"extortionate"},
{"id":348,"question":"невнимательный к другим","answer":"inconsIderate"},
{"id":349,"question":"заботливый","answer":"consIderate"},
{"id":350,"question":"копить","answer":"to lay aside"},
{"id":351,"question":"осмеивать","answer":"to rIdicule"},
{"id":352,"question":"полагающийся на свои собственные силы","answer":"self-reliant"},
{"id":353,"question":"души не чаять","answer":"to dote"},
{"id":354,"question":"постоять за/рассчитывать на","answer":"to fend for myself"},
{"id":355,"question":"подавлять чрезмерной заботой","answer":"to smother"},
{"id":356,"question":"бережливый","answer":"thrifty"},
{"id":357,"question":"быть в компании с","answer":"to knock around with"},
{"id":358,"question":"засиживаться","answer":"to outstay one’s welcome."},
{"id":359,"question":"смягчать","answer":"to tone down"},
{"id":360,"question":"притворяться в чем-то","answer":"to put it on"},
{"id":361,"question":"усваивать","answer":"to cotton on"},
{"id":362,"question":"готовиться психологически","answer":"to psych up"},
{"id":363,"question":"отталкивать","answer":"to put off"},
{"id":364,"question":"напрямик","answer":"bluntly/He spoke bluntly"},
{"id":365,"question":"ограничение доступа","answer":"gatekeeping"},
{"id":366,"question":"громоздкий/сложный","answer":"cumbersome"},
{"id":367,"question":"акт насилия","answer":"an outrage"},
{"id":368,"question":"делить пополам","answer":"to halve"},{"id":369,"question":"уговорить","answer":"to win over"},{"id":370,"question":"непомерная цена","answer":"extortion"},{"id":371,"question":"незначительный","answer":"inconsiderable"},{"id":372,"question":"поддерживать","answer":"to uphold"},{"id":373,"question":"грызть","answer":"to gnaw"},{"id":374,"question":"выгодная партия","answer":"a catch"},{"id":375,"question":"просочиться","answer":"percolate"},{"id":376,"question":"непрошенный","answer":"unsolicited"},{"id":377,"question":"несклонный","answer":"disinclined"},{"id":378,"question":"отказываться","answer":"to opt out"},{"id":379,"question":"проливающий свет","answer":"eye-opening"},{"id":380,"question":"причуда","answer":"a quirk"},{"id":381,"question":"невнимательный к другим","answer":"inconsiderate"},{"id":382,"question":"внимательный к другим","answer":"considerate"},{"id":383,"question":"кустарник","answer":"shrubbery"},
{"id":384,"question":"внимательно рассматривать","answer":"to peruse"},
{"id":385,"question":"грозный; неприступный; непривлекательный","answer":"forbidding"},
{"id":386,"question":"авантюрный","answer":"foolhardy"},
{"id":387,"question":"копаться /изучать","answer":"delve"},{"id":388,"question":"отбросить осторожность","answer":"throw caution to the wind"},
{"id":389,"question":"неодушевленный","answer":"inanimate"},{"id":390,"question":"получать удовольствие","answer":"get a kick out of something"},{"id":391,"question":"посещение нескольких пабов","answer":"pub crawl"},{"id":392,"question":"значение /последствие","answer":"implication"},{"id":393,"question":"памятка","answer":"jotting"},{"id":394,"question":"свободное время","answer":"downtime"},{"id":395,"question":"успокаивающий","answer":"therapeutic"},{"id":396,"question":"безрезультатный","answer":"futile"},{"id":397,"question":"вынужденный","answer":"compelled"},{"id":398,"question":"основная предпосылка","answer":"underlying assumption"},{"id":399,"question":"наслаждаться каждым моментом","answer":"savour one's time"},{"id":400,"question":"отдушина /выход /магазин","answer":"outlet"},{"id":401,"question":"слабое оправдание","answer":"feeble excuse"},{"id":402,"question":"хвастаться","answer":"boast"},{"id":403,"question":"мягкий /доброкачественной","answer":"benign"},{"id":404,"question":"злокачественный","answer":"malignant"},{"id":405,"question":"смотреть запоем","answer":"binge watch"},{"id":406,"question":"апатичный","answer":"lethargic"},{"id":407,"question":"предотвратить","answer":"stave off"},{"id":408,"question":"вызывать","answer":"induce"},{"id":409,"question":"иметь дела поважнее","answer":"have bigger fish to fry"},{"id":410,"question":"нарушать","answer":"infringe"},{"id":411,"question":"истощать","answer":"leech off"},{"id":412,"question":"трудиться","answer":"beaver away"},{"id":413,"question":"быть заметным","answer":"leap out"},{"id":414,"question":"снижаться","answer":"tail off"},{"id":415,"question":"замолкать","answer":"clam up"},{"id":416,"question":"струсить","answer":"chicken out"},{"id":417,"question":"подставить себя под удар","answer":"bell the cat"},{"id":418,"question":"приводить дела в порядок","answer":"get your ducks in a row"},{"id":419,"question":"сходиться во мнениях","answer":"see eye to eye"},{"id":420,"question":"глухое, забытое место; глушь","answer":"backwater"},{"id":421,"question":"cтремительный рост","answer":"skyrocketing"},{"id":422,"question":"порыв","answer":"gust"},{"id":423,"question":"редкая вещь","answer":"curio"},{"id":424,"question":"умозаключение","answer":"inference"},{"id":425,"question":"вызывающий","answer":"brassy"},{"id":426,"question":"расширять горизонты","answer":"broaden your horisons"},{"id":427,"question":"приступ растерянности /тошнота","answer":"qualm"},{"id":428,"question":"a sharp blow","answer":"thwack"},{"id":429,"question":"ослабевать /flicker","answer":"to waver"},{"id":430,"question":"несоответственный","answer":"incoungruous"},
{"id":431,"question":"укомплектовать /управлять","answer":"to man"},
{"id":432,"question":"напрягаться /укреплять","answer":"stiffen"},{"id":433,"question":"морская сажень /постигать","answer":"fathom"},{"id":434,"question":"смутный","answer":"bleary"},{"id":435,"question":"презрение к себе","answer":"self-contempt"},{"id":436,"question":"опрометчивый","answer":"heady"},{"id":437,"question":"томиться","answer":"languish"},{"id":438,"question":"осушать","answer":"quaff"},{"id":439,"question":"говорливый","answer":"loquacious"},{"id":440,"question":"предаться /умереть","answer":"succumb"},{"id":441,"question":"have a drink","answer":"wet one's wistle"},{"id":442,"question":"клубок /рычать /брюзжать","answer":"snarl"},{"id":443,"question":"дождь со снегом","answer":"sleet"},{"id":444,"question":"смягчать","answer":"mitigate"},{"id":445,"question":"напортачить","answer":"screw up"},{"id":446,"question":"измотанный","answer":"knackered"},{"id":447,"question":"вычисление","answer":"computation"},{"id":448,"question":"формулировка","answer":"wording"},{"id":449,"question":"приземленный","answer":"mundane"},{"id":450,"question":"я был потрясен","answer":"I was blown away with the beaty"},{"id":451,"question":"у меня нет слов","answer":"I'm at a loss for words"},{"id":452,"question":"неудачный дубль","answer":"blooper"},{"id":453,"question":"я потрясен","answer":"I am running out of adjectives"},{"id":454,"question":"окровенный","answer":"outspoken"},{"id":455,"question":"копить","answer":"hoard"},{"id":456,"question":"щит, забор вокруг стройплощадки","answer":"hoarding"},{"id":457,"question":"копить","answer":"hoard"},{"id":458,"question":"коровник","answer":"byre"},{"id":459,"question":"прихоть","answer":"whim"},{"id":460,"question":"надвигаться","answer":"impend"},{"id":461,"question":"здравомыслие","answer":"sanity"},{"id":462,"question":"исполнение /представление","answer":"rendition"},{"id":463,"question":"беспрепятственный","answer":"unhindered"},{"id":464,"question":"рой","answer":"swarm"},{"id":465,"question":"безвкусный","answer":"gaudy"},{"id":466,"question":"умерщвленный","answer":"mortified"},{"id":467,"question":"буреть, красновато -коричневый","answer":"russet"},{"id":468,"question":"измученный","answer":"frazzled"},{"id":469,"question":"разочаровывающий","answer":"anticlimactic"},{"id":470,"question":"околдованный","answer":"bewitched"},{"id":471,"question":"плотина","answer":"weir"},{"id":472,"question":"to be excited by","answer":"get off on"},{"id":473,"question":"to be old or getting old","answer":"to be long in the tooth"},
{"id":474,"question":"я понятия не имею","answer":"I do not have a clue"},
{"id":475,"question":"бесплодный /пустошь","answer":"barren"},{"id":476,"question":"явный","answer":"sheer"},{"id":477,"question":"say smth. quiqly and irritably","answer":"snap"},{"id":478,"question":"навес","answer":"awning"},{"id":479,"question":"nervous or unable to relax","answer":"jittery"},{"id":480,"question":"(inf) a petty quarrel between friends or lovers","answer":"tiff"},{"id":481,"question":"давнишний","answer":"lingering"},{"id":482,"question":"чертежник /рисовальщик","answer":"draughtsman/ draftsman"},{"id":483,"question":"try to satisfy","answer":"cater to"},{"id":484,"question":"вотчина","answer":"fiefdom"},{"id":485,"question":"самодовольный","answer":"smug"},{"id":486,"question":"вмешаться","answer":"chime in"},{"id":487,"question":"горестный","answer":"whoeful"},{"id":488,"question":"отстойник","answer":"sump"},{"id":489,"question":"нищета","answer":"squalor"},{"id":490,"question":"тревожащий","answer":"unsettling"},{"id":491,"question":"прорыв /a large meal or social gathering","answer":"blowout"},{"id":492,"question":"поморщиться от","answer":"wince at"},{"id":493,"question":"тупость","answer":"bluntness"},{"id":494,"question":"чудак","answer":"weirdo"},{"id":495,"question":"грозно","answer":"sternly"},
{"id":496,"question":"разобраться","answer":"sort it out"},
{"id":497,"question":"быть заметным","answer":"leap out"},{"id":498,"question":"снижаться","answer":"tail off"},{"id":499,"question":"обескровливать","answer":"leech off"},{"id":500,"question":"Подставить себя под удар","answer":"bell the cat"},{"id":501,"question":"поднимать /воспитывать","answer":"rear"},{"id":502,"question":"кожсырье","answer":"hide"},{"id":503,"question":"обмотка /часть (территории)","answer":"swathe"},{"id":504,"question":"стирать из памяти","answer":"obliterate"},{"id":505,"question":"недоказуемый","answer":"indefensible"},{"id":506,"question":"упадок","answer":"blight"},{"id":507,"question":"освобождённый","answer":"unfettered"},{"id":508,"question":"обеднять","answer":"impoverish"},{"id":509,"question":"окупаемость","answer":"payback"},{"id":510,"question":"расцвет","answer":"heyday"},{"id":511,"question":"вытеснять","answer":"outcompete"},{"id":512,"question":"нарушать","answer":"infringe"},{"id":513,"question":"приводить дела в порядок","answer":"get your ducks in a row"},{"id":514,"question":"непереизбранный государственный деятель","answer":"lame duck"},{"id":515,"question":"клевета","answer":"mud-slinging"},{"id":516,"question":"неравенство","answer":"disparity"},{"id":517,"question":"поразительный","answer":"startling"},{"id":518,"question":"сгибание /интонация","answer":"inflection"},
{"id":519,"question":"ослепительный","answer":"dazzling"},
{"id":520,"question":"аннотация /реклама","answer":"blurb"},{"id":521,"question":"почти закончить","answer":"to be rather coming to the dregs"},{"id":522,"question":"кружится голова","answer":"to feel faint"},{"id":523,"question":"поднимать /вертикальные колебания","answer":"heave"},{"id":524,"question":"грязный /отвратительный","answer":"filthy"},{"id":525,"question":"потертый","answer":"threadbare (carpet)"},{"id":526,"question":"неистовый","answer":"frenetic"},{"id":527,"question":"перебежать /сильный дождь","answer":"pelt across/ down"},{"id":528,"question":"замешкаться","answer":"fumble"},{"id":529,"question":"темный /затуманенный","answer":"murky"},{"id":530,"question":"непосредственный","answer":"unmediated"},{"id":531,"question":"трепаться","answer":"schmooze"},{"id":532,"question":"терпеть что-то","answer":"put up with smth"},{"id":533,"question":"я не теряю бдительности","answer":"keep me on my toes"},{"id":534,"question":"у него сорвало крышу","answer":"he blew his gasket"},{"id":535,"question":"ров","answer":"moat"},{"id":536,"question":"сказываться на чем-то","answer":"take a toll on smth"},{"id":537,"question":"постоять за себя","answer":"speak up"},{"id":538,"question":"отговорка /увертка","answer":"subterfuge"},{"id":539,"question":"злорадство","answer":"shadenfreude"},{"id":540,"question":"препирательство","answer":"altercation"},{"id":541,"question":"партия","answer":"batch"},{"id":542,"question":"extremely drunk","answer":"get plastered"},{"id":543,"question":"доноситься (о запахе)","answer":"waft"},{"id":544,"question":"worn and shabby","answer":"tatty"},{"id":545,"question":"развязать /расслабить","answer":"unknot"},
{"id":546,"question":"суровый /грубый /песчаный","answer":"gritty"},
{"id":547,"question":"непредусмотрительно","answer":"in hindsight"},{"id":548,"question":"ужасный","answer":"gruesome"},{"id":549,"question":"an uncontrolled emothional outburst","answer":"have a meltdown"},{"id":550,"question":"быть в долгах","answer":"to be in the red"},{"id":551,"question":"быть в плюсе","answer":"to be in the black"},{"id":552,"question":"people in positions of authority","answer":"higher-ups"},{"id":553,"question":"to have the same understanding of something as someone else","answer":"be on the same page"},{"id":554,"question":"приток","answer":"tributary"},{"id":555,"question":"to be quick to understand and react to things","answer":"to be on the ball"},{"id":556,"question":"to interrupt a conversation in order to say something","answer":"chime in"},{"id":557,"question":"категорически","answer":"adamantly"},{"id":558,"question":"to be undecided about something","answer":"to be on the fence"},{"id":559,"question":"тихо","answer":"from under his/her breath"},{"id":560,"question":"in a bored way","answer":"in a jaded tone"},{"id":561,"question":"dirt or mud","answer":"muck"},{"id":562,"question":"навоз","answer":"manUre"},{"id":563,"question":"pleasantly warm","answer":"balmy"},{"id":564,"question":"a very strong wind","answer":"gale"},{"id":565,"question":"порыв ветра","answer":"gust"},{"id":566,"question":"высечь","answer":"flog"},{"id":567,"question":"грязный","answer":"grubby"},{"id":568,"question":"комендантский час","answer":"curfew"},{"id":569,"question":"иметь вмятины","answer":"to have dents (on the paint)"},{"id":570,"question":"грязно -желтый","answer":"grimy yellow"},{"id":571,"question":"подвижный","answer":"buoyant"},{"id":572,"question":"головокружительный от восторга","answer":"giddy with excitement"},{"id":573,"question":"тетерев","answer":"red grouse"},{"id":574,"question":"горная куропатка","answer":"ptarmigan"},{"id":575,"question":"повысить","answer":"crank up"},{"id":576,"question":"списание","answer":"a write-off"},{"id":577,"question":"холм /насыпь","answer":"mound"},{"id":578,"question":"пыхтеть","answer":"huffle"},{"id":579,"question":"быть сбитым с толку","answer":"to be fazed"},{"id":580,"question":"заварить чай","answer":"to make a brew"},{"id":581,"question":"быть ошарашенным","answer":"gobsmacked"},{"id":582,"question":"шутка","answer":"a banter"},{"id":583,"question":"сияющий /широко улыбающийся","answer":"beaming"},{"id":584,"question":"тесный","answer":"cramped"},{"id":585,"question":"ветреный","answer":"blustery"},{"id":586,"question":"обдумывать","answer":"ruminate"},{"id":587,"question":"испугать кого-то до смерти","answer":"to scare the live out of someone"},{"id":588,"question":"старая дева","answer":"a spinster"},{"id":589,"question":"произносить пустые слова","answer":"to pay lip service to that"},{"id":590,"question":"недовольный","answer":"disgruntled"},{"id":591,"question":"с самодовольной походкой","answer":"with a swagger and a strut"},{"id":592,"question":"высокомерный","answer":"supercilious"},{"id":593,"question":"встречи проходят в течение дня","answer":"meeting are staggered throughout the day"},
{"id":594,"question":"страшилка","answer":"bugbear"},
{"id":595,"question":"непредусмотрительно","answer":"in hindsight"},{"id":596,"question":"в последний момент","answer":"at the eleventh hour"},{"id":597,"question":"сразу, без раздумий","answer":"at the drop of a hat"},{"id":598,"question":"жертвы","answer":"casualties"},{"id":599,"question":"баклан","answer":"cormorant"},{"id":600,"question":"деревянный кубок","answer":"a mazer bowl"},{"id":601,"question":"завершить","answer":"wrap up"},{"id":602,"question":"проповедь","answer":"sermon"},{"id":603,"question":"короче говоря","answer":"long story short"},{"id":604,"question":"публично выругать коллегу","answer":"publicly bollocking a colleague"},{"id":605,"question":"неограниченный","answer":"unfettered"},{"id":606,"question":"оковы","answer":"fetter"},{"id":607,"question":"превзойти","answer":"outcompete"},{"id":608,"question":"зенит","answer":"heyday"},{"id":609,"question":"окупаемость","answer":"payback"},{"id":610,"question":"критик","answer":"detractor"},{"id":611,"question":"уменьшающийся","answer":"diminishing"},
{"id":612,"question":"молодой, недавно созданный","answer":"fledgling"},
{"id":613,"question":"в конечном счете","answer":"in the long run"},{"id":614,"question":"догмы","answer":"tenets"},{"id":615,"question":"спад","answer":"slump"},{"id":616,"question":"выращивать","answer":"foster"},{"id":617,"question":"тщательность","answer":"austerity"},{"id":618,"question":"gradually and relentlessly make something smaller or weaker","answer":"chip away at"},{"id":619,"question":"включить чайник","answer":"click on the kettle"},{"id":620,"question":"in the hope of succes but without any specific plan","answer":"on spec"},{"id":621,"question":"деревенщина","answer":"hillbilly"},{"id":622,"question":"VULG mock or make fun of (someone or something).","answer":"take the piss out of"},
{"id":623,"question":"затяжной","answer":"protracted"},
{"id":624,"question":"проход","answer":"walk-through"},{"id":625,"question":"следовать /возникать","answer":"ensue"},{"id":626,"question":"задерживающийся","answer":"lingering"},{"id":627,"question":"зяблик","answer":"chaffinch"},{"id":628,"question":"малиновка","answer":"robin"},{"id":629,"question":"улетать","answer":"soar away"},{"id":630,"question":"пикировать","answer":"swoop"},{"id":631,"question":"незаметный","answer":"inconspicuous"},{"id":632,"question":"безобидный","answer":"innocuous"},{"id":633,"question":"двенадцатистворчатые стеклопакеты","answer":"twelve-paned sash windows"},{"id":634,"question":"рама","answer":"sash"},{"id":635,"question":"стеклопакет","answer":"paned"},{"id":636,"question":"огромный","answer":"tremendous"},{"id":637,"question":"серовато-коричневый","answer":"taupe"},{"id":638,"question":"коренастый","answer":"squaddy"},{"id":639,"question":"фанатик","answer":"zealot"},{"id":640,"question":"извиваться","answer":"squirm"},{"id":641,"question":"недоумение","answer":"bewilderment"},{"id":642,"question":"вести себя вызывающе","answer":"have a chip on one's shoulder"},{"id":643,"question":"мрачный","answer":"sullen"},{"id":644,"question":"сворачиваться","answer":"sulk"},{"id":645,"question":"явный","answer":"blatant"},{"id":646,"question":"насмешка","answer":"sneer"},{"id":647,"question":"ничтожный","answer":"measly"},{"id":648,"question":"главный удар","answer":"brunt"},{"id":649,"question":"возникать","answer":"crop up"},{"id":650,"question":"непредвиденный","answer":"untowArd"},{"id":651,"question":"уговаривать","answer":"coax"},{"id":652,"question":"простолюдин","answer":"chav"},{"id":653,"question":"наглый","answer":"brash"},{"id":654,"question":"грубый","answer":"loutish"},{"id":655,"question":"топать","answer":"trudge"},{"id":656,"question":"порыться в памяти","answer":"trawl one's memory"},{"id":657,"question":"изменчивый","answer":"volatile"},{"id":658,"question":"негодование","answer":"resentment"},{"id":659,"question":"невредимый","answer":"unscathed"},{"id":660,"question":"свежий","answer":"breezy"},{"id":661,"question":"сбитый с толку чем-то","answer":"befuddled by"},{"id":662,"question":"испуг","answer":"dismay"},{"id":663,"question":"оттенок","answer":"tinge"},{"id":664,"question":"десны","answer":"gums"},
{"id":665,"question":"банальности","answer":"talk in platitudes"},
{"id":666,"question":"деревенщина","answer":"yokel"},{"id":667,"question":"ярмо","answer":"yoke"},{"id":668,"question":"травянистый","answer":"herbaceous"},{"id":669,"question":"смущать","answer":"bemuse"},{"id":670,"question":"суетиться","answer":"fussing"},{"id":671,"question":"спасать","answer":"salvage"},{"id":672,"question":"inf. сложная задача","answer":"a stretch"},{"id":673,"question":"манить","answer":"beckon"},{"id":674,"question":"ворчливо","answer":"grumpily"},{"id":675,"question":"ерзая","answer":"fidgeting"},{"id":676,"question":"дружелюбно","answer":"genially"},{"id":677,"question":"дергаться","answer":"twitch"},{"id":678,"question":"перебранка","answer":"altercation"},{"id":679,"question":"болезненно-желтый","answer":"sallow"},{"id":680,"question":"сопоставлять","answer":"collate"},{"id":681,"question":"целенаправленно","answer":"purposefully"},{"id":682,"question":"горький","answer":"poignant"},{"id":683,"question":"подавлять /ослаблять /притуплять","answer":"deaden"},{"id":684,"question":"пошутил","answer":"quipped"},{"id":685,"question":"проклятый","answer":"sodding"},{"id":686,"question":"навес","answer":"canopy"},{"id":687,"question":"живая изгородь","answer":"hedgerow"},{"id":688,"question":"подозрительный","answer":"dodgy"},{"id":689,"question":"гребень","answer":"ridge"},{"id":690,"question":"плоский","answer":"shallow-pitched"},{"id":691,"question":"шифер","answer":"slate"},{"id":692,"question":"грязь","answer":"slurry"},{"id":693,"question":"тюк","answer":"bale"},{"id":694,"question":"скотобойня","answer":"slaughterhouse"},{"id":695,"question":"земля","answer":"sod"},{"id":696,"question":"пронизанный","answer":"redolent"},{"id":697,"question":"навоз","answer":"dung"},{"id":698,"question":"прихрамывать","answer":"hobble"},{"id":699,"question":"безвкусный","answer":"insipid-looking"},{"id":700,"question":"непоседливость","answer":"fidgety"},{"id":701,"question":"в двух словах","answer":"sum it up"},{"id":702,"question":"просеивать","answer":"sift"},{"id":703,"question":"болтать","answer":"jabber"},{"id":704,"question":"котлета","answer":"patty"},{"id":705,"question":"это безумие","answer":"it's bonkers"},{"id":706,"question":"зацепило","answer":"have struck a chord"},{"id":707,"question":"отвали","answer":"sod off"},{"id":708,"question":"закон подлости","answer":"sod's law"},{"id":709,"question":"малая часть","answer":"modicum"},{"id":710,"question":"решить все проблемы","answer":"put the world to rights"},
{"id":711,"question":"набрать ванну","answer":"run a bath"},
];

const lastId = base[base.length - 1].id;

const proverbList = [
    "Don’t cross the bridge until you come to it.<br />Не говори «гоп», пока не перепрыгнешь.",
    "Don’t make a mountain out of an anthill.<br />Не делай из мухи слона.",
    "Put your best foot forward.<br />Старайся предстать в наилучшем свете.",
    "It’s better to be safe than sorry.<br />Береженого Бог бережет.",
    "Don’t bite off more than you can chew.<br />Не бери на себя слишком много.",
    "Still waters run deep.<br />В тихом омуте черти водятся.",
    "You scratch my back, I’ll scratch yours.<br />Ты — мне, я — тебе.",
    "The squeaky wheel gets the grease.<br />Под лежачий камень вода не течет.",
    "No man is an island.<br />Один в поле не воин.",
    "Birds of a feather flock together.<br />Рыбак рыбака видит издалека.",
    "There's no such thing as a free lunch.<br />Бесплатный сыр — только в мышеловке.",
    "The early bird catches the worm.<br />Кто рано встает, тому Бог подает.",
    "Beggars can't be choosers.<br />На безрыбье и рак — рыба",
    "A little knowledge is a dangerous thing.<br />Полузнание хуже невежества.",
    "All good things must come to an end.<br />Хорошего понемножку.",
    "One drop of poison infects the whole tun of wine.<br />Ложка дегтя в бочке меда.",
    "A bad conscience is a snake in one's heart.<br />Что на уме, то и на языке.",
    "A bad custom is like a good cake, better broken than kept.<br />Плохую привычку легче сломать, чем от нее избавиться.",
    "A bad excuse is better than none.<br />Лучше плохое оправдание, чем никакого.",
    "A bad fish spoils the whole pond.<br />Одна белая ворона портит весь стадо.",
    "A bad workman quarrels with his tools.<br />Плохому танцору яйца мешают.",
    "A bad beginning makes a bad ending.<br />Как начнешь, так и закончишь.",
    "A bad bush is better than the open field.<br />Лучше синица в руках, чем журавль в небе.",
    "A bad custom is like a good cake, better broken than kept.<br />Плохую привычку легче сломать, чем от нее избавиться.",
]

let data;
if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem('data'));
        
} else {
    data = base;
    localStorage.setItem('data', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}

// csv-file
function downloadCSV() {
    const JsonFields = ["id", "question", "answer"];
    let csvStr = JsonFields.join(",") + "\n";

    data.forEach(element => {
        
        id = element.id;
        question = element.question;
        answer = element.answer;

        csvStr += id + ',' + question + ',' + answer + ',' + "\n";
    })
 
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'output.csv';
    hiddenElement.click();
}


// It rains
// every day in Britain

// Although Britain receives its fair share of rain, in 2009 the UK received less annual rainfall t
// han Norway, Switzerland, Japan or New Zealand.It 's true that sodden citizens of Glasgow can expect around 48 inches of rain a year but this is only half the amount that the good people of Bergen, Norway can look forward to!

// Pubs in Britain only serve warm

// Whilst some ales are still served warm, the popularity of continental 
// lagers means that most beers served in the UK are now served cold.In fact, 
// British lagers such as Carling and Tennents are marketed as best served cold and even Guinness stout has an "extra cold"
// version due to popular demand!

//     Brits drink
// all day

// Each Brit consumes 1.89 KG of tea per year according to 2009 figures and is 
// ranked 6 th in a list which is topped by the United Arab Emirates, followed by Ireland and Mauritania.Of course, tea is the 2n d most popular drink in the world next to water, so Britons are not alone in their collective love
// for a cuppa!

//     Everyone in Britain is closely related to the
// Family

// Since Britain has a population of over 63 million this is not the
// case, but some unlikely Britons in line
// for the throne include Catherine Laing;
// a West Country travel agent 's wife and Chloe Felton, a farmer'
// s daughter from Devon.In fact, there are only around 20 people in the UK who 
// bear the title "Your Highness"
// or "Your Majesty"
// and around a further 70 who can claim to be members of the extended Royal Family or Royal Household;
// so it 's a reasonably exclusive club!

// Brits do everything by the

// Business groups are constantly complaining about the reams of Governmental red tape, rules and regulations and( in their view) the effect it has on jobs being lost as businesses move abroad to avoid bureaucracy.Britain is unarguably one of the most rule - bound nations on Earth but it is debatable whether these regulations protect our freedoms or infringe them.

// Brits are obsessed with the
// system

// Although traditional class boundaries have become more blurred over the years, most Britons do tend to identify with one of the 3 main classes
// for
// better or
// for worse and although some claim that social mobility is greater now than it was
// for previous generations, evidence suggests that Britain, unfortunately, remains divided along class lines.

// Everyone in Britain has a plummy
// and talks like the Queen

// This is untrue as there are hundreds of distinctive regional accents across the UK and Standard English is itself a synthetic language amalgamated from elements of regional languages.For some interesting explorations of languages and dialects, check out the poem "The 6 O'Clock News"
// by Tom Leonard and the song "Cockney Translation"
// by Smiley Culture.

// Brits love to celebrate Royal

// This is definitely true as Royal Weddings and Jubilees are lavish occasions which millions of Britons love to celebrate by waving Union Jacks, organising street parties and donning fantastic Great British fancy dress costumes!Indeed, as 24.5 million viewers watched the Royal Wedding of Prince William and Princess Catherine on TV in 2011,
//     if a Royal Wedding was held every week it would certainly eclipse viewing figures of "EastEnders", "Coronation Street"
// and "The X Factor"!

//     All Brits have bad

// There seems to be no factual basis
// for this stereotype, dental hygiene in the UK compares well to that of any other developed nation.However, some British cultural icons do have very "unusual"
//     teeth;
//     such as Rab C Nesbitt and Ken Dodd.

// Brits love to

// Although no - one in their right mind loves to queue anywhere, 
// many British people will state that they would prefer forming an orderly queue 
// than the type of "free for all"
// policy they may have seen adopted in other countries(although this in itself might be yet another stereotype!) However, the record
// for longest toilet queue is actually held by the Belgians and occurred when 756 people waited in line to use a latrine as part of UNICEF World Water Day activities!