

let apikey = "8ffda9e1";

async function movies(event) {
    event.preventDefault();
    let movieName = document.getElementById("movie").value;

    // let url =`https://omdbapi.com/?apikey=8ffda9e1&s=${movieName}`
    // console.log(url)

    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movieName}`
    console.log(url)



    // let url ="http://www.omdbapi.com/?apikey="+apikey;
    // url=url+"&t="+movieName;


    // let url="https://api.themoviedb.org/3/search/movie?api_key=0eaad18ad8092d58cef6b9db7c793e13&language=en-US&page=1&include_adult=false";


    let res = await fetch(url)          //async and await syntax 

    let data = await res.json()
    appendData(data)
    console.log(data)

    
    // fetch(url)
    // .then(function (res)       // .then and .catch syntax 
    // {
    //     return res.json();
    // })
    // .then(function(res)
    // {
    //     console.log(res);
    //     appendData(res);
    // })
    // .catch(function(err)
    // {
    //     console.log("err:",err);
    // });

   
}

function appendData(data) {
    //console.log(data);
    if (data.Response == "False") {
        document.getElementById("container").innerHTML = null;
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = "https://c.tenor.com/FcVg5W9zZJQAAAAM/error.gif";
        box.append(img);
        document.getElementById("container").append(img);
    }
    else {
        document.getElementById("container").innerHTML = null;
        let box = document.createElement("div");
        box.setAttribute("id", "box")

        let poster = document.createElement("img");
        poster.src = data.Poster;

        let div = document.createElement("div");

        let title = document.createElement("h2");
        title.innerText = `Title : ${data.Title}`;

        let actor = document.createElement("p");
        actor.innerText = `Actors : ${data.Actors}`;

        let plot = document.createElement("p")
        plot.innerText = `Plot : ${data.Plot}`
        plot.style.color="purple"

        let lang = document.createElement("p")
        lang.innerText = `Language : ${data.Language}`

        let release = document.createElement("p");
        release.innerText = `Release Date : ${data.Released}`;
        release.style.color="teal"

        if ((data.imdbRating) >= 8.5) {
            var rating = document.createElement("p");

            let i = document.createElement("i");

            rating.append(i);

            rating.innerText = `Imdb Recommended : ${data.imdbRating}`;
            rating.style.color="red"


        }
        else {
            var rating = document.createElement("p");
            rating.innerText = `Imdb Rating : ${data.imdbRating}`;
        }


        div.append(title, actor, plot, release,lang, rating);
        box.append(poster, div);
        document.getElementById("container").append(box);
    }

}