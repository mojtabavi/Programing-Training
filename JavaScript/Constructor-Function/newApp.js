 class User {
     constructor(id,email){
         this.id = id
         this.email = email
     }
     userInfo(){
         return `ID: ${this.id} - Email: ${this.email}`
     }
 }


 const username = new User(4,'test@test.com')
 console.log(username.userInfo())