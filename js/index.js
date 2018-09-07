if (Math.random() <= 0.5 ) {
    const link = document.querySelector('a');
    link.textContent = '🙈Programming Mentor';
    link.href = 'https://t.me/programmingmentor';
}

const section = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

section.appendChild(para);
para.appendChild(document.createTextNode('Hello World!'));
section.appendChild(para.cloneNode(true));

const btn = document.createElement('button');
btn.textContent = 'Delete paragraph';
section.appendChild(btn);
btn.addEventListener('click', e => {
    const pars = document.querySelectorAll('p');
    const par = pars[pars.length-1];
    if (par) {
        par.parentNode.removeChild(par);
    }
});


const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(),
            1000);


const jsonStr = `
[
    {
        "title": "Tesla X",
        "price": 100000
    },
    {
        "title": "Tesla 3",
        "price": 50000
    },
    {
        "title": "Ferrari F450",
        "price": 300000
    },
    {
        "title": "Toyota Corolla",
        "price": 25000
    }
]
`
const products = JSON.parse(jsonStr);
products.forEach( product => {
  document.body.innerHTML += `<p>Product Title: ${product.title},
    Product price: ${product.price}</p>`;  
});


$('.jq-fun').click(() => {
   $('p').toggle(1000); 
});