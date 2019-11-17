//Enable your user to enter a city + country and return the temperature in Fahrenheit
//const apiKey = 6a81e0e11d96218ba821414b56c56e6a
const btn = document.querySelector("button")

btn.addEventListener('click', ()=> {

  const input = document.querySelector("input").value
  


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=6a81e0e11d96218ba821414b56c56e6a`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
  console.log((response.main.temp * 5/9) +32 - 132)
  let text = document.createTextNode((response.main.temp * 5/9) + 32 -132)
  h1 = document.getElementById('look');
  h1.appendChild(text)
  })

  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
});

