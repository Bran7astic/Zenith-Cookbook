const header = document.querySelector('header')

const headerContainer = document.createElement('nav')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.src = '/logo.png'

const title = document.createElement('h1')
title.textContent = "Zenith Cookbook"

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('Home')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.append(headerContainer)