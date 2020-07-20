const getSaveProducts = function() {
    const productsJSON = localStorage.getItem('products')
    if (productsJSON !== null) {
        return JSON.parse(productsJSON)
    } else {
        return []
    }
}

const saveProducts = function(products) {
    localStorage.setItem('products', JSON.stringify(products))
}

const removeProduct = function(id) {
    const productIndex = products.findIndex(function(item) {
        return item.id === id
    })
    if (productIndex > -1) {
        products.splice(productIndex, 1)
    }
}

const toggleProduct = function(id) {
    const product = products.find(function(item) {
        return item.id === id
    })
    if (product !== undefined) {
        product.exist = !product.exist
    }
}

const renderProducts = function(products, filters) {
    let filteredProducts = products.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    filteredProducts = filteredProducts.filter(function(item) {
        if(filters.availableProducts) {
            return item.exist
        } else {
            return true
        }
    })
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function(item) {
        document.querySelector('#products').appendChild(createProductDOM(item))
    })
}

const createProductDOM = function(product) {
    const productEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const productItem = document.createElement('a')
    const removeButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = !product.exist
    productEl.appendChild(checkbox)
    checkbox.addEventListener('change', function() {
        toggleProduct(product.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    productItem.textContent = product.title
    productItem.setAttribute('href',`./edit-product.html#${product.id}`)
    productEl.appendChild(productItem)

    removeButton.textContent = 'Remove'
    productEl.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeProduct(product.id)
        saveProducts(products)
        renderProducts(products, filters)
    })

    return productEl
}