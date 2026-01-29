let selectedCategory = "";
let selectedShare = "";

function selectCategory(btn, value) {
  selectedCategory = value;
  document.querySelectorAll(".category button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function selectShare(btn, value) {
  selectedShare = value;
  document.querySelectorAll(".share button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function postSkill() {
  const title = document.getElementById("skillTitle").value;
  const desc = document.getElementById("skillDesc").value;

  if (!title || !desc || !selectedCategory || !selectedShare) {
    alert("Please fill all fields");
    return;
  }

  fetch("http://localhost:3000/api/post-skill", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      title,
      description: desc,
      category: selectedCategory,
      shareType: selectedShare
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("✅ The skill is posted");
    clearForm();
  });
}

function clearForm() {
  document.getElementById("skillTitle").value = "";
  document.getElementById("skillDesc").value = "";
  selectedCategory = "";
  selectedShare = "";
  document.querySelectorAll("button").forEach(b => b.classList.remove("active"));
}
