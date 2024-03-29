window.addEventListener("load", () => {

    const form = document.querySelector("form.createForm");
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const category = document.querySelector("#category");
    const subcategory = document.querySelector("#subcategory");
    const brand = document.querySelector("#brand");
    const images = document.querySelector("#images");

    form.addEventListener("submit", (e) => {

        let validationResult = checkInputs();

        if(validationResult > 0){
            e.preventDefault();
        }
   
    });

    function checkInputs() {

        let errors = 0;

        if( name.value.trim().length < 1 ) {

            setError(name, "You must set a name");
            errors += 1;

        } else {
            setSuccess(name);
        }

        if( price.value.trim().length < 1 ) {

            setError(price, "You must set a price");
            errors += 1;

        } else if ( price.value.trim() < 0 ) {

            setError(price, "The price must be a positive number");
            errors += 1;

        } else {
            setSuccess(price);
        }

        if(description.value.trim().length < 1 ){

            setError(description, "You must set a description");
            errors += 1;

        } else {
            setSuccess(description);
        }

        if(!category.value){

            setError(category, "You must choose a category");
            errors += 1;

        } else {
            setSuccess(category);
        }
        
        if(!subcategory.value){

            setError(subcategory, "You must choose a subcategory");
            errors += 1;

        } else {
            setSuccess(subcategory);
        }
        
        if(!brand.value){

            setError(brand, "You must choose a brand");
            errors += 1;

        } else {
            setSuccess(brand);
        }

        if(images.files.length != 3){
            setError(images, "You must upload 3 images");
            errors += 1;

        } else {
            setSuccess(images);
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
    
});