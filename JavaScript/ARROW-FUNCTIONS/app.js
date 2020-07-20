// const productName = (title) => {
//     return title 
// }
//"""" we have one line return we can user below method"""""
// const productName = title => title


const products = [{
    title: 'Book1',
    exist: true
},
{
    title: 'Book2',
    exist: false
},
{
    title: 'Book3',
    exist: true
}]


// const filteredProducts = products.filter((item) => {
//     return item.exist === true
// })

//or

const filteredProducts = products.filter(item => item.exist == true)

console.log(filteredProducts)