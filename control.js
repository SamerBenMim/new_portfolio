window.addEventListener("scroll",()=>{
document.querySelector("nav").classList.toggle('windows-scrolled',window.scrollY>0)
})

const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton=> {
    let text = textButton.querySelector("p")
    text.innerHTML=text.innerHTML.split('').map((c,index)=>
        `<span style="transform: rotate(${index *12 }deg)">${c}</span>`).join("")
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints :{
            599:{
                slidesPerView: 2,
                spacebetween:40
            },
            1023 : {
                slidesPerView: 3,
                spacebetween:60
            }

        }
      });

    //   const nav = document.querySelector('.nav_links')
    //   const openNavBtn = document.querySelector('#nav_toggle-open')
    //   const CloseNavBtn = document.querySelector('#nav_toggle-close')
    //   const openNav = ()=>{
    //     nav.style.display='flex';
    //     openNavBtn.style.display="none";
    //     CloseNavBtn.style.display="inline-block"
    //   }
    //   openNavBtn.addEventListener('click', openNav)
    //   const closeNav = ()=>{
    //     nav.style.display='none';
    //     openNavBtn.style.display="inline-block";
    //     CloseNavBtn.style.display="none"
    //   }
    //   CloseNavBtn.addEventListener('click', closeNav)

    //   nav.querySelectorAll('li a').forEach(navLink=>{
    //     navLink.addEventListener('click',closeNav);
    //   })

       