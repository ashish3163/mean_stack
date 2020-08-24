
window.addEventListener('load',()=>{

    for(let i=0;i<6;i++){
        let newelement =document.getElementById("new").cloneNode(true);
        var middle=document.getElementById("middle");
        middle.insertBefore(newelement,middle.firstChild);

        middle.style.background="yellow";
    }
})

window.addEventListener('load',()=>{
    let xhr=new XMLHttpRequest();

    xhr.open('get','https://reqres.in/api/users?page=2');

    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4){
            let abc=JSON.parse(xhr.responseText);
            console.log(abc.data);
        }
    }
    xhr.send();
})