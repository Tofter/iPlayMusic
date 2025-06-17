import { useState } from 'react';
import './featured-card.scss';

const albums = [
    {
        albumTitle: "Clumsy Anthems",
        artist: "The Stumblers",
        songs: [ 
            {
                title: "Trip Over You",
                artist: "The Stumblers",
                duration: "3:21",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
            {
                title: "Falling Gracefully",
                artist: "The Stumblers",
                duration: "2:58",
                genre: "soundtrack",
                img: "/songs/secondSong.jpg"
            },
            {
                title: "Oops Again",
                artist: "The Stumblers",
                duration: "3:45",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            }
        ]
    },
    {
        albumTitle: "Soundtrack of Slips",
        artist: "Graceful Falls",
        songs: [
            {
                title: "Banana Peel Blues",
                artist: "Graceful Falls",
                duration: "4:02",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
            {
                title: "Slippery Steps",
                artist: "Graceful Falls",
                duration: "3:15",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
            {
                title: "Lost Balance",
                artist: "Graceful Falls",
                duration: "2:49",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            }
        ]
    },
    {
        albumTitle: "Missteps & Melodies",
        artist: "Tumble Tunes",
        songs: [
            {
                title: "Stumble Shuffle",
                artist: "Tumble Tunes",
                duration: "3:33",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
            {
                title: "Awkward Waltz",
                artist: "Tumble Tunes",
                duration: "2:57",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
            {
                title: "Clumsy Chorus",
                artist: "Tumble Tunes",
                duration: "4:10",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            }
        ]
    }
];

function FeaturedCard() {

    //saved for when i fetch
    const [featuredAlbums, setFeaturedAlbums] = useState([])

    return (
        <>
            <div className='featured-card'>
            {albums.map((album, index) => (
                <div className='featured-card__container' key={index}>
                    <h2>{album.albumTitle}</h2>
                    <p>{album.artist}</p>
                    <img src={album.songs[0].img} alt={album.albumTitle} />
                </div>
            ))}
        </div>
        </>
    );
}

export default FeaturedCard;