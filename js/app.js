const form = document.querySelector('#message-form');
const msgInput = document.querySelector('#message');
const msgBox = document.querySelector('.message-content');
const errorMsg = document.querySelector('#errorMsg');

const takeMsg = () => {
    let msg = '';
    if (msgInput.value === '') {
        errorMsg.classList.add('show');
        msgBox.innerText = 'HELLO WORLD';
        setTimeout(() => errorMsg.classList.remove('show'), 3000);
    } else {
        msg = msgInput.value;
        msgBox.innerText = msg;
    }
    msgInput.value = ''
}


form.addEventListener('submit', e => {
    e.preventDefault()
    takeMsg()
})