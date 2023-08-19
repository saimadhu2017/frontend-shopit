import Button from '../button/Button';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner_tittle'>Welcome To ShopIt</div>
            <Button buttonName='Shop Now' classList='shop_now_btn btn' navigatePath='/home' isNavigationType={true} />
        </div>
    )
}

export default Banner;