import React from "react";
import './App.css';
import UserContentMenu from "./component/User/content/menu/Menu";
import UserContentWall from "./component/User/content/wall/Wall";
import UserFooter from "./component/User/footer/Footer";
import {connect} from "react-redux";
import UserHeaderContainer from "./component/User/header/HeaderContainer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeAPP} from "./component/UI/state/appReducer";
import PreLoader from "./component/common/preLoader/preLoader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAPP()
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader />
        }

        return (
            <div className='pageContents'>
                <div className='appWrapper'>
                    <UserHeaderContainer/>
                    <div className='content'>
                        <div>
                            <UserContentMenu/>
                        </div>
                        <div>
                            <UserContentWall/>
                        </div>
                    </div>
                    <UserFooter/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect (mapStateToProps, {initializeAPP})) (App)
