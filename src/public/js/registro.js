// registro.js

const registerUser = async (e) => {

  e.preventDefault();

  try {
    // Obtener datos del formulario
    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validación de edad mejorada
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 90) {
      alert("Por favor, ingrese una edad válida.");
      return false;
    }

    // Validación de contraseña y confirmación de contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
    }

    // Envío del formulario al servidor
    const formData = {
      name:fullName,
      age,
      email,
      password,
    };

    console.log(formData)

    const response = await fetch('/api/auth/register', {  // Cambiado el endpoint a '/user/registro'
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario al servidor.');
    }else{
      window.location.href = "/login"
    }

  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al enviar el formulario al servidor.');
  }

  // Devolver true para permitir que el formulario se envíe normalmente
  return true;
};

const form = document.getElementById("signupForm");

form.addEventListener("submit", registerUser );
