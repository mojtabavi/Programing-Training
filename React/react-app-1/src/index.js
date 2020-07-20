const person = {
  name: 'Ali', // this is a property
  walk() {}, // this is a method
  talk() {}
};


person.talk();
person.name = '';

const targetMember = 'name';
person['name'] = 'John';