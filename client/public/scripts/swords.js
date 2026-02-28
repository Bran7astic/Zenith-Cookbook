const renderSwords = async () => {
    const response = await fetch('/swords')
    console.log(response)
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(sword => {
            const card = document.createElement('article')
            card.classList.add('card')

            const cardContainer = document.createElement('div')
            card.classList.add('card-container')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            
            const image = document.createElement('img')
            console.log(sword.image)
            image.src = sword.image
            image.className = 'preview-img'
            topContainer.appendChild(image)
            
            const swordName = document.createElement('h3')
            swordName.textContent = sword.name
            topContainer.append(swordName)

            const damage = document.createElement('p')
            damage.textContent = `Damage: ${sword.damage}`
            bottomContainer.append(damage)

            const tooltip = document.createElement('p')
            tooltip.style.fontStyle = 'italic'
            tooltip.textContent = sword.tooltip ? `Tooltip: ${sword.tooltip}` : ''
            bottomContainer.appendChild(tooltip)

            const readMore = document.createElement('a')
            readMore.textContent = "Read More"
            readMore.setAttribute('role', 'button')
            readMore.href = `/swords/${sword.id}`
            bottomContainer.appendChild(readMore)

            cardContainer.appendChild(topContainer)
            cardContainer.appendChild(bottomContainer)

            card.appendChild(cardContainer)

            mainContent.appendChild(card)

        })
    } else {
        const noDataMsg = document.createElement('h2')
        noDataMsg.textContent = "No Swords Available 😔"
        mainContent.append(noDataMsg)
    }
}

const renderSwordDetail = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch(`/swords`)
    const data = await response.json()

    const swordContent = document.getElementById('sword-content')
    let sword

    sword = data.find(gift => gift.id === requestedID)

    if (sword) {
        const image = document.getElementById('image')
        image.src = sword.image

        const name = document.getElementById('name')
        name.textContent = sword.name

        const gif = document.getElementById('gif')
        gif.src = sword.gif

        const damage = document.getElementById('damage')
        damage.textContent = `Damage: ${sword.damage}`

        const tooltip = document.getElementById('tooltip')
        tooltip.textContent = sword.tooltip
    } else {
        window.location.href = '../404.html';
    }
}

if (document.getElementById('main-content')) {
    renderSwords();
}
if (document.getElementById('sword-content')) {
    renderSwordDetail();
}
