const addExpenseForm = document.getElementById("addExpenseForm");
addExpenseForm.onsubmit = async function(e) {
  e.preventDefault();
  const token = localStorage.getItem("token");
  if (!token) return window.location = "/login.html";
  const data = {
    title: addExpenseForm.title.value,
    amount: addExpenseForm.amount.value,
    category: addExpenseForm.category.value,
    date: addExpenseForm.date.value,
    notes: addExpenseForm.notes.value
  };
  const res = await fetch("/api/expenses/", {
    method: "POST",
    headers: {Authorization: "Token " + token, "Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  const json = await res.json();
  if (res.ok) window.location = "/dashboard.html";
  else document.getElementById("addMessage").textContent = JSON.stringify(json);
};
