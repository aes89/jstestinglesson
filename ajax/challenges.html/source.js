let toiletData;

Papa.parse("https://data.gov.au/data/dataset/553b3049-2b8b-46a2-95e6-640d7986a8c1/resource/34076296-6692-4e30-b627-67b7c4eb1027/download/toiletmapexport_200702_111356.csv", {
            download: true,
            header: true,
            complete: function (results) {
                // To see the data that a public toilet has in this API, 
                // make sure you uncomment this console.log line
                // and check the browser console!
                toiletData = results.data;
            }
        });

let form = document.querySelector("#postcodeForm");

let findToilets = (event) => {
  event.preventDefault();

  let parentDiv = document.querySelector("#toiletResults")
  parentDiv.innerHTML = ""

  let formInput = form.postcodeInput.value
  let result = [];
  result = toiletData.filter(toilet => formInput == toilet.Postcode)
  
  result.forEach((toilet) => {

    let listItem = document.createElement('ul')
    listItem.innerHTML = (`
      <li>Name: ${toilet.Name}</li>
      <li>Address: ${toilet.Address1}</li>
    `)

    parentDiv.appendChild(listItem);
  })
}