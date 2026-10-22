posthog.onFeatureFlags(() => {
  if (posthog.getFeatureFlag("hero-contact-button-copy") === "test") {
    document.querySelector('[data-track="get_in_touch"]').textContent =
      "Let's Talk";
  }
});
