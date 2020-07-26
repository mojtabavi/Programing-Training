const getSaveProducts = () => {
    const productsJSON = localStorage.getItem('products')
    try{
        return (productsJSON !== null) ? JSON.parse(productsJSON) : []
    }catch(e){
        return []
    }
    // return (productsJSON !== null) ? JSON.parse(productsJSON) : []
    // if (productsJSON !== null) {
    //     return JSON.parse(productsJSON)
    // } else {
    //     return []
    // }
}

const saveProducts = products => {
    localStorage.setItem('products', JSON.stringify(products))
}

const removeProduct = id => {
    const productIndex = products.findIndex(item => item.id === id)
    if (productIndex > -1) {
        products.splice(productIndex, 1)
    }
}

const toggleProduct = id => {
    const product = products.find(item => item.id === id)
    if (product !== undefined) {
        product.exist = !product.exist
    }
}

const sortProducts = (product, sortBy) => {
    if (sortBy === 'byEdited') {
        return products.sort((a, b) => {
            if (a.updated > b.updated) {
                return -1
            } else if (a.updated < b.updated) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return products.sort(function (a, b) {
            if (a.created > b.created) {
                return -1
            } else if (a.created < b.created) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return products
    }


}

const renderProducts = (products, filters) => {
    products = sortProducts(products, filters.sortBy)
    let filteredProducts = products.filter(item => item.title.toLowerCase().includes(filters.searchItem.toLowerCase()))
    filteredProducts = filteredProducts.filter((item) => {
        if (filters.availableProducts) {
            return item.exist
        } else {
            return true
        }
    })
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function (item) {
        document.querySelector('#products').appendChild(createProductDOM(item))
    })
}

const createProductDOM = function (product) {
    const productEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const productItem = document.createElement('a')
    const removeButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = !product.exist
    productEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleProduct(product.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    productItem.textContent = product.title
    productItem.setAttribute('href', `./edit-product.html#${product.id}`)
    productEl.appendChild(productItem)

    removeButton.textContent = 'Remove'
    productEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeProduct(product.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    return productEl
}

const lastEditMessage = (timestamp) => {
    return `Last Edit: ${moment(timestamp).locale('fa').fromNow()}`
}