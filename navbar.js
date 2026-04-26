const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeOverlay = document.getElementById("closeOverlay");
const navOverlay = document.getElementById("navOverlay");

function openOverlay() {
  navOverlay.classList.add("is-open");
  navOverlay.setAttribute("aria-hidden", "false");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeOverlayFn() {
  navOverlay.classList.remove("is-open");
  navOverlay.setAttribute("aria-hidden", "true");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", openOverlay);
closeOverlay.addEventListener("click", closeOverlayFn);

navOverlay.addEventListener("click", function (e) {
  if (e.target === navOverlay) closeOverlayFn();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeOverlayFn();
});
