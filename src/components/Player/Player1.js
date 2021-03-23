import { connect } from "react-redux"
import Player from "./Player"
import {score1} from "../../actions"




const mapStateToProps = (state) => {
    return {
        score: state.player1,
        server: state.server,
        playerName: state.name1,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement:() => dispatch(score1()) // this score1 is referenced in the actions.js which is establasing
                                                 // player to be equal to
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)