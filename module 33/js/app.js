function lodeData2() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

function lodeUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function displayUsers(data){

    console.log(data);
    document.getElementById('showData').innerText = data;
}