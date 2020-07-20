const titleElement = document.querySelector('#product-title')
const priceElement = document.querySelector('#product-price')
const removeElement = document.querySelector('#remove-product')
const dateElement = document.querySelector('#last-edit')

const productId = location.hash.substring(1)
// console.log(productId)

let products = getSaveProducts()

let product = products.find(function(item){
    return item.id === productId
})

if(product == undefined){
    location.assign('/index.html')
}

titleElement.value = product.title
priceElement.value = product.price

titleElement.addEventListener('input',function(e){
    product.title = e.target.value
    product.updated = moment().value0f()
    saveProducts(products)
})


priceElement.addEventListener('input',function(e){
    product.price = e.target.value
    product.updated = moment().value0f()
    saveProducts(products)
})

removeElement.addEventListener('click',function(e){
    removeProduct(product.id)
    saveProducts(products)
    location.assign('./index.html')
})


window.addEventListener('storage',function(e){
    if(e.key === 'products'){
        products = JSON.parse(e.newValue)
        product = products.find(function(item){
            return item.id === productId
        })

        if(product == undefined){
            location.assign('/index.html')
        }
        
        titleElement.value = product.title
        priceElement.value = product.price
    }
})