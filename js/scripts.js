const form=document.querySelector("form");
console.log(form)
form.addEventListener("submit", submit);
function submit (event) { 
    event.preventDefault();
    let formData = new FormData(form)
    console.log(formData.get("newTask"));

}
