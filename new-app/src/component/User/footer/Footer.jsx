import React from "react";
import s from './Footer.module.css';
import LogoGoToIt from "../../UI/logoIT/LogoGoToIt";

const UserFooter = (props) => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>
                <div>
                    <LogoGoToIt />
                    <div className={s.icons}>
                        <a href=""><img src="/facebook.png" alt=""/></a>
                        <a href=""><img src="/instagram.png" alt=""/></a>
                        <a href=""><img src="/pinterest.png" alt=""/></a>
                        <a href=""><img src="/telegram.png" alt=""/></a>
                        <a href=""><img src="/twitter.png" alt=""/></a>
                        <a href=""><img src="/youtube.png" alt=""/></a>
                    </div>
                </div>
                <div>
                    <ul>
                        <p>Features</p>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">Refer a friend</a></li>
                        <li><a href="">Finder app</a></li>
                        <li><a href="">Updetes</a></li>
                        <li><a href="">Beta</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Company</p>
                        <li><a href="">Design</a></li>
                        <li><a href="">Prototype</a></li>
                        <li><a href="">Collaborate</a></li>
                        <li><a href="">Sketch</a></li>
                        <li><a href="">Photoshop</a></li>
                        <li><a href="">Notepad</a></li>
                        <li><a href="">WEbStorm</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Get started</p>
                        <li><a href="">Tuturials</a></li>
                        <li><a href="">Resources</a></li>
                        <li><a href="">Guides</a></li>
                        <li><a href="">Example</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </div>
                <div className={s.contacts}>
                    <ul>
                        <p>Contact Us</p>
                        <li>
                            <div>
                                <img src="/cursor.jpg" alt=""/>
                                Kiev, Ukraine
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/email.jpg" alt=""/>
                                myemail@haha.com
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="/phoneCall.jpg" alt=""/>
                                +38 (077) 777 77 77
                            </div>
                        </li>
                    </ul>
                </div>  {/*contacts*/}
            </div>  {/*wrapper*/}
            <div className={s.copyright}>
                <p>Ihor Vassylenko © 2021 Everything will be great :)</p>
            </div>
        </div>  //footer
    )
}

export default UserFooter