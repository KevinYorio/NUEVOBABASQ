const viewsControllers = {

    index: (req, res) => {

        res.render("index.html")
        
    },
    alumno: (req, res) => {

        res.render("alumno.html")
        
    },
    clases: (req, res) => {

        res.render("clases.html")
        
    },
    login: (req, res) => {

        res.render("login.html")
        
    },
    registro: (req, res) => {

        res.render("registro.html")
        
    },
    sobrenosotros: (req, res) => {

        res.render("sobrenosotros.html")
        
    },
    pay: (req, res) => {

        res.render("pay.html")
        
    }

};

export default viewsControllers;