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

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const getRandomText = () => text.substring(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))
const initialState = {
    users: [firstUser, secondUser],
    cards: [
        {
            id: v4(),
            like: 0,
            userId: firstUser.id,
            text: getRandomText(),
            date: '2018-08-10T15:12:45'
        },
        {
            id: v4(),
            like: 2,
            userId: secondUser.id,
            text: getRandomText(),
            date: '2018-08-09T15:12:45'
        },
        {
            id: v4(),
            like: 401239,
            userId: firstUser.id,
            text: getRandomText(),
            date: '2018-08-11T12:07:45'
        },
        {
            id: v4(),
            like: 988,
            userId: firstUser.id,
            text: getRandomText(),
            date: '2018-09-09T09:45:45'
        },
    ]
}

export default initialState