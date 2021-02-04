import React from "react";
import './App.css';
import UserHeader from "./component/User/header/Header";
import UserContentProfile from "./component/User/content/profile/Profile";
import UserContentWall from "./component/User/content/wall/Wall";
import UserFooter from "./component/User/footer/Footer";

function App(props) {

  return (
        <div className='pageContents'>
          <div className='appWrapper'>
            <UserHeader />
            <div className='content'>
              <div>
                <UserContentProfile />
              </div>
              <div>
                <UserContentWall />
              </div>
            </div>
            <UserFooter />
          </div>
        </div>
  );
}

export default App;


/*<UserContentWall state={props.state} dispatch={props.dispatch} store={props.store}/>*/