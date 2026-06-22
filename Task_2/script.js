const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const images = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showImage(index){
    lightboxImg.src = images[index].src;
}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;
        showImage(index);
        lightbox.style.display="flex";

    });

});

nextBtn.addEventListener("click",()=>{

    currentIndex =
    (currentIndex + 1) % images.length;

    showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex =
    (currentIndex - 1 + images.length)
    % images.length;

    showImage(currentIndex);

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        lightbox.style.display="none";
    }

});