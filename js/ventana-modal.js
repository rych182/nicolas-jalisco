
/*      MI CODIGO
let cajasModal = document.querySelectorAll('.caja-modal');

agregarAlumnos.forEach( agregarAlumno => {
    agregarAlumno.addEventListener('click', () => {
        alert("Estoy dando click a la caja modal");
    });
});
*/

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

/*
Consideraciones:

    Si tienes múltiples elementos con la clase .no-mostrar, 
    este código asegurará que solo se muestre el que está dentro del mismo
    contenedor .cajas-alumnos.

*/


// Recorre cada elemento y añade el evento click
/*
cajasModal.forEach(caja => {
    caja.addEventListener('click', () => {
        alert("Estoy dando click a la caja modal");
    });
});
*/
