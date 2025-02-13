const userName = document.getElementById("username");
const loverName = document.getElementById("lover-name");
const userInfoBox = document.querySelector(".user-info-box");
const loveText = document.querySelector(".love-text");
const loveBtn = document.querySelector(".love-score-btn");

// Function to generate a consistent love score
function generateLoveScore(name1, name2) {
  const combinedNames = (name1 + name2).toLowerCase(); // Combine and lowercase for consistency
  let hash = 0;

  for (let i = 0; i < combinedNames.length; i++) {
    hash += combinedNames.charCodeAt(i); // Sum character codes
  }

  return hash % 101; // Convert to a percentage (0-100)
}

loveBtn.addEventListener("click", function () {
  const userNameValue = userName.value.trim();
  const loverNameValue = loverName.value.trim();

  if (userNameValue === "" || loverNameValue === "") {
    loveText.textContent = "Please enter both names!";
    loveText.style.color = "red";
    loveText.style.backgroundColor = "white";
    return;
  }

  // Generate a consistent love score
  const lovePercent = generateLoveScore(userNameValue, loverNameValue);

  userInfoBox.style.display = "none";
  loveText.textContent = `Your love score is ${lovePercent}%`;
  loveText.style.fontWeight = "700";

  loveBtn.textContent = "Start Over";

  // Reset functionality when the button is clicked again
  loveBtn.addEventListener(
    "click",
    function () {
      location.reload();
    },
    { once: true }
  ); // Ensures it runs only once
});
