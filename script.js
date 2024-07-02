const button = document.getElementById('change-message');
const heading = document.querySelector('h1');

button.addEventListener('click', () => {
  const newMessage = 'Welcome to my website!';
  heading.textContent = newMessage;
});
