import React from "react";
import './App.css';

import UserHeader from "./component/User/header/Header";
import UserContentProfile from "./component/User/content/profile/Profile";
import UserContentWall from "./component/User/content/wall/Wall";
import Follow from "./component/User/content/follow/Follow";
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
                <UserContentWall state={props.state} addNewPost={props.addNewPost}
                                 addNewMessage={props.addNewMessage} addNewComment={props.addNewComment}
                                 updateNewPostText={props.updateNewPostText}
                                 updateNewCommentText={props.updateNewCommentText}/>
              </div>
              <div>
                <Follow />
              </div>
            </div>  {/*content*/}
            <UserFooter />
          </div>  {/*appWrapper*/}
        </div>  //{/*pageContents*/}
  );
}

export default App;
