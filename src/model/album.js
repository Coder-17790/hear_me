const album = [
    {
        Img: require('../assets/album1.png'),
        name: 'Ariana Grande',
    },{
        Img: require('../assets/album2.png'),
        name: 'The Weeknd',
    },{
        Img: require('../assets/album3.png'),
        name: 'Acidrap',
    },
]

function getAlbum(){
    return album
}

export default{
    getAlbum
}