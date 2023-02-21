

// let array=['Mayukh','Rahul','Tejas']
// localStorage.setItem('students', JSON.stringify(array))
// let b=JSON.parse(localStorage.getItem('students'))
// console.log(b)

// let myobj={
//     name: 'Mayukh',
//     age :27
// };
//  let arr_obj=JSON.stringify(myobj);
//  localStorage.setItem("myObj", arr_obj);
//  let x=JSON.parse(localStorage.getItem("myObj"));
//  console.log(x)


function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.EmailId.value;
    const phonenumber=event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber);
    const localStorageContent= localStorage.getItem('usertDetails')
  
    const obj={
        name: name,
        email: email,
        phonenumber:phonenumber
    }
    localStorage.setItem('userDetails',JSON.stringify(obj))
    
}
// localStorage.clear()