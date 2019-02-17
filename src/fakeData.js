import v4 from 'uuid'

const firstUser = {
    id: v4(),
    name: 'Charles Strube',
    alias: 'goldskin',
    avatar: 'https://www.myquickidea.com/wp-content/uploads/2017/09/image-29.jpg'
}
const secondUser = {
    id: v4(),
    name: 'Ana Maria',
    alias: 'ananas',
    avatar: 'https://defis.leparisien.fr/revo_vignettes/etapes/medium/d3aea34fcf528735740acfe217712043.jpg'
}

const initialState = {
    users: [firstUser, secondUser],
    cards: [
        { id: v4(), like: 0, userId: firstUser.id },
        { id: v4(), like: 2, userId: secondUser.id }
    ]
}

export default initialState