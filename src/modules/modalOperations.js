import {comments, pokeApi} from "./apiLinks.js"
import { postPokemonComment, getPokemonComments } from './apiOerations.js'
import { pokMon } from "./display.js";

const siteWrapper = document.querySelector('.site-wrapper');
const modalPopupWrapper = document.querySelector('.modal-popup-wrapper');
const body = document.querySelector('body');

const cancelPopUp = () => {
  siteWrapper.classList.toggle('blur');
  body.classList.toggle('hide-vertical');
  modalPopupWrapper.classList.toggle('hide-init');
};



const popUpFunc = async () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((el) => {
    el.addEventListener('click', () => {
      siteWrapper.classList.toggle('blur');
      body.classList.toggle('hide-vertical');
      modalPopupWrapper.classList.toggle('hide-init');
      const currentCard = el.parentNode.parentNode;
      const elImg = currentCard.firstElementChild;
      const elTitle = elImg.nextElementSibling.firstElementChild;
      const ability = elImg.nextElementSibling.nextElementSibling
      .firstElementChild.nextElementSibling.nextElementSibling;
      const weight = ability.nextElementSibling
      const height = ability.nextElementSibling.nextElementSibling
      const move = ability.nextElementSibling.nextElementSibling
      .nextElementSibling
      //  get comment
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3P9ifz6JhS0AXCdTzxPo/comments?item_id=${currentCard.id}`

      const getPokemonComments = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      };
      

      // create dynamic modal popup
      const element = `<div class="modal-inner-wrapper">
            <div class="img-cancel">
              <img src="${elImg.src}" alt="">
              <span class="cancel-icon">X</span>
            </div>
            <div class="modal-title"><h1>${elTitle.innerHTML}</h1></div>
            <div class="modal-info">
              <div class="left">
                <span>Abilities: ${ability.value}</span>
                <span>Weight: ${weight.value}</span>
              </div>
              <div class="right">
                <span>Height: ${height.value}</span>
                <span>Move: ${move.value}</span>
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
                  <input type="text" name="username" id="username" placeholder="Your name">
                  <textarea name="comment" id="comment" cols="30" rows="10">
                    Your insights
                  </textarea>
                  <button type="button" class="post-btn">Comment</button>
                </form>
              </div>
          </div>`;
          const gottenComments = getPokemonComments()
      gottenComments.then( result => {
        console.log(re)
        let commentWrapper = document.querySelector(".comments")
        
        if(result){

        result.forEach( el => {
            let li = `<li>${el.creation_date} ${el.username} ${el.comment}</li>`
            commentWrapper.innerHTML += li
        } )
        }else{let li = `<li>There's no comment yet</li>`;
        commentWrapper.innerHTML += li}


      } )

      modalPopupWrapper.innerHTML = element;
      const postCommentBtn = document.querySelector('.post-btn');

    //   post comment
      postCommentBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.querySelector("#username").value
        const comment = document.querySelector("#comment").value
        postPokemonComment(comments, currentCard.id, username, comment )
        setTimeout( () => {
            document.querySelector("form").reset();
        })
      })
      const cancelIcon = document.querySelector('.cancel-icon');
      cancelIcon.addEventListener('click', cancelPopUp);
    });
  });
};



const modalOperation = () => {
  popUpFunc();
};
export default modalOperation;
