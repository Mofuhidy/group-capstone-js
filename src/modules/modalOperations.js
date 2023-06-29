import { comments } from './apiLinks.js';
import { postPokemonComment } from './apiOerations.js';
import { getComments } from './countComments.js';

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
      const weight = ability.nextElementSibling;
      const height = ability.nextElementSibling.nextElementSibling;
      const move = ability.nextElementSibling.nextElementSibling
        .nextElementSibling;
      // create dynamic modal popup
      const element = `<div class="modal-inner-wrapper">
      <span class="cancel-icon">X</span>
            <div class="img-cancel">
              <img src="${elImg.src}" alt="">
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
                <span>Comments (<span class="comment-count">0</span>)</span>
                </div>
                <ul class="comments">
                </ul>
                <form action="" class="add-comments">
                  <p class="p1">Add a comment</p>
                  <input type="text" name="username" id="username" placeholder="Your name" required>
                  <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insight" required></textarea>
                  <button type="button" class="post-btn">Comment</button>
                </form>
              </div>
          </div>`;

      const displayComments = async () => {
        const result = await getComments(currentCard.id);
        const commentWrapper = document.querySelector('.comments');
        const commentCountWrapper = document.querySelector('.comment-count');

        commentWrapper.innerHTML = ''; // Clear existing comments

        if (result.error && result.error.status === 400) {
          const li = '<li>There\'s no comment yet</li>';
          commentWrapper.innerHTML += li;
          commentCountWrapper.textContent = '0';
        } else if (result) {
          const commentCount = result.length;
          commentCountWrapper.textContent = commentCount.toString();

          result.forEach((el) => {
            const creationDate = new Date(el.creation_date);
            const formattedDate = `${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()}`;
            const li = `<li>${formattedDate} ${el.username}: ${el.comment}</li>`;
            commentWrapper.innerHTML += li;
          });
        }
      };

      modalPopupWrapper.innerHTML = element;
      const postCommentBtn = document.querySelector('.post-btn');

      //   post comment
      postCommentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const comment = document.querySelector('#comment').value;
        const usernameInput = document.querySelector('#username');
        const commentInput = document.querySelector('#comment');

        if (username.trim() === '') {
          usernameInput.reportValidity();
          return;
        }

        if (comment.trim() === '') {
          commentInput.reportValidity();
          return;
        }
        postPokemonComment(comments, currentCard.id, username, comment).then((res) => {
          if (res.ok) {
            displayComments();
            document.querySelector('form').reset();
          }
        });
      });
      const cancelIcon = document.querySelector('.cancel-icon');
      cancelIcon.addEventListener('click', cancelPopUp);

      displayComments();
    });
  });
};

const modalOperation = () => {
  popUpFunc();
};
export default modalOperation;
