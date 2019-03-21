const get = require('../lib');

const obj = {
  name: {
    first: 'Bill',
    last: 'Billiamson'
  },
  friends: null
};

console.log('String path first:', get(obj, 'name.first')); // Bill
console.log('Array path last:', get(obj, ['name', 'last'])); // Billiamson
console.log('Function path first:', get(() => obj.name.first)); // Bill

console.log('Null value', get(obj, 'friends')); // null
console.log('Undefined string path', get(obj, 'friends.0.name.first')); // undefined
console.log('Undefined function path', get(() => obj.friends[0].name.first)); // undefined

console.log('Default value string path', get(obj, 'hi.there.i.do.not.exist', 'But I do.')); // But I do.
console.log('Default value fn', get(() => hi.there.i.do.not.exist, 'But I do.')); // But I do.


const getter = get(obj);
console.log('Getter function path last:', getter(x => x.name.last)); // Billiamson
console.log('Getter string path first:', getter('name.first')); // Bill

console.log('Getter undefined function path', getter(x => x.friends[0].name.last)); // undefined
