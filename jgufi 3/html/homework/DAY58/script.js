let form1=document.getElementById("form1")
let form2=document.getElementById("form2")
let form3=document.getElementById("form3")
let btn=document.getElementById("btn")
let body=document.getElementById("body")
let info=document.getElementById("info")
btn.addEventListener("click",()=>{
    info.innerHTML+=`
    <div class="info">
        <p>First name: ${form1.value}</p>
        <p>Last name: ${form2.value}</p>
        <p>Age: ${form3.value}</p>
    </div>`
})