// CREATE METODO POST
async function createMovie(newMovie) {

}
// READ METODO GET
async function getMovies() {
  const response = await fetch("http://localhost:3000/movies", {

    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const movieData = await response.json()
  console.log(movieData)
  return movieData
}
getMovies()

// UPDATE METODO PUT
async function updateMovie(id, editedMovie) {
  // pendiente de implementar
}

// DELETE METODO DELETE
async function deleteMovie(id) {
  const response = await fetch(`http://localhost:3000/movies/${id}`, { // en delete hay que agragarler el id 
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }

  });
  if (response.ok) { // si la constante response que es donde esta la url contesta bien  espera y carga mi lista de pelicualas
    await getMovies()
  } else {
    console.log("Error al elimianr el liro")
  }
}



// IMPRIMIR
let moviesContainer = document.getElementById('movie-section'); // declaro una constante y me voy a elgit id de html dode quiero que lo escriba
async function printMovies() { // creo una funcion para que me pinte o me imprima mis peliculas
  const movies = await getMovies();// donde le digo que me abra la lista que tengo con la funcion que hice en el metodo GET
  moviesContainer.innerHTML = "" //vacia el conenido de html para luego cargarlo en la sigiente linea
  const movieList = movies.map(movie => { // mapea todo mi array de json donde estan todas mis peliculas
    return moviesContainer.innerHTML += // += siginica que lo añade en mi pagina html pero sumando a la que ya ahi es para que se pinten todas las peliiculas 
      `
     <div class = movie-card>
      <img src="${movie.imagen}" alt="${movie.title}" />
      <h1>${movie.title}</h1>
       <h3>${movie.director}</h3>
       <h4>${movie.scienceField}</h4>
       <p>${movie.description}</p>
       <button onclick= deleteMovie(${movie.id})>Eliminar</button>
     /<div>`


  });

  // movies.map(movie => {
  //   moviesContainer.innerHTML += //+=:  x = 2;  x = x + 1  =   x += 1
  //   `<h1>${movie.title}</h1>
  //   <p>${movie.scienceField}</p>`;
  // });

  return movieList;
}