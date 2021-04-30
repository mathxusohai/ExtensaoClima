const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=6ee3dabf6902a2c892a6adfab2127c8f'
fetch(url)
.then(response => response.json())
.then(data => {
  let element = document.getElementById('tempmax')
  element.innerHTML = `<p>${data.main.temp_max}</p>`

  let element1 = document.getElementById('tempmin')
  element1.innerHTML = `<p>${data.main.temp_min}</p>`

  let element2 = document.getElementById('temp')
  element2.innerHTML = `<p>${data.main.temp}</p>`

  let element3 = document.getElementById('name')
  element3.innerHTML = `<p>${data.name}</p>`

  let element4 = document.getElementById('sensacao')
  element4.innerHTML = `<p>${data.main.feels_like}</p>`
  
  console.log(data)

})
.catch(err=>console.log(err))

