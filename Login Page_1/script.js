const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active'); // Fixed typo here
}

loginLink.onclick = () => {
    wrapper.classList.remove('active'); // Fixed typo here
}
