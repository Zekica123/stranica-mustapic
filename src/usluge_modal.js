document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(
    ".usluge_card__plus[data-modal-target]"
  );
  var closeButtons = document.querySelectorAll(".zatvori");

  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = button.getAttribute("data-modal-target");
      var targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add("is-open");
        targetModal.setAttribute("aria-hidden", "false");
      }
    });
  });

  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      var modal = closeBtn.closest(".usluge-modal");
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });

  window.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("usluge-modal")) {
      event.target.classList.remove("is-open");
      event.target.setAttribute("aria-hidden", "true");
    }
  });
});