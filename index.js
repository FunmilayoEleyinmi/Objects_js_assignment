// 1. Create an Instagram post with constructor method
function Instagram (HandleOfAuthor, Content, ImgUrl, Views, Likes) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.ImgUrl = ImgUrl;
    this.Views = Views;
    this.Likes = Likes;
}


// 2. Create two instagram post from the object in task 1
let instagram1 = new Instagram('Krakstv','Awnnn. Sorry Bro','https://www.instagram.com/p/CpF5fl6qmn0/?utm_source=ig_web_copy_link', 2206, 18587);
console.log({instagram1});

let instagram2 = new Instagram('cardiovisual', 'Nice side by side visual of a sinus rhythm and atrial fibrillation', 'https://www.instagram.com/reel/CpF37GMB3FD/?utm_source=ig_web_copy_link', 1, 424);
console.log({instagram2});


//3.  using the factory method to create two objects and merging them together
function Person(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}
let person1 = Person('Musa Dawodu', 19, 'Lekki,Lagos-Nigeria');
console.log({person1});

function JambScores(eng, govt, lit, crk) {
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}
let MusaJambScores = JambScores(70, 85, 82, 94);
console.log({MusaJambScores});
//Merge both objects
Object.assign(person1,MusaJambScores);
console.log({person1});


//4 Different ways to clone an Object with examples
//option 1 = using Object.assign
let earthquake = {
    Date: 'Feb-06-2023',
    Country: 'Turkey',
    Magnitude: 7.8,
    Depth: '17km'
}

let earthquake2 = Object.assign({},earthquake);
earthquake2.Date ='Feb-20-2023';
earthquake2.Magnitude = 6.3;
earthquake2.Depth = '16km';
console.log({earthquake});
console.log({earthquake2});

//option 2 = using spread syntax
let earthquake3 = {...earthquake};
earthquake3.Date = 'Oct-30-2020';
earthquake3.Magnitude = 7.0;
earthquake3.Depth = '21km';
console.log({earthquake3});

//option 3 = using the method JSON.parse(JSON.stringify())
let earthquake4 = JSON.parse(JSON.stringify(earthquake));
earthquake4.Date = 'Jun-25-2020';
earthquake4.Magnitude = 5.4;
earthquake4.Depth = '10km';
console.log({earthquake4});


//5. enumering the properties of the object
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + key);
}
