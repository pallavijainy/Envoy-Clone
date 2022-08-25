let forget=()=>{
    window.location.href="forget.html"
}

let but=document.getElementById("nx")
let head=document.getElementById("hd")
let div1=document.getElementById("emy")
let div2=document.getElementById("pussy")

div1.classList.remove("passh")
let button=document.getElementById("next").addEventListener("click",function(event){

  event.preventDefault()
  head.innerText="Password"
  div1.classList.add("passh")
  div2.classList.remove("passh")
  but.innerText="Login"
  but.addEventListener("click",function(){

    //here full login insertion 
    window.location.href="homepage.html"
  })
})