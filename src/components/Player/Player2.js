
import { connect } from "react-redux"
import Player from "./Player"
import {score} from "../../actions"


const mapStateToProps = (state) => {

    return {
        score: state.player2,
        server: state.server,
        playerName: state.name2,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(score()) // this score1 is referenced in the actions.js which is establishing
                                                 // player to be equal to 2
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)