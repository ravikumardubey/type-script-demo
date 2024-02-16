// Alias 
// type  Users  = {
//     firstname : string,
//     lastname : string,
//     email : string
// }

// const  users:Users  = {
//     firstname : 'dubey',
//     lastname : 'dubey',
//     email : 'dubey.ravi7@gmail.com'
// }

// function getData(userDate : Users){
//     return userDate.email;
// }

// console.log(getData(users));

// Interfaces

// Type Alias 
// type ID = number;
// const userid :ID = 123;
// console.log(userid);

// interface Subject1{
//     subjetName: string;
//     marks: number;
//     greade: number;
// }
// interface BanckAccount{
//     name : string;
//     age  : number;
//     mobile : number;
//     email : string;
//     subjects :Subject1[];
// }
// const subject1 : Subject1 ={
//     subjetName: 'hindi',
//     marks: 12,
//     greade: 2,
// }
// const accountDetail : BanckAccount={
//     name : 'ravi kumar',
//     age : 12,
//     mobile : 99586631113,
//     email : 'dubey.ravi7@gmail.com',
//     subjects :[subject1],
// }
// console.log(accountDetail);


// Interface extends keyword
// interface book{
//     title : string,
//     page : number,
//     author : string,
//     price : number,
// }
// interface ebook extends book{
//     size : number,
// }
// interface audioBook extends ebook{
//     time : number,
//     quality : string,
// }
// const bookDetail : audioBook ={
//     title : 'This is a application',
//     page : 12,
//     author : 'ravi kumar dubey',
//     price : 20,
//     size : 41,
//     time : 12,
//     quality : 'hight',
// }
// console.log(bookDetail);


//Interface merging
// interface student {
//     name : string,
//     age : number,
//     rollnumber : number
// }
// interface student {
//     faterName : string,
//     motherName : string,
// }
// const studentDetail:student ={
//     name : '',
//     age : 12,
//     rollnumber : 233,
//     faterName : 'ravi kumar',
//     motherName : 'ravi kasf',
// }
//console.log(studentDetail);

//Union 
//  type ID = number | string;
// function getId(id:ID){
//     //Narrowing
//     if(typeof id==='string'){
//         console.log(id.toUpperCase());
//     }else{
//         console.log(id);
//     }
// }
// getId('Ravi kumar dubey');

// function getDataVel(x : string | number[]){
//    return  x.slice(2,5);
// }
// console.log(getDataVel('ravi kumar dubey'));


//generics
// function logAnything<T>(arg: T):T{
//     console.log(arg);
//     return arg;
// }
// logAnything([2,3,3]);

//Generic
interface HasAge {
    age: number,
}
function getOldest(people: HasAge[]): HasAge {
   return people.sort((a, b)=>b.age - a.age)[0];
   console.log(a);
}
const people = [{age: 30}, {age: 90}, {age: 60}];
console.log(getOldest(people));
