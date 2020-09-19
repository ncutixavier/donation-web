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
    },
    {
        id:5,
        img:'5.png'
    }
]

const renderSponsors = doc =>{
    let sponsor = document.createElement('div')
    sponsor.setAttribute('class','sponsor')
    sponsor.setAttribute('style', `background-image: url(/img/sponsors/${doc.img});`)

    sponsorItems.appendChild(sponsor)
}

sponsors.map((el)=>renderSponsors(el))