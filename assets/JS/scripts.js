window.addEventListener('load', ()=>{
    setTimeout(()=>{
        const loading = document.querySelector(".loader-wrapper");
        loading.classList.add("dis-none")
        document.body.classList.remove("loading");
    }, 2000);
});

const card = document.getElementById('card');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);

    const rotateX = (y - 50) / 5;
    const rotateY = (50 - x) / 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

const card2 = document.getElementById('card2');

card2.addEventListener('mousemove', (e) => {
    const rect = card2.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card2.style.setProperty('--mouse-x', `${x}%`);
    card2.style.setProperty('--mouse-y', `${y}%`);

    const rotateX = (y - 50) / 5;
    const rotateY = (50 - x) / 5;
    card2.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card2.addEventListener('mouseleave', () => {
    card2.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

const card3 = document.getElementById('card3');

card3.addEventListener('mousemove', (e) => {
    const rect = card3.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card3.style.setProperty('--mouse-x', `${x}%`);
    card3.style.setProperty('--mouse-y', `${y}%`);

    const rotateX = (y - 50) / 5;
    const rotateY = (50 - x) / 5;
    card3.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card3.addEventListener('mouseleave', () => {
    card3.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

const sections = document.querySelectorAll(".section")
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => link.classList.remove("active-nav-link"));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active-nav-link");

                entry.target.classList.add('animation-slide');
                entry.target.classList.add('animation-reveal');
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach((sec) => observer.observe(sec));


document.addEventListener('DOMContentLoaded', ()=>{
    const aboutSection = document.getElementById("about-section");
    const titleAbout = document.querySelector(".title-about");
    const descriptionAbout = document.querySelector(".description-about");
    const aboutCarts = document.querySelector(".about-carts");

    if (!aboutSection || !titleAbout || !descriptionAbout || !aboutCarts) return;

    const observer = new IntersectionObserver(
        (entries, observer) =>{
            entries.forEach((entry) =>{
                if (entry.isIntersecting) {
                    titleAbout.classList.add('animation-fade-in');
                    descriptionAbout.classList.add('animation-fade-in');
                    
                    setTimeout(()=>{
                        aboutCarts.classList.add('animation-fade-in');
                    }, 800)

                    observer.unobserve(aboutSection);
                }
            });
        },{
            threshold: 0.3,
        }
    );
    observer.observe(aboutSection)
});