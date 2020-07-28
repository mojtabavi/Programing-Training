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


createProduct = () => {
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            products.push({
                title: 'New Book',
                price: 78
    
            })
            const error = false
        if(!error){
            resolve()
        }else{
            reject('Error')
        }
        },3000) 
    })
    
}


createProduct().then(getProduct).catch(err => console.log(err))