window.addEventListener("load", () => {

    const form = document.querySelector("form.loginForm");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    form.addEventListener("submit", (e) => {

        let validationResult = checkInputs();

        if(validationResult > 0){
            e.preventDefault();
        }
   
    });

    function checkInputs() {

        let errors = 0;

        if(email.value.trim() == ""){

            setError(email, "You must enter an email");
            errors += 1;

        } else if (!isEmail(email.value.trim())){

            setError(email, "You must enter a valid email");
            errors += 1;

        } else {
            setSuccess(email)
        }

        if (password.value.trim() == "") {
            setError(password, "Please enter your password");
            errors += 1;

        } else {
            setSuccess(password);
        }

        return errors;
    }

    function setError(input, message){
        const formControl = input.parentElement;
        const errorSpan = formControl.querySelector("span#" + input.name + "Error");
    
        errorSpan.innerText = message;

        if(formControl.classList.contains("valid-value")){
            formControl.classList.remove("valid-value");
        }

        formControl.classList.add("invalid-value");
    }
    
    function setSuccess(input) {
        const formControl = input.parentElement;
        const errorSpan = formControl.querySelector("span#" + input.name + "Error");

        errorSpan.innerText = "";

        if(formControl.classList.contains("invalid-value")){
            formControl.classList.remove("invalid-value");
        }
        
        formControl.classList.add("valid-value");
    }
    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});


