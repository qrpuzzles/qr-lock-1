const correctCode = "9809";

const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const lockContainer = document.getElementById("lockContainer");
const status = document.getElementById("status");
const secret = document.getElementById("secret");

unlockButton.addEventListener("click", checkCode);

codeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});

function checkCode() {
    if (codeInput.value === correctCode) {

        // Unlock
        lockContainer.classList.add("unlocked");

        status.textContent = "LOCK UNLOCKED";
        status.style.color = "#31ed77";

        codeInput.disabled = true;
        unlockButton.disabled = true;

        unlockButton.textContent = "UNLOCKED";

        secret.style.display = "block";

    } else {

        status.textContent = "INCORRECT CODE";
        status.style.color = "#ff4d6d";

        codeInput.value = "";

        codeInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 250
            }
        );
    }
}