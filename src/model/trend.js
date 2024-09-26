const trend = [
    {
        Img: require('../assets/trend1.png'),
        name: 'Shades of Love',
        author: 'Ania Szarmach'
    },{
        Img: require('../assets/trend2.png'),
        name: 'Without You',
        author: 'The Kid LAROI'
    },{
        Img: require('../assets/trend3.png'),
        name: 'Save Your Tears',
        author: ' The Weeknd & Ari'
    },
]

function getTrend(){
    return trend
}

export default{
    getTrend
}