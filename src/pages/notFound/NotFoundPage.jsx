import './NotFoundPage.css';
import Banner from "../../components/banner/Banner";

const NotFoundPage = () => {
    return (
        <div className='not_found_page'>
            <Banner
                brannerTittle={'404-Page Not Found'}
                buttonName={'Go To Home'}
                buttonClasses={'shop_now_btn btn'}
                navigationPath={'/home'}
                bannerExtraCss={'not_found_banner'}
            />
        </div>
    )
}

export default NotFoundPage;