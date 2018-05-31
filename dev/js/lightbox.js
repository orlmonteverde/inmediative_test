function openModal(src, alt) {
  let modal = document.createElement("div")
  modal.setAttribute("id", "modal")
  modal.setAttribute("class", "modal")
  modal.innerHTML = `
    <img src="${src}" alt="${alt}">
    <button onclick="closeModal()" class="btn">Close</button>
    `
  document.body.appendChild(modal)
}

function closeModal() {
  let modal = document.getElementById("modal")
  modal.parentElement.removeChild(modal)
}

// Array of images from slider
let sliderImg = [...document.getElementById("slider").getElementsByTagName("img")]

sliderImg.map(el => el.addEventListener("click", e => {
  let src = e.target.src
  let alt = e.target.alt
  openModal(src, alt)
}))
