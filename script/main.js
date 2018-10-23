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
