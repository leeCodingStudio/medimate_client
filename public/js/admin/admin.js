const navUser = document.querySelector(".nav-user");
const navDrugstore = document.querySelector(".nav-drugstore");
const navMedicine = document.querySelector(".nav-medicine");
const navAnnouncement = document.querySelector(".nav-announcement");
const navQnA = document.querySelector(".nav-QnA");

navUser.addEventListener('click', () => {
    location.href='/admin/user';
})
navDrugstore.addEventListener('click', () => {
    location.href='/admin/drugstore';
})
navMedicine.addEventListener('click', () => {
    location.href='/admin/medicine';
})
navAnnouncement.addEventListener('click', () => {
    location.href='/admin/announcement';
})
navQnA.addEventListener('click', () => {
    location.href='/admin/qna';
})

const modalClose = document.querySelectorAll(".modal-close");

modalClose.forEach((v) => {
    v.addEventListener('click', () => {
        modalInfo.classList.remove('active');
        modalWrite.classList.remove('active');
    });
});



