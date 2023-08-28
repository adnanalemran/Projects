function showQuite(){
    fetch('https://api.kanye.rest/')
    .then (res => res.json())
    .then(data => displayUsersData(data))
}
function displayUsersData(data){
    console.log(data);
    document.getElementById('showData').innerText = data.quote;
}