// Array Method .reduce
// Let’s say we received an array of users in the form [{id:..., name:..., age:... }].

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];


function groupById(users) {
    return users.reduce((usersById, user) => {
        usersById[user.id] = user;
        return usersById;
    }, {})
}

// object = {};
// object[users[0].id] = users[0];
// console.log(object);

let usersById = groupById(users);
console.log(usersById)
/* expected output:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
    // Please use array .reduce method in the solution.
