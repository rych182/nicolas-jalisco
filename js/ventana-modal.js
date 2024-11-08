
/*      MI CODIGO
// Recorre cada elemento y añade el evento click

let cajasModal = document.querySelectorAll('.caja-modal');

agregarAlumnos.forEach( agregarAlumno => {
    agregarAlumno.addEventListener('click', () => {
        alert("Estoy dando click a la caja modal");
    });
});
*/

/*  ================== CODIGO DE LA VENTANA MODAL ======================  */ 
// Selecciona todos los botones con la clase 'boton-verde'
let agregarAlumnos = document.querySelectorAll('.boton-verde');

// Itera sobre todos los botones y añade un event listener a cada uno
agregarAlumnos.forEach(agregarAlumno => {
    agregarAlumno.addEventListener('click', () => {
        // Encuentra el contenedor padre con la clase 'cajas-alumnos-botones'
        let cajaAlumnoBotones = agregarAlumno.closest('.cajas-alumnos-botones');
        
        // Dentro de ese contenedor, busca el div con la clase 'no-mostrar'
        let modal = cajaAlumnoBotones.querySelector('.no-mostrar');
        
        // Si se encuentra el modal, cambia el estilo para hacerlo visible
        if (modal) {
            modal.style.display = 'block'; // Cambia el display a block para que se vea
        }
    });
});

let cerrarModal = document.querySelectorAll('.boton-rojo');
cerrarModal.forEach(cerrar =>{
    cerrar.addEventListener('click',()=>{
        let cajaAlumnoBotones2 = cerrar.closest('.cajas-alumnos-botones');

        let desaparecerModal = cajaAlumnoBotones2.querySelector('.no-mostrar');
        
        if (desaparecerModal) {
            desaparecerModal.style.display = 'none';
        }
    })
})


/*     ============ AGREGAR ALUMNO AL ARCHIVO grupo-1.html ============   */

// Seleccionar todos los botones de la modal
let botonesGrupo = document.querySelectorAll('.caja-modal button');

// Iterar sobre cada botón y agregar un event listener
// Iterar sobre cada botón y agregar un event listener
botonesGrupo.forEach(boton => {
    boton.addEventListener('click', (event) => {
        let grupoSeleccionado = event.target.textContent;
        
        if (grupoSeleccionado.startsWith("Grupo")) {
            let numeroGrupo = grupoSeleccionado.split(" ")[1];
            let cajaAlumno = boton.closest('.cajas-alumnos-botones').querySelector('.cajas-alumnos');
            
            let botonVerde = cajaAlumno.querySelector('.boton-verde');
            if (botonVerde) {
                botonVerde.style.display = 'none'; 
            }

            // Clave específica para cada grupo en localStorage
            let claveAlumnosGrupo = `alumnos_grupo_${numeroGrupo}`;
            
            // Recupera el array existente para el grupo o crea uno nuevo
            let alumnosGuardados = localStorage.getItem(claveAlumnosGrupo) || '[]';
            let alumnosArray = JSON.parse(alumnosGuardados);
            
            alumnosArray.push(cajaAlumno.outerHTML);
            localStorage.setItem(claveAlumnosGrupo, JSON.stringify(alumnosArray));

            // Redirigir al archivo HTML correspondiente al grupo
            window.location.href = `grupo-${numeroGrupo}.html`;
        }
    });
});


// Recuperar los alumnos guardados del localStorage
let alumnosGuardados = localStorage.getItem('alumnos');

/* ============ ESPACIO ENTRE CADA DIV QUE APARECE EN GRUPOS-X.HTML ============== */
//Modifica el JavaScript para agregar la clase .alumno-contenedor a cada div que se inserte.

// Insertar el contenido en el div de alumno-container
if (alumnosGuardados) {
    let contenedor = document.getElementById('alumno-container');
    let alumnosArray = JSON.parse(alumnosGuardados);
    alumnosArray.forEach(alumno => {
        let div = document.createElement('div');
        div.classList.add('alumno-contenedor'); // Añadir la clase con margen
        div.innerHTML = alumno;
        contenedor.appendChild(div); // Añadir el nuevo div al contenedor
    });
}




/*
Consideraciones:

    Si tienes múltiples elementos con la clase .no-mostrar, 
    este código asegurará que solo se muestre el que está dentro del mismo
    contenedor .cajas-alumnos.

    ********** NUEVO CÓDIGO *************

    // Seleccionar todos los botones de la modal
let botonesGrupo = document.querySelectorAll('.caja-modal button');

// Iterar sobre cada botón y agregar un event listener
botonesGrupo.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Capturar el texto del botón clicado
        let grupoSeleccionado = event.target.textContent;

        // Verificar si el texto comienza con "Grupo"
        if (grupoSeleccionado.startsWith("Grupo")) {
            // Extraer el número de grupo del texto (ej. "Grupo 2" -> "2")
            let numeroGrupo = grupoSeleccionado.split(" ")[1];

            // Encuentra el div con la clase caja-contenedor-alumnos
            let cajaAlumno = boton.closest('.cajas-alumnos-botones').querySelector('.cajas-alumnos');
            
            // Encuentra el botón verde y lo oculta
            let botonVerde = cajaAlumno.querySelector('.boton-verde');
            if (botonVerde) {
                botonVerde.style.display = 'none'; // Ocultar el botón verde
            }

            // Guarda los elementos en localStorage (asegurando que se acumulen)
            let alumnosGuardados = localStorage.getItem('alumnos') || '[]';
            let alumnosArray = JSON.parse(alumnosGuardados);
            alumnosArray.push(cajaAlumno.outerHTML);
            localStorage.setItem('alumnos', JSON.stringify(alumnosArray));

            // Redirigir a otro archivo donde se mostrará el contenido según el grupo seleccionado
            window.location.href = `grupo-${numeroGrupo}.html`;
        }
    });
});


        *********** MI CÓDIGO, ponerlo linea 54 **********

botonesGrupo.forEach(boton => {
    boton.addEventListener('click', (event) => {
        
        // Verificar si es el botón de Grupo 1
        if (event.target.textContent === "Grupo 1") {
            // Encuentra el div con la clase caja-contenedor-alumnos
            let cajaAlumno = boton.closest('.cajas-alumnos-botones').querySelector('.cajas-alumnos');
            
             // Encuentra el botón verde y lo oculta
             let botonVerde = cajaAlumno.querySelector('.boton-verde');
             if (botonVerde) {
                 botonVerde.style.display = 'none'; // Ocultar el botón verde
             }

            // Guarda los elementos en localStorage (asegurando que se acumulen)
            let alumnosGuardados = localStorage.getItem('alumnos') || '[]';
            let alumnosArray = JSON.parse(alumnosGuardados);
            alumnosArray.push(cajaAlumno.outerHTML);
            localStorage.setItem('alumnos', JSON.stringify(alumnosArray));

            // Redirigir a otro archivo donde se mostrará el contenido
            window.location.href = 'grupo-1.html';
            
        }
    });
});

*/

