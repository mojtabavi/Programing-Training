let first = [1,2,3];
let second = [4,5,6];

// Defualt Method
// const combined = first.concat(second);

let combined = [...first,'a',...second,'b'];
console.log("combined",combined);

// Print: combined > Array(8) [ 1, 2, 3, "a", 4, 5, 6, "b" ]

const clone = [...first];
console.log(clone);

first = {name: 'Ali'};
second = {job: 'instructur'};
combined = {...first,...second,location: 'Austria'};
console.log("combined",combined);