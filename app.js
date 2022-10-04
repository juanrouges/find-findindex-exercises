// ==================================================
// >>>>>>>>>>>>>>> find & findIndex <<<<<<<<<<<<<<<<<
// ==================================================
// 1. findUserByUsername
// --------------------------------------------------
// Write a function called findUserByUsername which 
// accepts an array of objects, each with a key of 
// username, and a string. The function should return 
// the first object with the key of username that matches 
// the string passed to the function. If the object is 
// not found, return undefined.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// findUserByUsername(users, 'taco') // undefined
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:1 ---------------------------------');
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
console.log(findUserByUsername(users, 'mlewis'));
console.log(findUserByUsername(users, 'taco'));

function findUserByUsername(arr, username) {
  const find = arr.find(function(value) {    
    return value.username === username;
  })
  return find;
};
// --------------------------------------------------
// 2. removeUser
// --------------------------------------------------
// Write a function called removeUser which accepts an 
// array of objects, each with a key of username, and a 
// string. The function should remove the object from the 
// array and return this object. If the object is not 
// found, return undefined.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// removeUser(users, 'akagen') // {username: 'akagen'}
// removeUser(users, 'akagen') // undefined
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:2 ---------------------------------');
const usersElite = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
console.log(removeUser(usersElite, 'akagen'));
function removeUser(arr, string) {
  const findIndex = arr.findIndex(function(value) {
    return value.username === string; 
  })
  usersElite.splice(findIndex, findIndex);
  return usersElite;
} 