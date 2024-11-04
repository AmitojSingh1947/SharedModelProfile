let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay")

// Modal Open Function
let openModal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

};
// Modal Close Function
let closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");

};