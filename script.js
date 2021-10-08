const container = document.querySelector('#window');
const nudgeText = document.querySelector('#nudge-text').innerHTML;
const nudgeButton = document.querySelector('#nudge-button');
const conversationBlock = document.querySelector('#conversation');

nudgeButton.addEventListener('click', e => {
  container.classList.add('is-nudged');
  conversation.innerHTML = conversation.innerHTML + nudgeText;
  setTimeout(() => container.classList.remove('is-nudged'), 400)
})