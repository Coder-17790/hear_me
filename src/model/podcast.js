const podcasts =[
    {
        id: 1,
        day: new Date(),
        time: {
            minute: 48,
            second: 26
        },
        img: require('../assets/podcast1.png'),
        name: 'Reclaiming our future with the world',
        author: 'Tristan Harris',
        espisoda: 837,
        title: 'Apple Talk'
    },{
        id: 2,
        day: new Date(),
        time: {
            minute: 56,
            second: 24
        },
        img: require('../assets/podcast2.png'),
        name: 'The Psychology of Sound Design',
        author: 'Dallas Taylor',
        espisoda: 593,
        title: 'What a day'
    },{
        id: 3,
        day: new Date(),
        time: {
            minute: 45,
            second: 49
        },
        img: require('../assets/podcast3.png'),
        name: 'How to See the Future and Be Ready for anything',
        author: 'Jane McGonigal',
        espisoda: 690,
        title: 'The Jordan Harbinger show'
    },{
        id: 4,
        day: new Date('2024-05-01'),
        ime: {
            minute: 48,
            second: 26
        },
        img: require('../assets/podcast4.png'),
        name: 'Reclaiming our future with the world',
        author: 'Tristan Harris',
        espisoda: 837
    },{
        id: 5,
        day: new Date('2024-05-01'),
        ime: {
            minute: 51,
            second: 20
        },
        img: require('../assets/podcast5.png'),
        name: 'Surprising Entrepreneurial Truths',
        author: 'Reid Hoffman',
        espisoda: 621,
        title: 'Invest Like The Best'
    },{
        id: 6,
        day: new Date('2024-05-01'),
        ime: {
            minute: 38,
            second: 29
        },
        img: require('../assets/podcast1.png'),
        name: 'Changing Lives with Synthetic Biology',
        author: 'Amy Webb',
        espisoda: 687,
        title: 'SaaS & Scotch'
    }
]

function getPodcast(){
    return podcasts
}

export default{
    getPodcast
}