import { getDarkMode } from "../../../store/mode";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        darkMode: getDarkMode(state)
    };
};

const CreateUser = (props) => {

};

export default connect(mapStateToProps)(CreateUser);