import { connect } from "react-redux"
import Reset from "./Reset"
import {reset} from "../../actions"



// we use a map dispatch to props 
const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset()),
    };
}
export default connect(null, mapDispatchToProps)(Reset)