const person = {
  name: 'Ali',
  walk() {
    console.log(this)
  }
};


person.walk(); // Print objects

const walk = person.walk.bind(person);
walk(); // print undefind (it reference to window objects)