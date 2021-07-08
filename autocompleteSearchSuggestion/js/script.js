// getting all required elements

const searchInput = document.querySelector(".search");
const input = document.querySelector(".search__input");
const suggestBox = document.querySelector(".search__autocomplete-box");
const icon = document.querySelector(".search__icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (event) => {
  let userData = event.target.value;
  let arrayofSuggestions = [];

  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
      input.value = " ";
      searchInput.classList.remove("active");
    };

    arrayofSuggestions = suggestions.filter((data) => {
      // filtering array value and user char to lowercase  and return
      // only those words/sentc which are starts with user entered word
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    arrayofSuggestions = arrayofSuggestions.map((data) => {
      return (data = `<li class="search__list"> ${data} </li>`);
    });
    searchInput.classList.add("active"); // show autocomplete box
    showSuggestions(arrayofSuggestions);
    let allList = suggestBox.querySelectorAll("li");
    for (let li = 0; li < allList.length; li++) {
      // adding click event in all li tag
      allList[li].setAttribute("onclick", "select(this)");
    }
  } else {
    searchInput.classList.remove("active"); // hide autocomplete box
  }
};

function select(element) {
  let selectUserData = element.textContent;
  input.value = selectUserData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectUserData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
    input.value = " ";
    searchInput.classList.remove("active");
  };
  searchInput.classList.remove("active"); // hide autocomplete box
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = input.value;
    listData = `<li class="search__list"> ${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggestBox.innerHTML = listData;
}
