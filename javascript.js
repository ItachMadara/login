let form= document.querySelector(".form");
let btn1=document.querySelector("#btn");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    btn1.addEventListener("click",()=>{
let input1=document.querySelector("#input-pass").Value;
let input2=document.querySelector("#user-name").value;
if(input1==''){
    alert("Password must be filled")
}
else if(input2==''){
    alert("user name must be filled")
}   
})
})