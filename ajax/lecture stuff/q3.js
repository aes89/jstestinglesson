let covidSummary = () => {
    axios.get("https://api.covid19api.com/summary")
        .then(response => response.data.Global)
        .then(result => {
            let ul = document.createElement("ul")
            let li = document.createElement("li")
            li.textContent = `NewConfirmed: ${result.NewConfirmed}
                            NewDeaths: ${result.NewDeaths}
                            NewRecovered: ${result.NewRecovered}
                            TotalConfirmed: ${result.TotalConfirmed}
                            TotalDeaths: ${result.TotalDeaths}
                            TotalRecovered: ${result.TotalRecovered}`
            document.body.appendChild(ul).appendChild(li)
        })
        .catch(err =>  console.log(err))
}
document.getElementById("button").addEventListener("click", covidSummary)