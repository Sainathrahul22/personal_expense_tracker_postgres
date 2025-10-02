async function fetchExpenses() {
  const token = localStorage.getItem("token");
  if (!token) window.location.href = "/login.html";
  const res = await fetch("/api/expenses/", {
    headers: {Authorization: "Token " + token}
  });
  if (res.status == 401) return logout();
  const expenses = await res.json();
  const tbody = document.querySelector("#expensesTable tbody");
  tbody.innerHTML = "";
  expenses.forEach((exp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${exp.title}</td>
      <td>${exp.amount}</td>
      <td>${{
        food: "Food & Dining",
        transport: "Transportation",
        shopping: "Shopping",
        others: "Others"
      }[exp.category]}</td>
      <td>${exp.date}</td>
      <td>${exp.notes || ""}</td>
      <td>
        <button class="btn-action btn-edit" onclick="editExpense(${exp.id})">Edit</button>
        <button class="btn-action btn-delete" onclick="deleteExpense(${exp.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
function editExpense(id) {
  window.location = `/edit.html?id=${id}`;
}
function deleteExpense(id) {
  if (confirm("Delete this expense?")) {
    const token = localStorage.getItem("token");
    fetch(`/api/expenses/${id}/`, {
      method: "DELETE",
      headers: {Authorization: "Token " + token}
    }).then(() => fetchExpenses());
  }
}
fetchExpenses();
