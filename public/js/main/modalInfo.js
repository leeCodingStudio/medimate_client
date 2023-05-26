const infoBtn = document.querySelectorAll(".drug-info");
const modalInfo = document.getElementById('modal-info');

infoBtn.forEach((v) => {
    v.addEventListener('click',() => {
        modalInfo.classList.add('active');
    });
});

const btnOpenModal = document.querySelector(".drug-info1");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close_button");

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block'
})

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}