const music =[
    {
        id: 1,
        day: new Date(),
        time: {
            minute: 4,
            second: 36
        },
        img: require('../assets/music1.png'),
        name: 'BREAK MY SOUL',
        author: 'Beyonce',
        type: 'Album'
    },{
        id: 2,
        day: new Date(),
        time: {
            minute: 3,
            second: 58,
        },
        img: require('../assets/music2.png'),
        name: 'Disaster',
        author: 'Conan Gray',
        type: 'Album'
    },{
        id: 3,
        day: new Date(),
        time: {
            minute: 4,
            second: 45
        },
        img: require('../assets/music3.png'),
        name: 'HANDSOME',
        author: 'Warren Hue',
        type: 'Single'
    },{
        id: 4,
        day: new Date('2024-05-01'),
        time: {
            minute: 5,
            second: 23
        },
        img: require('../assets/music4.png'),
        name: 'Sharks',
        author: 'Imagine Dragons',
        type: 'Single'
    },{
        id: 5,
        day: new Date('2024-05-01'),
        time: {
            minute: 4,
            second: 20,
        },
        img: require('../assets/music5.png'),
        name: 'Fly Me To The Sun',
        author: 'Romantic Echoes',
        type: 'Album'
    },{
        id: 6,
        day: new Date('2024-05-01'),
        time: {
            minute: 3,
            second: 48
        },
        img: require('../assets/music6.png'),
        name: 'The Bended Man',
        author: 'Sunwich',
        type: 'Single'
    },{
        id: 7,
        day: new Date('2024-05-01'),
        time: {
            minute: 3,
            second: 48
        },
        img: require('../assets/music7.png'),
        name: "Somebody's nobody",
        author: 'Sunwich',
        type: 'Single'
    }
    
]

function getMusic(){
    return music
}

export default{
    getMusic
}