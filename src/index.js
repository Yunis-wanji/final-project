let now = new Date();

let date = now.getDate();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let hour = now.getHours();
let min = now.getMinutes();
let today = document.querySelector("p");
today.innerHTML = `${day} ${date} ${month} ${hour}:${min} ${year}`;

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = searchInput.value
  }

  let form = document.querySelector("#search-form");
  form.addEventListener("submit",search)
  