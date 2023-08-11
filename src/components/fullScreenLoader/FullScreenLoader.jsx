import { connect } from 'react-redux';
import './FullScreenLoader.css';

const mapStateToProps = (state) => {
    return ({
        showLoader: state.updateShowLoader.showLoader,
        showTransparentPageLoad: state.updateShowLoader.showTransparentPageLoad
    })
}

export const FullScreenLoader = connect(mapStateToProps)(
    (props) => {
        const { showLoader, showTransparentPageLoad } = props;
        if (showLoader) {
            return (
                <div className={showTransparentPageLoad ? "loader-container" : "loader-container loader-container-miscellaneous"}>
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