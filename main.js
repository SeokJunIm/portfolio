'use strict';

    // TOP 메뉴 고정
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
    });

    // 해당메뉴 클릭시 해당요소로 이동
    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
    });

    const homeContactBtn = document.querySelector('.home__contact');
    homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
    });
    // Home 
    const home = document.querySelector('.home__container');
    const homeHeight = home.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    });

    // Show "arrow up" Btn  Top menu Scroll
    const arrowUp = document.querySelector('.arrow-up');
    document.addEventListener('scroll', () => {
        if(window.scrollY > homeHeight /2) {
            arrowUp.classList.add('visble');
        }else{
            arrowUp.classList.remove('visble');
        }
    });

    // arrow up btn click하면 TOP Menu 이동
    arrowUp.addEventListener('click', ()=>{
        scrollIntoView('#home');
    });

    // Project
const workBtnContainer = document.querySelector('.work__categories');
	const projectContainer = document.querySelector('.work__projects');
	const projects = document.querySelectorAll('.project');
	workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

  // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    if (active != null) {
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
    });

    //scroll 요소
    function scrollIntoView(selector) {
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({ behavior: 'smooth' });
    }