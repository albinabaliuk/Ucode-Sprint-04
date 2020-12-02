class Movie {
  constructor(options) {
    this.title = options.title;
    this.poster = options.poster;
    this.date = options.date;
    this.info = options.info;
    this.actors = options.actors;
    this.favorites = options.favorites;
  }

  addToFavorite() {
    favorites.add(this);
    this.favorites = `<i class="fas fa-heart red-heart"></i>`;
  }
  
  removeFromFavorites() {
    favorites.delete(this);
    this.favorites = `<i class="far fa-heart"></i>`;
  }
}

let shawshankRedemption = new Movie({
  title: "The Shawshank",
  poster: "https://images-na.ssl-images-amazon.com/images/I/51KjbtEkoeL._AC_.jpg",
  date: "Sep 10, 1994",
  info: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis \"Red\" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.",
  actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
  favorites: `<i class=\"far fa-heart\">`
})
let godfather = new Movie({
  title: "The Godfather",
  poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
  date: "Mar 14, 1972",
  info: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
  actors: ["Marlon Brando", "Al Pacino", "James Caan", "Richard Castellano",
    "Robert Duvall"],
  favorites: `<i class=\"far fa-heart\">`
})
let darkKnight = new Movie({
  title: "The Dark Knight",
  poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
  date: "Jul 14, 2008",
  info: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and throw the city into anarchy.",
  actors: ["Christian Bale", "Michael Caine", "Heath Ledger", "Gary Oldman"],
  favorites: `<i class=\"far fa-heart\">`
})


export let favorites = new Set();
export let movies = new Set();


movies.add(shawshankRedemption)
movies.add(godfather)
movies.add(darkKnight)


let renderFilmInfo = (set) => {
  let activeFilm = document.querySelector(".li-active")
  let div = document.querySelector('.film-info')
    
  let actors = document.createElement("div")
  let prevPoster = document.querySelector(".poster")
  let favButton; 
 
  div.innerHTML = ""
  if (prevPoster)
    prevPoster.remove()
  
  actors.setAttribute('class', 'actors')

  for (let movie of set)
    if (activeFilm.innerHTML === movie.title) {
      
      div.innerHTML = `<div class="film-name"><p>${movie.title}</p><div id="addToFav">${movie.favorites}</div></div>`
      div.innerHTML += `<div class="date"><p>${movie.date}</p></div>`
      for (let i of movie.actors) {
        actors.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
      }
      div.append(actors)
      div.insertAdjacentHTML("beforeend", `</div><div class="description"><p>${movie.info}</p></div></div>`)
      div.insertAdjacentHTML('afterend', `<div class="poster"><img src="${movie.poster}" alt="${movie.title}"></div>`)
     
      favButton = document.querySelector('#addToFav')
      favButton.onclick = (event) => {
        if (favorites.has(movie)) {
          movie.removeFromFavorites(movie)
         
          favButton.innerHTML = movie.favorites
          
          renderFilmList(set)
        } else {
          movie.addToFavorite(movie, favButton);
          favButton.innerHTML = movie.favorites
        }
      }
      break;
    }
}

let renderFilmList = (set) => {
  let ul = document.querySelector("ul"),
    
    firstLi = true;

    
  ul.innerHTML = "";
  for (let movie of set) {
    let li = document.createElement("li")
    if (firstLi)
      
      li.setAttribute('class', 'li-active')
    firstLi = false 
    li.innerHTML = movie.title
    ul.append(li)
  }
 
  ul.onclick = (event) => {
    let li = event.target;
  
    document.querySelector(".li-active").classList.remove("li-active")
    li.classList.add("li-active")
   
    renderFilmInfo(set)
  }
  
  renderFilmInfo(set);
}


let renderCollection = (target) => {
  document.querySelector(".category-active").classList.remove('category-active')
  target.classList.add("category-active")

  if (target.innerHTML === "All")
    renderFilmList(movies)
  else
    renderFilmList(favorites)
}

let intMain = () => {
 
  let btnsCollect = document.querySelector("nav");

  btnsCollect.onclick = (event) => renderCollection(event.target);

  renderFilmList(movies)
}

intMain();
