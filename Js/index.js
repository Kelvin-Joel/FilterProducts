import { ListProducts } from './ListProducts.js'

const contenedor = document.getElementById('contenedor')
const nav = document.getElementById('nav')
const select = document.getElementById('select')

const AddAll_Products = (list) => {
    contenedor.innerHTML = ''
    list.map(item => (
        contenedor.innerHTML += `
    <div class="card card-body mx-2 mb-3 text-center">
        <img class="m-auto" src=${item.img} />
        <p class="font-weigth">${item.name}</p>
    </div>
    `
    ))
}

AddAll_Products(ListProducts);

const FilterProducts = (categoria) => {
    let product = ListProducts.filter(item => item.categoria === categoria)
    contenedor.innerHTML = '';
    AddAll_Products(product)
}

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
        let categoria = e.target.dataset.categoria
        FilterProducts(categoria)
    } else {
        AddAll_Products(ListProducts);
    }
})

select.addEventListener('change', (e) => {
    let value = e.target.value
    value === 'todos' ? AddAll_Products(ListProducts) : FilterProducts(e.target.value)
})
