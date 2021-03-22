const deleteBtn = document.getElementById("delete");
const notification = document.getElementById("notification");
const closeBtn = document.getElementById("close");

deleteBtn.addEventListener("click", () => {
  notification.classList.add("notification-show");
});

closeBtn.addEventListener("click", () => {
  notification.classList.remove("notification-show");
});
