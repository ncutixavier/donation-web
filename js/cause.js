const causes = [
    {
        id:1,
        img: 'education.png',
        title: 'Education'
    },
    {
        id:2,
        img: 'refugees.jpg',
        title: 'Food'
    },
    {
        id:3,
        img: 'street.jpg',
        title: 'Poor'
    },
    {
        id:4,
        img: 'medical.jpg',
        title: 'Health'
    }
]

const renderCauses = doc =>{
    let cause = document.createElement('div')
    cause.setAttribute('class','cause')
    cause.setAttribute('data-id',`${doc.id}`)

    let img = document.createElement('div')
    img.setAttribute('class','cause-img')
    img.setAttribute('style',`background-image: url(/img/causes/${doc.img})`)

    let title = document.createElement('div')
    title.setAttribute('class','cause-title')

    let h3 = document.createElement('h3')
    h3.textContent = doc.title
    title.appendChild(h3)

    let a = document.createElement('a')
    a.setAttribute('class','cause-btn')
    a.textContent = 'Donate'

    cause.appendChild(img)
    cause.appendChild(title)
    cause.appendChild(a)

    causeItems.appendChild(cause)
}

causes.map((el)=>renderCauses(el))
