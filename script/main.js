<<<<<<< HEAD
    Import { films } from `./assets/fims.js`
	Import { starships } from `./assets/fims.js`
	Import { people } from `./assets/fims.js`

	let filmList = document.querySelector("#film-list”)

	people.forEach((people) => {
	    let  listItem = document.createElement("text");
		listItem.textContent = people.name
		people.appendChild(listItem)
	   console.log(film.title)})

	Console.log(people[9]);

let myPeople = document.querySelector("#myPeople");

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
=======
Import { films } from `./assets/fims.js`
	Import { starships } from `./assets/fims.js`
	Import { people } from `./assets/fims.js`

	Let filmList = document.querySelector(“#film-list”)

	films.forEach((film) => {
	     Let listItem = document.createElement(`li`);
		listItem.textContent = film.opening_crawl
		filmList.appendChild(listItem)
	console.log(film.title)})

	Console.log(people[9]);
>>>>>>> 26e0d4beaed8f1b0e5ec5262ddc10d080b48a454
