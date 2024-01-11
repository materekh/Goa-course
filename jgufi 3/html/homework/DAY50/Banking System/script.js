var form=document.getElementById("depoform");
var mon=document.getElementById("money");
var depoButton=document.getElementById("depo");
var widthButton=document.getElementById("widt");
var money=0;
depoButton.addEventListener('click',function(){
    money+=Number(form.value);
    mon.textContent=money;
})
widthButton.addEventListener('click',function(){
    if(money<Number(form.value)){
        alert("GOAshi girchev shesvlas, tanxebi ar gkofnis");
    }
    else{
        money-=Number(form.value);
        mon.textContent=money;
    }
})