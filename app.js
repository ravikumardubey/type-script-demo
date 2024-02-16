// Alias 
// type  Users  = {
//     firstname : string,
//     lastname : string,
//     email : string
// }
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 30 }, { age: 90 }, { age: 60 }];
console.log(getOldest(people));
