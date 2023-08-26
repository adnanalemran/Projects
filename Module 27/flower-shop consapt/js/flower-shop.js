function addcard(target){
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const itemPriceText = target.parentNode.parentNode.childNodes[3].innerText.split(' ')[1];
    const itemPrice = parseInt(itemPriceText);

 
    const listNewItem = document.createElement("p");
    listNewItem.innerText = itemName;
    const cartList = document.getElementById('cart-list');
    cartList.appendChild(listNewItem);

    const totalPrice = document.getElementById('total-price').innerText;
    const totalPriceNum = parseInt(totalPrice);

    const newPrice = totalPriceNum + itemPrice;
     console.log(newPrice);
     document.getElementById('total-price').innerText = newPrice;
}
function theme(){
    const themes = [ 
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]; 
  let currentThemeIndex = 0;

  // Function to update the theme on each click
  function changeTheme() {
    const bodyElement = document.body;
    bodyElement.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    bodyElement.classList.add(newTheme);
  }

  // Attach the click event listener
  const htmlElement = document.getElementById('main-html');
  htmlElement.addEventListener('click', changeTheme);
}