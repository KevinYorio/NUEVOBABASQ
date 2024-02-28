
const form = document.getElementById("loginForm")

const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const loginData = {

        email:userEmail.value,
        password:userPassword.value

    }

    const request = await fetch("/api/auth/login", {

        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(loginData)

    });

    if(request.ok){

        console.log(request)

        const response = await request.json();
        const token = response.payload

        localStorage.setItem("token",token);

        location.href = "/alumno"

    }else{

        location.reload();

    }

})





