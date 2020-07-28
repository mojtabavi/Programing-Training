const getBtn = document.querySelector('#get-btn')
const postBtn = document.querySelector('#post-btn')

const sendHttpRequest = (method,url) => {
    const promise = new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open(method,url)
    xhr.responseType = 'json'
    xhr.onload = () => {
        resolve(xhr.response)
    }
    xhr.onerror = () => {
        reject('Error')
    }
    xhr.send()

    })
    return promise

}



const getData = () => {
    sendHttpRequest('GET','https://jsonplaceholder.ir/posts/1')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

}

const postData = () => {

}


getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',postBtn)