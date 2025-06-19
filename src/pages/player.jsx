import Footer from "../components/footer";
import Header from "../components/header";
import Play from "../components/play/play";


function Player() {
    return ( 
        <>
        <Header title = 'playing' search = {false} />
        <main>
            <Play/>
        </main>
        <Footer/>
        </>
     ); 
}

export default Player;