(function() {
  const right = document.getElementById("arrow_right"),
      left = document.getElementById("arrow_left"),
      slider = document.getElementById("slider"),
      sliderContainer = slider.parentNode

  let position = 0;

  right.addEventListener("click", () => {
    let limit = 0
    let currentLeft = slider.style.left.includes("px") ? parseInt(slider.style.left) : 0

    if (currentLeft < limit)
      position += 30
      slider.style.left = position + "px"
  })

  left.addEventListener("click", () => {
    let limit = sliderContainer.offsetWidth - slider.offsetWidth
    let currentLeft = parseInt(slider.style.left)

    if (currentLeft > limit)
      position -= 30
      slider.style.left = position + "px"
  })

})()
