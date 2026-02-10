document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SMART HEADER LOGIC (HIDE DOWN, SHOW UP)
       ========================================= */
    let lastScrollTop = 0;
    const header = document.querySelector('.site-header');

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Logic: If scrolling DOWN and we are past the top (100px)
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll Down -> Hide Header
                header.classList.add('header-hidden');
            } else {
                // Scroll Up -> Show Header
                header.classList.remove('header-hidden');
            }
            
            // Update last scroll position (prevent negative values)
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        });
    }

    /* =========================================
       2. MOBILE MENU TOGGLE
       ========================================= */
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    /* =========================================
       3. SERVICES CAROUSEL (AUTO-PLAY + HOVER PAUSE)
       ========================================= */
    const track = document.querySelector('.carousel-track');
    const carouselContainer = document.querySelector('.carousel-container'); // Required for hover detection

    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsNav = document.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);

        // State variables
        let currentIndex = 0;
        let slideWidth = slides[0].getBoundingClientRect().width + 30; // Approx gap
        let autoPlayInterval;

        // Helper: Determine how many slides are visible (Desktop: 3, Mobile: 1)
        const getVisibleSlides = () => window.innerWidth < 992 ? 1 : 3;

        // --- Main Move Function ---
        const updateCarousel = (index) => {
            const visibleSlides = getVisibleSlides();
            const maxIndex = slides.length - visibleSlides;

            // Loop Logic
            if (index > maxIndex) {
                index = 0; // Go back to start
            } else if (index < 0) {
                index = maxIndex; // Go to end
            }

            currentIndex = index;

            // Move the track
            track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';

            // Update Dots Active State
            const currentDot = dotsNav.querySelector('.current-slide');
            if (currentDot) currentDot.classList.remove('current-slide');
            if (dots[currentIndex]) dots[currentIndex].classList.add('current-slide');
        };

        // --- Auto Play Logic ---
        const startAutoPlay = () => {
            stopAutoPlay(); // Clear existing timer first
            autoPlayInterval = setInterval(() => {
                updateCarousel(currentIndex + 1);
            }, 3000); // Speed: 3000ms = 3 Seconds
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        // --- Event Listeners ---

        // 1. Next Button
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                stopAutoPlay(); // Pause on interaction
                updateCarousel(currentIndex + 1);
                startAutoPlay(); // Resume
            });
        }

        // 2. Prev Button
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                stopAutoPlay();
                updateCarousel(currentIndex - 1);
                startAutoPlay();
            });
        }

        // 3. Dots Navigation
        if (dotsNav) {
            dotsNav.addEventListener('click', e => {
                const targetDot = e.target.closest('button');
                if (!targetDot) return;
                
                stopAutoPlay();
                const targetIndex = dots.findIndex(dot => dot === targetDot);
                updateCarousel(targetIndex);
                startAutoPlay();
            });
        }

        // 4. Pause on Hover / Resume on Leave
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }

        // 5. Window Resize Fix (Recalculate width so alignment stays correct)
        window.addEventListener('resize', () => {
            slideWidth = slides[0].getBoundingClientRect().width + 30;
            updateCarousel(currentIndex);
        });

        // Start the carousel immediately
        startAutoPlay();
    }

    /* =========================================
       4. TAB SWITCHING (EMPLOYERS / EMPLOYEES)
       ========================================= */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if(targetContent) targetContent.classList.add('active');
            });
        });
    }

    /* =========================================
       5. AWARDS SWIPER INITIALIZATION
       ========================================= */
    if (typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".awardsShowcaseSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
});

/* =========================================
       6. DRAG-TO-SCROLL LOGIC (For Clients Section)
       ========================================= */
    const slider = document.querySelector('.logo-marquee');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); // Change cursor to 'grabbing'
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Stop if mouse isn't clicked
            e.preventDefault();  // Stop weird text selection
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // *2 makes it scroll faster
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    /* =========================================
   7. SCROLL TO TOP BUTTON LOGIC
   ========================================= */
const scrollTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}