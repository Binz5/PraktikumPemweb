document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("pegawaiForm");
    const namaInput = document.getElementById("nama");
    const jabatanInput = document.getElementById("jabatan");
    const emailInput = document.getElementById("email");
    const teleponInput = document.getElementById("telepon");

    function showError(input, message) {
      const errorMessage = input.nextElementSibling;
      errorMessage.innerText = message;
      errorMessage.style.display = "block";
    }

    function hideError(input) {
      const errorMessage = input.nextElementSibling;
      errorMessage.style.display = "none";
    }
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let isValid = true;
  
      if (namaInput.value.trim() === "") {
        showError(namaInput, "DI ISI YA!");
        isValid = false;
      } else {
        hideError(namaInput);
      }

      if (jabatanInput.value.trim() === "") {
        showError(jabatanInput, "DI ISI YA!");
        isValid = false;
      } else {
        hideError(jabatanInput);
      }

      if (emailInput.value.trim() === "") {
        showError(emailInput, "DI ISI YA!");
        isValid = false;
      } else {
        hideError(emailInput);
      }

      if (teleponInput.value.trim() === "") {
        showError(teleponInput, "DI ISI YA!");
        isValid = false;
      } else {
        hideError(teleponInput);
      }

      if (isValid) {
        alert("Form berhasil disubmit!");
        form.reset();
      }
    });
  
    namaInput.addEventListener("input", () => { if (namaInput.value.trim() !== "") hideError(namaInput); });
    jabatanInput.addEventListener("input", () => { if (jabatanInput.value.trim() !== "") hideError(jabatanInput); });
    emailInput.addEventListener("input", () => { if (emailInput.value.trim() !== "") hideError(emailInput); });
    teleponInput.addEventListener("input", () => { if (teleponInput.value.trim() !== "") hideError(teleponInput); });
  });
  