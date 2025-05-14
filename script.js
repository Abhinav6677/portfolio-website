const toggleBtn = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const modal = document.getElementById("skillModal");
const openBtn = document.getElementById("openModalBtn");
const cancelBtn = document.getElementById("cancelModalBtn");
const confirmBtn = document.getElementById("confirmAddSkill");


openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  // Refresh Slick when modal becomes visible
  setTimeout(() => {
    $(".slider").slick("setPosition");
  }, 100); 
});

// Close modal
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

cancelBtn.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", closeModal);

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
