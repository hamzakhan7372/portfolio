document.querySelectorAll(".nav-link[data-track]").forEach(function (link) {
  link.addEventListener("click", function () {
    posthog.capture("nav_link_clicked", { link: link.dataset.track });
  });
});

document.querySelectorAll(".btn[data-track]").forEach(function (button) {
  button.addEventListener("click", function () {
    posthog.capture("hero_button_clicked", { button: button.dataset.track });
  });
});
