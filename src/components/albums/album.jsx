import { useNavigate } from 'react-router';
import './albums.scss';



const albums = [
    {   id: 1,
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
            },{
                title: "Banana Peel Blues",
                artist: "Graceful Falls",
                duration: "4:02",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },{
                title: "Banana Peel Blues",
                artist: "Graceful Falls",
                duration: "4:02",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },{
                title: "Banana Peel Blues",
                artist: "Graceful Falls",
                duration: "4:02",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },{
                title: "Banana Peel Blues",
                artist: "Graceful Falls",
                duration: "4:02",
                genre: "soundtrack",
                img: "/songs/firstSong.jpg"
            },
        ]
    },
    {   id: 2,
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
    {   id: 3,
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
    {   id: 4,
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
            },
            {
                title: "Clumsy Chorus",
                artist: "Tumble Tunes",
                duration: "4:10",
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

function Album() {

    const navigate = useNavigate();
    
    return (
        <>
            <div className='album-header'>
                <h3>
                    Featured Albums
                </h3>
                <p>View All</p>
            </div>

            <div className='featured'>
                {albums.map((album, index) => (
                    <div
                        key={album.id}
                        onClick={() => navigate(`/album-details/${album.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={album.songs[0].img} alt="" />
                    </div>
                ))}
            </div>

            <div className='new-release'>
                <div className='new-release__header'>
                    <h3>New Releases</h3>
                    <p>View All</p>
                </div>
                {albums.map((album, indexNew) => (
                    <div className='new-release__album' key={indexNew}>
                        <img src={album.songs[0].img} alt="" />
                        <div>
                            <h4>{album.albumTitle}</h4>
                            <p>{album.artist}</p>
                        </div>
                        <p>{album.songs.length} songs</p>

                    </div>
                ))}
            </div>

        </>
    );
}

export default Album;