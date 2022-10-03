const button = document.querySelector('.article-button__subscribe');
const email = document.querySelector('.article-subscription__form-input');
const error = document.querySelector('.article-subscription__form-error');

button.addEventListener('click', (e)=>{
    const regularExprecion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regularExprecion.test(email.value) == true){
        email.style.border = 'none';
        error.innerHTML = '';
    }else{
        e.preventDefault();
        email.style.border = '1px solid hsl(0, 100%, 63%)';
        error.innerHTML = 'Check your email please';
    }
});