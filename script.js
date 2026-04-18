"use strict";
{
  const $ = (q) => document.querySelector(q);
  const $$ = (q) => document.querySelectorAll(q);

  applyEmailFeature();
  applyShowMoreCareerFeature();

  // Hiện thông tin khi người dùng nhập mail chính xác
  function applyEmailFeature() {
    const emailForm = $("#email-form");
    if (!emailForm) return;
    const emailInput = $("#email-form input[name='email']");
    const emailMessage = emailInput.nextElementSibling;
    const infoEl = emailForm.nextElementSibling;

    const showError = (message) => {
      emailMessage.className = "text-danger";
      emailMessage.textContent = message;
    };
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (email === "") return showError("Vui lòng nhập email của bạn!");
      if (!emailRegex.test(email))
        return showError("Vui lòng nhập email hợp lệ!");
      emailForm.remove();
      infoEl.classList.remove("d-none");
    });
  }
  // Tính năng nghề nghiệp
  function applyShowMoreCareerFeature() {
    const careers = $$("#career .item");
    careers.forEach((career) =>
      career
        .querySelector(".view-more")
        .addEventListener("click", () => career.classList.toggle("show")),
    );
  }
}
