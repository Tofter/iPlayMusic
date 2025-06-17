import Footer from "../components/footer";
import Header from "../components/header";
import Playlist from "../components/playlist/playlist";
import '../scss/playlists.scss';

function Playlists() {
    return ( 
        <>
            <div className="background"></div>
            <Header color="light" title='playlist'/>
            <main>
                <Playlist/>
            </main> 
            <Footer/>
        </>
     );
}

export default Playlists;