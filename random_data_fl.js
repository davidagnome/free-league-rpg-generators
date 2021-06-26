// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// random_data_fl.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

gen_data['fl_adventure_site_type'] = {
  '1-2': 'This village is {fl_village_size}. Formed {fl_site_age}, it is led by {fl_village_ruler_type}. Facing threats from {fl_village_problem}, it is nonetheless known for its {fl_village_fame} and {fl_village_oddity}.',
  '3-4': 'Founded {fl_site_age}, this {fl_dungeon_size} dungeon was originally a {fl_dungeon_purpose}. {fl_dungeon_builder}.',
  '5-6': 'This city is (still being implemented)'
};

gen_data['fl_village_size'] = {
  '1-2': 'an oupost of 5-20 inhabitants. It features {fl_village_institution}',
  '3-4': 'a hamlet of 20-100 inhabitants. It features {fl_village_institution}, {fl_village_institution}, and {fl_village_institution}',
  '5-6': 'a town of 100-400 inhabitants. It features {fl_village_institution}, {fl_village_institution}, {fl_village_institution}, {fl_village_institution}, {fl_village_institution}, {fl_village_institution}, and {fl_village_institution}'
};

gen_data['fl_dungeon_size'] = {
  '1-2': 'small',
  '3-4': 'average',
  '5': 'large',
  '6': 'huge'
};

gen_data['fl_dungeon_purpose'] = {
  '1-4': 'Temple',
  '5-14': 'Stronghold',
  '15-26': 'Living Area',
  '27-31': 'Hiding Place',
  '32-39': 'Mine',
  '40-42': 'Prison',
  '43-52': 'Tomb'
};

gen_data['fl_dungeon_builder'] = {
  '1-3': 'No one built it. It naturally formed',
  '4-5': 'Elves crafted it for {fl_dungeon_why}',
  '6-14': 'Dwarves forged it for {fl_dungeon_why}',
  '15-16': 'Orcs conquered it out as {fl_dungeon_why}',
  '17-18': 'Priests summoned it in {fl_dungeon_why}',
  '19-21': 'Cults indoctrinated people there out of {fl_dungeon_why}',
  '22-30': 'A Sorceror studied here out of {fl_dungeon_why}',
  '31-33': 'Warrior founded it for {fl_dungeon_why}',
  '34-44': 'Noble desired it for {fl_dungeon_why}',
  '45-48': 'A Bandit Chief, out of {fl_dungeon_why}, built it',
  '49-50': 'Demon summoned it in {fl_dungeon_why}'
};

gen_data['fl_dungeon_why'] = {
  '1-2': 'vengeance',
  '3-10': 'greed',
  '11-12': 'fear',
  '13-14': 'faith',
  '15-17': 'a gift',
  '18-24': 'loneliness',
  '25-27': 'a monument',
  '28-38': 'might',
  '39-43': 'survival',
  '44-45': 'passion'
};

gen_data['fl_site_age'] = {
  '1-4': 'before the Shift, over 1,100 years ago',
  '5-8': 'before the Blood Mist, some 300-1,100 years ago',
  '8-12': 'during the Alder Wars, some 305-360 years ago',
  '13-44': 'during the Blood Mist, 5-280 years ago',
  '43-48': 'after the Bloood Mist, {d6} years ago'
};

gen_data['fl_village_ruler_oddity'] =  {
  '1-3': 'bickering',
  '4-6': 'cruel',
  '7-9': 'weak',
  '10-12': 'greedy',
  '13-15': 'wise',
  '16-18': 'eccentric',
  '19-21': 'confused',
  '22-24': 'brutal',
  '25-27': 'cunning',
  '28-30': 'stern',
  '31-33': 'secretive',
  '34-36': 'drunkard'
};

gen_data['fl_village_ruler_type'] =  {
  '1-3': 'the {fl_village_ruler_oddity} Council',
  '4-6': 'a {fl_village_ruler_oddity} Despot',
  '7-9': 'a {fl_village_ruler_oddity} Elder',
  '10-12': 'a {fl_village_ruler_oddity} Mayor',
  '13-15': 'a {fl_village_ruler_oddity} Druid',
  '16-18': 'a {fl_village_ruler_oddity} Sorcerer',
  '19-21': 'no one',
  '22-24': 'a {fl_village_ruler_oddity}Commander',
  '25-27': 'a {fl_village_ruler_oddity} Trader',
  '28-30': 'a {fl_village_ruler_oddity} Rust Brother',
  '31-33': 'a {fl_village_ruler_oddity} Artisan',
  '34-36': 'a {fl_village_ruler_oddity} Bandit Chief'
};

gen_data['fl_village_problem'] =  {
  '1-3': 'Nightwargs',
  '4-6': 'widespread drunkenness',
  '7-9': 'a power struggle',
  '10-12': 'a secret cult',
  '13-15': 'a schism',
  '16-18': 'Undead',
  '19-21': 'disease',
  '22-24': 'a sinkhole',
  '25-27': 'bandits',
  '28-30': 'a terrorizing monster',
  '31-33': 'the slave trade',
  '34-36': 'a haunting by Ghouls or Ghosts'
};

gen_data['fl_village_fame'] =  {
  '1-3': 'excellent wine',
  '4-6': 'delicious bread',
  '7-9': 'craftsmanship',
  '10-12': 'beautiful location',
  '13-15': 'horrible massacre',
  '16-18': 'decadence',
  '19-21': 'well-brewed beer',
  '22-24': 'hidden riches',
  '25-27': 'strange disappearances',
  '28-30': 'worshipping demons',
  '31-33': 'suspicion of strangers',
  '34-36': 'hospitality'
};

gen_data['fl_village_oddity'] =  {
  '1-3': 'eccentric clothing',
  '4-5': 'incomprehensible accent',
  '6-11': 'bad smell',
  '12-13': 'full of flowers',
  '14-15': 'mud',
  '16-21': 'old building materials',
  '22': 'tent village',
  '23-24': 'being built on a steep hill',
  '25': 'old tower in the middle',
  '26': 'grand building',
  '27-28': 'windiness',
  '29': 'inbreeding',
  '30-31': 'strange eating habits',
  '32-37': 'being built on marshland',
  '38': 'being cut out of a cliff',
  '39-40': 'old burial site',
  '41-42': 'wandering cattle',
  '42-44': 'mostly female inhabitants',
  '45-46': 'alliance with a monster',
  '47-48': 'preparations for a wedding'
};

gen_data['fl_village_institution'] =  {
  '1-3': 'nothing',
  '4-6': 'an inn',
  '7-9': 'a mill',
  '10-12': 'a smith',
  '13-15': 'a forester',
  '16-18': 'a trading post',
  '19-21': 'a temple',
  '22-24': 'a militia',
  '25-27': 'a tavern',
  '28-30': 'a stable',
  '31-33': 'a smith',
  '34-36': 'a militia'
};

gen_data['fl_inn'] =  [
  'The {fl_inn_first_word} {fl_inn_second_word} serves {fl_inn_specialty}. {fl_inn_oddity}. A {fl_inn_guest} sits in the darkest corner.'
];

gen_data['fl_inn_first_word'] =  [
  'Third',
  'Little',
  'Red',
  'Misty',
  'Bloody',
  'Old',
  'Golden',
  'Cold',
  'Refreshing',
  'Good',
  'Second',
  'Last',
  'Prancing',
  'Happy',
  'Singing',
  'Rolling',
  'Rumping',
  'Wailing',
  'Greedy',
  'Round',
  'Flaming',
  'Last',
  'Silver',
  'Black',
  'Dead',
  'Big',
  'Roaring',
  'Cheering',
  'Humming',
  'Meagre',
  'Fat',
  'Thick',
  'Round',
  'Boisterous',
  'Sweet',
  'Grumpy'
];
gen_data['fl_inn_second_word'] =  [
  'Latern',
  'Swine',
  'Wheel',
  'Stoop',
  'Sparrow',
  'Goat',
  'Arrow',
  'Pot',
  'Lamb',
  'Maid',
  'Man',
  'Dragon',
  'Griffin',
  'Boar',
  'Barrel',
  'Bard',
  'Dog',
  'Horse',
  'Girl',
  'Wolf',
  'Bear',
  'Ghost',
  'Rat',
  'Jar',
  'Mug',
  'Goblet',
  'Eagle',
  'Raven',
  'Hammer',
  'Spike',
  'Crow',
  'Druid',
  'Knight',
  'Bandit',
  'Wild Boar',
  'Hunter'
];
gen_data['fl_inn_specialty'] =  [
  'cheap, diluted beer',
  'meat stew',
  'grilled rodents',
  'stewed turnips',
  'salt bird',
  'blood soup',
  'fiery spice wine',
  'roasted piglet',
  'swamp stew',
  'vegetable mush',
  'salted fish',
  'cooked crow',
  'bear stew',
  'strong, Dwarven ale'
];

gen_data['fl_inn_guest'] =  [
  'escaped criminal',
  'unhappy farmer',
  'scarred treasure hunter',
  'dirty and sullen hunter',
  'Silent Raven sister',
  'noisy bandit',
  'old war veteran',
  'noble in disguise',
  'secretive spellbinder',
  'annoying jester',
  'dusty traveller',
  'hungry dwarf',
  'frosty elf',
  'scouting thief'
];

gen_data['fl_inn_oddity'] =  [
  'Violence is in the air',
  'Barrels are used instead of chairs, planks instead of tables',
  'A big fireplace sits along the far wall',
  'Pelts line the walls',
  'A long, communal table sits in the center',
  'In the back is gambling den',
  'A mediocre bard sings',
  'A very nice dog rests by the hearth',
  'A monster head rests on the wall above the bar',
  'The barkeep sings a traditional tune',
  'The stomped floor is packed in places',
  'A birthday party is happening in one corner',
  'The grumpy owner looks up as you enter',
  'Drunk adventurers carouse the wait staff'
];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -