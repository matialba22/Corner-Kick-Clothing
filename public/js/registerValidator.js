window.addEventListener("load", function() {

    const form = document.querySelector("form.registerForm");
    const email = document.querySelector("#email");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const cnfrmPassword = document.querySelector("#cnfrmPassword");

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

        if (username.value.trim() == "") {
            
            setError(username, "You must set a username");
            errors += 1;

        } else if (!usernameFormat(username.value.trim())) {
            
            setError(username, "Username must contain only letters and be between 6 and 10 characters long");
            errors += 1;

        } else {
            setSuccess(username);
        }

        if (password.value.trim() == "") {
            setError(password, "You must set a password");
            errors += 1;
        } else if (!passwordFormat(password.value.trim())) {
            setError(password, "Password must be between 6 and 20 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number");
            errors += 1;
        } else {
            setSuccess(password);
        }

        if (cnfrmPassword.value.trim() == "") {
            setError(cnfrmPassword, "You must confirm your password");
            errors += 1;
        } else if (cnfrmPassword.value.trim() !== password.value.trim()) {
            setError(cnfrmPassword, "Passwords do not match");
            errors += 1;
        } else {
            setSuccess(cnfrmPassword);
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

    function usernameFormat(username){
        return /^[A-Za-z]{6,10}$/.test(username);
    }

    function passwordFormat(password){
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/.test(password);
    }
});


