const sponsors = [
    {
        id:1,
        img:'1.png'
    },
    {
        id:2,
        img:'2.png'
    },
    {
        id:3,
        img:'3.png'
    },
    {
        id:4,
        img:'4.png'
    }
]

const renderSponsors = doc =>{
    let sponsor = document.createElement('div')
    sponsor.setAttribute('class','sponsor')
    let image = document.createElement('img')
    image.src = `/img/sponsors/${doc.img}`

    sponsor.appendChild(image)
    sponsorItems.appendChild(sponsor)
}

sponsors.map((el)=>renderSponsors(el))