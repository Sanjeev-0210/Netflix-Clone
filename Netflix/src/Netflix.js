let faq_div=document.querySelectorAll(".faq-div");
let drop=document.getElementById('drop');
faq_div.forEach(element => {
    element.addEventListener("click",event=>{
        element.classList.toggle("active");
    });
});