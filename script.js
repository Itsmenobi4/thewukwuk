document.addEventListener("DOMContentLoaded", function () {
    const sections = ["home", "login", "register", "submit-story"];
    
    function showSection(sectionId) {
        sections.forEach(id => {
            document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
        });
    }
    
    showSection("home");
    
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href").substring(1);
            showSection(target);
        });
    });
    
    // Form Kirim Cerita
    const storyForm = document.querySelector("#submit-story form");
    const storyList = document.querySelector(".story-list");

    if (storyForm) {
        storyForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const title = storyForm.querySelector("input").value.trim();
            const content = storyForm.querySelector("textarea").value.trim();

            if (title && content) {
                const storyDiv = document.createElement("div");
                storyDiv.classList.add("story", "bg-red-600", "p-4", "rounded-lg", "shadow-md", "mt-4");
                storyDiv.innerHTML = `
                    <h3 class="text-xl font-bold">${title}</h3>
                    <p class="mt-2">${content}</p>
                    <button class="like-btn bg-red-500 px-4 py-2 mt-2 rounded hover:bg-red-400">Like</button>
                    <button class="read-btn bg-red-500 px-4 py-2 mt-2 rounded hover:bg-red-400">Baca Selengkapnya</button>
                `;
                storyList.appendChild(storyDiv);
                storyForm.reset();
            }
        });
    }

    // Form Login
    const loginForm = document.querySelector("#login form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login berhasil!");
            loginForm.reset();
        });
    }

    // Form Registrasi
    const registerForm = document.querySelector("#register form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Registrasi berhasil!");
            registerForm.reset();
        });
    }
});
