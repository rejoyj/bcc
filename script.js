document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#gallery img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
  
    const initialImageCount = 5;
    let currentImageCount = initialImageCount;
  
    images.forEach((image, index) => {
      if (index < currentImageCount) {
        image.style.display = "block"; 
      } else {
        image.style.display = "none";
      }
  
      image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden"; 
      });
    });
  
    loadMoreBtn.addEventListener("click", function () {
      currentImageCount += 5; 
      images.forEach((image, index) => {
        if (index < currentImageCount) {
          image.style.display = "block"; 
        }
      });
  
      if (currentImageCount >= images.length) {
        loadMoreBtn.style.display = "none"; 
      }
    });
  
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);
  
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    document.addEventListener("click", function (event) {
      if (!modal.contains(event.target)) {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = ""; 
    }
  });