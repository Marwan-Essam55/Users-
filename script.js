var userList = [
  { id: 1, name: "mafia", age: 20, balance: 1000 },
  { id: 2, name: "Marwan ", age: 40, balance: 2000 },
  { id: 3, name: "maro", age: 25, balance: 3000 },
];

function getUserCount(users) {
  return users.length;
}
console.log("Total users:", getUserCount(userList));

function addNewUser(users, newUser) {
  return [...users, newUser]; 
}
var updatedUsers = addNewUser(userList, { id: 5, name: "maram", age: 20, balance: 1500 });
console.log("After adding user:", updatedUsers);

function updateUserBalance(users, userId, newBalance) {
  return users.map(user =>
    user.id === userId ? { ...user, balance: newBalance } : user
  ); 
}
var usersWithUpdatedBalance = updateUserBalance(updatedUsers, 3, 7000);
console.log("After updating balance:", usersWithUpdatedBalance);

function removeUserById(users, userId) {
  return users.filter(user => user.id !== userId); 
}
var finalUsers = removeUserById(usersWithUpdatedBalance, 3);
console.log("After removing user:", finalUsers);