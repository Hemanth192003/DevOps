document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from data.json
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Set company logo
      const logoImg = document.getElementById("company-logo");
      logoImg.src = data.companyLogo;
      logoImg.alt = "Company Logo";

      // Populate employee table
      const employeeList = document.getElementById("employee-list");
      data.employees.forEach((employee) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${employee.id}</td>
                  <td>${employee.name}</td>
                  <td>${employee.role}</td>
                  <td>${employee.team}</td>
              `;
        employeeList.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
});
