function showDate() {
  let d = new Date();
  let dateToString = d.toLocaleString();
  document.getElementById("date").innerHTML = dateToString;
}
