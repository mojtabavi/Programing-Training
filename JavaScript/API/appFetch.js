const getBtn = document.querySelector('#get-btn')
const postBtn = document.querySelector('#post-btn')

const sendHttpRequest = (method,url,data) => {
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    })
    .then(res =>{
        return res.json()
    })

}



const getData = () => {
    sendHttpRequest('GET', 'https://jsonplaceholder.ir/posts/1')
    .then(responseData => {
        console.log(responseData)
    })


}

const postData = () => {
    sendHttpRequest('POST', 'https://jsonplaceholder.ir/todos',{
        userId: 2,
        id: 20,
        title: 'تست ۲',
        completed: false
    })
    .then(responseData => {
        console.log(responseData)
    })


}


getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',postData)
