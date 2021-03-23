import { connect } from "react-redux"
import Winner from "./Winner"




const mapStateToProps = (state) => {
    return {
        winner: state.winner, // state.winner is from the initial component which stores intitial state
        // state. winner is worked out from the reducer methods
    };
};
export default connect(mapStateToProps)(Winner)