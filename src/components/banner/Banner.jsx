import Button from '../button/Button';
import './Banner.css';

const Banner = (props) => {
    const {
        brannerTittle,
        bannerExtraCss,
        buttonName,
        buttonClasses,
        navigationPath
    } = props
    return (
        <div className={bannerExtraCss ? `banner ${bannerExtraCss}` : 'banner'}>
            <div className='banner_tittle'>{brannerTittle}</div>
            <Button buttonName={buttonName} classList={buttonClasses} navigatePath={navigationPath} isNavigationType={true} />
        </div>
    )
}

export default Banner;