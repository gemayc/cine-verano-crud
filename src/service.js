// READ METODO GET


async function getMovies() {
  const response = await fetch("http://localhost:3000/movies", {

    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const movieData = await response.json();
  console.log(movieData);
  return movieData;
}
getMovies()



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
     <div class = "movie-card">
      <img src="${movie.imagen}" alt="${movie.title}" />
      <h1>${movie.title}</h1>
       <h3>${movie.director}</h3>
       <h4>${movie.age}</h4>
       <p>${movie.description}</p>
       <button onclick="deleteMovie('${movie.id}')">Eliminar</button>
        <button onclick="editMovie('${movie.id}')">Editar</button>
     </div>`


  });

  
  return movieList;
}


 // CREATE METODO POST
    async function createMovie(newMovie) {// newBook es un parametro tipo  objeto
  const response = await fetch ("http://localhost:3000/movies", {// le dice al servidor que quiere crear un nuevo libro
   method : "POST", //informa al servidor  que enviaamos datos en foramto json
    headers: {"Content-Type": "application json"},
    body: JSON.stringify (newMovie) // aqui va el objeto con los datos del nueva pelicula.JSON.stringify convierte el objeto javascrip en formato JSON

  });

  if(response.ok) { // si la repuesta es exitosa
   const createMovie = await response.json() // ceo una consntate que obtiene los nuevos datos del libro en formato json
    console.log("Pelicula creada", createMovie);
    await printMovies () // espera y actuliza todas las pelculas
    return createMovie // retorna mi nueva pelicula esto es de la constante
  }else {
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
    
  };
  createMovie(newMovie); //llama al metodo POST
})


// // MODAL FUNCION
// function openModal (){
//   document.getElementById ("movieModal").styled.display ="block"
// }
// function closeModal (){
//    document.getElementById('movieModal').style.display = 'none';
//    document.getElementById('formMovie').reset();
// }

// UPDATE METODO PUT
async function updateMovie(id, editedMovie) {
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "PUT", // Método PUT para actualizar
    headers: { "Content-Type": "application/json" },// Decimos que enviamos JSON
    body: JSON.stringify(editedMovie) // Convertimos el objeto con los datos nuevos a JSON

  });
  if (response.ok){
    console.log("Pelicula actualizada");
    await printMovies();
  }else {
    console.log("error al actulizar pelicula");
  }
}

function editMovie(id) {
   const newTitle = prompt ("NUevo Titulo");
   const newDirector = prompt ("NUevo Director");
   const newAge = prompt ("NUevo Año");
   const newDescripcion = prompt ("NUeva Descripción");
   const newImagen = prompt("Nueva URL de imagen (opcional):");

  if (newTitle && newDirector && newAge && newDescripcion && newImagen) {
    const editedMovie = {
      title: newTitle,
      director: newDirector,
      age: newAge,
      descripcion: newDescripcion,
      imagen: newImagen || ""
    };

  }

  updateMovie(id, editedMovie);
}

// // IMPRIMIR
// let moviesContainer = document.getElementById('movie-section'); // declaro una constante y me voy a elgit id de html dode quiero que lo escriba
// async function printMovies() { // creo una funcion para que me pinte o me imprima mis peliculas
//   const movies = await getMovies();// donde le digo que me abra la lista que tengo con la funcion que hice en el metodo GET
//   moviesContainer.innerHTML = "" //vacia el conenido de html para luego cargarlo en la sigiente linea
//   const movieList = movies.map(movie => { // mapea todo mi array de json donde estan todas mis peliculas
//     return moviesContainer.innerHTML += // += siginica que lo añade en mi pagina html pero sumando a la que ya ahi es para que se pinten todas las peliiculas 
//       `
//      <div class = "movie-card">
//       <img src="${movie.imagen}" alt="${movie.title}" />
//       <h1>${movie.title}</h1>
//        <h3>${movie.director}</h3>
//        <h4>${movie.scienceField}</h4>
//        <p>${movie.description}</p>
//        <button onclick= deleteMovie(${movie.id})>Eliminar</button>
//      </div>`


//   });

  
//   return movieList;
// }

//  MODAL FUNCION
 function openModal() {

   document.getElementById ("movieModal").style.display = 'block';
 }
 function closeModal() {
   document.getElementById('movieModal').style.display = 'none';
    document.getElementById('formMovie').reset();
 }
 // Cerrar modal al hacer clic fuera
        window.onclick = function(event) {
            const modal = document.getElementById('movieModal');
            if (event.target == modal) {
                closeModal();
            }
        }