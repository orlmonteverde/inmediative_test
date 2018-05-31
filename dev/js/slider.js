let right = document.getElementById("arrow_right"),
  left = document.getElementById("arrow_left"),
  slider = document.getElementById("slider"),
  position = 0;

right.addEventListener("click", () => {
  position += 30
  slider.style.transform = `translate(${position}px)`
})

left.addEventListener("click", () => {
  position -= 30
  slider.style.transform = `translate(${position}px)`
})

