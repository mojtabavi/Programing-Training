const getBtn = document.querySelector('#get-btn')
const postBtn = document.querySelector('#post-btn')

const sendHttpRequest = (method,url,data) => {
    const promise = new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open(method,url)
    xhr.responseType = 'json'
    if(data){
        xhr.setRequestHeader('Content-Type','application/json')
    }
    xhr.onload = () => {
        resolve(xhr.response)
    }
    xhr.onerror = () => {
        reject('Error')
    }
    xhr.send(JSON.stringify(data))

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
    sendHttpRequest('POST','https://jsonplaceholder.ir/todos',{
        userId: 2,
        id: 20,
        title: 'تست ۲',
        completed: false
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}


getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',postData)