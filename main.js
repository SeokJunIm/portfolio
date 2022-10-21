'use strict';


    // TOP 메뉴 고정
    //변수 navbar 선언을 하고 querySelector를 이용해서 (class #navbar(CSSFile 참조)) Element 요소추가 
    const navbar = document.querySelector('#navbar');
    //navbar의 높이를 받아옴
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
    //    scroll 이 navbar 높이 보다 크면  navbar 에 있는 navbar--dark class 클래스 추가
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
    //    scroll 이 navbar 높이 보다 작으면  navbar 에 있는 navbar--dark class 클래스 제거
        navbar.classList.remove('navbar--dark');
    }
    });

    // 해당메뉴 클릭시 해당요소로 이동
    // 변수 navbarMenu 선언을 하고 querySelector를 이용해서 (class .navbar__menu(CSSFile 참조)) Element 요소추가 
    const navbarMenu = document.querySelector('.navbar__menu');
    //click이 될시 navbarMenu 함수 호출
    navbarMenu.addEventListener('click', (event) => {
    //Target 변수 할당    
    const target = event.target;
    //html에 정희해둔 data-link 요소로 이동 (htmlFile 참조)
    const link = target.dataset.link;
    //link가 null이라면  아무것도안함
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    //smooth 하게 이동 하는 메서드  젤밑에 function 참조
    scrollIntoView(link);
    });

    // Navbar toggle button for small screen
    const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
    navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    });
    //contact 버튼 클릭시 해당요소 이동
    // 변수 homeContactBtn 선언을 하고 querySelector를 이용해서 (class .home__contact(CSSFile 참조)) Element 요소추가 
    const homeContactBtn = document.querySelector('.home__contact');
    //click이 될시 homeContactBtn 함수 호출
    homeContactBtn.addEventListener('click', () => {
    //smooth 하게 이동 하는 메서드  젤밑에 function 참조
    scrollIntoView('#contact');
    });
    // Home 
    //변수 home 선언을 하고 querySelector를 이용해서 (class home__container(HTMLFile 참조)) Element 요소추가 
    const home = document.querySelector('.home__container');
    //home 높이를 받아옴
    const homeHeight = home.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
    //home 높이 값에 따라 opacity(투명도) 값이 1일때는 표시가 되고 0 또는 -1 이되면 불투명 되도록 설정
    home.style.opacity = 1 - window.scrollY / homeHeight;
    });

    // Show "arrow up" 버튼  Top 으로 이동 
    // 변수 arrowUp 선언을 하고 querySelector를 이용해서 (class .arrow-up(CSSFile 참조)) Element 요소추가 
    const arrowUp = document.querySelector('.arrow-up');
    // Scroll이 될 때 함수호출
    document.addEventListener('scroll', () => {
        //window.scrolly가 homeHeight에 절반정도 Scroll이 되면 arrow-up 버튼이 보이고
        if(window.scrollY > homeHeight /2) {
            arrowUp.classList.add('visble');
        }else{
        //아니면 arrow-up 버튼이 안보임
            arrowUp.classList.remove('visble');
        }
    });

    // arrow up btn click하면 TOP Menu 이동   
    arrowUp.addEventListener('click', ()=>{
        scrollIntoView('#home');
    });

    // Projects
    //변수 workBtnContainer 선언을 하고 querySelector를 이용해서 (class .work__categories(CSSFile 참조)) Element 요소추가 
    const workBtnContainer = document.querySelector('.work__categories');
    //변수 projectContainer 선언을 하고 querySelector를 이용해서 (class .work__projects(CSSFile 참조)) Element 요소추가 
	const projectContainer = document.querySelector('.work__projects');
    //project 들을 querySelectorAll 을 이용해서 배열로 받아옴
	const projects = document.querySelectorAll('.project');
    //click이 될시 workBtnContainer 함수 호출
	workBtnContainer.addEventListener('click', (e) => {
    //e를 받아와 target > dataset 안에있는 filter 값을들 받아옴
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

  // project 선택된 요소에 target
  //변수 active 선언을 하고 querySelector를 이용해서 (.category__btn.selected(HTMLFile 참조)) Element 요소추가 
    const active = document.querySelector('.category__btn.selected');
    if (active != null) {
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
    //foreach를 이용해서 project를 한개씩 받아옴
        projects.forEach((project) => {
        console.log(project.dataset.type);
    //filter가 * 이거나 project dataset type 이 똑같으면 보여짐 (HEMLFILE 참조)
        if (filter === '*' || filter === project.dataset.type) {
    //filter에 해당이 안된다면 안보여지도록
            project.classList.remove('invisible');
        } else {
    //filter가 맞으면 해당 projects 들만 보이고
            project.classList.add('invisible');
        }
        });
    //애니메이션 추가
        projectContainer.classList.remove('anim-out');
    }, 300);
    });

    //scroll 요소
    //selector 를주면  해당하는 selector로 smooth 하게 이동 하는 메서드
    function scrollIntoView(selector) {
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({ behavior: 'smooth' });
    }
    