var img = document.querySelector('.pfp')

function onHover() {
  img.setAttribute('src', 'https://media-exp1.licdn.com/dms/image/C4D03AQEHelUOvkGfXA/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=K6KjlPHGD-9W5AMncGmHE29MKbkRyBvwxHO6zVnYfOM')
}

function offHover() {
  img.setAttribute('src', 'https://avatars0.githubusercontent.com/u/43930639?s=400&u=a259dc9be74c11376cd3b07c8f1c5858ef0e30f7&v=4')
}

img.addEventListener('mouseenter', onHover)
img.addEventListener('mouseleave', offHover)

