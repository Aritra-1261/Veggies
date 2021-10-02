function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
    
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input--error-message").textContent = message;
}
function clearInputError(inputElement){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input--error-message").textContent = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#signin-form");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linksignin").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password entered");

    });
    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e => {
                if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                    setInputError(inputElement, "Username name must be atleast 10 characters in length");
                }
        });

        inputElement.addEventListener("input", e =>{
            clearInputError(inputElement);
        });
    });
});

function eye(){
    var x = document.getElementById("eye");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if(x.type ==='password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
