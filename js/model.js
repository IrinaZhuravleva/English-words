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
}, 
{"id":6,"question":"грубый /наглый","answer":"lairy"},
{
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
        "id": 27, "question": "простолюдин", "answer": "commoner" 
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
    question: 'грубый /подкованный на шипы',
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
    }, 
    { "id": 60, "question": "произнести монолог", "answer": "soliloquise" }, 
    {
    id: 61,
    question: 'сбегать от',
    answer: 'flake out on'
    }, { "id": 62, "question": "выбрасывать", "answer": "throw away" }, 
{
    id: 63,
    question: 'импровизированный',
    answer: 'makeshift'
}, {
    id: 64,
    question: 'искажать',
    answer: 'contort'
}, 
    { "id": 65, "question": "обдумывать", "answer": "mull over" },
{
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
    question: 'посягнуть /нарушать',
    answer: 'infringe'
}, {
    id: 71,
    question: 'соединенный из',
    answer: 'amalgamated from'
    }, { "id": 72, "question": "наследники/ отпрыски", "answer": "scions/ sAIens of noble families" }, 
    {
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
}, 
{ "id": 80, "question": "(inf). туман, warm, stuffy atmosphere", "answer": "fug" },
{
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
    question: 'хриплый /шумный',
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
        question: 'высокомерный /презрительный',
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
}, 
{ "id": 122, "question": "фронтон", "answer": "gable" },
{
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
    question: 'ограничивать/заключать в тюрьму',
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
    question: 'ругать',
    answer: 'scolde'
}, {
    id: 133,
    question: 'игра слов/каламбур',
    answer: 'pun'
}, {
    id: 134,
    question: 'надоедливый /противный',
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
    question: 'переполнять /зубрить /запихать',
    answer: 'cram'
    }, { "id": 150, "question": "трактат", "answer": "treatise" }, {
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
        "id": 162, "question": "происходить из", "answer": "hail from" 
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
    }, { "id": 180, "question": "different from or not directly connected", "answer": "tangEntial (source)" 
},{
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
    }, 
    { "id": 186, "question": "облагораживание", "answer": "gentrification" }, 
    {
    id: 189,
    question: 'специфический/свойственный to',
    answer: 'peculiar'
}, {
    id: 190,
    question: 'угрюмый',
    answer: 'morose/merEuz'
}, 
{ "id": 191, "question": "провоцировать", "answer": "goad" }, 
{
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
    answer: 'scruffy /tatty'
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

}, 
{ "id": 216, "question": "добрый", "answer": "benIgn" }, 
{
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
        "answer": "slip out of /slink out /to oil back out"
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
    "question": "введение в заблуждение",
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
    "question": "мужлан /гагара",
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
    "question": "заниматься ерундой",
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
    "question": "презирать",
    "answer": "despise"
}, {
    "id": 334,
    "question": "разврат",
    "answer": "lechery/lEtcheri"
}, {
    "id": 335,
    "question": "толпа",
    "answer": "scrum"
    }, { "id": 336, "question": "болван", "answer": "twerp" },
{"id":337,"question":"проверенный человек","answer":"safe pair of hands"},
{"id":338,"question":"быть в компании с","answer":"to knock around with"},
{"id":339,"question":"держаться особняком","answer":"to keep themselves to themselves"},
{"id":340,"question":"привязываться","answer":"to bond"},
{"id":341,"question":"ответить взаимностью","answer":"to recIprocate"},
{ "id": 342, "question": "неизбежный", "answer": "imminent" },
{"id":343,"question":"не разговаривать друг с другом","answer":"not to be on speaking terms"},
{"id":344,"question":"из всех слоев","answer":"from all walks of life"},
{"id":345,"question":"подружиться","answer":"hit it off with"},
{"id":346,"question":"вносить свою долю, вклад","answer":"to pitch in"},
{"id":347,"question":"грабительский","answer":"extortionate"},
{"id":348,"question":"невнимательный к другим","answer":"inconsIderate"},
{"id":349,"question":"заботливый","answer":"consIderate"},
{"id":350,"question":"копить /откладывать","answer":"to lay aside"},
{"id":351,"question":"осмеивать","answer":"to rIdicule"},
{"id":352,"question":"полагающийся на свои собственные силы","answer":"self-reliant"},
{"id":353,"question":"души не чаять","answer":"to dote"},
{"id":354,"question":"постоять за/рассчитывать на","answer":"to fend for myself"},
{"id":355,"question":"подавлять чрезмерной заботой","answer":"to smother"},
{"id":356,"question":"бережливый","answer":"thrifty"},
{ "id": 357, "question": "приземленный", "answer": "mundane" },
{"id":358,"question":"засиживаться","answer":"to outstay one’s welcome."},
{"id":359,"question":"смягчать /ослаблять","answer":"to tone down"},
{"id":360,"question":"притворяться в чем-то","answer":"to put it on"},
{"id":361,"question":"усваивать","answer":"to cotton on"},
{"id":362,"question":"готовиться психологически","answer":"to psych up"},
{"id":363,"question":"отталкивать","answer":"to put off"},
{"id":364,"question":"напрямик","answer":"bluntly/He spoke bluntly"},
{"id":365,"question":"ограничение доступа","answer":"gatekeeping"},
{"id":366,"question":"громоздкий/сложный","answer":"cumbersome"},
{"id":367,"question":"акт насилия","answer":"an outrage"},
{"id":368,"question":"делить пополам","answer":"to halve"},{"id":369,"question":"уговорить","answer":"to win over"},{"id":370,"question":"непомерная цена","answer":"extortion"},{"id":371,"question":"незначительный","answer":"inconsiderable"},
{ "id": 372, "question": "жадно", "answer": "voraciously" },
{"id":373,"question":"грызть","answer":"to gnaw"},{"id":374,"question":"выгодная партия","answer":"a catch"},{"id":375,"question":"просочиться","answer":"percolate"},{"id":376,"question":"непрошенный","answer":"unsolicited"},{"id":377,"question":"несклонный","answer":"disinclined"},{"id":378,"question":"отказываться","answer":"to opt out"},{"id":379,"question":"проливающий свет","answer":"eye-opening"},{"id":380,"question":"причуда","answer":"a quirk"},
{ "id": 381, "question": "перенос выводов относительно части объектов на всю совокупность данных объектов", "answer": "extrapolate" },
{"id":382,"question":"внимательный к другим","answer":"considerate"},{"id":383,"question":"кустарник","answer":"shrubbery"},
{"id":384,"question":"внимательно рассматривать","answer":"to peruse"},
{"id":385,"question":"грозный; неприступный; непривлекательный","answer":"forbidding"},
{"id":386,"question":"авантюрный","answer":"foolhardy"},
{"id":387,"question":"копаться /изучать","answer":"delve"},{"id":388,"question":"отбросить осторожность","answer":"throw caution to the wind"},
{"id":389,"question":"неодушевленный","answer":"inanimate"},{"id":390,"question":"получать удовольствие","answer":"get a kick out of something"},{"id":391,"question":"посещение нескольких пабов","answer":"pub crawl"},{"id":392,"question":"значение /последствие","answer":"implication"},{"id":393,"question":"памятка","answer":"jotting"},{"id":394,"question":"свободное время","answer":"downtime"},{"id":395,"question":"успокаивающий","answer":"therapeutic"},{"id":396,"question":"безрезультатный","answer":"futile"},{"id":397,"question":"вынужденный","answer":"compelled"},{"id":398,"question":"основная предпосылка","answer":"underlying assumption"},{"id":399,"question":"наслаждаться каждым моментом","answer":"savour one's time"},{"id":400,"question":"отдушина /выход /магазин","answer":"outlet"},{"id":401,"question":"слабое оправдание","answer":"feeble excuse"},{"id":402,"question":"хвастаться","answer":"boast"},{"id":403,"question":"мягкий /доброкачественной","answer":"benign"},{"id":404,"question":"злокачественный","answer":"malignant"},{"id":405,"question":"смотреть запоем","answer":"binge watch"},{"id":406,"question":"апатичный","answer":"lethargic"},{"id":407,"question":"предотвратить","answer":"stave off"},{"id":408,"question":"вызывать","answer":"induce"},{"id":409,"question":"иметь дела поважнее","answer":"have bigger fish to fry"},
{ "id": 410, "question": "лесть", "answer": "cajOling" }, 
{"id":411,"question":"истощать","answer":"leech off"},{"id":412,"question":"трудиться","answer":"beaver away"},
{"id":413,"question":"быть заметным","answer":"leap out"},
{"id":414,"question":"снижаться","answer":"tail off"},
{"id":415,"question":"замолкать","answer":"clam up"},{"id":416,"question":"струсить","answer":"chicken out"},
{"id":417,"question":"подставить себя под удар","answer":"bell the cat"},
{"id":418,"question":"приводить дела в порядок","answer":"get your ducks in a row"},{"id":419,"question":"сходиться во мнениях","answer":"see eye to eye"},{"id":420,"question":"глухое, забытое место; глушь","answer":"backwater"},{"id":421,"question":"cтремительный рост","answer":"skyrocketing"},
{"id": 422, "question": "грабеж", "answer": "rapine (ˈræpaɪn)" }, 
{"id":423,"question":"редкая вещь","answer":"curio"},{"id":424,"question":"умозаключение","answer":"inference"},{"id":425,"question":"вызывающий","answer":"brassy"},{"id":426,"question":"расширять горизонты","answer":"broaden your horizons"},{"id":427,"question":"приступ растерянности /тошнота","answer":"qualm"},{"id":428,"question":"a sharp blow","answer":"thwack"},{"id":429,"question":"ослабевать /flicker","answer":"to waver"},{"id":430,"question":"несоответственный","answer":"incoungruous"},
{"id":431,"question":"укомплектовать /управлять","answer":"to man"},
{"id":432,"question":"напрягаться /укреплять","answer":"stiffen"},{"id":433,"question":"морская сажень /постигать","answer":"fathom"},{"id":434,"question":"смутный","answer":"bleary"},{"id":435,"question":"презрение к себе","answer":"self-contempt"},{"id":436,"question":"опрометчивый","answer":"heady"},
{ "id": 437, "question": "предстоящий", "answer": "impending" },
{ "id": 438, "question": "оскорблять других", "answer": "slag other people off" }, 
{"id":439,"question":"говорливый","answer":"loquacious"},
{"id":440,"question":"предаться /умереть","answer":"succumb"},{"id":441,"question":"have a drink","answer":"wet one's wistle"},{"id":442,"question":"клубок /рычать /брюзжать","answer":"snarl"},{"id":443,"question":"дождь со снегом","answer":"sleet"},
{"id":444,"question":"смягчать","answer":"mitigate"},
{"id":445,"question":"напортачить","answer":"screw up"},
{"id":446,"question":"(informal) измотанный","answer":"knackered"},
{"id":447,"question":"вычисление","answer":"computation"},{"id":448,"question":"формулировка","answer":"wording"},
{ "id": 446, "question": "a subdivision of a complex structure or process", "answer": "ramification" },
{"id":450,"question":"я был потрясен","answer":"I was blown away with the beauty"},{"id":451,"question":"у меня нет слов","answer":"I'm at a loss for words"},{"id":452,"question":"неудачный дубль","answer":"blooper"},{"id":453,"question":"я потрясен","answer":"I am running out of adjectives"},
{"id": 454, "question": "пиво с лимонадом", "answer": "shandy"},
{"id":455,"question":"копить","answer":"hoard"},{"id":456,"question":"щит, забор вокруг стройплощадки","answer":"hoarding"},
{ "id": 457, "question": "вспышка", "answer": "blip" },
{"id":458,"question":"коровник","answer":"byre"},{"id":459,"question":"прихоть","answer":"whim"},{"id":460,"question":"надвигаться","answer":"impend"},{"id":461,"question":"здравомыслие","answer":"sanity"},{"id":462,"question":"исполнение /представление","answer":"rendition"},{"id":463,"question":"беспрепятственный","answer":"unhindered"},{"id":464,"question":"рой","answer":"swarm"},{"id":465,"question":"безвкусный","answer":"gaudy"},{"id":466,"question":"умерщвленный","answer":"mortified"},{"id":467,"question":"буреть, красновато -коричневый","answer":"russet"},{"id":468,"question":"измученный","answer":"frazzled"},{"id":469,"question":"разочаровывающий","answer":"anticlimactic"},{"id":470,"question":"околдованный","answer":"bewitched"},{"id":471,"question":"плотина","answer":"weir"},{"id":472,"question":"to be excited by","answer":"get off on"},{"id":473,"question":"to be old or getting old","answer":"to be long in the tooth"},
{"id":474,"question":"я понятия не имею","answer":"I do not have a clue"},
{ "id": 475, "question": "бесплодный /пустошь", "answer": "barren" }, { "id": 476, "question":"явный /прозрачный","answer":"sheer"},{"id":477,"question":"say smth. quiqly and irritably","answer":"snap"},
{"id":478,"question":"навес","answer":"awning"},
{"id": 479, "question": "ошеломленный", "answer": "dumbstruck" }, 
{"id":480,"question":"(inf) a petty quarrel between friends or lovers","answer":"tiff"},{"id":481,"question":"давнишний","answer":"lingering"},{"id":482,"question":"чертежник /рисовальщик","answer":"draughtsman/ draftsman"},{"id":483,"question":"try to satisfy","answer":"cater to"},{"id":484,"question":"вотчина","answer":"fiefdom"},{"id":485,"question":"самодовольный","answer":"smug"},{"id":486,"question":"вмешаться","answer":"chime in"},{"id":487,"question":"горестный","answer":"whoeful"},{"id":488,"question":"отстойник","answer":"sump"},
{"id": 489, "question": "быть в толпе", "answer": "to be in the crush"},
{"id":490,"question":"тревожащий","answer":"unsettling"},{"id":491,"question":"прорыв /a large meal or social gathering","answer":"blowout"},{"id":492,"question":"поморщиться от","answer":"wince at"},{"id":493,"question":"тупость","answer":"bluntness"},{"id":494,"question":"чудак","answer":"weirdo"},
{ "id": 495, "question": "не скрывать", "answer": "to make no bones about" }, 
{"id":496,"question":"разобраться /решить проблему","answer":"sort/make it out"},
{ "id": 497, "question": "speak about smb/smth with great enthusiasm", "answer": "rhapsodize" },
{ "id": 498, "question": "жертвы, потери, несчастный случай", "answer": "casualty" },
{ "id": 499, "question": "покрытый туманом", "answer": "shrouded" }, 
{ "id": 500, "question": "смекалка", "answer": "gumption" }, 
{"id":501,"question":"поднимать /воспитывать","answer":"rear"},{"id":502,"question":"кожсырье","answer":"hide"},{"id":503,"question":"обмотка /часть (территории)","answer":"swathe"},{"id":504,"question":"стирать из памяти","answer":"obliterate"},{"id":505,"question":"недоказуемый","answer":"indefensible"},{"id":506,"question":"упадок","answer":"blight"},{"id":507,"question":"освобождённый /неограниченный","answer":"unfettered"},{"id":508,"question":"обеднять","answer":"impoverish"},
{"id":509,"question":"окупаемость","answer":"payback"},
{ "id": 510, "question": "призрак", "answer": "wraith" }, 
{"id":511,"question":"вытеснять /превзойти","answer":"outcompete"},
{ "id": 512, "question": "клякса", "answer": "blot" },
{ "id": 513, "question": "воля", "answer": "behest" },
{"id":514,"question":"непереизбранный государственный деятель","answer":"lame duck"},{"id":515,"question":"клевета","answer":"mud-slinging"},{"id":516,"question":"неравенство","answer":"disparity"},
{ "id": 517, "question":"потрясающий","answer":"startling"},
{"id":518,"question":"сгибание /интонация","answer":"inflection"},
{"id":519,"question":"ослепительный","answer":"dazzling"},
{"id":520,"question":"аннотация /реклама","answer":"blurb"},{"id":521,"question":"почти закончить","answer":"to be rather coming to the dregs"},{"id":522,"question":"кружится голова","answer":"to feel faint"},{"id":523,"question":"поднимать /вертикальные колебания","answer":"heave"},{"id":524,"question":"грязный /отвратительный","answer":"filthy"},{"id":525,"question":"потертый","answer":"threadbare (carpet)"},{"id":526,"question":"неистовый","answer":"frenetic"},{"id":527,"question":"перебежать /сильный дождь","answer":"pelt across/ down"},{"id":528,"question":"замешкаться","answer":"fumble"},{"id":529,"question":"темный /затуманенный","answer":"murky"},{"id":530,"question":"непосредственный","answer":"unmediated"},{"id":531,"question":"трепаться","answer":"schmooze"},{"id":532,"question":"терпеть что-то","answer":"put up with smth"},{"id":533,"question":"я не теряю бдительности","answer":"keep me on my toes"},{"id":534,"question":"у него сорвало крышу","answer":"he blew his gasket"},{"id":535,"question":"ров","answer":"moat"},{"id":536,"question":"сказываться на чем-то","answer":"take a toll on smth"},{"id":537,"question":"постоять за себя","answer":"speak up"},{"id":538,"question":"отговорка /увертка","answer":"subterfuge"},{"id":539,"question":"злорадство","answer":"shadenfreude"},{"id":540,"question":"препирательство","answer":"altercation"},{"id":541,"question":"партия","answer":"batch"},{"id":542,"question":"extremely drunk","answer":"get plastered"},{"id":543,"question":"доноситься (о запахе)","answer":"waft"},{"id":544,"question":"worn and shabby","answer":"tatty"},{"id":545,"question":"развязать /расслабить","answer":"unknot"},
{"id":546,"question":"суровый /грубый /песчаный","answer":"gritty"},
{"id":547,"question":"непредусмотрительно","answer":"in hindsight"},{"id":548,"question":"ужасный","answer":"gruesome"},{"id":549,"question":"an uncontrolled emothional outburst","answer":"have a meltdown"},{"id":550,"question":"быть в долгах","answer":"to be in the red"},{"id":551,"question":"быть в плюсе","answer":"to be in the black"},{"id":552,"question":"people in positions of authority","answer":"higher-ups"},{"id":553,"question":"to have the same understanding of something as someone else","answer":"be on the same page"},{"id":554,"question":"приток","answer":"tributary"},{"id":555,"question":"to be quick to understand and react to things","answer":"to be on the ball"},
{"id": 556, "question": "потрепанная одежда/квартира", "answer": "scuzzy outfit/flat"},  
{"id":557,"question":"категорически","answer":"adamantly"},{"id":558,"question":"to be undecided about something","answer":"to be on the fence"},{"id":559,"question":"тихо","answer":"from under his/her breath"},{"id":560,"question":"in a bored way","answer":"in a jaded tone"},{"id":561,"question":"dirt or mud","answer":"muck"},{"id":562,"question":"навоз","answer":"manUre"},{"id":563,"question":"pleasantly warm","answer":"balmy"},{"id":564,"question":"a very strong wind","answer":"gale"},
{"id":565,"question":"порыв ветра","answer":"gust"},
{"id":566,"question":"высечь","answer":"flog"},
{"id":567,"question":"измотанный","answer":"get frazzled"},
{"id":568,"question":"комендантский час","answer":"curfew"},{"id":569,"question":"иметь вмятины","answer":"to have dents (on the paint)"},{"id":570,"question":"грязно -желтый","answer":"grimy yellow"},{"id":571,"question":"подвижный","answer":"buoyant"},{"id":572,"question":"головокружительный от восторга","answer":"giddy with excitement"},{"id":573,"question":"тетерев","answer":"red grouse"},{"id":574,"question":"горная куропатка","answer":"ptarmigan"},{"id":575,"question":"повысить","answer":"crank up"},{"id":576,"question":"списание","answer":"a write-off"},{"id":577,"question":"холм /насыпь","answer":"mound"},{"id":578,"question":"пыхтеть","answer":"huffle"},{"id":579,"question":"быть сбитым с толку","answer":"to be fazed"},{"id":580,"question":"заварить чай","answer":"to make a brew"},{"id":581,"question":"быть ошарашенным","answer":"gobsmacked"},
{ "id": 582,"question": "десятина", "answer": "tithe"},
{"id":583,"question":"сияющий /широко улыбающийся","answer":"beaming"},{"id":584,"question":"тесный","answer":"cramped"},{"id":585,"question":"ветреный","answer":"blustery"},{"id":586,"question":"размышлять","answer":"ruminate about"},{"id":587,"question":"испугать кого-то до смерти","answer":"to scare the live out of someone"},{"id":588,"question":"старая дева","answer":"a spinster"},{"id":589,"question":"произносить пустые слова","answer":"to pay lip service to that"},{"id":590,"question":"недовольный","answer":"disgruntled"},{"id":591,"question":"с самодовольной походкой","answer":"with a swagger and a strut"},
{ "id": 592, "question":"надменный","answer":"supercilious"},{"id":593,"question":"встречи проходят в течение дня","answer":"meeting are staggered throughout the day"},
{"id":594,"question":"страшилка","answer":"bugbear"},
{ "id": 595, "question": "заставлять", "answer": "complel" },
{"id":596,"question":"в последний момент","answer":"at the eleventh hour"},{"id":597,"question":"сразу, без раздумий","answer":"at the drop of a hat"},{"id":598,"question":"жертвы","answer":"casualties"},{"id":599,"question":"баклан /жадина","answer":"cormorant"},{"id":600,"question":"деревянный кубок","answer":"a mazer bowl"},{"id":601,"question":"завершить","answer":"wrap up"},{"id":602,"question":"проповедь","answer":"sermon"},{"id":603,"question":"короче говоря","answer":"long story short"},{"id":604,"question":"публично выругать коллегу","answer":"publicly bollocking a colleague"},
{"id":605,"question":"раздраженный","answer":"peeved"},{"id":606,"question":"оковы","answer":"fetter"},
{ "id": 607, "question": "сухопутный", "answer": "landlubber" }, 
{"id":608,"question":"зенит /расцвет","answer":"heyday"},
{ "id": 609, "question": "оплакать", "answer": "bemoan" },
{"id":610,"question":"критик","answer":"detractor"},{"id":611,"question":"уменьшающийся","answer":"diminishing"},
{"id":612,"question":"молодой, недавно созданный","answer":"fledgling"},
{"id":613,"question":"в конечном счете","answer":"in the long run"},{"id":614,"question":"догмы","answer":"tenets"},{"id":615,"question":"спад","answer":"slump"},{"id":616,"question":"выращивать","answer":"foster"},{"id":617,"question":"тщательность","answer":"austerity"},{"id":618,"question":"gradually and relentlessly make something smaller or weaker","answer":"chip away at"},{"id":619,"question":"включить чайник","answer":"click on the kettle"},{"id":620,"question":"in the hope of succes but without any specific plan","answer":"on spec"},
{"id":621,"question":"деревенщина","answer":"hillbilly"},{"id":622,"question":"VULG mock or make fun of (someone or something).","answer":"take the piss out of"},
{"id":623,"question":"затяжной","answer":"protracted"},
{ "id": 624, "question": "проход", "answer": "walk-through" }, { "id": 625, "question": "следовать /возникать", "answer": "ensue" }, 
{ "id": 626, "question": "переноска/тащить волоком (лодку)", "answer": "pOrtage" },
{ "id": 627, "question": "зяблик", "answer": "chaffinch" }, { "id": 628, "question": "малиновка", "answer": "robin" }, { "id": 629, "question": "улетать", "answer": "soar away" }, 
{ "id": 630, "question": "пикировать", "answer": "swoop" }, 
{ "id": 631, "question": "незаметный", "answer": "inconspicuous" }, { "id": 632, "question": "безобидный", "answer": "innocuous" }, { "id": 633, "question": "двенадцатистворчатые стеклопакеты", "answer": "twelve-paned sash windows" }, { "id": 634, "question": "рама", "answer": "sash" }, { "id": 635, "question": "стеклопакет", "answer": "paned" }, { "id": 636, "question": "огромный", "answer": "tremendous" }, { "id": 637, "question": "серовато-коричневый", "answer": "taupe" }, { "id": 638, "question":"(British slang) a private soldier","answer":"squaddy"},{"id":639,"question":"фанатик","answer":"zealot"},{"id":640,"question":"извиваться","answer":"squirm"},{"id":641,"question":"недоумение","answer":"bewilderment"},{"id":642,"question":"вести себя вызывающе","answer":"have a chip on one's shoulder"},
{ "id": 643, "question": "мрачный", "answer": "sullen /dIsmal" }, { "id": 644, "question": "сворачиваться", "answer": "sulk" }, { "id": 645, "question": "явный", "answer": "blatant" }, { "id": 646, "question": "насмешка", "answer": "sneer" }, { "id": 647, "question": "ничтожный", "answer": "measly" }, { "id": 648, "question": "главный удар", "answer": "brunt" }, { "id": 649, "question": "возникать", "answer": "crop up" }, { "id": 650, "question": "непредвиденный", "answer": "untowArd" }, { "id": 651, "question": "уговаривать", "answer": "coax" }, { "id": 652, "question":"a young person characterized by brash behaviour with low social status","answer":"chav"},{"id":653,"question":"наглый","answer":"brash"},{"id":654,"question":"грубый","answer":"loutish"},{"id":655,"question":"топать","answer":"trudge"},{"id":656,"question":"порыться в памяти","answer":"trawl one's memory"},{"id":657,"question":"изменчивый","answer":"volatile"},{"id":658,"question":"негодование","answer":"resentment"},{"id":659,"question":"невредимый","answer":"unscathed"},{"id":660,"question":"свежий","answer":"breezy"},{"id":661,"question":"сбитый с толку чем-то","answer":"befuddled by"},{"id":662,"question":"испуг","answer":"dismay"},{"id":663,"question":"оттенок","answer":"tinge"},{"id":664,"question":"десны","answer":"gums"},
{"id":665,"question":"банальности","answer":"talk in platitudes"},
{ "id": 666, "question":"мужлан","answer":"yokel"},{"id":667,"question":"ярмо","answer":"yoke"},{"id":668,"question":"травянистый","answer":"herbaceous"},{"id":669,"question":"смущать","answer":"bemuse"},{"id":670,"question":"суетиться","answer":"fussing"},{"id":671,"question":"спасать","answer":"salvage"},{"id":672,"question":"inf. сложная задача","answer":"a stretch"},
{ "id": 673, "question": "товарищ по тренировкам", "answer": "lunch or gym friend" }, 
{"id":674,"question":"ворчливо","answer":"grumpily"},{"id":675,"question":"ерзая","answer":"fidgeting"},{"id":676,"question":"дружелюбно","answer":"genially"},{"id":677,"question":"дергаться","answer":"twitch"},
{"id":678,"question":"повторить на бис","answer":"to do the encore"},
{"id":679,"question":"болезненно-желтый","answer":"sallow"},{"id":680,"question":"сопоставлять","answer":"collate"},{"id":681,"question":"целенаправленно","answer":"purposefully"},{"id":682,"question":"горький","answer":"poignant"},{"id":683,"question":"подавлять /ослаблять /притуплять","answer":"deaden"},
{"id":684,"question":"мастерство /художественность","answer":"artistry"},
{"id":685,"question":"проклятый","answer":"sodding"},
{ "id": 686, "question": "навес /балдахин", "answer": "canopy" }, { "id": 687, "question": "живая изгородь", "answer": "hedgerow" }, { "id": 688, "question": "подозрительный", "answer": "dodgy" }, { "id": 689, "question": "гребень", "answer": "ridge" }, { "id": 690, "question": "плоский", "answer": "shallow-pitched" }, { "id": 691, "question": "шифер", "answer": "slate" }, { "id": 692, "question": "жижа", "answer": "slurry" }, { "id": 693, "question": "тюк", "answer": "bale" }, { "id": 694, "question": "скотобойня", "answer": "slaughterhouse" }, { "id": 695, "question": "земля", "answer": "sod" }, { "id": 696, "question": "пронизанный", "answer": "redolent" }, { "id": 697, "question":"экскременты","answer":"dung"},
{ "id": 698, "question": "домашний очаг/дом", "answer": "home-stead" }, 
{"id":699,"question":"невкусно выглядищий","answer":"insipid-looking"},{"id":700,"question":"непоседливость","answer":"fidgety"},{"id":701,"question":"в двух словах","answer":"sum it up"},{"id":702,"question":"просеивать","answer":"sift"},{"id":703,"question":"болтовня /бормотать","answer":"jabber"},{"id":704,"question":"котлета","answer":"patty"},{"id":705,"question":"это безумие","answer":"it's bonkers"},{"id":706,"question":"зацепило","answer":"have struck a chord"},{"id":707,"question":"отвали","answer":"sod off"},{"id":708,"question":"закон подлости","answer":"sod's law"},{"id":709,"question":"малая часть","answer":"modicum"},{"id":710,"question":"решить все проблемы","answer":"put the world to rights"},
{"id":711,"question":"набрать ванну","answer":"run a bath"},
{"id":712,"question":"суетливый /шумный","answer":"bustling"},
{"id":713,"question":"нервный","answer":"jittery"},
{"id":714,"question":"иметь зуб на кого-то","answer":"have a grudge against"},
{ "id": 715, "question": "наводить ужас", "answer": "give smb. the willies" }, { "id": 716, "question": "навязывать", "answer": "impose" }, { "id": 717, "question": "презренный", "answer": "despicable" }, { "id": 718, "question": "перепалка", "answer": "affray" }, { "id": 719, "question": "ватный тампон", "answer": "swab" }, 
{ "id": 720, "question": "строго /серьезно /обоснованно", "answer": "sternly" }, { "id": 721, "question": "самодовольно", "answer": "smugly" }, { "id": 722, "question": "ошеломительно", "answer": "staggeringly" }, { "id": 723, "question": "легкомысленный", "answer": "frivolous" }, 
{ "id": 724, "question": "дружелюбный", "answer": "convivial" }, { "id": 725, "question":"надоедливый","answer":"irksome"},
{ "id": 726, "question": "увязший", "answer": "mired" }, 
{"id": 727, "question": "почитать", "answer": "revere" }, { "id": 728, "question": "недостаток", "answer": "shorcoming" }, { "id": 729, "question": "обострять", "answer": "exacerbate" }, { "id": 730, "question": "поражающий", "answer": "crippling" }, { "id": 731, "question": "ненависть к себе", "answer": "self-loathing" }, 
{ "id": 732, "question": "шумный", "answer": "rowdy" }, 
{ "id": 733, "question": "пылесос", "answer": "hoover" }, { "id": 734, "question": "умиротворить", "answer": "placate" }, { "id": 735, "question": "взъерошенный", "answer": "bristling" }, { "id": 736, "question": "сотрудничать", "answer": "liaise" }, { "id": 737, "question": "резко", "answer": "gruffly" }, { "id": 738, "question": "посмотреть уничтожающе", "answer": "give smb. a withering (look)" }, { "id": 739, "question": "ненавидеть", "answer": "loath" }, { "id": 740, "question": "маловероятный исход", "answer": "longshot" }, { "id": 741, "question": "разобрать", "answer": "unpick" }, { "id": 742, "question": "сопливый", "answer": "snotty" }, { "id": 743, "question": "взбалтывание", "answer": "churning" }, { "id": 744, "question": "луг", "answer": "grassland" }, { "id": 745, "question": "папоротник", "answer":"bracken /fern"},{"id":746,"question":"скалы","answer":"crags"},{"id":747,"question":"гигиеническая помада","answer":"chapstick"},{"id":748,"question":"уютный","answer":"snug"},
{"id":749,"question":"вялый /жеманный /томящийся","answer":"languid"},
{ "id": 750, "question": "хлюпать", "answer": "squelch" }, { "id": 751, "question":"сбивать с толку /расстраивать","answer":"baffle"},{"id":752,"question":"язвить","answer":"quip"},
{"id":753,"question":"тоскливый","answer":"dreary"},
{"id":754,"question":"острая боль","answer":"pang"},
{"id": 755, "question": "шататься", "answer": "mill around" }, 
{ "id": 756, "question": "пена", "answer": "scum /froth" }, { "id": 757, "question": "перестановка", "answer": "permutation" }, { "id": 758, "question": "коренастый", "answer": "stockily built" }, { "id": 759, "question": "красавица", "answer": "stunner" }, { "id": 760, "question": "ветвь", "answer": "bough" }, { "id": 761, "question": "насмехаться", "answer": "taunt" }, { "id": 762, "question":"извергнуть","answer":"regurgitate"},{"id":763,"question":"скамья","answer":"pew"},
{"id":764,"question":"прогуливаться","answer":"amble"},
{"id":765,"question":"блевать","answer":"bluck"},{"id":766,"question":"кривые зубы","answer":"buck teeth"},{"id":767,"question":"многословный","answer":"verbose"},{"id":768,"question":"увядать","answer":"wither"},{"id":769,"question":"знания","answer":"lore"},{"id":770,"question":"напыщенный /натянутый","answer":"stilted"},{"id":771,"question":"непоколебимый","answer":"undetErred"},{"id":772,"question":"колебаться","answer":"falter"},{"id":773,"question":"импульс","answer":"momentum"},{"id":774,"question":"привередливый","answer":"fastidious"},{"id":775,"question":"раздражающий","answer":"maddening"},{"id":776,"question":"пагубный","answer":"nefarious"},{"id":777,"question":"ненадежный /опасный","answer":"precarious"},
{"id":778,"question":"проклятие на что-то","answer":"kind of jinx on smth"},
{ "id": 779, "question": "бродить без цели", "answer": "mooch around"}, 
{"id":780,"question":"однообразный","answer":"drab"},{"id":781,"question":"мокрый /слякотный","answer":"soggy"},
{"id":782,"question":"передышка","answer":"respite"},
{"id":783,"question":"осторожно","answer":"gingerly"},{"id":784,"question":"завораживать","answer":"enthral with"},{"id":785,"question":"инф полицейский","answer":"plod"},{"id":786,"question":"завещать","answer":"bequeath to smb"},{"id":787,"question":"признанный","answer":"acclaimed"},{"id":788,"question":"неустрашимый","answer":"unflinching"},
{ "id": 789, "question": "бирючина", "answer": "prIvet"},
{ "id": 790, "question": "простой народ", "answer": "the hoi poi" }, 
{"id":791,"question":"спотыкаться","answer":"stumble"},
{"id":792,"question":"на всякий случай","answer":"for good measure"},{"id":793,"question":"разбогатеть за ночь","answer":"to make a killing overnight"},{"id":794,"question":"сбой","answer":"glitch"},{"id":795,"question":"неутолимая жажда","answer":"insatiable thirst for"},
{ "id": 796, "question": "троп, образное выражение", "answer": "trope" },
{"id":797,"question":"быть во власти","answer":"to be in the grip of"},{"id":798,"question":"поднять до","answer":"bump up to"},{"id":799,"question":"шутка","answer":"banter"},{"id":800,"question":"церковная башня","answer":"church spire"},{"id":801,"question":"шпиль","answer":"steeple"},{"id":802,"question":"в двух шагах","answer":"a stone's throw"},{"id":803,"question":"взлететь","answer":"take off"},{"id":804,"question":"хромой","answer":"lame"},{"id":805,"question":"сигнал пропал","answer":"the signal cut off"},{"id":806,"question":"опасение","answer":"apprehension"},{"id":807,"question":"не ошибаться","answer":"not to be way off"},{"id":808,"question":"сдаться","answer":"to throw in the towel"},{"id":809,"question":" inf used to draw attention to smb who has just said something stupid or who is showing that they are too proud.","answer":"hark at smb"},{"id":810,"question":"лечь спать","answer":"to turn in"},{"id":811,"question":"прийти","answer":"to turn up"},{"id":812,"question":"снаряжение","answer":"harness"},{"id":813,"question":"происходить от","answer":"derive from"},{"id":814,"question":"поддерживать","answer":"bolster"},{"id":815,"question":"взъерошить","answer":"rumple"},{"id":816,"question":"растянутый","answer":"splawling"},{"id":817,"question":"кинза","answer":"cilantro"},{"id":818,"question":"сухо","answer":"drily"},{"id":819,"question":"помощник","answer":"sidekick"},{"id":820,"question":"проницательный","answer":"perceptive"},{"id":821,"question":"детектив","answer":"sleuth"},{"id":822,"question":"распределение","answer":"allocating"},{"id":823,"question":"непредвиденные обстоятельства","answer":"contingencies"},{"id":824,"question":"бездельничать","answer":"dawdle"},
{"id":825,"question":"напевать","answer":"croon"},
{"id":826,"question":"быть в полном разгаре","answer":"to be in the throes of"},
{"id":827,"question":"хихикать","answer":"snigger"},
{"id":828,"question":"веселый","answer":"jovial"},{"id":829,"question":"безделушка","answer":"bauble"},{"id":830,"question":"украшение","answer":"ornament"},{"id":831,"question":"ошеломлять","answer":"daze"},{"id":832,"question":"ликующий","answer":"elated"},
{"id": 833, "question": "беспокоиться", "answer": "fret"}, 
{"id":834,"question":"обманывать","answer":"delude"},
{"id":835,"question":"отговаривать","answer":"dissuade"},
{"id":836,"question":"приписывать","answer":"chalk it up to smth"},
{"id":837,"question":"пить на одном дыхании / пыхтеть","answer":"chug"},
{"id":838,"question":"остроумный","answer":"witty"},{"id":839,"question":"нарядный","answer":"dapper"},
{"id":840,"question":"пить / осушать","answer":"quaff"},
{ "id": 1273, "question": "резко упасть", "answer": "plummet" },
{"id":842,"question":"чванство","answer":"swagger"},{"id":843,"question":"улаживать","answer":"settle"},{"id":844,"question":"злой / грешник","answer":"wicked"},{"id":845,"question":"вопить / крик","answer":"whoop"},{"id":846,"question":"взаимные обвинения","answer":"recriminatory"},{"id":847,"question":"пререкания","answer":"bickering"},{"id":848,"question":"блеск","answer":"glitter"},{"id":849,"question":"мерцание","answer":"glimmer"},{"id":850,"question":"ужасающий","answer":"horrendous"},{"id":851,"question":"ворчливый","answer":"grupmy"},{"id":852,"question":"мастер / старик","answer":"gaffer"},{"id":853,"question":"ящик / тара","answer":"crate"},{"id":854,"question":"смесь","answer":"medley"},
{ "id": 855, "question": "невежественный", "answer": "benighted" }, 
{"id":856,"question":"взбеситься / шерсть на загривке","answer":"hackle"},{"id":857,"question":"торговаться","answer":"haggle"},{"id":858,"question":"ведьма","answer":"hag"},{"id":859,"question":"изможденный","answer":"haggard"},{"id":860,"question":"сальто","answer":"somersault"},{"id":861,"question":"наполнять / пропитывать","answer":"imbue"},{"id":862,"question":"гравировать","answer":"etch"},{"id":863,"question":"чистый / абсолютный","answer":"stark"},{"id":864,"question":"голый как сокол","answer":"stark naked"},{"id":865,"question":"совершенно с ума сойти","answer":"stark raving mad"},{"id":866,"question":"пьяный / одурманенный","answer":"besotted"},{"id":867,"question":"по правде говоря","answer":"truth be told"},{"id":868,"question":"заносить / скользить","answer":"skid"},{"id":869,"question":"дирижерская палочка / эстафета / палка","answer":"baton"},{"id":870,"question":"орать / кричать","answer":"bawl"},
{"id":871,"question":"похабный","answer":"bawdy"},
{ "id": 872, "question": "товар, сырье, груз", "answer": "commodity" }, 
{ "id": 873, "question": "покрыто тайной", "answer": "shrouded in mysteries" }, 
{"id":874,"question":"красться","answer":"slink"},{"id":875,"question":"злорадный","answer":"malevolent"},{"id":876,"question":"затхлый","answer":"musty"},{"id":877,"question":"единовременно выплачиваемая сумма","answer":"lump sum"},{"id":878,"question":"опускаться /макать","answer":"dip"},{"id":879,"question":"в дальнейшем /спустя, через","answer":"down the line"},
{ "id": 880, "question": "низкого уровня", "answer": "lower end" }, 
{"id":881,"question":"перспектива /вид","answer":"outlook"},{"id":882,"question":"неблагоприятный /враждебный","answer":"adverse"},{"id":883,"question":"предварительный /неопределенный","answer":"tentative"},{"id":884,"question":"перевозка","answer":"haul"},{"id":885,"question":"стимул","answer":"Impetus"},{"id":886,"question":"капитал","answer":"principal"},
{"id":887,"question":"прекратить финансирование","answer":"pull the plug"},{"id":888,"question":"щелчок /переключатель","answer":"flick"},{"id":889,"question":"стиснутые зубы","answer":"through gritted teeth"},{"id":890,"question":"обман","answer":"deceit"},
{"id":891,"question":"щелчок языком /выражать неодобрение","answer":"tut"},
{"id": 892, "question": "иметь наглость", "answer": "to have the gall to"}, 
{"id":893,"question":"быть раскрытым","answer":"to be divulged"},{"id":894,"question":"пряный /острый","answer":"tangy"},{"id":895,"question":"пялиться","answer":"gawp"},{"id":896,"question":"хрустеть по гальке","answer":"crunch across the shingle"},{"id":897,"question":"снимки с отпуска","answer":"holiday snaps"},{"id":898,"question":"нравиться кому-то","answer":"to fancy someone"},{"id":899,"question":"обижаться","answer":"to be in a huff"},{"id":900,"question":"быть в панике","answer":"to be in a flap"},
{"id": 901, "question": "укол боли", "answer": "twinge"}, 
{"id": 902, "question": "быть в затруднении", "answer":"to be in a fix /jam /pickle"},
{"id": 903, "question": "виноторговец", "answer": "vintner"},
{"id":904,"question":"быть в замешательстве","answer":"to be in a muddle /state /tizzy /stew"},{"id":905,"question":"вопить","answer":"to wail"},{"id":906,"question":"высокомерный /сноб","answer":"aloof"},{"id":907,"question":"веселый /радостный","answer":"gleeful"},{"id":908,"question":"висеть /полулежать","answer":"to loll"},{"id":909,"question":"пестрый /полосатый как тигр","answer":"brindled (animal)"},{"id":910,"question":"беспородная собака","answer":"lurcher"},{"id":911,"question":"кеды","answer":"plimsolls"},{"id":912,"question":"ежевика","answer":"bramble"},
{"id": 913, "question": "дуться", "answer": "pout"},
{"id":914,"question":"хмуриться /хмурое лицо","answer":"scowl"},{"id":915,"question":"заманчивый","answer":"enticing"},{"id":916,"question":"предостережение","answer":"caveat"},{"id":917,"question":"морской пляж /прибрежная отмель","answer":"mudflats"},{"id":918,"question":"отлив /отступать","answer":"ebb"},{"id":919,"question":"свежесобранный","answer":"freshly-gleaned"},{"id":920,"question":"собирать /собирать остатки","answer":"to glean"},{"id":921,"question":"грубый /крупный","answer":"coarse"},{"id":922,"question":"точить /точило","answer":"hone"},{"id":923,"question":"душный /сухой","answer":"sultry-sweet"},{"id":924,"question":"жимолость","answer":"honeysuckle"},{"id":925,"question":"жаждать /желать","answer":"crave"},{"id":926,"question":"край /кайма","answer":"hem"},{"id":927,"question":"изношенный /потрепанный","answer":"frayed"},{"id":928,"question":"чаща /заросли","answer":"thicket"},{"id":929,"question":"лес /лесной массив /сопка","answer":"fell"},{"id":930,"question":"дрожать /дрожание","answer":"judder (of wheels against wood)"},{"id":931,"question":"неподрезанный","answer":"unpruned"},
{"id":932,"question":"мучиться /страдать /томиться","answer":"languish"},
{"id":933,"question":"что-нибудь /anything","answer":"owt"},{"id":934,"question":"разбивать /разрушать","answer":"shatter"},
{"id":935,"question":"толчок /толчки","answer":"jolt"},
{"id":936,"question":"засуха","answer":"drought"},{"id":937,"question":"продуваемый насквозь","answer":"draughty"},{"id":938,"question":"сплетенный","answer":"entwined"},{"id":939,"question":"эркерное окно","answer":"bay-window"},
{"id":940,"question":"манить /манящий","answer":"beckon"},
{"id":941,"question":"цепляться /цепляться","answer":"cling"},{"id":942,"question":"унылый /подавленный","answer":"despondent"},{"id":943,"question":"трущобы","answer":"slums"},{"id":944,"question":"головокружительный","answer":"woozy"},{"id":945,"question":"вытекать /вытекание","answer":"ooze"},{"id":946,"question":"бред /бредить","answer":"drivel"},{"id":947,"question":"любитель экзотической еды","answer":"adventurous eater"},{"id":948,"question":"принести убытки","answer":"take a toll"},{"id":949,"question":"трибуны","answer":"bleachers"},{"id":950,"question":"выемка /вырезка","answer":"nick"},{"id":951,"question":"вовремя","answer":"to be in the nick of time"},{"id":952,"question":"заехать туда","answer":"swing by there"},{"id":953,"question":"выругаться на кого-то","answer":"go off on somebody for smth."},{"id":954,"question":"инертный /самоуспокоенный","answer":"complacent"},{"id":955,"question":"быть готовым к чему-то","answer":"to be up for smth."},{"id":956,"question":"быть на пике","answer":"to be through the roof"},{"id":957,"question":"приводящий в бешенство","answer":"infuriating"},{"id":958,"question":"мак бук","answer":"lap pie"},{"id":959,"question":"веселье","answer":"merriment"},{"id":960,"question":"быть в настроении для чего-то","answer":"to be in the mood for smth."},{"id":961,"question":"заставить кого-то рассмеяться","answer":"to crack somebody up"},{"id":962,"question":"мечта","answer":"a pipe dream"},{"id":963,"question":"найти свой путь","answer":"to find their groove"},{"id":964,"question":"быть в своей тарелке","answer":"to be in the groove"},{"id":965,"question":"клин /кусок","answer":"wedge"},{"id":966,"question":"детективы","answer":"police procedurals"},{"id":967,"question":"психологические повороты","answer":"psychological twists"},{"id":968,"question":"реалистичный","answer":"true-to-life"},{"id":969,"question":"ведущий новостей","answer":"news anchor"},{"id":970,"question":"зайти в паб поесть","answer":"pop into a pub for some food"},{"id":971,"question":"штанга","answer":"barbell"},{"id":972,"question":"смелость /смелый","answer":"pluck"},{"id":973,"question":"может приготовить на скорую руку","answer":"can whip up"},{"id":974,"question":"человек учится всю жизнь","answer":"you live and learn"},{"id":975,"question":"здесь всегда было не очень","answer":"to be a bit patchy around here at the best of times"},{"id":976,"question":"момент тишины","answer":"tumbleweed moment"},{"id":977,"question":"быть в списке претендентов","answer":"to be on the shortlist"},{"id":978,"question":"умные люди так говорят","answer":"smart money says so"},{"id":979,"question":"продавец грязных лжи","answer":"peddler of sordid lies"},
{"id":980,"question":"препятствовать /корзина","answer":"hamper"},
{"id":981,"question":"резко сворачивать /резкое движение","answer":"swerve"},
{"id":982,"question":"непристойность /грязь /нищета","answer":"squalor"},
{"id":983,"question":"соединенный /объединенный","answer":"coalesced"},{"id":984,"question":"кусок /глыба","answer":"lump"},{"id":985,"question":"принести /приносить","answer":"fetch"},{"id":986,"question":"драка ","answer":"scuffle"},{"id":987,"question":"нелепый /смехотворный","answer":"ludicrous"},{"id":988,"question":"уничтожать /затоплять /удирать","answer":"scuttled"},
{"id":989,"question":"падать /падение","answer":"tumble"},
{"id":990,"question":"раздражение /сердитость","answer":"exasperation"},{"id":991,"question":"нависать /нависание","answer":"overhang"},{"id":992,"question":"опрокидывать /опрокидываться","answer":"topple"},{"id":993,"question":"долина","answer":"dale"},{"id":994,"question":"утрата","answer":"fOrfeiting"},{"id":995,"question":"возбуждение /подъем","answer":"arousal"},
{ "id": 996, "question": "изысканный", "answer": "debonair" }, 
{"id":997,"question":"ужасный /ужасающий","answer":"appalling"},{"id":998,"question":"потеря /утрата","answer":"bereavement"},{"id":999,"question":"шелест /шелестеть","answer":"rustle"},{"id":1000,"question":"знакомство /знакомый","answer":"acquaintance"},{"id":1001,"question":"быть в курсе","answer":"to be in the know"},{"id":1002,"question":"набожно","answer":"devoutly"},
{"id":1003,"question":"возмутительный /непристойный","answer":"outrageous"},
{"id":1004,"question":"воспользоваться случаем /использовать по максимуму","answer":"make the most of it"},{"id":1005,"question":"выпустить пар","answer":"to let off the steam"},{"id":1006,"question":"старайся избегать негатива","answer":"try to avoid negative vibes"},
{"id":1007,"question":"достигнуть предела","answer":"be at the end of your tether /rope"},
{"id":1008, "question": "критика, раздражение", "answer": "niggle"}, 
{"id":1009,"question":"безразлично","answer":"in a dispassionate manner"},{"id":1010,"question":"вспышка характера","answer":"tempreramental outburst"},{"id":1011,"question":"вызывать эмоции","answer":"bring out/ induce emotions"},
{"id":1012, "question": "быть в провинции", "answer": "to be in the sticks"}, 
{"id":1013,"question":"взволнованный новостью","answer":"exhilareted by the news"},{"id":1014,"question":"на седьмом небе от счастья","answer":"to be on cloud nine /to be over the moon"},
{"id":1015,"question": "ссора, конфликт", "answer": "a run-in"}, 
{"id":1016,"question":"вызвать эмоции","answer":"get a rise out of smb"},{"id":1017,"question":"небольшой страх","answer":"a slight feeling of trepidation about smth"},{"id":1018,"question":"камень с души","answer":"it's a real weight off my mind"},{"id":1019,"question":"знать как действовать на чувства","answer":"know how to press buttons"},{"id":1020,"question":"быть на нервах","answer":"to be on edge with smb"},{"id":1021,"question":"быть в контакте с чувствами","answer":"to be in touch with our feelings"},{"id":1022,"question":"раздражаться","answer":"tempers start to fray"},{"id":1023,"question":"эмоции на поверхности","answer":"emotions are quite close to the surface"},{"id":1024,"question":"накапливаться","answer":"things are building up"},{"id":1025,"question":"злость","answer":"the red mist descends"},
{"id":1026,"question":"a tendency to lose one's temper quickly","answer":"to have a short fuse"},
{"id":1027,"question":"вызывать негатив","answer":"it breeds resentment"},{"id":1028,"question":"вздохнуть с облегчением","answer":"to heave a huge sigh of relief"},{"id":1029,"question":"мораль и решимость ничего не значат","answer":"moral and determination are null and void"},{"id":1030,"question":"растущая злость и недовольство","answer":"growing anger and dicontent"},{"id":1031,"question":"связаться по общей любви к чему-то","answer":"to bond over mutual love of smth"},{"id":1032,"question":"прибывать /втягивать","answer":"pull in"},{"id":1033,"question":"быть в одной лодке","answer":"to be in the same boat"},{"id":1034,"question":"быть в гадком настроении","answer":"to be in a foul mood"},{"id":1035,"question":"озадаченный /расстроенный","answer":"baffled"},{"id":1036,"question":"поездка /прогулка /пикник","answer":"outing"},{"id":1037,"question":"его навыки ставят мои в тени","answer":"his skills definitely put mine to shame"},
{"id":1038,"question":"время бесценно","answer":"time is the ultimate luxury"},
{"id":1039,"question":"плита (мощение)","answer":"flagstone"},
{"id":1040,"question":"грязный","answer":"grubby (backpack)"},
{"id": 1041, "question": "не в своей тарелке", "answer": "to feel off-kilter"},
{"id":1042,"question":"приступ","answer":"bout"},
{"id":1043,"question":"презрение","answer":"disdain"},{"id":1044,"question":"кроткий","answer":"meek"},
{ "id": 1045, "question": "вспыльчивый", "answer": "trUculent" }, 
{"id":1046,"question":"делать голову кружится","answer":"to make woozy"},{"id":1047,"question":"высокомерно","answer":"haughtily"},{"id":1048,"question":"собирать деньги на благотворительность","answer":"to raise money for charity"},{"id":1049,"question":"назначение на два часа","answer":"appointment for two"},{"id":1050,"question":"быть в хорошей форме","answer":"to be fit"},{"id":1051,"question":"считать","answer":"deem"},{"id":1052,"question":"сумасшедший","answer":"barmy inf"},{"id":1053,"question":"неохотно","answer":"begrudgingly"},{"id":1054,"question":"без эмоций","answer":"deadpanned"},{"id":1055,"question":"неубедительный","answer":"lacklustre"},{"id":1056,"question":"полосатый","answer":"tabby cat"},{"id":1057,"question":"спасибо за визит","answer":"thanks for stopping by"},{"id":1058,"question":"сутулый","answer":"hunched"},{"id":1059,"question":"всеми волокнами души","answer":"with every fibre of my being"},{"id":1060,"question":"сырой","answer":"dank appartment"},{"id":1061,"question":"взрыв","answer":"outburst"},{"id":1062,"question":"прибегая к","answer":"resorting to"},{"id":1063,"question":"ограбить","answer":"ransack"},
{"id":1064,"question":"содрогаться","answer":"shudder"},
{"id":1065,"question":"время ускользнуло от меня","answer":"time got away from me"},{"id":1066,"question":"поглощать","answer":"engulf"},{"id":1067,"question":"двусмысленность","answer":"double entendre"},
{"id":1068,"question": "Как там в провинции?", "answer": "How is the sticks?"},
{"id":1069,"question":"благотворительный магазин","answer":"thrift store"},
{"id":1070,"question":"скромный","answer":"frugal"},{"id":1071,"question":"беспечно","answer":"nonchalantly"},{"id":1072,"question":"восхитительный","answer":"delightful"},{"id":1073,"question":"унижать","answer":"belittle"},
{"id":1074,"question": "чирок", "answer": "teal"},
{"id":1075,"question":"докучаемый","answer":"badgered"},{"id":1076,"question":"прыгать","answer":"prance about"},{"id":1077,"question":"пастбище","answer":"paddock"},{"id":1078,"question":"рвать","answer":"yank (flowers)"},{"id":1079,"question":"возражать","answer":"retort"},
{"id":1080,"question": "построить небрежно", "answer": "jerry-build"}, 
{"id":1081,"question":"хриплый","answer":"gruff"},{"id":1082,"question":"ирландский акцент","answer":"brogue"},{"id":1083,"question":"выпрямить /приминать","answer":"flatten"},{"id":1084,"question":"представлять","answer":"fancied"},{"id":1085,"question":"неряшливый","answer":"frumpy"},
{"id":1086,"question":"шумный /бурный","answer":"tumultuous"},
{"id":1087,"question":"отправить к черту","answer":"telling smb to naff off"},{"id":1088,"question":"поддерживать /отстаивать /подтверждать","answer":"uphold"},{"id":1089,"question":"развратный","answer":"promiscuous"},{"id":1090,"question":"тщеславный","answer":"conceited"},{"id":1091,"question":"крупный","answer":"hefty"},{"id":1092,"question":"подходящий","answer":"an apt time"},{"id":1093,"question":"сдвинутый","answer":"loopy"},{"id":1094,"question":"отчитать /выговорить","answer":"pull him up on it"},{"id":1095,"question":"отчаявшийся","answer":"distraught"},{"id":1096,"question":"быть уничтоженным","answer":"to be wiped out"},{"id":1097,"question":"прогулка","answer":"saunter"},{"id":1098,"question":"отмахиваться","answer":"bat away"},{"id":1099,"question":"бороться","answer":"contend"},{"id":1100,"question":"неприукрашенный","answer":"unvarnished"},{"id":1101,"question":"штука","answer":"a thingy"},{"id":1102,"question":"проверить","answer":"check up on"},{"id":1103,"question":"сократить","answer":"curtail"},{"id":1104,"question":"родственнический","answer":"nepotistic"},{"id":1105,"question":"родственничество","answer":"nepotism"},{"id":1106,"question":"после того как вы пройдете площадь, поверните направо","answer":"after you go past the sqaire, take a right"},{"id":1107,"question":"делать заметки","answer":"take notes"},{"id":1108,"question":"безалкогольный напиток","answer":"soft drink"},{"id":1109,"question":"предположить","answer":"surmise"},{"id":1110,"question":"выпуклый","answer":"embossed"},
{"id":1111,"question":"шататься /разрушаться","answer":"totter"},{"id":1112,"question":"сандалии на каблуке","answer":"wedge sandals"},{"id":1113,"question":"клок","answer":"hank"},{"id":1114,"question":"слюнявые мальчики","answer":"drooling boys"},
{"id":1115,"question": "c бравадой, шиком", "answer": "with great panache"}, 
{"id":1116,"question":"остукленевшие глаза","answer":"eyes flinty"},
{"id":1117,"question":"приторный","answer":"treacly"},
{"id":1118, "question": "бродить", "answer": "loiter"},
{ "id": 1119, "question": "растрепанный", "answer": "straggly" },
{"id":1120, "question": "лентяй, бездельник", "answer": "a slouch"}, 
{"id":1121,"question":"бурный /объемный","answer":"billowy"},{"id":1122,"question":"камень преткновения","answer":"touchstoune"},{"id":1123,"question":"брызгать","answer":"slosh"},{"id":1124,"question":"воздух убийственно жаркий","answer":"air is murderously hot"},{"id":1125,"question":"светофор переключается на зеленый","answer":"the traffic lights change to green"},{"id":1126,"question":"гудок","answer":"toot"},{"id":1127,"question":"береговая кулик","answer":"sandpiper"},{"id":1128,"question":"сколотый зуб","answer":"chipped tooth"},
{"id":1129, "question": "добросовестный, законный", "answer": "bona fide" },
{"id":1130,"question":"задумчивый","answer":"musing /wistful"},{"id":1131,"question":"вырубиться","answer":"pass out"},{"id":1132,"question":"быть разорванным","answer":"to be torn"},{"id":1133,"question":"капризный","answer":"mardy"},{"id":1134,"question":"трусы","answer":"knickers"},{"id":1135,"question":"рыться","answer":"rummage"},
{"id":1136,"question":"мрачный/суровый /холодный","answer":"bleak"},
{"id":1137,"question":"здравый смысл","answer":"common sense"},
{"id":1138,"question":"похвала","answer":"kudos to you for"},
{ "id": 1139, "question": "раздражительный", "answer": "twitchy" },
{"id":1140,"question":"очень рано","answer":"bright and early"},{"id":1141,"question":"загорать","answer":"to be sunning oneself"},
{"id":1142,"question":"энергия /звенеть","answer":"zing"},
{"id":1143,"question":"прыгать /начать делать что-то","answer":"jump off"},{"id":1144,"question":"опрокинуться","answer":"capsize"},{"id":1145,"question":"размахвая /бить","answer":"frailing"},{"id":1146,"question":"подчас /то и дело","answer":"under every now and then"},{"id":1147,"question":"крепче","answer":"sturdier"},
{"id":1148, "question": "раздражать", "answer": "irk"},
{"id":1149,"question":"предчувствие","answer":"foreboding"},{"id":1150,"question":"чувствовать тошноту","answer":"to feel quesy"},{"id":1151,"question":"удача","answer":"fluke"},{"id":1152,"question":"пренебрежительно","answer":"dismissively"},{"id":1153,"question":"трус","answer":"wimp"},{"id":1154,"question":"скрытный","answer":"reticent /rEtisnt"},{"id":1155,"question":"показуха","answer":"grandstanding"},{"id":1156,"question":"покинуть /передать капитал","answer":"bail out"},{"id":1157,"question":"выпивка","answer":"tipple"},
{"id":1158,"question":"болтливый","answer":"gArrulous"},
{"id":1159,"question":"бросать","answer":"fling"},{"id":1160,"question":"затаить злобу","answer":"to have it in for smb"},
{"id":1161,"question":"вредный /злорадный","answer":"mIschievous"},{"id":1162,"question":"хохот","answer":"guffaw /gefO"},{"id":1163,"question":"греметь","answer":"rattle"},{"id":1164,"question":"цапля","answer":"heron"},{"id":1165,"question":"болтать","answer":"shoot the breeze"},{"id":1166,"question":"бородавка /неприятный человек","answer":"wart"},{"id":1167,"question":"неприятный","answer":"obnoxious"},{"id":1168,"question":"нежелательный","answer":"objectionable"},{"id":1169,"question":"чокнуться бокалами","answer":"clink glasses"},{"id":1170,"question":"нечистые дела","answer":"hanky-panky"},{"id":1171,"question":"застенчиво","answer":"coyly"},{"id":1172,"question":"раздуваться","answer":"swell"},{"id":1173,"question":"гагара","answer":"guillemot"},
{"id":1174,"question":"баклан /олуша","answer":"gannet"},
{"id":1175,"question":"высоко","answer":"aloft"},{"id":1176,"question":"зависть","answer":"grudge"},{"id":1177,"question":"законопослушный","answer":"law-abiding"},{"id":1178,"question":"корочка/ inf I ve been earning a crust as a journalist","answer":"crusty"},{"id":1179,"question":"мишура","answer":"tinsel"},{"id":1180,"question":"приобретать любовь","answer":"endear"},{"id":1181,"question":"поднять еще на одну ступень","answer":"ramp up another notch"},{"id":1182,"question":"вышибала","answer":"bouncer"},{"id":1183,"question":"inf опасный","answer":"hairy"},{"id":1184,"question":"покалывание","answer":"tingle"},{"id":1185,"question":"напиток перед сном","answer":"nightcap"},{"id":1186,"question":"предвестники","answer":"harbingers"},{"id":1187,"question":"визг /шквал","answer":"sqaull"},{"id":1188,"question":"отпрянуть","answer":"recoil"},{"id":1189,"question":"остаток","answer":"remnant"},{"id":1190,"question":"выкупить","answer":"redeem"},{"id":1191,"question":"сбить с ног","answer":"knock him flat"},{"id":1192,"question":"выговорить /привлечь к ответственности","answer":"pull someone up for/over/on"},{"id":1193,"question":"я закончил","answer":"i am done"},{"id":1194,"question":"капать на мозги","answer":"bange over the head with it"},{"id":1195,"question":"остановиться /притормозить","answer":"pull up"},{"id":1196,"question":"покрытый пятнами грязи","answer":"mottled with old grime"},
{"id":1197,"question":"ползать /пресмыкаться","answer":"grovel"},
{"id":1198,"question":"крапива","answer":"nettle"},{"id":1199,"question":"импульсивный","answer":"impetuous"},
{"id":1200,"question":"отвисла челюсть","answer":"jaw drops open /jaw hits the floor"},{"id":1201,"question":"долить в бокал","answer":"top up a glass"},{"id":1202,"question":"добраться до Бристоля","answer":"get up to Bristol"},{"id":1203,"question":"говорить не в свою очередь","answer":"speak out of turn"},{"id":1204,"question":"спрятать телефон","answer":"conceal a phone"},{"id":1205,"question":"во всех подробностях","answer":"in all the gory details"},{"id":1206,"question":"не в удобное время","answer":"did I catch you at work?"},
{"id": 1207, "question": "держать чашку", "answer": "cradle a cup"},
{"id":1208,"question":"представлять /шикарный","answer":"fancy"},
{"id":1209,"question":"выселить","answer":"evict"},{"id":1210,"question":"боевая раскраска","answer":"war paint"},{"id":1211,"question":"отвратительный","answer":"heinous"},{"id":1212,"question":"разделить оптимизм","answer":"share your optimism"},{"id":1213,"question":"быть на иголках","answer":"to be on tenterhooks"},
{"id":1214,"question":"через полчаса","answer":"in half an hour"},
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

module.exports = { base };