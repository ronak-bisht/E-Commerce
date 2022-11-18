var ham=document.getElementById("ham");
var nav=document.getElementById("nav");
var close=document.getElementById("close");
if(ham){
    ham.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
