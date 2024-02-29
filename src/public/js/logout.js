const logout = () => {

    window.localStorage.removeItem("token");
    window.location.href = "/"
    
};


const elemento = document.getElementById("login");//seleccionas el boton login
const elementoLogout =  document.getElementById("logout"); //seleccionas el boton logout

if( localStorage.getItem("token") ){

    elemento.style.display = "none"
    elementoLogout.style.display = "block"

}else{

    elemento.style.display = "block"
    elementoLogout.style.display = "none"
    
}