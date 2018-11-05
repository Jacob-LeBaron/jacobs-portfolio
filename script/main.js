    import { senatorData } from '../assets/senators.js'    
    import { films } from `./assets/fims.js`
	import { starships } from `./assets/fims.js`
	import { people } from `./assets/fims.js`

	people.forEach(people) => {
	    let  listItem = document.createElement("text");
		listItem.textContent = people.name
		people.appendChild(listItem)
	   console.log(film.title)}

	Console.log(people[9]);

let myPeople = document.querySelector('apitext');

fetch('https://swapi.co/api/people/10')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    name.textContent;
    console.log(myJson.name);
  });

var jcontent = {
            "name": "Obi-Wan Kenobi",
            "height": "182",
            "mass": "77",
            "hair_color": "auburn, white",
            "skin_color": "fair",
            "eye_color": "blue-gray",
            "birth_year": "57BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/20/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ]
};

var apitext = document.getElementById('apitext');
apitext.innerHTML = jcontent.name + '' + jcontent.birth_year;

Import { films } from `./assets/fims.js`
	Import { starships } from `./assets/fims.js`
	Import { people } from `./assets/fims.js`

	Let filmList = document.querySelector("#film-list")

	films.forEach((film) => {
	     Let listItem = document.createElement(`li`);
		listItem.textContent = film.opening_crawl
		filmList.appendChild(listItem)
	console.log(film.title)})

	Console.log(people[9]);



console.log(senatorData.results[0].members)
//also you can make it a constant by doing
const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senators.party === "R")
      
const democrats = senators.filter(senator => senators.party === "D")
  
const males = senators.filter(senator => senators.gender === "M")
const females = senators.filter(senator => senators.gender === "F") 
  
const loyalRepublican = republicans.reduce((acc, senators) => senators.votes_with_party_pct > 0 ? senator : acc, 0)
  
const loyalDemocrat = democrats.reduce((acc, senators) => senators.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`There are ${republicans.length} republican and %{democrats.length} democrats in the Senate.`)

console.log(`There are ${males.length} in the Senate and ${females.length} women.`)

console.log(`The most loyal republican is ${loyalRepublican.length} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`)

const senWithPics = senators.map(senator => {
  senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  if(senator.govtrack_id === '412743') {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  }
  return senator
})

console.log(senWithPics)

  let picutreDiv = document.querySelector('.senator-cont')
  
senWithPics.forEach(senator => {
  let senatorPic = document.createElement('img')
  let senatorFig = document.createElement('figure')
  let senatorCap = document.createElement('caption')
senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
senatorPic.src = senator.imgURL
  senatorFig.appendChild(senatorPic)
  senatorFig.appendChild(senatorCap)
  pictureDiv.appendChild(senatorFig)
})

console.log(pictureDiv)
