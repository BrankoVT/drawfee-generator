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
    "%character% wants %character% dead",
    "the evilest version of %character%",
    "%character% will never forgive %character% for what they did",
    "%sapient% was eating a %food% before rudely being interrupted by %sapient%",
    "%sapient% absolutely hates %object%s",
    "you do not want to know %sapient%'s opinion on %object%s",
    "Presidential alert, the girls are %activity%",
    "why is %sapient% %action%?"
];

// Entries
const drawfeeHost = ["Nathan", "Jacob", "Karina", "Julia", "David"];
const superHero = ["Deadpool", "Spider-Man", "Iron Man", "Mr Incredible", "Elastigirl", "Frozone", "Captain America", "Batman", "Wonder Woman", "Superman", "Black Widow"];
const superVillain = ["The Joker", "The Riddler", "Two-Face", "Harley Quinn", "Poison Ivy", "The Penguin (Batman)", "Mr Freeze"]
const transport = ["airplane", "car", "bike", "motorbike", "boat", "container ship", "train", "subway", "helicopter", "truck", "scooter", "bus", "yacht", "hovercraft", "ferry", "rocket", "zeppelin", "hot air balloon", "gondola", "tram"];
const dinosaur = ["tyrannosaurus rex", "stegosaurus", "velociraptor", "triceratops", "brontosaurus"];
const extinctAnimal = ["mammoth", "dodo", "saber-tooth tiger", ...dinosaur];
const mythicalAnimal = ["dragon", "minotaur", "chimera", "unicorn", "pegasus", "griffin", "hippogriff", "phoenix", "kraken"];
const animal = ["lion", "barracuda", "ox", "badger", "moose", "slug", "parrot", "kiwi (animal)", "snail", "horseshoe crab", "puffin", "cobra", "rattle snake", "owl", "bumblebee", "wasp", "bee", "mosquito", "daddy long-legs", "dog", "shrimp", "panther", "salamander", "chihuahua", "bat", "goldfish", "pufferfish", "frog", "alpaca", "beagle", "German shepherd", "pitbull", "duck", "swan", "goose", "bison", "llama", "mule", "donkey", "horse", "naked mole rat", "jaguar", "ladybug", "whale", "walrus", "seal", "blob fish", "coral", "chimp", "polar bear", "kangaroo", "spider", "butterfly", "ostrich", "emu", "cat", "fish", "jellyfish", "crab", "pigeon", "ape", "iguana", "lizard", "tortoise", "bird", "eagle", "hawk", "squid", "octopus", "sea star", "ferret", "mouse", "rat", "opossum", "cow", "sheep", "pig", "turtle", "shark", "tiger", "elephant", "giraffe", "zebra", "bear", "monkey", "penguin", "dolphin", "koala", "panda", "hippopotamus", "wolf", "deer", "rabbit", "fox", "cheetah", "rhinoceros", "gorilla", "squirrel", ...extinctAnimal, ...mythicalAnimal];
const fruit = ["dragon fruit", "blackberry", "raspberry", "pomegranate", "cherry", "pineapple", "blueberry", "strawberry", "mango", "kiwi (fruit)", "plum", "tomato", "apple", "pear", "banana", "orange (fruit)", "grape", "melon"];
const aceAttorney = ["Phoenix Wright", "Apollo Justice", "Miles Edgeworth", "Manfred von Karma", "Franziska von Karma", "Larry Butz", "Maya Fey"]
const sonic = ["Sonic", "Dr Eggman", "Tails", "Shadow the Hedgehog", "Silver the Hedgehog", "Jet the Hawk", "Charmy Bee", "Big the Cat", "Blaze the Cat", "Espio the Chameleon", "Amy Rose", "Knuckles the Echidna", "Cream the Rabbit", "Vector the Alligator"];
const spongebob = ["Spongebob Squarepants", "Squidward Tentacles", "Patrick Star", "Pearl Krabs", "K.A.R.E.N. (Spongebob)", "Mrs Puff (Spongebob)", "Larry the Lobster", "Sandy Cheeks", "Plankton (Spongebob)", "Gary (Spongebob)", "Squilliam Fancyson", "Eugene Krabs"];
const pokemon = ["Spheal (Pokémon)", "Pikachu", "Blastoise", "Swampert", "Mr Mime", "Sprigatito", "Eevee", "Charizard", "Venusaur", "Snorlax"];
const sweets = ["candy", "Mars bar", "ice cream", "chocolate"];
const celeb = ["Keanu Reeves", "Jesus", "Steve Jobs", "Morgan Freeman", "Scarlett Johansson", "Owen Wilson", "Elliot Page", "Richard Nixon", "The Rock", "John Cena", "Danny DeVito", "Jack Black", "Jeff Bezos", "Bill Gates", "Barack Obama"];
const drawfeeAnimal = ["Joy Cat", "Miss Olive"];
const breakingBad = ["Walter White", "Jesse Pinkman", "Gustavo Fring", "Hank Schrader"];
const simpsons = ["Bart Simpson", "Lisa Simpson", "Homer Simpson", "Marge Simpson", "Maggie Simpson", "Krusty the Clown", "Milhouse"]
const drawtectives = ["Grandan Highforge", "York Rogdul", "Rosé (Drawtectives)", "Jancy True", "Eugene Finch", "Don Jovi", "Kingston Munch", "Villainius", "Harper Justice", "Ogalvy Smythe", "Lotta Justice", "Sorin Justice", "Emery Justice", "Harvey Hornswoggle"]
const drawfeeFictionalAnimal = ["Pissboy", "Todd from Mario"];
const mario = ["Mario", "Luigi", "Toad", "Waluigi", "Wario", "Bowser", "Princess Peach", "Princess Daisy", "Princess Rosalina"];
const marioAnimal = ["Boo (Mario)", "Koopa", "Donkey Kong", "Diddy Kong", "Yoshi (Mario)"]
const zelda = ["Ganondorf", "Link", "Zelda", "Tingle"];
const miscNintendo = ["Olimar", "Samus Aren"];
const miscNintendoAnimal = ["Ridley (Metroid)"];
const activity = ["fighting", "dancing", "singing", "running", "crying", "jamming", "stealing stuff", "sleeping", "dying", "being obnoxious", "kissing", "hugging", "cuddling", "being cute", "being annoying"]
const drawfeeCharacter = [...drawtectives, ...drawfeeFictionalAnimal];
const drawfee = [...drawfeeHost, ...drawfeeAnimal, ...drawfeeCharacter];
const nintendo = [...mario, ...zelda, ...miscNintendo];
const nintendoAnimal = [...miscNintendoAnimal, ...marioAnimal, ...pokemon]
const humanCharacter = [...nintendo, ...aceAttorney, ...superHero, ...superVillain, ...simpsons, ...drawtectives, ...breakingBad];
const nonHumanCharacter = [...sonic, ...spongebob, ...drawfeeFictionalAnimal, nintendoAnimal];
const food = [...fruit, ...sweets];
const animalAndCharacter = [...animal, ...nonHumanCharacter];
const object = [...transport, ...food];
const human = [...drawfeeHost, ...humanCharacter, ...celeb];
const character = [...humanCharacter, ...nonHumanCharacter];
const sapient = [...human, ...character];
const action = [...activity]

// Define the entries
const entries = {
    drawfeeHost: drawfeeHost,
    superHero: superHero,
    drawfee: drawfee,
    human: human,
    transport: transport,
    dinosaur: dinosaur,
    pokemon: pokemon,
    object: object,
    fruit: fruit,
    activity: activity,
    extinctAnimal: extinctAnimal,
    mythicalAnimal: mythicalAnimal,
    food: food,
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

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button
    let newPromptButton = document.getElementById('newPromptButton');
    newPromptButton.addEventListener('click', displayPrompt);
});

displayPrompt()
