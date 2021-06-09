// object property shorthand

const name = 'Chris'
const userAge = 19
const user = {
    name,
    age: userAge,
    location: 'Langhorne'

}

console.log(user)

//object destructuring

const product = {
    label: 'Pencil',
    price: 1,
    stock: 100,
    salePrice: undefined,
    rating: 4.2

}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)    
}

transaction('order', product)