const api = axios.create({
    baseURL: "https://679a4dcd747b09cdccce6b1a.mockapi.io",
});
api.get('/Tavarlar').then((res) => console.log(res));

let all=document.querySelector('.box');

function asd(arr){
    arr.forEach(e => {
        all.insertAdjacentHTML('beforeend',
        `<div id="data">
            <h1>${e.name}</h1>
            <img src="${e.image}" alt="Product Image">
            <p>${e.price}</p>
        </div>` 
    )
    });
}

function createP() {
    api.post('/Tavarlar', {name: 'Ananas', title: "sariq", price: 200,})
}

