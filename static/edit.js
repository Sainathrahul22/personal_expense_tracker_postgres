// Get expense ID from URL
function getQueryVariable(name) {
  const match = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return match ? match[1] : null;
}
const id = getQueryVariable('id');
const editExpenseForm = document.getElementById("editExpenseForm");

async function populateForm() {
  const token = localStorage.getItem("token");
  if (!token) return window.location = "/login.html";
  const res = await fetch(`/api/expenses/${id}/`, {
    headers: {Authorization: "Token " + token}
  });
  if (res.status == 401) return logout();
  const exp = await res.json();
  editExpenseForm.title.value = exp.title;
  editExpenseForm.amount.value = exp.amount;
  editExpenseForm.category.value = exp.category;
  editExpenseForm.date.value = exp.date;
  editExpenseForm.notes.value = exp.notes;
}
editExpenseForm.onsubmit = async function(e) {
  e.preventDefault();
  const token = localStorage.getItem("token");
  const data = {
    title: editExpenseForm.title.value,
    amount: editExpenseForm.amount.value,
    category: editExpenseForm.category.value,
    date: editExpenseForm.date.value,
    notes: editExpenseForm.notes.value
  };
  const res = await fetch(`/api/expenses/${id}/`, {
    method: "PUT",
    headers: {Authorization: "Token " + token, "Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  if (res.ok) window.location = "/dashboard.html";
  else document.getElementById("editMessage").textContent = "Error updating.";
};
populateForm();
