//Obtener el formulario
const formNode = document.getElementById('register-form')

// Escuchar el submit y detenerlo
formNode.addEventListener('submit', function(e) {

  // Detener el Submit
  e.preventDefault();

  // Obtener la información del formulario
  const nameNode = document.getElementById('name');
  const emailNode = document.getElementById('email');
  const passwordNode = document.getElementById('passwordRegistry');


  // Validar formulario

  // Procesar Datos
  let data = {
    name: nameNode.value,
    email: emailNode.value,
    password: password.value,
  };

  // Enviar la información al API
  const myRequest = new Request(
    'http://localhost:3000/products',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
    }
  );

  fetch
