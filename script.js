const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}

function goLayer2() {
  show("layer2");
}

function showPopup() {
  show("layer3");
}

function finalLayer() {
  show("final");
}

function show(id) {
  document.querySelectorAll(".layer").forEach(l => l.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
