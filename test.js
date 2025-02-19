function callback() {
  console.log("button clicked");
}

button.addEventListener("click", callback);

button.addEventListener("click", () => {
  console.log("button clicked");
});