// Logout function (used everywhere)
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login.html";
}

// Registration
// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.onsubmit = async (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const res = await fetch("/api/auth/register/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    const data = await res.json();
    document.getElementById("registerMessage").textContent = data.message || (data.username && data.username[0]) || data.error || "";
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard.html";
    }
  };
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.onsubmit = async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const res = await fetch("/api/auth/login/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    const data = await res.json();
    document.getElementById("loginMessage").textContent = data.error || "";
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard.html";
    }
  };
}
