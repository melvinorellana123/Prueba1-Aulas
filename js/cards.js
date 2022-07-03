const cardContainer = document.querySelector('.contenedor-articulo')

fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(data => {
        const personajeCard = data.results.map(Card)
        cardContainer.innerHTML = personajeCard.join('')
    })

const Card = ({image, name, gender, species}) => {
    return (
        `<div class="articulo" data-aos="zoom-in-right">
            <img class="iconos" src='${image}'>
                <h2>${name} </h2>
                <h5>${gender}</h5>
                <p>${species}</p>
                <div class="caja-días">
                    <p>L</p>
                    <p>M</p>
                    <p>M</p>
                    <p>J</p>
                    <p>V</p>
                </div>
        </div>`

    )
}