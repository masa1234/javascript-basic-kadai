const btn = document.getElementById("btn");
const h2Text = document.getElementById("text");
btn.addEventListener("click", () => {
  setTimeout(() => {
    console.log("2秒経過しました");
    h2Text.textContent = "ボタンをクリックしました";
  }, 2000);
});
