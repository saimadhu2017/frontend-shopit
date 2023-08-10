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
                    <div className="cs_square">
                        <div className="cs_square1">
                        </div>
                        <div className="cs_square2">
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
)