const renderSwords = async () => {
    const response = await fetch('/swords')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(sword => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${sword.image})`

            const swordName = document.createElement('h3')
            swordName.textContent = sword.name
            bottomContainer.append(swordName)

            const damage = document.createElement('p')
            damage.textContent = `Damage: ${sword.damage}`
            bottomContainer.append(damage)

            const tooltip = document.createElement('p')
            tooltip.textContent = `Tooltip: ${sword.tooltip}`
            bottomContainer.appendChild(tooltip)

            const readMore = document.createElement('a')
            readMore.textContent = "Read More >"
            readMore.setAttribute('role', 'button')
            readMore.href = `/swords/${sword.id}`
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })
    } else {
        const noDataMsg = document.createElement('h2')
        noDataMsg.textContent = "No Swords Available 😔"
    }
}

renderSwords()