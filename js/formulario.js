document.getElementById('miFormulario').addEventListener('submit', function(event) {
    let isValid = true;

    // Validar campo de usuario
    const usuario = document.getElementById('usuario');
    const usuarioError = document.getElementById('usuarioError');
    if (usuario.value.trim() === '') {
        usuarioError.style.display = 'block';
        isValid = false;
    } else {
        usuarioError.style.display = 'none';
    }

    // Validar campo de contraseña
    const contrasena = document.getElementById('contrasena');
    const contrasenaError = document.getElementById('contrasenaError');
    if (contrasena.value.trim() === '') {
        contrasenaError.style.display = 'block';
        isValid = false;
    } else {
        contrasenaError.style.display = 'none';
    }

    // Si no es válido, prevenir el envío del formulario
    if (!isValid) {
        event.preventDefault();
    }
});

