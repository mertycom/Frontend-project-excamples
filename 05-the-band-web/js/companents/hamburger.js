export default function hamburgerNav(){

    const btnEl = document.querySelector('.btn-hamburger')
    const navEl = document.querySelector('.nav-main')

    btnEl.addEventListener('click',handleClick)
    
    function handleClick(e){
        navEl.classList.toogle('active');
    }
}