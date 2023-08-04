const title = document.querySelector('h1')
const p = document.querySelector('p')
const parrafo = document.querySelector('.parrafito')
const parrafo2 = document.querySelector('#pid')
const input = document.querySelector('input')

title.innerHTML = 'No es lo que parece <br> hola'
title.innerText = 'No es lo que parece <br> hola'

console.log(title.getAttribute('class'));
console.log(parrafo2.getAttribute('id'));
console.log(title.setAttribute('class', 'expeliarmus'));
console.log(title.getAttribute('class'));
title.classList.add('black')
title.classList.remove('expeliarmus')
input.value = "hola que tal xdxd pendejo"
document.createElement('img')

console.log(document.createElement('img'));
const imgxd= document.createElement('img')
imgxd.setAttribute('src','https://i.pinimg.com/736x/e0/d3/73/e0d373a5a28493a88c4854542f3b3a92.jpg')
// img.classList.add('perrocerveza')
// console.log(img)
pid.append(imgxd)

parrafo.innerText= '';
parrafo.append(imgxd);




