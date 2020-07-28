const getBtn = document.querySelector('#get-btn')
const postBtn = document.querySelector('#post-btn')

const getData = () => {
    axios.get('https://jsonplaceholder.ir/posts/1')
    .then(res => {
        console.log(res)
    })

}

const postData = () => {
    axios.post('https://jsonplaceholder.ir/todos',{
        userId: 2,
        id: 20,
        title: 'تست ۲',
        completed: false
    }).then(res => {
        console.log(res)
    })

}


getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',postData)
