window.addEventListener("load", () => {

    const mainImage = document.querySelector("div.mainImage img");
    const miniImages = document.querySelectorAll("div.miniImage img");
    const dropDowns = document.querySelectorAll("div.btn-drop");

    let selectedImageIndex = 0;

    miniImages.forEach((miniImg, i) => {

        miniImg.addEventListener("click", () => {
            selectedImageIndex = i;

            mainImage.src = miniImg.src;
        
        });

        miniImg.addEventListener("mouseover", () => {
            if (i !== selectedImageIndex) {
              mainImage.style.opacity = 0;
      
              setTimeout(() => {
                mainImage.src = miniImg.src;
                mainImage.style.opacity = 1;
              }, 300);
            }
          });
      
          miniImg.addEventListener("mouseout", () => {
            if (i !== selectedImageIndex) {
              mainImage.style.opacity = 0;
      
              setTimeout(() => {
                mainImage.src = miniImages[selectedImageIndex].src;
                mainImage.style.opacity = 1;
              }, 300);
            }
        });

    });

    dropDowns.forEach((dropDown) => {
      dropDown.addEventListener("click", () => {
        const dropContent = dropDown.nextElementSibling;
        const icon = dropDown.querySelector(".fa-chevron-down");

        dropContent.classList.toggle("open");

        icon.classList.toggle("rotated");
      
      })
    })

});