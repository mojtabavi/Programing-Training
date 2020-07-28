const products = [{
    title: 'Book 1',
    price: 79
},
{
    title: 'Book 2',
    price: 29
},
{
    title: 'Book 3',
    price: 59
}]


getProduct = () => {
    setTimeout(() => {
        const fetchProduct = products.map((item) => {
            return `Product: ${item.title} - Price: ${item.price}`
        })
        console.log(fetchProduct)
    },2000)
}


createProduct = (callback) => {
    setTimeout(() => {
        products.push({
            title: 'New Book',
            price: 78

        })
        callback()
    },3000)
}


createProduct(getProduct)