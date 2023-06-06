console.log("test")

// ambil param URL dalam bentuk string
const queryString = window.location.search;

// convert string to object params
const urlParams = new URLSearchParams(queryString);

const entries = urlParams.entries();

const listParams = document.getElementById('list1')
let itemParams ='';
for(const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    itemParams += `<li>${key} ${value}</li>`
  }

listParams.innerHTML = itemParams
