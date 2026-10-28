// Project 2026 status site - Roblox Tableboard Studios

// Answers live here so they're easy to flip later.
const STATUS = {
  testingInternally: "YES",
  finalizingInternalTesting: "YES",
};

// Render the yes/no badges from the answers above.
function renderAnswers() {
  const answers = document.querySelectorAll(".answer");
  if (answers[0]) answers[0].textContent = STATUS.testingInternally;
  if (answers[1]) answers[1].textContent = STATUS.finalizingInternalTesting;
}

// Stamp the last-updated date at the bottom.
function renderLastUpdated() {
  const el = document.getElementById("last-updated");
  if (el) {
    el.textContent = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}

renderAnswers();
renderLastUpdated();
