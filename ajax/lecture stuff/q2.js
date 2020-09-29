import { URL, ID, USER_TOKEN } from "./keys.js" //something to do with axios?
console.log(URL)
let getRandomSong = () => {
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    axios.get(URL, { params: { ids: ID }, headers: { Authorization: AuthStr } })
        .then(response => window.open(response.data.albums[Math.floor(Math.random() * Math.floor(3))].tracks.items[Math.floor(Math.random() * Math.floor(10))].external_urls.spotify))
        .catch(err => console.log(err));
}
document.getElementById("button").addEventListener("click", getRandomSong)
