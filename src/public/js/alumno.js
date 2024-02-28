const userP = document.getElementById("fullname-p");
const edadP = document.getElementById("age-p");
const reserveContainer = document.getElementById("reserves-container");

const getToken = () => {

    const token = localStorage.getItem("token");
    return token;

}

const getData = async() => {

    const request = await fetch("/api/auth", {

        method:"GET",
        headers:{
            "Authorization":`${ getToken() }`
        }
        
    });

    if(request.ok){

       const response = await request.json();
       const user = response.payload;

       userP.innerText = await user.name;
       edadP.innerText = await user.age;

       const getAllTimes = () => {

        const allTimes = [];
        const allReserves = user.reserves;

        allReserves.forEach((reserve)=>{

            reserve.times.forEach((time)=>{

                allTimes.push(time)

            })
            
        });

        allTimes.map((time)=>{

            const p = document.createElement("p");
            p.innerText = `${time.date} - ${time.seat}`;

            reserveContainer.appendChild(p)

        })

       }

       getAllTimes();

    }else{
        location.href = "/"
    }
    
}

getData();
