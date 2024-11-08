// Recuperar los alumnos guardados del localStorage para el grupo actual
let numeroGrupo = 2; // Cambia este número según el grupo (1, 2, 3, etc.)
let claveAlumnosGrupo = `alumnos_grupo_${numeroGrupo}`;

let alumnosGuardados = localStorage.getItem(claveAlumnosGrupo);

if (alumnosGuardados) {
    let contenedor = document.getElementById('alumno-container');
    let alumnosArray = JSON.parse(alumnosGuardados);
    alumnosArray.forEach(alumno => {
        let div = document.createElement('div');
        div.classList.add('alumno-contenedor');
        div.innerHTML = alumno;
        contenedor.appendChild(div);
    });
}
