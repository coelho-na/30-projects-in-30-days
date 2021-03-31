function showDate() {
  let date = new Date();
  let dateToString = date.toLocaleString();
  document.getElementById("date").innerHTML = dateToString;
}
