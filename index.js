        // TOGGLE NAVBAR
        
        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');

        menu.addEventListener('click', ()=>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('nav-toggle');
        });

        window.onscroll = ()=>{
            menu.classList.remove('fa-times');
            navbar.classList.remove('nav-toggle');
        }

        // STICKY NAVBAR                            
        // NAVIGATION BAR EFFECTS ON SCROLL

        window.addEventListener("scroll", function () {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        // PORTFOLIO SECTION - MODAL

        const portfolioModals = document.querySelectorAll(".portfolio-modal");
        const imgCards = document.querySelectorAll(".img-card");
        const portfolioCloseBtns= document.querySelectorAll(".portfolio-close-btn");

        var portfolioModal = function(modalClick){
            portfolioModals[modalClick].classList.add("active");
        }
        
        imgCards.forEach((imgCard, i) => {
            imgCard.addEventListener("click", () => {
                portfolioModal(i);
            });
        });

        portfolioCloseBtns.forEach((portfolioCloseBtn) => {
            portfolioCloseBtn.addEventListener("click", () => {
            portfolioModals.forEach((portfolioModalView) => {
                    portfolioModalView.classList.remove("active");
                });
            });
        });