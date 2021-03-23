import { connect } from "react-redux"
import Form from "./Form"
import {saveSettings} from "../../actions"




// const mapStateToProps = (state) => {
//     return {
//         winner: state.winner,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
            submitForm: (state)=>(dispatch(saveSettings(state)))
    };
};
export default connect(null, mapDispatchToProps)(Form)

