import FeaturedCard from "../components/card/featured-card";
import Footer from "../components/footer";
import Header from "../components/header";
import '../scss/main.scss'


function Index() {
    return (
        <>
            <Header
                title={'featured'}
            />
            <main>
                <div>
                    <h2>Featured</h2>
                </div>
                <FeaturedCard /> 
                <FeaturedCard />
                <FeaturedCard />
            </main>
            <Footer />
        </>
    );
}

export default Index;