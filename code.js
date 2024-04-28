const menu=document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click, function') {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

<script>
    function changeButtonText() {
        var button = document.querySelector('.main__btn');
        button.textContent = (button.textContent === 'Get Started') ? 'Clicked!' : 'Get Started';
    }
</script>



<script>
    function toggleForm() {
        var form = document.getElementById("signupForm");
        form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
    }
</script>



let loginForm = document.querySelector('.login-form-container');