// Author: Branko Van Tendeloo


/* ====== Data ======= */
// Prompts
const prompts = [
    "%human%'s fursona",
    "a %nonHuman% gijinka",
    "%character% from memory",
    "the %character% x %character% ship",
    "%sapient% with a pet %animalAndCharacter%",
    "%sapient% is wanted by the police",
    "%sapient% in a %food% eating contest",
    "%sapient% wants %character% dead",
    "the evilest version of %sapient%",
    "%sapient% will never forgive %character% for what they did",
    "%sapient% was eating %foodA% before rudely being interrupted by %sapient%",
    "%sapient% absolutely hates %objects%",
    "you do not want to know %sapient%'s opinion on %objects%",
    "Presidential alert, the girls are %action%",
    "why is %sapient% %action%?",
    "%sapient%'s %significantOther% really likes their %object%",
    "%sapient% is eating %foodA% out of %objectNoFoodSingularA%",
    "%sapient% will never eat %foodA% ever again after this moment",
    "%sapient% thinking about their childhood %objectNoFood% in their dying moments",
    "%sapient% is %action%, but only %sapient% seems to care",
    "finally, %sapient% is announced for Smash!"
];

// Entries
const aceAttorney = ["Phoenix Wright", "Apollo Justice", "Miles Edgeworth", "Manfred von Karma", "Winston Payne", "Franziska von Karma", "Larry Butz", "Maya Fey"]
const activity = ["fighting", "doing the macarena", "dancing", "singing", "running", "crying", "jamming", "stealing stuff", "sleeping", "dying", "being obnoxious", "kissing", "hugging", "cuddling", "being cute", "being annoying"];
const animalCrossing = ["Tom Nook", "Timmy Nook", "Tommy Nook", "Raymond (Animal Crossing)", "Ankha (Animal Crossing)"];
const appliances = ["air fryer", "phone", "flip phone", "floppy disc", "landline", "kitchen robot", "mixer", "blender", "book", "laptop", "computer", "TV", "spork", "spoon", "knife", "fork", "frying pan"];
const breakingBad = ["Walter White", "Skyler White", "Jesse Pinkman", "Gustavo Fring", "Hank Schrader"];
const celeb = ["Keanu Reeves", "Rowan Atkinson", "Gandhi", "Daniel Radcliffe", "Emma Watson", "Johnny Depp", "Sean Connery", "Angelina Jolie", "Jason Momoa", "Jim Carrey", "Orlando Bloom", "Jesus", "Steve Jobs", "Morgan Freeman", "Scarlett Johansson", "Owen Wilson", "Elliot Page", "Richard Nixon", "The Rock", "John Cena", "Danny DeVito", "Jack Black", "Jeff Bezos", "Bill Gates", "Barack Obama"];
const chainsawMan = ["Makima", "Power (Chainsaw Man)", "Denji (Chainsaw Man)"];
const clothing = ["skirt", "jacket", "belt", "cap", "hat", "coat", "glove", "waistcoat", "boot", "bikini", "shoe", "tophat", "pantaloon", "ring", "speedo", "bracelet", "hoodie", "sweater", "bowtie", "tie", "T-shirt", "shirt", "dress", "poncho"];
const clothingNoPlural = ["pants", "trousers", "swimming trunks", "high heels", "pajamas", "shorts", "glasses", "boxer shorts", "knickers", "thigh highs"];
const dinosaur = ["tyrannosaurus rex", "stegosaurus", "velociraptor", "triceratops", "brontosaurus"];
const dragonBallZ = ["Goku", "Bulma", "Vegeta", "Trunks"];
const dragonBallZNonHuman = ["Piccolo", "Frieza"];
const drawfeeAnimal = ["Joy Cat", "Miss Olive"];
const drawfeeHumanCharacter = ["Schmidt", "Nando", "Fern (Jacob)", "Porfo", "Spheal (Julia)"];
const drawfeeNonHumanCharacter = ["Todd from Mario"]
const drawfeeFictionalAnimal = ["Pissboy", "Todd from Mario"];
const drawfeeHost = ["Nathan", "Jacob", "Karina", "Julia", "David"];
const drawtectives = ["Grandan Highforge", "York Rogdul", "Rosé (Drawtectives)", "Jancy True", "Eugene Finch", "Don Jovi", "Kingston Munch", "Villainius", "Harper Justice", "Ogalvy Smythe", "Lotta Justice", "Sorin Justice", "Emery Justice", "Harvey Hornswoggle"]
const familyGuy = ["Peter Griffin", "Lois Griffin", "Meg Griffin", "Chris Griffin"];
const fruit = ["dragon fruit", "blackberry", "raspberry", "pomegranate", "cherry", "pineapple", "blueberry", "strawberry", "mango", "kiwi", "plum", "tomato", "apple", "pear", "banana", "orange", "grape", "melon"];
const furniture = ["closet", "fridge", "freezer", "oven", "microwave", "furnace", "sink", "fireplace", "dishwasher", "cupboard", "sofa", "night stand", "bed", "love seat", "desk", "chair", "bookcase", "barbeque"];
const extinctAnimal = ["mammoth", "dodo", "saber-tooth tiger", ...dinosaur];
const kaiju = ["Godzilla", "King Kong", "Mothra"];
const mario = ["Mario", "Luigi", "Toad", "Waluigi", "Wario", "Bowser", "Princess Peach", "Princess Daisy", "Princess Rosalina"];
const marioAnimal = ["Boo (Mario)", "Koopa", "Donkey Kong", "Diddy Kong", "Yoshi (Mario)"]
const meal = ["egg", "hot dog", "Slim Jim", "bagel", "sandwich", "pancake"];
const mealNoPlural = ["spaghetti", "lasagne", "bread", "pizza", "beef", "pork", "fries/chips", "fish 'n' chips"];
const mickeyMouse = ["Mickey Mouse", "Minnie Mouse", "Daisy Duck", "Pete (Mickey Mouse)", "Max Goof", "Donald Duck", "Goofy"];
const mythicalAnimal = ["dragon", "hydra", "minotaur", "chimera", "unicorn", "pegasus", "griffin", "hippogriff", "phoenix", "kraken"];
const pokemon = ["Spheal (Pokémon)", "Bulbasaur", "Pikachu", "Blastoise", "Swampert", "Mr Mime", "Sprigatito", "Eevee", "Charizard", "Venusaur", "Snorlax"];
const significantOther = ["wife", "husband", "spouse", "boyfriend", "girlfriend", "partner"];
const simpsons = ["Bart Simpson", "Lisa Simpson", "Homer Simpson", "Marge Simpson", "Maggie Simpson", "Krusty the Clown", "Milhouse"]
const sonic = ["Sonic", "Tails", "Shadow the Hedgehog", "Silver the Hedgehog", "Jet the Hawk", "Charmy Bee", "Big the Cat", "Blaze the Cat", "Espio the Chameleon", "Amy Rose", "Knuckles the Echidna", "Cream the Rabbit", "Vector the Alligator"];
const spongebob = ["Spongebob Squarepants", "Squidward Tentacles", "Patrick Star", "Pearl Krabs", "K.A.R.E.N. (Spongebob)", "Mrs Puff (Spongebob)", "Larry the Lobster", "Sandy Cheeks", "Plankton (Spongebob)", "Gary (Spongebob)", "Squilliam Fancyson", "Eugene Krabs"];
const starTrek = ["Spock", "Captain Kirk (Star Trek)", "Picard (Star Trek)"]
const superHero = ["Deadpool", "Ant Man", "Robin (Batman)", "Bat Girl", "Spider-Man", "Iron Man", "Mr Incredible", "Elastigirl", "Frozone", "Captain America", "Batman", "Wonder Woman", "Superman", "Black Widow"];
const superVillain = ["The Joker", "Thanos", "Mysterio", "The Riddler", "Two-Face", "Harley Quinn", "Poison Ivy", "The Penguin (Batman)", "Mr Freeze"]
const sweet = ["Mars bar", "ice cream"];
const sweetNoPlural = ["chocolate", "candy", "chips/crisps"];
const transport = ["airplane", "car", "bike", "motorbike", "boat", "container ship", "train", "subway", "helicopter", "truck", "scooter", "bus", "yacht", "hovercraft", "ferry", "rocket", "zeppelin", "hot air balloon", "gondola", "tram"];
const vegetable = ["potato", "sugar beet", "beet", "onion", "cucumber", "pickle", "egg plant", "carrot"];
const vegetableNoPlural = ["lettuce", "broccoli", "cauliflower", "spinach", "peas", "garlic"]
const winnieThePoo = ["Winnie The Poo", "Ior (Winnie the Poo)", "Tigger", "Piglet (Winnie the Poo)"];
const zelda = ["Ganondorf", "Link", "Zelda", "Tingle"];

const animal = ["lion", "barracuda", "ox", "badger", "moose", "slug", "parrot", "kiwi (animal)", "snail", "horseshoe crab", "puffin", "cobra", "rattle snake", "owl", "bumblebee", "wasp", "bee", "mosquito", "daddy long-legs", "dog", "shrimp", "panther", "salamander", "chihuahua", "bat", "goldfish", "pufferfish", "frog", "alpaca", "beagle", "German shepherd", "pitbull", "duck", "swan", "goose", "bison", "llama", "mule", "donkey", "horse", "naked mole rat", "jaguar", "ladybug", "whale", "walrus", "seal", "blob fish", "coral", "chimp", "polar bear", "kangaroo", "spider", "butterfly", "ostrich", "emu", "cat", "fish", "jellyfish", "crab", "pigeon", "ape", "iguana", "lizard", "tortoise", "bird", "eagle", "hawk", "squid", "octopus", "sea star", "ferret", "mouse", "rat", "opossum", "cow", "sheep", "pig", "turtle", "shark", "tiger", "elephant", "giraffe", "zebra", "bear", "monkey", "penguin", "dolphin", "koala", "panda", "hippopotamus", "wolf", "deer", "rabbit", "fox", "cheetah", "rhinoceros", "gorilla", "squirrel", ...extinctAnimal, ...mythicalAnimal];

const miscHuman = ["Jon Arbuckle", "Dr Eggman", "James Bond", "Mr Bean", "Santa Claus", "Captain Jack Sparrow", "The Doctor (Doctor Who)", "Charlie Brown", "Christopher Robin", "Popeye the Sailor Man"];
const miscNonHuman = ["Garfield", "Odie (Garfield)", "Nermal (Garfield)", "Snoopy", "Brian Griffin"];
const miscAnime = ["One-Punch Man", "Light Yagami", "Naruto Uzumaki", "Sasuke Uchiha"];
const miscAnimeNonHuman = ["Ryuk", "Pochita"];
const miscNintendo = ["Olimar", "Samus Aren"];
const miscNintendoAnimal = ["Ridley (Metroid)"];


const drawfeeCharacter = [...drawtectives, ...drawfeeFictionalAnimal, ...drawfeeHumanCharacter, ...drawfeeNonHumanCharacter];
const drawfee = [...drawfeeHost, ...drawfeeAnimal, ...drawfeeCharacter];
const disneyAnimal = [...winnieThePoo, ...mickeyMouse];
const disneyHuman = [];
const disney = [...disneyHuman, ...disneyAnimal];
const animeHuman = [...miscAnime, ...chainsawMan, ...dragonBallZ];
const animeNonHuman = [...miscAnimeNonHuman, ...dragonBallZNonHuman];
const animeCharacter = [...animeHuman, ...animeNonHuman];
const nintendo = [...mario, ...zelda, ...miscNintendo, ...animalCrossing];
const nintendoAnimal = [...miscNintendoAnimal, ...marioAnimal, ...pokemon];
const humanCharacter = [...nintendo, ...drawfeeHumanCharacter, ...starTrek, ...animeHuman, ...miscHuman, ...familyGuy, ...aceAttorney, ...superHero, ...superVillain, ...simpsons, ...drawtectives, ...breakingBad];
const nonHumanCharacter = [...sonic, ...drawfeeNonHumanCharacter, ...animeNonHuman, ...miscNonHuman, ...kaiju, ...spongebob, ...drawfeeFictionalAnimal, ...nintendoAnimal, ...disneyAnimal];
const foodNoPlural = [...sweetNoPlural, ...mealNoPlural, ...vegetableNoPlural];
const foodPlural = [...fruit, ...sweet, ...meal, ...vegetable];
const food = [...foodPlural, ...foodNoPlural];
const housePart = [...furniture, ...appliances];
const animalAndCharacter = [...animal, ...nonHumanCharacter];
const objectNoFoodPlural = [...transport, ...housePart, ...clothing];
const objectNoFoodNoPlural = [...clothingNoPlural];
const objectNoFoodSingular = [...objectNoFoodNoPlural, ...objectNoFoodNoPlural];
const objectNoPlural = [...foodNoPlural, ...objectNoFoodNoPlural];
const objectPlural = [...food, ...objectNoFoodPlural];
const object = [...objectPlural, ...objectNoPlural];
const realHuman = [...drawfeeHost, ...celeb]
const human = [...realHuman, ...humanCharacter];
const character = [...humanCharacter, ...nonHumanCharacter];
const sapient = [...human, ...character];
const action = [...activity];

const objects = [...objectPlural.map(pluralise), ...objectNoPlural];
const objectA = [...object.map(addA)];
const objectNoFood = [...objectNoFoodPlural.map(pluralise), ...objectNoFoodNoPlural];
const foodA = [...foodNoPlural, ...foodPlural.map(addA)];
const objectNoFoodSingularA = [...objectNoFoodSingular.map(addA)];

// Define the entries
const entries = {
    drawfeeHost: drawfeeHost,
    superHero: superHero,
    drawfee: drawfee,
    human: human,
    transport: transport,
    dinosaur: dinosaur,
    pokemon: pokemon,
    objectNoFoodSingular: objectNoFoodSingular,
    objectNoFoodSingularA: objectNoFoodSingularA,
    object: object,
    objectA: objectA,
    objects: objects,
    disney: disney,
    animeCharacter: animeCharacter,
    fruit: fruit,
    activity: activity,
    objectNoFood: objectNoFood,
    action: action,
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
    nonHuman: [...object, ...animal],
    any: [...drawfee, ...superHero, ...transport]
};


// Generate a random prompt
function generatePrompt() {
    // Select a random prompt
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    // Replace blanks with random entries
    return randomPrompt.replace(/%(\w+)%/g, (match, key) => {
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
    if (word.endsWith("s")) {
        return word + "es";
    } else if (word.endsWith("y")) {
        return word.slice(0, -1) + "ies";
    } else {
        return word + "s";
    }
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

displayPrompt()
