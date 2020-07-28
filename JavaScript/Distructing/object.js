const product = {
    title: 'Book',
    price: 79
}

const {title,price,exist = true} = product

console.log(title)
console.log(price)
console.log(exist)