import './RootPage.css';
import Banner from "../../components/banner/Banner";

const RootPage = () => {
    return (
        <div className='root_page'>
            <Banner
                brannerTittle={'Welcome To ShopIt'}
                buttonName={'Shop Now'}
                buttonClasses={'shop_now_btn btn'}
                navigationPath={'/home'}
            />
        </div>
    )
}

export default RootPage;