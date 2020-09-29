import { CLIENT_ID } from "./keys.js" //need to specify file type .js

let getRandomPic = () => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`)
        .then(response => {
            let img = document.createElement("img")
            img.src = response.data.urls.thumb
            document.body.appendChild(img)
        })
        .catch(err => console.log(err));
    console.log("test")
}
document.getElementById("button").addEventListener("click", getRandomPic)