const User = function(email) {
    this.email = email
}

const username = new User('test@test.com')
console.log(username)

const username2 = new User('test2@test2.com')
console.log(username2)