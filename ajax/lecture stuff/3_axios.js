let getUserName = () =>{
    axios.get("https://randomuser.me/api/") // axios returns a promise
    .then(response => console.log(response.data.results[0].name.first))
    .catch (=> console.log(err))

 }

 document.getElementById("button").addEventListener("click", getUserName)

//  inspect element -> network, shows as XHR requests. Not fetch. 