// Author: Branko Van Tendeloo


/* ====== Data ======= */
// Prompts
const prompts = [
    "%human%'s animal form",
    "a %nonHuman% gijinka",
    "%character% from memory",
    "the %character% x %character% ship",
    "a %sapient% and %sapient% fusion",
    "%sapient% with a pet %animalAndCharacter%",
    "%sapient% is wanted by the police",
    "%sapient% in a %food% eating contest",
    "%sapient% wants %character% dead",
    "the evilest version of %sapient%",
    "%sapient% will never forgive %character% for what they did",
    "%sapient% was eating %foodA% before rudely being interrupted by %sapient%",
    "%sapient% absolutely hates %objects%",
    "you do not want to know %sapient%'s opinion on %objects%",
    "Presidential alert, the girls are %verb%",
    "why is %sapient% %verb%?",
    "%sapient%'s %significantOther% really likes their %object%",
    "%sapient% is eating %foodA% out of %objectNoFoodSingularA%",
    "%sapient% will never eat %foodA% ever again after this moment",
    "%sapient% thinking about their childhood %objectNoFood% in their dying moments",
    "%sapient% is %verb%, but only %sapient% seems to care",
    "finally, %sapient% is announced for Smash!",
    "%sapient% has finally found the %adjectiveGreat% %object%",
    "%sapient% thought they found the %adjectiveGreat% %object%, but it was actually %adjectiveTerrible%",
    "the battle was decided long ago, when %sapient% got their hands on the %adjectiveExtreme% %object%",
    "%sapient% wearing %fashion% clothing",
    "%sapient% with a %fashion% %clothes%",
    "%sapient% and %sapient% are chilling in %place%",
    "%sapient% is %verb% in %place%",
    "%sapient% sees %objectA% for the first time",
    "%character%, but (extra) %adjective%",
    "%sapient% doing a closet cosplay of %character%",
    "%sapient% staring in a %holiday% special",
    "%sapient% demands a %holiday% vacation from their boss %sapient%"
];

// Entries
const aceAttorney = ["Phoenix Wright", "Apollo Justice", "Miles Edgeworth", "Manfred von Karma", "Winston Payne", "Franziska von Karma", "Larry Butz", "Maya Fey"];
const activity = ["fighting", "chilling", "resting", "doing the macarena", "dancing", "singing", "running", "crying", "jamming", "stealing stuff", "sleeping", "dying", "kissing", "hugging", "cuddling"];
const adjectiveGreat = ["great", "epic", "graceful", "sacred", "worthy", "holy", "pure", "perfect", "master", "heavenly", "golden", "silver"];
const adjectiveNegative = ["bad", "cringe", "sweaty", "disappointing", "unworthy", "ugly", "mean", "unpleasant", "obnoxious", "annoying", "stinky", "dumb", "idiotic", "underwhelming", "overwhelming"];
const adjectiveNeutral = ["new", "long", "short", "hot"]
const adjectivePositive = ["good", "cute", "nice", "funny", "pleasant", "beautiful", "pretty", "handsome"];
const adjectiveTerrible = ["terrible", "rancid", "irredeemable", "unforgivable", "sinful", "dire", "disgraceful", "horrible", "unholy", "cursed", "devilish", "satanic", "hellish", "rotten", "infernal"];
const animalCrossing = ["Tom Nook", "Timmy Nook", "Tommy Nook", "Raymond (Animal Crossing)", "Ankha (Animal Crossing)"];
const appliances = ["air fryer", "phone", "flip phone", "floppy disc", "landline", "kitchen robot", "mixer", "blender", "book", "laptop", "computer", "TV", "spork", "spoon", "knife", "fork", "frying pan"];
const biome = ["forest", "desert", "bog", "lake", "beach", "river", "ocean", "meadow", "savannah"];
const breakingBad = ["Walter White", "Skyler White", "Jesse Pinkman", "Gustavo Fring", "Hank Schrader"];
const celeb = ["Keanu Reeves", "Moses", "Lin-Manuel Miranda", "Jason Derulo", "Patrick Warburton", "Jaiden Animations", "Rubber Ross", "Markiplier", "Satan", "God", "the Pope", "Mr Beast", "Rowan Atkinson", "Gandhi", "Daniel Radcliffe", "Emma Watson", "Johnny Depp", "Sean Connery", "Angelina Jolie", "Jason Momoa", "Jim Carrey", "Orlando Bloom", "Jesus", "Steve Jobs", "Morgan Freeman", "Scarlett Johansson", "Owen Wilson", "Elliot Page", "Richard Nixon", "the Rock", "John Cena", "Danny DeVito", "Jack Black", "Jeff Bezos", "Bill Gates", "Barack Obama"];
const chainsawMan = ["Makima", "Power (Chainsaw Man)", "Denji (Chainsaw Man)"];
const clothing = ["skirt", "jacket", "belt", "cap", "hat", "coat", "glove", "waistcoat", "boot", "bikini", "shoe", "tophat", "pantaloon", "ring", "speedo", "bracelet", "hoodie", "sweater", "bowtie", "tie", "T-shirt", "shirt", "dress", "poncho"];
const clothingNoPlural = ["pants", "trousers", "swimming trunks", "high heels", "pajamas", "shorts", "glasses", "boxer shorts", "knickers", "thigh highs"];
const digimon = ["Agumon", "Soulmon", "Beelzemon"];
const dinosaur = ["tyrannosaurus rex", "stegosaurus", "velociraptor", "triceratops", "brontosaurus"];
const disneyOG = ["Snow White", "Peter Pan", "Pinocchio", "Maleficent", "Mowgli (Jungle Book)", "Cinderella", "Alice (Alice in Wonderland)"];
const disneyOGAnimal = ["Dumbo", "Bambi", "Bambi's mother", "Baloo (Jungle Book)"];
const disneyPostGold = ["Lilo (Lilo and Stitch)", "Moana", "Maui (Moana)", "Rapunzel", "Elsa (Frozen)", "Wreck-It Ralph", "Fix-It Felix (Wreck-It Ralph)"];
const disneyPostGoldAnimal = ["Stitch (Lilo and Stitch)", "Nick Wilde (Zootopia)", "Judy Hopps (Zootopia)", "Chicken Little", "Olaf (Frozen)"];
const disneyRenaissance = ["The Little Mermaid", "Ursula (The Little Mermaid)", "Mulan", "Tarzan", "Quasimodo (The Hunchback of Notre Dame)", "Frollo (The Hunchback of Notre Dame)", "Aladdin", "Jafar (Aladdin)", "Genie (Aladdin)", "Jasmine (Aladdin)", "Gaston (Beauty and the Beast)", "Belle (Beauty and the Beast)"];
const disneyRenaissanceNonHuman = ["Simba (The Lion King)", "Mufasa (The Lion King)", "Timon (The Lion King)", "Pumbaa (The Lion King)", "Scar (The Lion King)", "Beast (Beauty and the Beast)"];
const dragonBallZ = ["Goku", "Bulma", "Vegeta", "Trunks"];
const dragonBallZNonHuman = ["Piccolo", "Frieza"];
const drawfeeAnimal = ["Joy Cat", "Miss Olive"];
const drawfeeHumanCharacter = ["Schmidt", "Nando", "Fern (Jacob)", "Luce", "Porfo", "Spheal (Julia)"];
const drawfeeNonHumanCharacter = ["Todd from Mario", "Jacob horse", "Burgoo King"]
const drawfeeFictionalAnimal = ["Pissboy", "Todd from Mario"];
const drawfeeHost = ["Nathan", "Jacob", "Karina", "Julia", "David"];
const drawtectives = ["Grandan Highforge", "York Rogdul", "Rosé (Drawtectives)", "Jancy True", "Eugene Finch", "Don Jovi", "Kingston Munch", "Villainius", "Harper Justice", "Ogalvy Smythe", "Lotta Justice", "Sorin Justice", "Emery Justice", "Harvey Hornswoggle"]
const dreamworks = ["Shrek", "Megamind", "The Boss Baby", "Captain Underpants", "Hiccup (How to Train Your Dragon)", "Astrid (How to Train Your Dragon)", "Fiona (Shrek)", "Prince Charming (Shrek)", "Wallace (Wallace & Gromit)"]
const dreamworksAnimal = ["Puss In Boots", "Toothless (How to Train Your Dragon)", "Master Oogway (Kung Fu Panda)", "Master Shi-Fu (Kung Fu Panda)", "Po (Kung Fu Panda)", "Barry B. Benson (Bee Movie)", "Donkey (Shrek)", "Dragon (Shrek)", "Gromit (Wallace & Gromit)"];
const entertainmentPlace = ["theme park", "zoo", "aviary", "botanical garden", "park", "port", "library", "arcade", "circus", "carnival", "Renaissance fair"];
const extinctAnimal = ["mammoth", "dodo", "saber-tooth tiger", ...dinosaur];
const fashion = ["goth", "queer", "bad", "Renaissance", "wild west", "swimwear", "vintage", "antique", "superhero", "summer", "skater", "surfer", "winter", "villainous", "rock", "sexy", "streetwear", "sportswear", "nerdy", "nighttime", "grunge", "Roman", "minimalist", "modern", "military", "kawaii", "maternal", "Spartan", "operatic", "casual", "vintage", "flamboyant", "hippie", "tomboy", "punk", "biker", "dieselpunks", "solarpunk", "cyberpunk", "steampunk", "business-casual", "professional", "femme", "butch", "drag queen", "80s", "monochrome", "colourful", "pompous", "90s", "2000s", "1930s", "1920s", "70s", "Victorian", "Elizabethan"]
const familyGuy = ["Peter Griffin", "Lois Griffin", "Meg Griffin", "Chris Griffin"];
const fruit = ["dragon fruit", "blackberry", "raspberry", "pomegranate", "cherry", "pineapple", "blueberry", "strawberry", "mango", "kiwi", "plum", "tomato", "apple", "pear", "banana", "orange", "grape", "melon"];
const furniture = ["closet", "fridge", "freezer", "oven", "microwave", "furnace", "sink", "fireplace", "dishwasher", "cupboard", "sofa", "night stand", "bed", "love seat", "desk", "chair", "bookcase", "barbeque"];
const groupOfCharacters = ["room full of vampires", "the Teletubbies"];
const hannaBarbera = ["Yogi Bear", "Scooby-Doo", "Augie Doggie", "Doggie Daddy"];
const hannaBarberaHuman = ["Fred Flintstone", "George Jetson", "Captain Caveman"];
const holiday = ["Christmas", "pride month", "International Woman's Day", "New Year's Eve", "anniversary for Cats (2019)'s release", "Thanksgiving", "Halloween", "Easter"];
const kaiju = ["Godzilla", "King Kong", "Mothra"];
const looneyTune = ["Bugs Bunny", "Marvin the Martian", "Daffy Duck", "Porky Pig", "Tweety Bird", "Silvester (Loony Tunes)", "Wile E. Coyote", "Road Runner"];
const macguffin = ["the Ring (Lord of the Rings)", "the One Piece", "the Dragon Balls", "the Triforce"];
const mario = ["Mario", "Luigi", "Toad", "Waluigi", "Wario", "Bowser", "Princess Peach", "Princess Daisy", "Princess Rosalina"];
const marioAnimal = ["Boo (Mario)", "Koopa", "Donkey Kong", "Diddy Kong", "Yoshi (Mario)"];
const meal = ["egg", "hot dog", "Slim Jim", "bagel", "sandwich", "pancake"];
const mealNoPlural = ["spaghetti", "lasagne", "bread", "pizza", "beef", "pork", "fries/chips", "fish 'n' chips"];
const mickeyMouse = ["Mickey Mouse", "Minnie Mouse", "Daisy Duck", "Pete (Mickey Mouse)", "Max Goof", "Donald Duck", "Goofy"];
const muppet = ["Elmo", "Rizzo the Rat", "Cookie Monster", "Fozzie Bear", "Gonzo", "Beaker (Muppets)", "Big Bird (Sesame Street)", "Kermit the Frog", "Miss Piggy", "Animal (Muppets)", "Bert (Sesame Street)", "Ernie (Sesame Street)"]
const mythicalAnimal = ["dragon", "hydra", "minotaur", "chimera", "unicorn", "pegasus", "griffin", "hippogriff", "phoenix", "kraken"];
const naturalFeature = ["tree", "volcano", "stream", "crater", "mud pool", "landslide", "cave", "pit", "tornado", "storm"]
const pokemon = ["Spheal (Pokémon)", "Bulbasaur", "Pikachu", "Blastoise", "Swampert", "Mr Mime", "Sprigatito", "Eevee", "Charizard", "Venusaur", "Snorlax"];
const room = ["garden", "nursery", "bathroom", "garage", "yard", "basement", "attic", "office", "toy room", "bedroom", "kitchen", "living room", "gym", "observatory", "lavatory"];
const scoobyDoo = ["Shaggy (Scooby-Doo)", "Velma (Scooby-Doo)", "Daphne (Scooby-Doo)", "Fred (Scooby-Doo)"];
const significantOther = ["wife", "husband", "spouse", "boyfriend", "girlfriend", "partner"];
const simpsons = ["Bart Simpson", "Lisa Simpson", "Homer Simpson", "Marge Simpson", "Maggie Simpson", "Krusty the Clown", "Milhouse", "Mr Burns", "Ned Flanders"];
const skill = ["boxing", "cleaning", "baking", "cooking", "painting", "drawing", "writing", "working out", "playing violin", "playing the sax", "playing the piano", "playing rugby", "playing american football", "playing soccer", "skiing", "tennising", "doing arts and crafts", "playing the guitar"];
const sonic = ["Sonic", "Tails", "Shadow the Hedgehog", "Silver the Hedgehog", "Jet the Hawk", "Charmy Bee", "Big the Cat", "Blaze the Cat", "Espio the Chameleon", "Amy Rose", "Knuckles the Echidna", "Cream the Rabbit", "Vector the Alligator"];
const spongebob = ["Spongebob Squarepants", "Squidward Tentacles", "Patrick Star", "Pearl Krabs", "K.A.R.E.N. (Spongebob)", "Mrs Puff (Spongebob)", "Larry the Lobster", "Sandy Cheeks", "Plankton (Spongebob)", "Gary (Spongebob)", "Squilliam Fancyson", "Eugene Krabs"];
const starTrek = ["Spock", "Captain Kirk (Star Trek)", "Picard (Star Trek)"];
const serviceBuilding = ["police headquarters", "airport", "train station", "tram station", "bus station", "elder home", "kindergarten", "university", "private school", "school", "high school", "elementary school", "prison", "hospital", "fire department", "doctor's office"];
const superHero = ["Deadpool", "Ant Man", "Robin (Batman)", "Bat Girl", "Spider-Man", "Iron Man", "Mr Incredible", "Elastigirl", "Frozone", "Captain America", "Batman", "Wonder Woman", "Superman", "Black Widow"];
const superVillain = ["the Joker", "Thanos", "Mysterio", "the Riddler", "Two-Face", "Harley Quinn", "Poison Ivy", "the Penguin (Batman)", "Mr Freeze"]
const sweet = ["Mars bar", "ice cream"];
const sweetNoPlural = ["chocolate", "candy", "chips/crisps"];
const transport = ["airplane", "car", "bike", "motorbike", "boat", "container ship", "train", "subway", "helicopter", "truck", "scooter", "bus", "yacht", "hovercraft", "ferry", "rocket", "zeppelin", "hot air balloon", "gondola", "tram"];
const urbanFeature = ["house", "windmill", "village", "city", "mosque", "cathedral", "church", "nature reserve", "factory", "hotel", "b&b", "pub", "bar", "restaurant", "pool", "apartment", "tent", "shed", "cottage"];
const vegetable = ["potato", "sugar beet", "beet", "onion", "cucumber", "pickle", "egg plant", "carrot"];
const vegetableNoPlural = ["lettuce", "broccoli", "cauliflower", "spinach", "peas", "garlic"];
const weapon = ["gun", "sword", "katana", "shotgun", "revolver", "pistol", "cannon", "rifle", "trident", "spear", "bow"];
const weaponNoPlural = ["sulphuric acid", "formic acid", "poison", "venom"];
const winnieThePoo = ["Winnie the Poo", "Ior (Winnie the Poo)", "Tigger", "Piglet (Winnie the Poo)"];
const zelda = ["Ganondorf", "Link", "Zelda", "Tingle"];

const animal = ["lion", "barracuda", "ox", "badger", "moose", "slug", "parrot", "kiwi (animal)", "snail", "horseshoe crab", "puffin", "cobra", "rattle snake", "owl", "bumblebee", "wasp", "bee", "mosquito", "daddy long-legs", "dog", "shrimp", "panther", "salamander", "chihuahua", "bat", "goldfish", "pufferfish", "frog", "alpaca", "beagle", "German shepherd", "pitbull", "duck", "swan", "goose", "bison", "llama", "mule", "donkey", "horse", "naked mole rat", "jaguar", "ladybug", "whale", "walrus", "seal", "blob fish", "coral", "chimp", "polar bear", "kangaroo", "spider", "butterfly", "ostrich", "emu", "cat", "fish", "jellyfish", "crab", "pigeon", "ape", "iguana", "lizard", "tortoise", "bird", "eagle", "hawk", "squid", "octopus", "sea star", "ferret", "mouse", "rat", "opossum", "cow", "sheep", "pig", "turtle", "shark", "tiger", "elephant", "giraffe", "zebra", "bear", "monkey", "penguin", "dolphin", "koala", "panda", "hippopotamus", "wolf", "deer", "rabbit", "fox", "cheetah", "rhinoceros", "gorilla", "squirrel", ...extinctAnimal, ...mythicalAnimal];

const miscHuman = ["Jon Arbuckle", "Tintin", "Captain Haddock (Tintin)", "Shaggy (Scooby-Doo)", "Gargamel (The Smurfs)", "Aang (Avatar)", "Beelzebub", "Castiel (Supernatural)", "Dean (Supernatural)", "the Onceler", "Indiana Jones", "Dr Eggman", "James Bond", "Mr Bean", "Santa Claus", "Captain Jack Sparrow", "the Doctor (Doctor Who)", "Charlie Brown", "Christopher Robin", "Popeye the Sailor Man"];
const miscNonHuman = ["Garfield", "Papa Smurf", "Smurfette", "Tom (Tom and Jerry)", "Scooby-Doo", "Zim (Invader Zim)", "Jerry (Tom and Jerry)", "Bojack Horseman", "Ponygon", "the Grinch", "the Lorax", "Odie (Garfield)", "Nermal (Garfield)", "Snoopy", "Brian Griffin"];
const miscAnime = ["One-Punch Man", "Light Yagami", "Naruto Uzumaki", "Sasuke Uchiha"];
const miscAnimeNonHuman = ["Ryuk", "Pochita"];
const miscNintendo = ["Olimar", "Samus Aren"];
const miscNintendoAnimal = ["Ridley (Metroid)"];


const drawfeeCharacter = [...drawtectives, ...drawfeeFictionalAnimal, ...drawfeeHumanCharacter, ...drawfeeNonHumanCharacter];
const drawfee = [...drawfeeHost, ...drawfeeAnimal, ...drawfeeCharacter];
const disneyAnimal = [...winnieThePoo, ...mickeyMouse, ...disneyPostGoldAnimal, ...disneyRenaissanceNonHuman, ...disneyOGAnimal];
const disneyHuman = [...disneyRenaissance, ...disneyOG, ...disneyPostGold];
const disney = [...disneyHuman, ...disneyAnimal];
const animeHuman = [...miscAnime, ...chainsawMan, ...dragonBallZ];
const animeNonHuman = [...miscAnimeNonHuman, ...dragonBallZNonHuman];
const animeCharacter = [...animeHuman, ...animeNonHuman];
const nintendo = [...mario, ...zelda, ...miscNintendo, ...animalCrossing];
const nintendoAnimal = [...miscNintendoAnimal, ...marioAnimal, ...pokemon];
const humanCharacter = [...nintendo, ...scoobyDoo, ...hannaBarberaHuman, ...dreamworks, ...disneyHuman, ...drawfeeHumanCharacter, ...starTrek, ...animeHuman, ...miscHuman, ...familyGuy, ...aceAttorney, ...superHero, ...superVillain, ...simpsons, ...drawtectives, ...breakingBad];
const nonHumanCharacter = [...sonic, ...looneyTune, ...hannaBarbera, ...dreamworksAnimal, ...digimon, ...muppet, ...drawfeeNonHumanCharacter, ...animeNonHuman, ...miscNonHuman, ...kaiju, ...spongebob, ...drawfeeFictionalAnimal, ...nintendoAnimal, ...disneyAnimal];
const foodNoPlural = [...sweetNoPlural, ...mealNoPlural, ...vegetableNoPlural];
const foodPlural = [...fruit, ...sweet, ...meal, ...vegetable];
const food = [...foodPlural, ...foodNoPlural];
const housePart = [...furniture, ...appliances];
const clothes = [...clothing, ...clothingNoPlural]
const animalAndCharacter = [...animal, ...nonHumanCharacter];
const objectNoFoodPlural = [...transport, ...housePart, ...clothing, ...weapon];
const objectNoFoodNoPlural = [...clothingNoPlural, ...macguffin, ...weaponNoPlural];
const objectNoFoodSingular = [...objectNoFoodNoPlural, ...objectNoFoodNoPlural];
const objectNoPlural = [...foodNoPlural, ...objectNoFoodNoPlural];
const objectPlural = [...foodPlural, ...objectNoFoodPlural];
const object = [...objectPlural, ...objectNoPlural];
const adjectiveGood = [...adjectiveGreat, ...adjectivePositive];
const adjectiveBad = [...adjectiveTerrible, ...adjectiveNegative];
const adjectiveExtreme = [...adjectiveGood, ...adjectiveBad];
const adjectiveMild = [...adjectiveNegative, ...adjectivePositive];
const adjective = [...adjectiveExtreme, ...adjectiveMild, ...adjectiveNeutral];
const realHuman = [...drawfeeHost, ...celeb];
const human = [...realHuman, ...humanCharacter];
const character = [...humanCharacter, ...nonHumanCharacter];
const sapient = [...human, ...character];


const ownedPlace = [...room.map(addA)];
const publicPlace = [...urbanFeature.map(addA), ...naturalFeature.map(addA), ...serviceBuilding.map(addA), ...entertainmentPlace.map(addA), ...biome.map(addA)];
const place = [...ownedPlace, ...publicPlace];

const characters = [...character.map(pluralise), ...groupOfCharacters];
const sapients = [...human.map(pluralise), ...characters];
const objects = [...objectPlural.map(pluralise), ...objectNoPlural];
const objectA = [...object.map(addA)];
const objectNoFood = [...objectNoFoodPlural.map(pluralise), ...objectNoFoodNoPlural];
const foodA = [...foodNoPlural, ...foodPlural.map(addA)];
const objectNoFoodSingularA = [...objectNoFoodPlural.map(addA), ...objectNoFoodNoPlural];
const verb = [...activity, ...skill, ...adjective.map(addBeing)];


// Define the entries
const entries = {
    drawfeeHost: drawfeeHost,
    superHero: superHero,
    drawfee: drawfee,
    human: human,
    place: place,
    transport: transport,
    verb: verb,
    dinosaur: dinosaur,
    pokemon: pokemon,
    holiday: holiday,
    clothes: clothes,
    objectNoFoodSingular: objectNoFoodSingular,
    objectNoFoodSingularA: objectNoFoodSingularA,
    object: object,
    fashion: fashion,
    objectA: objectA,
    objects: objects,
    adjective: adjective,
    adjectiveExtreme: adjectiveExtreme,
    adjectiveMild: adjectiveMild,
    adjectiveGreat: adjectiveGreat,
    adjectiveTerrible: adjectiveTerrible,
    adjectiveBad: adjectiveBad,
    adjectiveGood: adjectiveGood,
    disney: disney,
    animeCharacter: animeCharacter,
    fruit: fruit,
    activity: activity,
    objectNoFood: objectNoFood,
    extinctAnimal: extinctAnimal,
    mythicalAnimal: mythicalAnimal,
    significantOther: significantOther,
    food: food,
    foodA: foodA,
    humanCharacter: humanCharacter,
    nonHumanCharacter: nonHumanCharacter,
    character: character,
    sapient: sapient,
    animalAndCharacter: animalAndCharacter,
    nonHuman: [...object, ...animal]
};


// Generate a random prompt
function generatePrompt() {
    // Select a random prompt
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    // Replace blanks with random entries
    return randomPrompt.replace(/%(\w+)%/g, (match, key) => {
        console.log("finding key " + key);
        const entriesForBlank = entries[key];
        return entriesForBlank[Math.floor(Math.random() * entriesForBlank.length)];
    });
}

function displayPrompt() {
    const promptText = document.getElementById('promptText');
    promptText.textContent = generatePrompt();


    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();

    console.log("displaying prompt")
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the button
    let newPromptButton = document.getElementById('newPromptButton');
    newPromptButton.addEventListener('click', displayPrompt);
});

// Function to pluralise a word
function pluralise(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lastLetter = word[word.length - 1];
    const secondToLastLetter = word[word.length - 2];
    console.log(vowels.includes(secondToLastLetter.toLowerCase()))
    if (lastLetter.toLowerCase() === 'y' && !vowels.includes(secondToLastLetter.toLowerCase())) {
        return word.substring(0, word.length - 1) + 'ies'; // Swap "y" to "ies"
    } else if (lastLetter.toLowerCase() === 's') {
        return word + 'es'; // Word already ends in "s", no change needed
    } else {
        return word + 's'; // Add an "s" to the word
    }
}


function addBeing(word) {
    return "being " + word;
}

function startsWithVowel(word) {
    const vowelRegex = /^[aeiou]/i; // Case-insensitive regex for vowels
    return vowelRegex.test(word);
}

function addA(word) {
    if (startsWithVowel(word)) {
        return "an " + word;
    } else {
        return "a " + word;
    }
}

/*========= countPrompts =========*/
function countPrompts() {
    return prompts.length;
}

console.log(countPrompts() + " prompts available");

displayPrompt();
