const header = document.querySelector('header')

const headerContainer = document.createElement('nav')
headerContainer.className = 'header-container'

const logo = document.createElement('img')
logo.className = 'logo'
logo.src = '/logo.png'

const title = document.createElement('h1')
title.className = 'title'
title.textContent = "Zenith Cookbook"

headerContainer.appendChild(logo)
headerContainer.appendChild(title)


logo.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

// headerRight.appendChild(headerButton)

header.append(headerContainer)