var hamburguer = document.querySelector(".banner__hamburguer");

const showMenu = ()=>{
    document.querySelector(".container").classList.toggle("show__menu");
}

hamburguer.addEventListener("click", showMenu);


const getTop = (element) => {
    const getHref = element.getAttribute("href")
    return document.querySelector(getHref).offsetTop
}

const scrollToPosition = (top) => {
    window.scroll({
      top: top,
      behavior: "smooth",
    });
  };

const menuScroll = (evt) => {
    evt.preventDefault()
    const top = getTop(evt.target)
    scrollToPosition(top)
    showMenu()
}

const saibamaisScroll = (evt) => {
    evt.preventDefault()
    const top = getTop(evt.target)
    scrollToPosition(top)
}

const menuItens = document.querySelectorAll(".menu__item a");
menuItens.forEach((item)=>{
    item.addEventListener("click", menuScroll)
})

const bntSaibamais = document.querySelector(".saiba__mais");
bntSaibamais.addEventListener("click", saibamaisScroll )