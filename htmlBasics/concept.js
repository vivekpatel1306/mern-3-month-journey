const form=document.getElementById("contactForm")
form.addEventListener("submit",()=>{
    const userName=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const userData={
        userName,email,message
    }
    sessionStorage.setItem("userData",JSON.stringify(userData));
    alert("Message sent Successfully check inn SessionStorage")
    form.reset()
})


// document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = 'Dark';
    } else {
        document.body.classList.remove('dark');
        if (themeToggle) themeToggle.textContent = 'Light';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            this.textContent = isDark ? 'Dark' : 'Light';
        });
    }
// });

