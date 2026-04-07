// {
//     var name= "umang";
//     var name="singh";
//     name="umang singh";
//     console.log(name);
// }
// console.log(name);


// let a=10;
// a=20; //cannot be declared again but can be reassigned
// console.log(a);

// const name = "umang";
// console.log(name);

// let a="umang";
// console.log(typeof a);
// let b=10;
// console.log(typeof b);
// let c=true;
// console.log(typeof c);
// let d;
// // console.log(typeof d);


// const add = (a,b) => a+b;
// console.log(add(5,3));           arrow function

// let numbers =[1, 2, 3, 4];
// let square=numbers.map(num => num*num);
// console.log(square);




// let numbers =[10, 15 ,20, 25];
// let result = numbers.filter(num => num>15);            
// console.log(result);                             filter()

// let students ={
//     name: "umang",
//     age: 20,
// };
// let jsonData = JSON.stringify(students);             javaScript object to JSON string
// console.log(jsonData);



// let jsonData = '{"name": "umang", "age": 20}';
// let students = JSON.parse(jsonData);
// console.log(students);

// let numbers = [1, 2, 3, 4, 5];
// for(let value of numbers){
//     console.log(value);
// }


// const add = (a,b) => a+b;
// console.log(add(5,3));           arrow function


let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});


