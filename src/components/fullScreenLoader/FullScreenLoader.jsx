import { connect } from 'react-redux';
import './FullScreenLoader.css';

const mapStateToProps = (state) => {
    return ({
        showLoader: state.updateShowLoader.showLoader
    })
}

export const FullScreenLoader = connect(mapStateToProps)(
    (props) => {
        const { showLoader } = props;
        if (showLoader) {
            return (
                <div className="loader-container">
                </div>
            )
        }
        return null
    }
)