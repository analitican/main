
fetch("https://analitican.github.io/main/menu.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);

const menu = data;

document.getElementById('menu1').innerHTML = `${menu[0]}`;


  });

//const menu = document.getElementById('menu1');
//menu.innerText = "Home";
//`${data[0]}`
//document.getElementsByName('Menu2').innerHTML = `Home`;