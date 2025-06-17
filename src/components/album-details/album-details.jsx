import { useLocation } from 'react-router-dom';

function AlbumDetails() {
    const location = useLocation();
    const album = location.state?.album;

    if (!album) return <div>No album data found.</div>;

    return (
        <div>
            <h2>{album.albumTitle}</h2>
            <p>Genre: {album.genre}</p>
            <ul>
                {album.songs.map((song, idx) => (
                    <li key={idx}>
                        {song.title} - {song.singer} ({song.duration}s)
                    </li>
                ))}
            </ul>
        </div> 
    );
}

export default AlbumDetails;