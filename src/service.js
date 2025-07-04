// CREATE METODO POST
async function createMovie(newMovie) {
    
}
// READ METODO GET
async function getMovies() {
  const result = await fetch('http://localhost:3000/movies');
  const data = await result.json();
  return data;
}

// UPDATE METODO PUT
async function updateMovie(id, editedMovie) {
  // pendiente de implementar
}

// DELETE METODO DELETE
async function deleteMovie(id) {
  // pendiente de implementar
}

// IMPRIMIR
let moviesContainer = document.querySelector('section');

async function printMovies() {
  const movies = await getMovies();
  const movieList = movies.map(movie => {
    return moviesContainer.innerHTML += 
    `<h1>${movie.title}</h1>
    <p>${movie.scienceFieldEs}</p>`;
  });

  return movieList;
}