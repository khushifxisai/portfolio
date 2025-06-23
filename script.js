const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
