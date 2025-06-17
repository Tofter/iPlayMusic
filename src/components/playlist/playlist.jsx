import { useState } from 'react';
import './playlist.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';



const albums = [
    { 
        id: 1,
        albumTitle: "Midnight Drive",
        genre: "Synthwave",
        songs: [
            { title: "Neon Lights", singer: "Luna Ray", duration: 215 },
            { title: "City Dreams", singer: "Luna Ray", duration: 198 },
            { title: "After Hours", singer: "Luna Ray", duration: 234 },
            { title: "Lost in Sound", singer: "Luna Ray", duration: 210 },
            { title: "Skyline", singer: "Luna Ray", duration: 202 },
            { title: "Nightfall", singer: "Luna Ray", duration: 220 },
            { title: "Echoes", singer: "Luna Ray", duration: 205 }
        ]
    },
    {
        id: 2,
        albumTitle: "Sunrise Vibes",
        genre: "Pop",
        songs: [
            { title: "Golden Hour", singer: "Eli Stone", duration: 190 },
            { title: "First Light", singer: "Eli Stone", duration: 185 },
            { title: "Morning Breeze", singer: "Eli Stone", duration: 200 },
            { title: "Awakening", singer: "Eli Stone", duration: 210 },
            { title: "Shine On", singer: "Eli Stone", duration: 195 },
            { title: "New Day", singer: "Eli Stone", duration: 188 },
            { title: "Rise Up", singer: "Eli Stone", duration: 205 }
        ]
    },
    {
        id: 3,
        albumTitle: "Ocean Waves",
        genre: "Chillout",
        songs: [
            { title: "Tide", singer: "Marina Blue", duration: 225 },
            { title: "Seashells", singer: "Marina Blue", duration: 210 },
            { title: "Deep Blue", singer: "Marina Blue", duration: 230 },
            { title: "Coral Reef", singer: "Marina Blue", duration: 215 },
            { title: "Sail Away", singer: "Marina Blue", duration: 220 },
            { title: "Sunset Bay", singer: "Marina Blue", duration: 205 },
            { title: "Waves", singer: "Marina Blue", duration: 200 }
        ]
    },
    {
        id: 4,
        albumTitle: "Electric Heart",
        genre: "Electropop",
        songs: [
            { title: "Pulse", singer: "Nova Beat", duration: 210 },
            { title: "Voltage", singer: "Nova Beat", duration: 200 },
            { title: "Heartbeat", singer: "Nova Beat", duration: 215 },
            { title: "Shockwave", singer: "Nova Beat", duration: 220 },
            { title: "Current", singer: "Nova Beat", duration: 205 },
            { title: "Spark", singer: "Nova Beat", duration: 198 },
            { title: "Energy", singer: "Nova Beat", duration: 212 }
        ]
    },
    {
        id: 5,
        albumTitle: "Acoustic Tales",
        genre: "Acoustic",
        songs: [
            { title: "Campfire", singer: "Willow Lane", duration: 185 },
            { title: "Storyteller", singer: "Willow Lane", duration: 190 },
            { title: "Old Road", singer: "Willow Lane", duration: 200 },
            { title: "Homeward", singer: "Willow Lane", duration: 195 },
            { title: "Fields", singer: "Willow Lane", duration: 188 },
            { title: "Sunset Song", singer: "Willow Lane", duration: 192 },
            { title: "Journey", singer: "Willow Lane", duration: 205 }
        ]
    },
    {
        id: 6,
        albumTitle: "Starlit Skies",
        genre: "Ambient",
        songs: [
            { title: "Cosmos", singer: "Celeste Vega", duration: 220 },
            { title: "Stardust", singer: "Celeste Vega", duration: 210 },
            { title: "Orbit", singer: "Celeste Vega", duration: 215 },
            { title: "Galaxies", singer: "Celeste Vega", duration: 225 },
            { title: "Meteor", singer: "Celeste Vega", duration: 205 },
            { title: "Aurora", singer: "Celeste Vega", duration: 218 },
            { title: "Moonlight", singer: "Celeste Vega", duration: 212 }
        ]
    },
    {
        id: 7,
        albumTitle: "Dreamscape",
        genre: "Dream Pop",
        songs: [
            { title: "Lucid", singer: "Dream Weaver", duration: 210 },
            { title: "Sleepwalker", singer: "Dream Weaver", duration: 200 },
            { title: "REM", singer: "Dream Weaver", duration: 215 },
            { title: "Night Vision", singer: "Dream Weaver", duration: 225 },
            { title: "Slumber", singer: "Dream Weaver", duration: 205 },
            { title: "Awake", singer: "Dream Weaver", duration: 218 },
            { title: "Eclipse", singer: "Dream Weaver", duration: 212 }
        ]
    },
    {
        id: 8,
        albumTitle: "Urban Pulse",
        genre: "Hip Hop",
        songs: [
            { title: "Rush Hour", singer: "Metro Sound", duration: 195 },
            { title: "City Lights", singer: "Metro Sound", duration: 202 },
            { title: "Concrete Jungle", singer: "Metro Sound", duration: 210 },
            { title: "Subway", singer: "Metro Sound", duration: 200 },
            { title: "Skyline Drive", singer: "Metro Sound", duration: 215 },
            { title: "Night Bus", singer: "Metro Sound", duration: 205 },
            { title: "Sunrise Commute", singer: "Metro Sound", duration: 198 }
        ]
    },
    {
        id: 9,
        albumTitle: "Retro Vibes",
        genre: "Retro",
        songs: [
            { title: "Cassette Days", singer: "Vinyl Nova", duration: 220 },
            { title: "Polaroid", singer: "Vinyl Nova", duration: 210 },
            { title: "Arcade", singer: "Vinyl Nova", duration: 215 },
            { title: "Roller Disco", singer: "Vinyl Nova", duration: 225 },
            { title: "Neon Nights", singer: "Vinyl Nova", duration: 205 },
            { title: "Synthwave", singer: "Vinyl Nova", duration: 218 },
            { title: "Back in Time", singer: "Vinyl Nova", duration: 212 }
        ]
    }
];

function Playlist() {
    const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);

    function numberToTime(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

    return (
        <>
            <div className='albums'>
                {albums.map((album, index) => (
                    <div
                        key={index}
                        className={`album${selectedAlbumIndex === index ? ' selected' : ''}`}
                        onClick={() => setSelectedAlbumIndex(index)}
                    >
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="" />
                    </div>
                ))}
            </div>
            <div>
                <h3 className='albums__title'>Top 50 {albums[selectedAlbumIndex].genre}</h3>
            </div>
            <div className='playlist'>
                {albums[selectedAlbumIndex].songs.map((song, songIndex) => (
                    <div className='playlist__songs' key={songIndex}>
                        <div className='playlist__songs__info'>
                            <FaPlay/>
                            <div>
                                <h4>{song.title}</h4>
                                <p>{song.singer}</p>
                            </div>
                        </div>

                        <p>{numberToTime(song.duration)}</p>
                    </div>
                ))}
            </div>
            <div className='button'>
                <button>listen all</button>
            </div>
        </>
    );
}

export default Playlist;