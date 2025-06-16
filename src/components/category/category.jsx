import { HiDotsHorizontal } from 'react-icons/hi';
import './category.scss';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';

const categories = [
    {
        name: 'Alternative',
        subcategories: ['Indie', 'Punk', 'Grunge']
    },
    {
        name: 'Blues',
        subcategories: ['Acoustic Blues', 'Blues Rock', 'Canadian Blues', 'Jazz Blues', 'Piano Blues', 'Soul Blues', 'Swamp Blues']
    },
    {
        name: 'Classical',
        subcategories: ['Baroque', 'Romantic', 'Modern']
    },
    {
        name: 'Country',
        subcategories: ['Bluegrass']
    },
    {
        name: 'Dance',
        subcategories: ['House', 'Techno', 'Trance']
    },
    {
        name: 'Electronic',
        subcategories: ['Ambient', 'Downtempo', 'Synthwave']
    },
    {
        name: 'Fitness & Workout',
        subcategories: ['Cardio', 'Strength Training', 'Yoga']
    },
    {
        name: 'Hip-Hop/Rap',
        subcategories: ['Old School', 'New School', 'Trap']
    },
    {
        name: 'Industrial',
        subcategories: ['EBM', 'Noise', 'Dark Ambient']
    }
]

function Category() {
    return (
        <>
            <h2>Categories</h2>
            {categories.map((category, index) => (
                <div key={index} className='category'>
                    <details name='open'>
                        <summary className={`category-list color-${index}`}>{category.name}
                            <HiDotsHorizontal size={35} />
                        </summary>
                        <ul>
                            {category.subcategories.map((subcategory, subIndex) => (
                                <Link key={subIndex}>
                                    <li>{subcategory}<FaAngleRight />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </details>

                </div>
            ))}
        </>
    );
}

export default Category;