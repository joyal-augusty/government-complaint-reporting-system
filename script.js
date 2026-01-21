document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  /* ---------- Overlay ---------- */
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.style.display = "none";

  /* ---------- User Details Popup ---------- */
  const popup = document.createElement("div");
  popup.className = "user-popup";

  popup.innerHTML = `
    <h3>User Details</h3>
    <input type="text" id="userName" placeholder="Enter your name" />
    <input type="tel" id="userPhone" placeholder="Enter your phone number" />
    <button type="button" id="continueBtn">Continue</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  /* ---------- Small Success Box ---------- */
  const successBox = document.createElement("div");
  successBox.className = "success-box";
  successBox.style.display = "none";

  successBox.innerHTML = `
    <span class="success-icon">✔</span>
    <span>Complaint successfully submitted</span>
  `;

  document.body.appendChild(successBox);

  /* ---------- Submit Complaint ---------- */
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    overlay.style.display = "flex";
  });

  /* ---------- Continue ---------- */
  popup.addEventListener("click", (event) => {
    if (event.target.id === "continueBtn") {
      const name = document.getElementById("userName").value.trim();
      const phone = document.getElementById("userPhone").value.trim();

      if (!name || !phone) {
        alert("Please enter name and phone number");
        return;
      }

      overlay.style.display = "none";

      // Show success box
      successBox.style.display = "flex";
      successBox.classList.add("show");

      // Auto hide
      setTimeout(() => {
        successBox.classList.remove("show");
        successBox.style.display = "none";
        form.reset();
      }, 2500);
    }
  });
});
