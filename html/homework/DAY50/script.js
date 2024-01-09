var form=document.getElementById("depoform"),mon=document.getElementById("money"),money=0;
function depo(){
    money+=Number(form.value);
    mon.textContent=money;
}
function widthdraw(){
    if(money<Number(form.value)){
        alert("GOAshi girchev shesvlas, tanxebi ar gkofnis")
    }
    else{
        money-=Number(form.value);
        mon.textContent=money;
    }
}