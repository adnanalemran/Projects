const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(data);
  displayPhone(phones, isShowAll);
};

// loadPhone();

const displayPhone = (phones, isShowAll) => {
  const phoneConatiner = document.getElementById("phone-conatainer");

  phoneConatiner.textContent = "";
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    // console.log(phone);

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img
          src="${phone.image}"
          alt="phone"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>brand: ${phone.brand}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
    phoneConatiner.appendChild(phoneCard);

    togleBoll(false);
  });
};

const hendleSearch = (isShowAll) => {
  togleBoll(true);
  const searchField = document.getElementById("search-field").value;
  loadPhone(searchField, isShowAll);
  document.getElementById("search-field").value = "";
};

const togleBoll = (isLoading) => {
  const loadingBall = document.getElementById("loading_ball");

  if (isLoading) {
    loadingBall.classList.remove("hidden");
  } else {
    loadingBall.classList.add("hidden");
  }
};
const hendelShowAll = () => {
  hendleSearch(true);
};
