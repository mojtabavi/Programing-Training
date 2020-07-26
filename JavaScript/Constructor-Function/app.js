const User = function(email,id) {
    this.email = email
    this.id = id
}

User.prototype.userInfo = function() {
    return `ID: ${this.id} - Email: ${this.email}`
}

const username = new User('test@test.com',2)
console.log(username.userInfo())

const username2 = new User('test2@test2.com',5)
console.log(username2.userInfo())