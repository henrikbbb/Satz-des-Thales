let aufgaben = []
let moving = false
let image

async function setupImages() {
  await new Promise(resolve => setTimeout(resolve, 100));
  for (let n = 1; n <= 8; n++) {
    let name = "Aufgabe" + String(n)
    let aufgabe = document.getElementById(name)
    aufgabe.addEventListener("mousedown", initialClick, false)

    aufgabe.style.left = getRandomInt(0, window.screen.width - aufgabe.width) + "px"
    aufgabe.style.top = getRandomInt(300, window.screen.height - aufgabe.height) + "px"
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function move(e){
  let newX = e.clientX - e.target.width/2
  let newY = e.clientY - e.target.height/2 + document.documentElement.scrollTop

  image.style.left = newX + "px"
  image.style.top = newY + "px"
}

function initialClick(e) {
  if(moving){
    document.removeEventListener("mousemove", move)
    moving = false
    return
  } else {
    moving = true
    image = this
    document.addEventListener("mousemove", move, false)
  }
}

function showSolution(n) {
  alert('Hello World!')
}

setupImages()
