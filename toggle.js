const btn = document.querySelector(".toggle");
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
            
            const currentTheme = localStorage.getItem("theme");
            if (currentTheme == "light") {
              document.body.classList.toggle("light-theme");
            } else if (currentTheme == "dark") {
              document.body.classList.toggle("dark-theme");
            }
            
            btn.addEventListener("click", function () {
              if (prefersDarkScheme.matches) {
                document.body.classList.toggle("dark-theme");
                var theme = document.body.classList.contains("dark-theme")
                  ? "dark"
                  : "light";
              } else {
                document.body.classList.toggle("light-theme");
                var theme = document.body.classList.contains("light-theme")
                  ? "light"
                  : "dark";
              }
              localStorage.setItem("theme", theme);
            });