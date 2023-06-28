


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
            let currentCard = el.parentNode.parentNode;
            // create dynamic modal popup
            const element = `<div class="modal-inner-wrapper">
            <div class="img-cancel">
              <img src="./assets/pngegg.png" alt="">
              <span class="cancel-icon">X</span>
            </div>
            <div class="modal-title"><h1>Space</h1></div>
            <div class="modal-info">
              <div class="left">
                <span>Fuel: titanium</span>
                <span>Weight: 400</span>
              </div>
              <div class="right">
                <span>Length: 1,000,000</span>
                <span>Power: 2,000,000</span>
              </div>
            </div>
              <div class="comment-wrapper">
                <div class="comments-count">
                  <span>Comments (2)</span>
                </div>
                <ul class="comments">
      
                </ul>
                <form action="" class="add-comments">
                  <p class="p1">Add a comment</p>
                  <input type="text" placeholder="Your name">
                  <textarea name="comment" id="comment" cols="30" rows="10">
                    Your insights 
                  </textarea>
                  <button type="submit">Comment</button>
                </form>
              </div>
          </div>`
          modalPopupWrapper.innerHTML = element;
          const cancelIcon = document.querySelector(".cancel-icon");
          cancelIcon.addEventListener("click", cancelPopUp)
        })
        
    })
}

const modalOperation = () => {
    popUpFunc()
        // if(popUpFunc()){
        //     const cancelIcon = document.querySelector(".cancel-icon");
        //     cancelIcon.forEach( el => {
        //         el.addEventListener("click", cancelPopUp)
        //     })
        // }
    
}
export default modalOperation
