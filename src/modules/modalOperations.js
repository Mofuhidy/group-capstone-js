

const cancelIcon = document.querySelector(".cancel-icon");
const siteWrapper = document.querySelector(".site-wrapper");
const modalPopupWrapper = document.querySelector(".modal-popup-wrapper");
const body = document.querySelector("body");

const cancelPopUp = () => {
    siteWrapper.classList.toggle("blur");
    body.classList.toggle("hide-vertical")
    modalPopupWrapper.classList.toggle("hide-init")
}

const popUpFunc = () => {
    const commentBtn = document.querySelectorAll(".comment-btn");
    commentBtn.forEach( el => {
        el.addEventListener("click", () => {
            siteWrapper.classList.toggle("blur");
            body.classList.toggle("hide-vertical")
            modalPopupWrapper.classList.toggle("hide-init")
        })
    })
   
}

const modalOperation = () => {
    popUpFunc()
    cancelIcon.addEventListener("click", cancelPopUp)
}
export default modalOperation