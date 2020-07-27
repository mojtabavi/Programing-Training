// const fullName = 'Masood Sadri'
// const parts = fullName.split(' ')
// console.log(parts)

const product = {
    title: 'Book',
    price: 79,
    get productInfo(){
        return `title: ${product.title} - price: ${product.price}`
    },

    set productInfo(value){
        const parts = value.split(' ')
        this.title = parts[0]
        this.price = parts[1]
    }
}

product.productInfo = 'Book2 59'

console.log(product.productInfo)