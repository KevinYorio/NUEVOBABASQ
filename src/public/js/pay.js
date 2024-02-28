console.log("asd")

const getToken = () => {

    const token = localStorage.getItem("token");
    return token;

}

const fetchReserve = async (data) => {

    const request = await fetch("api/reserves", {
  
      headers: {
        "Content-Type": "application/json", // Agregue el header Content-Type con valor application/json
        "Authorization": `${ getToken() }`, // Mantenga su header de autorización existente
      },
      method: "POST",
      body: data,
  
    });
  
    if (request.ok) {
  
      const response = await request.json();
      console.log(response);
  
    } else {
      location.href = "/";
    }
  
  };


const makeReserve = async() => {

    const reserveData = localStorage.getItem("reserveData");
    await fetchReserve(reserveData);
    //localStorage.removeItem("reserveData");

}

makeReserve();