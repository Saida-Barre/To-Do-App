const form=document.querySelector("form");
console.log(form)
form.addEventListener("submit", submit);
function submit (event) { 
    event.preventDefault();
    let formData = new FormData(form)
    console.log(formData.get("newTask"));

    //got confused on the next steps using formData Object that was introduced to me during homework help
    
}
