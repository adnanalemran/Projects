function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser2(data));
}

function displayUser2(users) {
  const ul = document.getElementById("users-list");
  for (const user of users) {
    
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
