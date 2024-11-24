(async () => {
  const connectSpans = Array.from(
    document.querySelectorAll("span.artdeco-button__text")
  ).filter((span) => span.textContent.trim() === "Conectar");

  for (const span of connectSpans) {
    span.click(); // Click en "Conectar"
    await new Promise((resolve) => setTimeout(resolve, 500));

    const sendSpan = Array.from(
      document.querySelectorAll("span.artdeco-button__text")
    ).find((s) => s.textContent.trim() === "Enviar sin nota");
    if (sendSpan) {
      sendSpan.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
})();
