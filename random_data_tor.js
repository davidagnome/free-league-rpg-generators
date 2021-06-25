// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// random_data_tor.js
// inspired by public domain work by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

 
gen_data['tor_sites'] = {
  '1-40':   '{eriador}',
  '41-80': '{rhovanion}',
  '81-90': '{gondor}',
  '91-92': '{lindon}',
  '93-96': '{harad}',
  '97-98': '{rhun}',
  '99-100': '{mordor}'
};

gen_data['eriador'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {eriador_site}. It is a {site_occupancy} {ruin} by {eriador_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {eriador_site}.',
  'You have heard {tale_synonyms} of this {site_condition} {ruin} near {eriador_site} saying that it was {site_history}.',
  'A {archetype} from nearby {eriador_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {eriador_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {eriador_factions} near {eriador_site}.',
  'In a {ruin} lived {eriador_factions} or so the {tale_synonyms} from a {eriador_site} {archetype} goes...'
];

gen_data['rhovanion'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {rhovanion_site}. It is a {site_occupancy} {ruin} by {rhovanion_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {rhovanion_site}.',
  'You have heard {tale_synonyms} of this {site_condition} {ruin} near {rhovanion_site} saying that it was {site_history}.',
  'A {archetype} from nearby {rhovanion_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {rhovanion_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {rhovanion_factions} near {rhovanion_site}.',
  'In a {ruin} lived {rhovanion_factions} or so the {tale_synonyms} from a {rhovanion_site} {archetype} goes...'
];

gen_data['gondor'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {gondor_site}. It is a {site_occupancy} {ruin} by {gondor_factions}. It remains {site_condition}.',
  'Founded in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {gondor_site}.',
  'You heard {tale_synonyms} of this {site_condition} {ruin} near {gondor_site} saying that it was {site_history}.',
  'A {archetype} from nearby {gondor_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {gondor_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {gondor_factions} near {gondor_site}.',
  'In a {ruin} lived {gondor_factions} or so the {tale_synonyms} from a {gondor_site} {archetype} goes...'
];

gen_data['lindon'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {lindon_site}. It is a {site_occupancy} {ruin} by {lindon_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {lindon_site}.',
  'You heard {tale_synonyms} of this {site_condition} {ruin} near {lindon_site} saying that it was {site_history}.',
  'A {archetype} from nearby {lindon_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {lindon_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {lindon_factions} near {lindon_site}.',
  'In a {ruin} lived {lindon_factions} or so the {tale_synonyms} from a {lindon_site} {archetype} goes...'
];

gen_data['harad'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {harad_site}. It is a {site_occupancy} {ruin} by {harad_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {harad_site}.',
  'You heard {tale_synonyms} of this {site_condition} {ruin} near {harad_site} saying that it was {site_history}.',
  'A {archetype}  from nearby {harad_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {harad_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {harad_factions} near {harad_site}.',
  'In a {ruin} lived {harad_factions} or so the {tale_synonyms} from a {harad_site} {archetype} goes...'
];

gen_data['rhun'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {rhun_site}. It is a {site_occupancy} {ruin} by {rhun_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in nearby {rhun_site}.',
  'You heard {tale_synonyms} of this {site_condition} {ruin} near {rhun_site} saying that it was {site_history}.',
  'A {archetype} from nearby {rhun_site} say this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {rhun_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {rhun_factions} near {rhun_site}.',
  'In a {ruin} lived {rhun_factions} or so the {tale_synonyms} from a {rhun_site} {archetype} goes...'
];

gen_data['mordor'] = [
  'The site {site_position} {number} {units} {cardinal_directions} of {mordor_site}. It is a {site_occupancy} {ruin} by {mordor_factions}. It remains {site_condition}.',
  '{built_synonyms} in the {me_age}, {tale_synonyms} of this {site_condition} {ruin} abound in the nearby {mordor_site}.',
  'You heard {tale_synonyms} of this {site_condition} {ruin} near {mordor_site} saying that it was {site_history}.',
  'A {archetype} from nearby {mordor_site} says this {site_occupancy} {me_age} {ruin} {site_oddity} and is known to {mordor_factions}.',
  '{sindarin_combo} is a {site_occupancy} {ruin} by {mordor_factions} near {mordor_site}.',
  'In a {ruin} lived {mordor_factions} or so the {tale_synonyms} from a {mordor_site} {archetype} goes...'
];

gen_data['eriador_site'] = [
  'Bree',
  'Shire',
  'North Downs',
  'Gray Havens',
  'Rivendell',
  'Lone Lands',
  'Forochel',
  'Lake Evendim',
  'Emyn Uial, the hills of Evendim',
  'Weather Hills',
  'Barrow Downs',
  'Green Way',
  'Trollshaws',
  'Ettenmoors',
  'Mount Gram',
  'Carn Dum',
  'Cold Fells',
  'Eregion',
  'Annuminas',
  'Arthedain',
  'Tharbad'
];

gen_data['eriador_factions'] = [
  'Hobbits',
  'Dunedain',
  'Elves of Rivendell',
  'Orcs',
  'Angmar',
  'Blue Mountain Dwarves',
  'Misty Mountain Dwarves',
  'the Eglain',
  'Rangers of Esteldin',
  'Lossoth of Forochel',
  'Wardens of Annuminas',
  'the Grey Company',
  'free people of Dunland',
  'Theodred\'s riders',
  'the Council of the North',
  'Thorin\'s Hall'
];

gen_data['rhovanion_site'] = [
  'Mirkwood',
  'Lonely Mountain',
  'Dale',
  'Laketown',
  'Rohan',
  'Iron Hills',
  'Wilderland'
];

gen_data['rhovanion_factions'] = [
'Iron Garrison',
'Galadhrim',
'Malledhrim',
'The Riders of Stangard',
'Heroes of Limlight Gorge',
'peoples of the Wold',
'peoples of the Norcrofts',
'peoples of the Entwash Vale',
'peoples of the Sutcrofts',
'peoples of Wildermore',
'Survivors of Wildermore',
'the Eorlingas',
'the Helmingas',
'the Ents of Fangorn Forest',
'Spiders of Mirkwood',
'Dol-Goldur Orcs',
'Misty Mountain Dwarves'
];

gen_data['gondor_site'] = [
  'Emyn Arnen',
  'Osgiliath',
  'Minas Tirith',
  'Edhellond (Elf-haven)',
  'Pinnath Gelin',
  'Anfalas (Langstrand)',
  'the river Lefnui',
  'the river Morthond',
  'Dol Amroth',
  'Ethring'
];

gen_data['gondor_factions'] = [
  'Dol Amroth',
  'peoples of Ringlo Vale',
  'peoples of Dor-en-Ernil',
  'peoples of Lebennin',
  'Pelargir',
  'Rangers of Ithilien',
  'Defenders of Minas Tirith'
];

gen_data['lindon_site'] = [
  'Forlindon',
  'river Forlond',
  'Ered Luin, the Blue Mountains',
  'Gulf of Lune',
  'river Harlond',
  'Harlindon'
];

gen_data['lindon_factions'] = [
  'Forlindon',
  'river Forlond',
  'Ered Luin, the Blue Mountains',
  'Gulf of Lune',
  'the river Harlond',
  'Harlindon'
];

gen_data['harad_site'] = [
  'Harondor',
  'the river Harden',
  'Near Harad',
  'Haradwaith',
  'Far Harad',
  'Umbar',
  'City of the Corsairs',
  'havens of Umbar',
  'Harad Road'
];

gen_data['harad_factions'] = [
  'Haradrim',
  'Umbarim',
  'people of Khand',
  'chiefs of Haradwaith'
];

gen_data['rhun_site'] = [
  'Rhun',
  'sea of Rhun',
  'Celduin, the River Running'
];

gen_data['mordor_site'] = [
  'Ephel Duath, the Mountains of Shadow',
  'Sea of Nurnen',
  'Nurn',
  'Barad-Dur, the Dark Tower',
  'plateau of Gorgoroth',
  'Mount Doom, Orodruin',
  'Minas Morgul',
  'Morgul Vale',
  'Morannon'
];

gen_data['mordor_factions'] = [
  'the forces of Sauron',
  'the Ringwraiths'
];

gen_data['sauron_forces'] = {
  '1-2': 'orcs',
  '3-4': 'grim men',
  '5-6': 'Uruk-Hai',
  '7-8': 'goblins',
  '9-10': 'crebain',
  '11-12': 'wargs',
  '13-14': 'mumakil',
  '15-16': 'Ringwraiths'
};

gen_data['sindarin_combo'] = [
  '{sindarin_site_prefix} {sindarin_site_adjective}{sindarin_site_suffix}',
  '{sindarin_site_prefix}{sindarin_site_suffix}',
  '{sindarin_site_adjective}{sindarin_site_suffix}'
];

gen_data['sindarin_site_prefix'] = [
  'Barad',
  'Eithel',
  'Haudh',
  'Sarch',
  'Orthrond',
  'Minas'
];

gen_data['sindarin_site_adjective'] = [
  'Angren',
  'Eryn',
  'Taur',
  'Celeb',
  'And',
  'Lind'
];

gen_data['sindarin_site_suffix'] = [
  'ost',
  '-dur',
  '-en-Faroth',
  'orn',
  'nen',
  'duin',
  'on'
];

gen_data['tor_characters'] = [
    '{tor_first_name} {tor_surname}, {gender} {tor_archetype}. Descendant of the {tor_ethnicity}, they wear {armor} and wield {weapon}. They grew up in a {settlement} in {tor_regions}. They are motivated to {motivation}. Despite their usual {hope} nature, they feel conflicted over their {fear}.\n'
];

gen_data['tor_ethnicity'] = [
'Bardings',
'Dwarves of the Lonely Mountain',
'Dwarves of the Blue Mountains',
'Elves of Mirkwood',
'Beornings',
'People of {eriador_site}',
'People of {rhovanion_site}',
'People of {gondor_site}',
'People of {harad_site}',
'People of {mordor_site}',
'People of {rhun_site}',
'Elves of Lothlorien',
'Elves of Lindon',
'Elves of Rivendell'
];

gen_data['tor_regions'] = {
  '1-5':  '{eriador_site}',
  '6-10':  '{rhovanion_site}',
  '11-13':  '{gondor_site}',
  '14-15':  '{harad_site}',
  '16-17':  '{mordor_site}',
  '18':  '{rhun_site}'
};

gen_data['tor_first_name'] = [
'Adalbert',
'Adaldrida',
'Adalgar',
'Adalgrim',
'Adamanta',
'Adanel',
'Adelard',
'Adrahil',
'Aegnor',
'Aerandir',
'Aerin',
'Aghan',
'Ailinel',
'Alatar',
'Aldor',
'Alfrida',
'Algund',
'Almarian',
'Almiel',
'Amandil',
'Amaranth',
'Amarië',
'Amdír',
'Amethyst',
'Amlach',
'Amlaith',
'Amras',
'Amrod',
'Amroth',
'Anairë',
'Anardil',
'Anárion',
'Anborn',
'Ancalagon',
'Andreth',
'Andróg',
'Andwise',
'Angbor',
'Angelica',
'Angelimar',
'Angelimir',
'Angrim',
'Angrod',
'Annael',
'Anson',
'Ar-Adûnakhôr',
'Ar-Gimilzôr',
'Ar-Pharazôn',
'Ar-Sakalthôr',
'Ar-Zimrathôn',
'Arador',
'Araglas',
'Aragorn',
'Aragost',
'Arahad',
'Arahael',
'Aranarth',
'Aranuir',
'Aranwë',
'Araphant',
'Araphor',
'Arassuil',
'Aratan',
'Arathorn',
'Araval',
'Aravir',
'Aravorn',
'Arciryas',
'Ardamir',
'Aredhel',
'Argeleb',
'Argon',
'Argonui',
'Arien',
'Arminas',
'Arod',
'Arroch',
'Artamir',
'Arthad',
'Arvedui',
'Arvegil',
'Arveleg',
'Arwen',
'Asfaloth',
'Asgon',
'Asphodel',
'Atanalcar',
'Atanatar',
'Aulë',
'Aulendil',
'Axantur',
'Azaghâl',
'Azog',
'Bain',
'Balbo',
'Baldor',
'Balin',
'Bandobras',
'Barach',
'Baragund',
'Barahir',
'Baran',
'Baranor',
'Bard',
'Barliman',
'Basso',
'Beechbone',
'Belba',
'Beldir',
'Beldis',
'Belecthor',
'Beleg',
'Belegorn',
'Belegund',
'Belemir',
'Belen',
'Bell',
'Belladonna',
'Bëor',
'Beorn',
'Bereg',
'Beregar',
'Beregond',
'Beren',
'Bereth',
'Bergil',
'Beril',
'Berilac',
'Bert',
'Berúthiel',
'Berylla',
'Bifur',
'Bilbo',
'Bill',
'Bingo',
'Blanco',
'Bob',
'Bodo',
'Bofur',
'Bolg',
'Bombur',
'Bór',
'Borin',
'Borlach',
'Borlad',
'Boromir',
'Boron',
'Borondir',
'Borthand',
'Bosco',
'Bowman',
'Brand',
'Brandir',
'Bregalad',
'Brego',
'Bregolas',
'Briffo',
'Brodda',
'Bruno',
'Brytta',
'Bucca',
'Buffo',
'Bungo',
'Calimehtar',
'Caliondo',
'Calmacil',
'Camellia',
'Caranthir',
'Carc',
'Carcharoth',
'Carl',
'Castamir',
'Celandine',
'Celeborn',
'Celebrían',
'Celebrimbor',
'Celebrindor',
'Celegorm',
'Celepharn',
'Cemendur',
'Ceorl',
'Chica',
'Círdan',
'Cirion',
'Ciryandil',
'Ciryatur',
'Ciryon',
'Cora',
'Cotman',
'Cottar',
'Curufin',
'Daeron',
'Dagnir',
'Dáin',
'Dairuin',
'Daisy',
'Damrod',
'Déagol',
'Denethor',
'Déor',
'Déorwine',
'Derufin',
'Dervorin',
'Diamond',
'Dina',
'Dinodas',
'Dior',
'Dírhael',
'Dírhavel',
'Dís',
'Doderic',
'Dodinas',
'Donnamira',
'Dora',
'Dori',
'Dorlas',
'Draugluin',
'Drogo',
'Druda',
'Dudo',
'Duilin',
'Duinhir',
'Dúnhere',
'Durin',
'Dwalin',
'Eärendil',
'Eärendur',
'Eärnil',
'Eärnur',
'Eärwen',
'Ecthelion',
'Edrahil',
'Egalmoth',
'Eglantine',
'Eilinel',
'Elanor',
'Elatan',
'Elboron',
'Eldacar',
'Eldalótë',
'Eldarion',
'Elemmakil',
'Elemmírë',
'Elendil',
'Elendur',
'Elenwë',
'Elfhelm',
'Elfhild',
'Elfstan',
'Elfwine',
'Elladan',
'Elmo',
'Elrohir',
'Elrond',
'Elros',
'Eluréd',
'Elurín',
'Elwing',
'Emeldir',
'Enel',
'Enerdhil',
'Eofor',
'Eöl',
'Éomer',
'Éomund',
'Eönwë',
'Eorl',
'Éothain',
'Éowyn',
'Eradan',
'Erchirion',
'Erellont',
'Erendis',
'Erestor',
'Erkenbrand',
'Erling',
'Esmeralda',
'Estë',
'Estella',
'Estelmo',
'Everard',
'Falco',
'Faramir',
'Farin',
'Farmer',
'Fastolph',
'Fastred',
'Fatty',
'Fëanor',
'Felaróf',
'Fengel',
'Ferdinand',
'Ferumbras',
'Fíli',
'Filibert',
'Fimbrethil',
'Finarfin',
'Findegil',
'Findis',
'Finduilas',
'Finglas',
'Fingolfin',
'Fingon',
'Finrod',
'Finwë',
'Firefoot',
'Fíriel',
'Fladrif',
'Flambard',
'Flói',
'Folca',
'Folco',
'Folcred',
'Folcwine',
'Forlong',
'Forthwini',
'Fortinbras',
'Forweg',
'Fosco',
'Fram',
'Frár',
'Fréa',
'Fréaláf',
'Fréawine',
'Freca',
'Fredegar',
'Frerin',
'Frodo',
'Frór',
'Frumgar',
'Fuinur',
'Fundin',
'Galadhon',
'Galador',
'Galadriel',
'Galathil',
'Galdor',
'Galion',
'Gálmód',
'Gamil',
'Gamling',
'Gandalf',
'Gárulf',
'Gelmir',
'Gerda',
'Gerontius',
'Gethron',
'Ghân-buri-Ghân',
'Gil-galad',
'Gildis',
'Gildor',
'Gilly',
'Gilmith',
'Gilraen',
'Gimilkhâd',
'Gimilzagar',
'Gimli',
'Girion',
'Glaurung',
'Gléowine',
'Glirhuin',
'Glóin',
'Glóredhel',
'Glorfindel',
'Golasgil',
'Goldberry',
'Goldilocks',
'Goldwine',
'Golfimbul',
'Gollum',
'Gorbadoc',
'Gorbag',
'Gorbulas',
'Gorhendad',
'Gorlim',
'Gormadoc',
'Gothmog',
'Gram',
'Griffo',
'Gríma',
'Grimbeorn',
'Grimbold',
'Grishnákh',
'Grithnir',
'Gróin',
'Grór',
'Gruffo',
'Guilin',
'Gundabald',
'Gundahad',
'Gundahar',
'Gundolpho',
'Gundor',
'Guthláf',
'Gwaihir',
'Gwindor',
'Hador',
'Halbarad',
'Haldad',
'Haldan',
'Haldar',
'Haldir',
'Haleth',
'Halfast',
'Halfred',
'Hallacar',
'Hallas',
'Hallatan',
'Halmir',
'Háma',
'Hamfast',
'Hamson',
'Hanna',
'Harding',
'Hareth',
'Harry',
'Hasufel',
'Hatholdir',
'Helm',
'Hending',
'Herefara',
'Heribald',
'Herion',
'Herubrand',
'Herucalmo',
'Herugar',
'Herumor',
'Hilda',
'Hildibrand',
'Hildifons',
'Hildigard',
'Hildigrim',
'Hirgon',
'Hiril',
'Hirluin',
'Hob',
'Hobson',
'Holfast',
'Holman',
'Horn',
'Huan',
'Hugo',
'Hundar',
'Hunthor',
'Huor',
'Húrin',
'Hyarmendacil',
'Îbal',
'Ibûn',
'Idril',
'Ilberic',
'Ilmarë',
'Imin',
'Imrahil',
'Indis',
'Ingwë',
'Ingwion',
'Inzilbêth',
'Ioreth',
'Iorlas',
'Írildë',
'Irimë',
'Isembard',
'Isembold',
'Isengar',
'Isengrim',
'Isildur',
'Isilmë',
'Isilmo',
'Isumbras',
'Ivorwen',
'Ivy',
'Jago',
'Jessamine',
'Khamûl',
'Khîm',
'Kíli',
'Lagduf',
'Lalia',
'Landroval',
'Largo',
'Laura',
'Lavender',
'Legolas',
'Lenwë',
'Léod',
'Lily',
'Linda',
'Lindissë',
'Lindórië',
'Lobelia',
'Longo',
'Lóni',
'Lorgan',
'Lórien',
'Lothíriel',
'Lotho',
'Lugdush',
'Lúthien',
'Mablung',
'Madoc',
'Maedhros',
'Maeglin',
'Maglor',
'Mahtan',
'Mairen',
'Malach',
'Malantur',
'Mallor',
'Malva',
'Malvegil',
'Mandos',
'Manwë',
'Manwendil',
'Marach',
'Marcho',
'Mardil',
'Marhari',
'Marhwini',
'Marigold',
'Marmadas',
'Marmadoc',
'Marroc',
'Mat',
'Mauhúr',
'May',
'Melian',
'Melilot',
'Melkor',
'Menegilda',
'Meneldil',
'Meneldor',
'Mentha',
'Meriadoc',
'Merimac',
'Merimas',
'Merry',
'Milo',
'Mîm',
'Mimosa',
'Minardil',
'Minastan',
'Minto',
'Mirabella',
'Míriel',
'Mithrellas',
'Moro',
'Morwen',
'Mosco',
'Mungo',
'Muzgash',
'Myrtle',
'Nahar',
'Náin',
'Náli',
'Nár',
'Narmacil',
'Narvi',
'Nellas',
'Nerdanel',
'Nessa',
'Nessanië',
'Nienna',
'Niënor',
'Nimloth',
'Nina',
'Nob',
'Nolondil',
'Nora',
'Nori',
'Númendil',
'Núneth',
'Odo',
'Odovacar',
'Óin',
'Olo',
'Olwë',
'Ondoher',
'Orchaldor',
'Orgulas',
'Ori',
'Orodreth',
'Oromë',
'Oromendil',
'Oropher',
'Orophin',
'Ossë',
'Ostoher',
'Otho',
'Otto',
'Paladin',
'Pallando',
'Pansy',
'Pearl',
'Pelendur',
'Pengolodh',
'Peony',
'Peregrin',
'Pervinca',
'Pimpernel',
'Pippin',
'Polo',
'Ponto',
'Poppy',
'Porto',
'Posco',
'Primrose',
'Primula',
'Prisca',
'Radagast',
'Radbug',
'Reginard',
'Rían',
'Roäc',
'Robin',
'Rollo',
'Rómendacil',
'Rorimac',
'Rosa',
'Rosamunda',
'Rose',
'Rosie',
'Rowan',
'Rowlie',
'Ruby',
'Rudibert',
'Rudigar',
'Rudolph',
'Rufus',
'Rúmil',
'Sadoc',
'Sador',
'Saeros',
'Salmar',
'Salvia',
'Samwise',
'Sancho',
'Sapphira',
'Saradas',
'Saradoc',
'Saruman',
'Sauron',
'Seredic',
'Shadowfax',
'Shagrat',
'Shelob',
'Sigismond',
'Silmariën',
'Siriondil',
'Smaug',
'Snaga',
'Soronto',
'Strider',
'Stybba',
'Tanta',
'Tar-Alcarin',
'Tar-Aldarion',
'Tar-Amandil',
'Tar-Anárion',
'Tar-Ancalimë',
'Tar-Ancalimon',
'Tar-Ardamin',
'Tar-Atanamir',
'Tar-Calmacil',
'Tar-Ciryatan',
'Tar-Elendil',
'Tar-Meneldur',
'Tar-Minastir',
'Tar-Míriel',
'Tar-Palantir',
'Tar-Súrion',
'Tar-Telemmaitë',
'Tar-Telperiën',
'Tar-Vanimeldë',
'Tarannon',
'Tarcil',
'Targon',
'Tarondor',
'Tata',
'Ted',
'Telchar',
'Telemnar',
'Telumehtar',
'Thengel',
'Theobald',
'Théoden',
'Théodred',
'Thingol',
'Thorin',
'Thorondir',
'Thorondor',
'Thráin',
'Thranduil',
'Thrór',
'Thuringwethil',
'Tilion',
'Tindómiel',
'Tobold',
'Togo',
'Tolman',
'Tom',
'Tosto',
'Treebeard',
'Tulkas',
'Tuor',
'Turgon',
'Túrin',
'Uffo',
'Ufthak',
'Uglúk',
'Uinen',
'Ulbar',
'Uldor',
'Ulfang',
'Ulfast',
'Ulmo',
'Ulrad',
'Ulwarth',
'Ungoliant',
'Vairë',
'Valacar',
'Valandil',
'Vána',
'Varda',
'Vardamir',
'Vardilmë',
'Vëantur',
'Vidugavia',
'Vidumavi',
'Vigo',
'Vorondil',
'Voronwë',
'Walda',
'Wilcome',
'Wilibald',
'Wilimar',
'Will',
'Willie',
'Wiseman',
'Wulf',
'Yavanna',
'Yávien',
'Zamîn',
'Zimrahin'
];

gen_data['tor_surname'] = [
'Appledore',
'Baggins',
'Banks',
'Boffin',
'Bolger',
'Bombadil',
'Bowman',
'Bracegirdle',
'Brandybuck',
'Brockhouse',
'Brown',
'Brownlock',
'Bunce',
'Burrows',
'Butterbur',
'Chubb-Baggins',
'Chubb',
'Clayhanger',
'Cotton',
'Cúthalion',
'Diggle',
'Elessar',
'Erchamion',
'Fairbairn',
'Ferny',
'Gamgee',
'Gammidge',
'Gamwich',
'Gardner',
'Goatleaf',
'Goldworthy',
'Goodbody',
'Goodchild',
'Goodenough',
'Goold',
'Greenhand',
'Grubb',
'Hammerhand',
'Hayward',
'Headstrong',
'Heathertoes',
'Hildeson',
'Hornblower',
'Inglorion',
'Lightfoot',
'Lórindol',
'Lumpkin',
'Maggot',
'Oakenshield',
'of Gamwich',
'of the Fountain',
'of the {settlement}',
'Proudfoot',
'Roper',
'Sackville-Baggins',
'Sackville',
'Sandyman',
'Smallburrow',
'Steelsheen',
'Stonehelm',
'the {color}',
'the {tor_archetype}',
'the Younger',
'the Older',
'Therindë',
'Took',
'Turambar',
'Voronwë',
'Whitfoot',
'Wormtongue',
'Zirak',
];

gen_data['tor_archetype'] = [
'animal handler',
'arborist',
'baler',
'beekeeper',
'breeder',
'cowherd',
'dairy worker',
'falconer',
'farmer',
'fisher',
'florist',
'forager',
'forester',
'fowler',
'gamekeeper',
'groom',
'herder',
'horse trainer',
'hunter',
'lumberjack',
'horse rider',
'hound trainer',
'miller',
'miner',
'pathfinder',
'plumer',
'prospector',
'ranger',
'renderer',
'shepherd',
'stablehand',
'thresher',
'trapper',
'vintner',
'zookeeper',
'architect',
'brickmaker',
'brickmason',
'carpenter',
'glazier',
'plasterer',
'roadlayer',
'thatcher',
'stonemason',
'acrobat',
'actor',
'aerialist',
'arranger',
'athlete',
'busker',
'celebrity',
'chef',
'choir trainer',
'clown',
'comedian',
'conductor',
'contortionist',
'curator',
'costumer',
'dancer',
'equilibrist',
'crofter',
'gladiator',
'glasspainter',
'jester',
'juggler',
'illuminator',
'limner',
'makeup artist',
'minstrel',
'model',
'musician',
'painter',
'playwright',
'poet',
'ringleader',
'ropewalker',
'sculptor',
'singer/soprano',
'skald',
'stage magician',
'tumbler',
'tattooist',
'theater director',
'wrestler',
'writer',
'accountant',
'actuary',
'animal collector/monster collector',
'business owner',
'debt collector',
'draper',
'appraiser',
'auctioneer',
'banker',
'bagniokeeper',
'bookkeeper',
'chandler',
'collector',
'entrepreneur',
'grocer',
'guild leader',
'innkeeper',
'land surveyor',
'merchant',
'moneychanger',
'moneylender',
'peddler',
'pimp/madame',
'plantation owner',
'speculator',
'thriftdealer',
'tradesperson',
'vendor',
'billboardposter',
'courier',
'herald',
'interpreter',
'linguist',
'messenger',
'town crier',
'translator',
'accoutrementer/coinsmith',
'armorer',
'blacksmith',
'bladesmith',
'bookbinder',
'bottler',
'bowyer',
'brewer',
'broom maker',
'candlemaker',
'cartwright',
'cobbler',
'cooper/hooper',
'cutler',
'dyer',
'embroiderer',
'engraver',
'farrier',
'fletcher',
'furniture artisan',
'furrier',
'glassworker',
'glovemaker',
'goldsmith/silversmith',
'hatter/milliner',
'instrument maker',
'lapidary',
'leatherworker',
'jeweler',
'locksmith',
'luthier',
'mercer',
'optician',
'potter',
'printer',
'restorer',
'ropemaker',
'rugmaker',
'saddler',
'seamstress/tailor',
'soaper',
'tanner',
'taxidermist',
'tinker',
'toymaker',
'watchmaker',
'weaponsmith',
'weaver',
'wheelwright',
'whittler/woodcarver',
'assassin',
'bandit',
'burglar',
'charlatan',
'gamefighter',
'crime boss',
'cutpurse',
'drug dealer',
'drug lord',
'extortioner',
'fence',
'forger',
'fugitive',
'highway robber',
'kidnapper',
'loan shark',
'pirate',
'poacher',
'poisoner',
'raider/marauder',
'smuggler',
'thief',
'affeeror',
'agister',
'alderperson',
'alienist',
'assayer',
'baron/baroness',
'chancellor',
'chief',
'conservationist',
'count',
'earl',
'jarl',
'courtier',
'diplomat',
'duke/duchess',
'emperor/empress',
'judge',
'king/queen',
'knight',
'person-in-waiting',
'lawyer/advocate',
'marquess/marchioness',
'treasurer',
'revel-leader',
'minister',
'noble',
'aristocrat',
'notary',
'orator',
'page',
'noble heir',
'senator',
'sheriff',
'spy chief',
'steward',
'squire',
'tax collector',
'viscount/viscountess',
'ward',
'acater',
'tunner',
'baker',
'barber',
'barkeep',
'barmaid/barboy',
'butcher',
'butler',
'caregiver',
'charcoal maker',
'majordomo',
'chimney sweep',
'clerk',
'cook',
'copyist',
'croupier',
'exterminator',
'food & drink taster',
'gardener/landscaper',
'gongfarmer',
'gravedigger',
'groundskeeper',
'kitchen drudge',
'knacker',
'lamplighter',
'laundry worker',
'lector',
'longshore worker',
'maid',
'nanny/nursemaid',
'operator',
'pastry chef',
'plumber',
'porter',
'courtesan',
'quarryperson',
'servant',
'stagehand',
'street cleaner',
'talent scout',
'trainer',
'water bearer',
'abjurer',
'alchemist',
'archmage',
'artificer',
'bard',
'conjuror',
'druid',
'elementalist',
'enchanter',
'evoker',
'healer',
'hearth sage',
'illusionist',
'medium',
'meteorologist',
'necromancer',
'ritualist',
'runecaster',
'sage',
'seer/oracle',
'animist',
'shapeshifter',
'sorcerer/sorceress',
'summoner',
'transmuter',
'warlock',
'witchdoctor',
'witch',
'wordsmith',
'admiral',
'bailiff',
'bodyguard',
'bouncer',
'captain',
'castellan',
'cavalier',
'city watch',
'commissar',
'constable',
'detective/investigator',
'drummer/fifer',
'duelist',
'executioner',
'firefighter',
'guard/sentinel',
'general',
'inspection officer',
'intelligence officer',
'jailer',
'lieutenant',
'archer',
'marshall',
'medic',
'mercenary',
'privateer',
'supply chief',
'royal guard',
'runner',
'sapper',
'sergeant',
'sergeant-at-arms',
'scout',
'siege artillerist',
'slave driver',
'soldier',
'spy',
'tactician',
'tollkeeper',
'torturer',
'warden',
'warmage',
'abbot/abbess',
'acolyte',
'almoner',
'archbishop',
'bishop',
'cantor',
'cardinal',
'chaplain',
'cleric',
'confessor',
'cultist',
'cult leader',
'deacon',
'diviner',
'exorcist',
'high priest',
'inquisitor',
'pardoner',
'prophet',
'sexton',
'templar',
'abecedarian',
'midwife',
'anthropologist',
'apothecary',
'apprentice',
'archaeologist',
'archivist',
'assayer',
'astrologer',
'astronomer',
'bloodletter',
'botanist',
'cartographer',
'chemist',
'dean',
'physician',
'engineer',
'entomologist',
'herbalist',
'historian',
'horologist',
'librarian',
'mathematician',
'mortician',
'nurse',
'optometrist',
'philosopher',
'professor',
'scholar',
'scribe',
'student',
'surgeon',
'taxonomist',
'teacher',
'tutor',
'veterinarian',
'zoologist',
'navigator',
'bosun',
'wagoner',
'cabin child',
'caravaneer',
'charioteer',
'carter',
'ferryperson',
'first mate',
'helmsperson',
'navigator',
'purser',
'sailor',
'sea captain',
'shipwright',
'adventurer',
'beggar/pauper',
'monster hunter',
'bounty hunter',
'crossing sweeper',
'deserter',
'disgraced noble',
'drunkard',
'delver',
'elder',
'exile',
'explorer',
'folk hero',
'gambler',
'grave robber/tomb raider',
'heretic',
'hermit',
'housekeeper',
'pilgrim',
'prisoner',
'rag',
'dissident',
'refugee',
'runaway slave',
'scavenger',
'slave',
'squatter',
'traveler',
'wanderer',
'vagabond',
'urchin'
  ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
