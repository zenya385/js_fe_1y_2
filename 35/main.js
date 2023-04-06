const BASE_URL = "https://jsonplaceholder.typicode.com";
const container = document.querySelector(".container");
const refs = {
 getBtn: container.querySelector(".btn-fetch"),
userTable:container.querySelector(".users-table")}

const getUser = () => {
  const users = fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
      const murkup = createMurkupUser(users);
      refs.userTable.innerHTML = murkup;
   
    });
};

refs.getBtn.addEventListener("click", getUser);

const createMurkupUser = (users) => {
  const tableHead = `
  <thead>
      <tr>
        <th>Ім'я</th>
        <th>Ел. адреса</th>
        <th>Місто</th>
      </tr>
    </thead>`;

  const tableBody = users
    .map(
      (user) =>
        `  <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.address.city}</td>
  </tr>`,
    )
    .join("");
  return tableHead + tableBody;
};

