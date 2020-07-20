const person = {
  name: 'Ali',
  walk() {
    console.log(this)
  }
};


person.walk(); // Print objects

const walk = person.walk;
walk(); // print undefind