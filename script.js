const check = document.getElementById("check");
check.addEventListener("change", (e)=>{    
    if(e.target.checked){
        document.getElementById("monthly").classList.remove("none")       
        document.getElementById("annually").classList.add("none")       
        return;
    }
    document.getElementById("annually").classList.remove("none")       
    document.getElementById("monthly").classList.add("none") 
})