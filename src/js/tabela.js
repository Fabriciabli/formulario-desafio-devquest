const formArea = document.getElementById("form");
const divGroups = document.querySelectorAll(".form-group");

formArea.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    divGroups.forEach(div => {
        let input = div.getElementsByClassName("input")[0];
        let span = div.getElementsByClassName("required")[0];

        if(input.value.trim() === ""){
            input.classList.add("error");
            input.classList.remove("correct");
            span.classList.add("show");
            isValid = false;
        
         } else {
            input.classList.add("correct");
            input.classList.remove("error");
            span.classList.remove("show"); 
        }
    })
    //fazer o formulario limpar deposi de preenchido
    if(isValid){
        formArea.reset();
        divGroups.forEach(div =>{
            let input = div.getElementsByClassName("input")[0];
            input.classList.remove("correct", "error");
        });
    } 
});

divGroups.forEach(div =>{
    let input = div.getElementsByClassName("input")[0];
    let span = div.getElementsByClassName("required")[0];

    input.addEventListener("blur", function(){
        if(input.value.trim() === ""){
            input.classList.add("error");
            input.classList.remove("correct");
            span.classList.add("show");

        } else{
            input.classList.add("correct");
            input.classList.remove("error");
            span.classList.remove("show");
        }
    });

    input.addEventListener("focus", function(){
        input.classList.remove("correcr", "error");
        span.classList.remove("show");
    });
});