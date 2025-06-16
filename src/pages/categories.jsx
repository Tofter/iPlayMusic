import Category from "../components/category/category";
import Footer from "../components/footer";
import Header from "../components/header";

function Categories() {
    return (
        <>
            <Header
                title='categories' />
            <main>
                <div>
                    <Category />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Categories;