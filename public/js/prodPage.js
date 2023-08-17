window.addEventListener("load", () => {

    const mainImage = document.querySelector("div.mainImage img");
    const miniImages = document.querySelectorAll("div.miniImage img");

    let selectedImageIndex = 0

    miniImages.forEach((miniImg, i) => {

        miniImg.addEventListener("click", () => {
            selectedImageIndex = i;

            mainImage.src = miniImg.src;
        
        });

        miniImg.addEventListener("mouseover", () => {
           
            mainImage.style.opacity = 0;

            setTimeout(() => {
                mainImage.src = miniImg.src;
                mainImage.style.opacity = 1;
            }, 300);

        });
        
        miniImg.addEventListener("mouseout", () => {
            
            mainImage.style.opacity = 0;
            
            setTimeout(() => {
                mainImage.src = miniImages[selectedImageIndex].src;
                mainImage.style.opacity = 1;
            }, 300);

        });

    });

});