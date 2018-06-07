function closeModal() {
    let modal = document.getElementById("modal")
    modal.remove()
}

function openModal(src, alt) {
  let modal = document.createElement("div")
  modal.setAttribute("id", "modal")
  modal.setAttribute("class", "modal")
  modal.innerHTML = `
  <div class="modal__container">
    <img src="${src}" alt="${alt}">
    <div onclick="closeModal()" class="close">
      <div class="fas fa-times-circle"></div>
    </div>
  </div>
    `
  document.body.appendChild(modal)
}

(function() {

  // Array of images from slider
  let sliderImg = [...document.getElementById("slider").getElementsByTagName("img")]

  sliderImg.map(el => el.addEventListener("click", e => {
    let src = e.target.src
    let alt = e.target.alt
    openModal(src, alt)
  }))

})()
