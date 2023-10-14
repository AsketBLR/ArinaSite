const contactForm = document.getElementById('contact_form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.getElementById('error_message');

const homeBtn = document.getElementById('home_btn');
const portfolioBtn = document.getElementById('portfolio_btn');
const aboutBtn = document.getElementById('about_btn');
const blogBtn = document.getElementById('blog_btn');
const contactBtn = document.getElementById('contact_btn');

const homeSection = document.getElementById('home_section');
const portfolioSection = document.getElementById('portfolio_section');
const aboutSection = document.getElementById('about_section');
const blogSection = document.getElementById('blog_section');
const contactSection = document.getElementById('contact_section');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        errorMessage.textContent = 'Please, fill in all fields'
    } else {
        errorMessage.textContent = "";
        alert('The form has been successfully submitted!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});

function showHome() {
    homeSection.style.display = 'block';
    portfolioSection.style.display = 'none';
    aboutSection.style.display = 'none';
    blogSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function showPortfolio() {
    homeSection.style.display = 'none';
    portfolioSection.style.display = 'block';
    aboutSection.style.display = 'none';
    blogSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function showAbout() {
    homeBtn.style.display = 'none';
    portfolioSection.style.display = 'none';
    aboutSection.style.display = 'block';
    blogSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function showBlog() {
    homeBtn.style.display = 'none';
    portfolioSection.style.display = 'none';
    aboutSection.style.display = 'none';
    blogSection.style.display = 'block';
    contactSection.style.display = 'none';
}

function showContact() {
    homeBtn.style.display = 'none';
    portfolioSection.style.display = 'none';
    aboutSection.style.display = 'none';
    blogSection.style.display = 'none';
    contactSection.style.display = 'block';
}

homeBtn.addEventListener('click', showHome);
portfolioBtn.addEventListener('click', showPortfolio);
aboutBtn.addEventListener('click', showAbout);
blogBtn.addEventListener('click', showBlog);
contactBtn.addEventListener('click',showContact)

showHome();