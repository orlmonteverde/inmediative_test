/**
 * Slider
 * 
 */

let right = document.getElementById("arrow_right"),
  left = document.getElementById("arrow_left"),
  slider = document.getElementById("slider"),
  position = 0;

right.addEventListener("click", () => {
  position += 30
  slider.style.transform = `translate(${position}px)`
  console.log("position is " + position)
  console.log("translate is" + slider.style.transform)
})

left.addEventListener("click", () => {
  position -= 30
  slider.style.transform = `translate(${position}px)`
  console.log("position is " + position)
  console.log("translate is" + slider.style.transform)
})

/**
 * Lightbox
*/

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

let sliderImg = [...document.getElementById("slider").getElementsByTagName("img")]
sliderImg.map(el => el.addEventListener("click", e => {
  let src = e.target.src
  let alt = e.target.alt
  openModal(src, alt)
}))


