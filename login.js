
//functions

let forget=()=>{
    window.location.href="forget.html"
}

let but=document.getElementById("nx")
let head=document.getElementById("hd")
let div1=document.getElementById("emy")
let div2=document.getElementById("pussy")
let box1=document.getElementById("nx");
let box2=document.getElementById("lo");

div1.classList.remove("passh")
box1.classList.remove("nx")



let button=document.getElementById("next").addEventListener("click",function(event){

  event.preventDefault()
  head.innerText="Password"
  div1.classList.add("passh")
  div2.classList.remove("passh")

  box1.classList.add("nx")
  box2.classList.remove("nx")
  


  // but.innerText="Login"
  // but.setAttribute("id", "log")
  // but.addEventListener("click",function(){
  //   login()
    
  // })
})

// next function to login


let arr = JSON.parse(localStorage.getItem("userData")) || [];
let loginn=document.getElementById("lo").addEventListener("click", function(){
  let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
    
    arr.forEach(element => {
      if(element.email==email && element.password==password){
          alert("login successsfull")
          window.location.href="homepage.html"
        }else{
            alert("wrong credentials")
          }
          // console.log(element)
          // localStorage.setItem("userData", JSON.stringify(arr))
      
    });
})

// let login= ()=>{
//   let email=document.getElementById("email").value
//   let password=document.getElementById("pass").value
  
//   arr.forEach(element => {
//     // if(element.email==email && element.password==password){
//       //   alert("login successsfull")
//       //   window.location.href="homepage.html"
//       // }else{
//         //   alert("wrong credentials")
//         // }
//         console.log(element)
//         localStorage.setItem("userData", JSON.stringify(arr))
    
//   });
  
// }
