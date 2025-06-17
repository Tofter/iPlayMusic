import Footer from "../components/footer";
import Header from "../components/header";
import Album from "../components/albums/album";

function Albums() {
    return (
        <>
            <Header title='albums' />
            <main>
                <div>
                    <h2>All Albums</h2>
                </div>
                <Album/>
            </main>
            <Footer /> 
        </>

    );
}

export default Albums;