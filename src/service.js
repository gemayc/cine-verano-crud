// READ METODO GET


async function getMovies() {
  const response = await fetch("http://localhost:3000/movies", {  // Hacemos una solicitud HTTP (fetch) al servidor local en la ruta /movies

    method: "GET",
    headers: {
      'Content-Type': 'application/json'// Le decimos al servidor que esperamos datos en formato JSON
    }
  })
  const movieData = await response.json(); // Esperamos la respuesta del servidor y la convertimos de JSON a objeto de JavaScript y la megemos en la constante moviedata
  console.log(movieData);
  return movieData;// Devolvemos los datos para que se puedan usar en otro lugar si se llama a esta función
}
getMovies()// Llamamos a la función para que se ejecute y obtenga las películas



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
  const movieList = movies.map(movie => { // mapea todo mi array de json donde estan todas mis peliculas y trabajar con cada una de ellas como movie.
    return moviesContainer.innerHTML += // += siginica que lo añade en mi pagina html pero sumando a la que ya ahi es para que se pinten todas las peliiculas 
      `
     <div class = "movie-card">
      <img src="${movie.imagen}" alt="${movie.title}" />
      <h1>${movie.title}</h1>
       <h3>${movie.director}</h3>
       <h4>${movie.age}</h4>
       <p>${movie.description}</p>
       <div class = "card-buttons">
       <button class="deleteMovie" onclick="deleteMovie('${movie.id}')">Eliminar</button>
        <button class="editMovie"  onclick="editMovie('${movie.id}')">Editar</button>
        </div>
     </div>`


  });


  return movieList;
}


// CREATE METODO POST
async function createMovie(newMovie) {// newBook es un parametro tipo  objeto
  const response = await fetch("http://localhost:3000/movies", {// le dice al servidor que quiere crear un nuevo libro
    method: "POST", //informa al servidor  que enviaamos datos en foramto json
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie) // aqui va el objeto con los datos del nueva pelicula.JSON.stringify convierte el objeto javascrip en formato JSON

  });

  if (response.ok) { // si la repuesta es exitosa
    const createMovie = await response.json() // ceo una consntate que obtiene los nuevos datos del libro en formato json
    console.log("Pelicula creada", createMovie);
    await printMovies() // espera y actuliza todas las pelculas
    return createMovie // retorna mi nueva pelicula esto es de la constante
  } else {
    console.log("Error al crear la pelicula");
  }
}

document.getElementById("formMovie").addEventListener("submit", function (e) {
  e.preventDefault();//evita que se recargue la pagina
  const newMovie = { //objeto de la nueva pelicula, osea como van a quedar las peliculas cuando se de al boton de añadir pelicula (submit)
    title: document.getElementById("title").value,//value es el valor que introdujo el usuario en el input
    director: document.getElementById("director").value,
    age: document.getElementById("age").value,
    description: document.getElementById("description").value,
    imagen: document.getElementById("imagen").value,


  };
  createMovie(newMovie); //llama al metodo POST
})

//  MODAL FUNCION
function openModal() {

  document.getElementById("movieModal").style.display = 'block';
}
//  Función para cerrar el modal de edición
function closeModal() {
  document.getElementById('movieModal').style.display = 'none';
  document.getElementById('formMovie').reset();
}
// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
  const modal = document.getElementById('movieModal');
  if (event.target == modal) {
    closeModal();
  }
}

let idMovieEdit = null;
//Creamos la función editMovie que se encargará de mostrar el formulario de edición y que este encuentre ya pre-cargado con la info de la película
async function editMovie(id) {
  console.log("Editando película con id:", id); 
  idMovieEdit = id; // Se actualiza la variable con el id de la película a editar.aqui la variable ahora vale id
  const response = await fetch(`http://localhost:3000/movies/${id}`); //Obtenemos los datos de la película que se va a editar a través de una petición que hacemos a la API.
  const movie = await response.json(); //Guardamos la información en una constante llamada movie. y .json() transforma los datos en un objeto que podemos manipular en JavaScript.
  // Verifica que movie tenga datos:
  console.log("Película encontrada:", movie);

  //A continuación, vamos a cargar el formulario de edición con los datos de la película que se va a editar.
  document.getElementById("edit-title").value = movie.title;
  document.getElementById("edit-director").value = movie.director;
  document.getElementById("edit-age").value = movie.age;
  document.getElementById("edit-description").value = movie.description;

  openEditModal();// esta funcion viene del modal parao poder abrr el boton editar
}

//Ahora creamos la función para editar las películas directamente.
async function updateMovie(e) { // evita que se recargue la pagina
  e.preventDefault();
  //Vamos a crear un nuevo objeto con los datos actualizados de la película.
  const updateMovie = {
    title: document.getElementById("edit-title").value,
    director: document.getElementById("edit-director").value,
    age: document.getElementById("edit-age").value,
    description: document.getElementById("edit-description").value

  };
  //Continuamos con la petición PUT para hacer el UPDATE de las películas.
  const response = await fetch(`http://localhost:3000/movies/${idMovieEdit}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateMovie),
  });
  if (response.ok) {
    //Si la respuesta está bien, muestra la lista de libros actualizada, oculta el formulario de edición y regresa el formulario de edición-
    await printMovies();
  } else {
    console.log("error al editar las películas.");
  }
}
 // MODAL DE EDICION
function openEditModal() {
  document.getElementById("editMovieModal").style.display = 'block';
}

//  Función para cerrar el modal de edición
function closeEditModal() {
  document.getElementById("editMovieModal").style.display = 'none';
  document.getElementById("formEditMovie").reset();
}

// Evento para cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
  const modal = document.getElementById("editMovieModal");
  if (event.target == modal) {
    closeEditModal();
  }
};

// Enlazamos el formulario de edición con la función updateMovie
const formEdit = document.getElementById("formEditMovie");
if (formEdit) {
  formEdit.addEventListener("submit", updateMovie);
}
