const navUser = document.querySelector(".nav-user");
const navDrugstore = document.querySelector(".nav-drugstore");
const navMedicine = document.querySelector(".nav-medicine");
const navAnnouncement = document.querySelector(".nav-announcement");
const navQnA = document.querySelector(".nav-QnA");

navUser.addEventListener('click', () => {
    location.href='./adminUser.html';
})
navDrugstore.addEventListener('click', () => {
    location.href='./admindrugstore.html';
})
navMedicine.addEventListener('click', () => {
    location.href='./adminmedicine.html';
})
navAnnouncement.addEventListener('click', () => {
    location.href='./adminAnnouncement.html';
})
navQnA.addEventListener('click', () => {
    location.href='./adminQnA.html';
})

const modalClose = document.querySelectorAll(".modal-close");

modalClose.forEach((v) => {
    v.addEventListener('click', () => {
        modalInfo.classList.remove('active');
        modalWrite.classList.remove('active');
    });
});
