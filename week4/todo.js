// GET request with axios
//url: http://api.bryanuniversity.edu/kelciMorgan/list

//get all
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))

//CORS error-- CORS-anywhere cross orgian resorse sharing 
//https:cors-anywhere.herokuapp.com/

//get one
/*
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list/4461600c-f411-4e37-8fc3-be6bd5069064")
.then(response => console.log(response.data))
.catch(error => console.log(error))*/