

let array=['Mayukh','Rahul','Tejas']
localStorage.setItem('students', JSON.stringify(array))
let b=JSON.parse(localStorage.getItem('students'))
console.log(b)

let myobj={
    name: 'Mayukh',
    age :27
};
 let arr_obj=JSON.stringify(myobj);
 localStorage.setItem("myObj", arr_obj);
 let x=JSON.parse(localStorage.getItem("myObj"));
 console.log(x)