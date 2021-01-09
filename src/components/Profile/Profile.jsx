import React from 'react'
import style from './Profile.module.scss'
import {Col, Row} from "antd";
import About from "./About/About";
import Lots from "../Lots/Lots";
import {NavLink, Route} from "react-router-dom";
import Wallet from "./Wallet/Wallet";
import ProfileLots from "./ProfileLots/ProfileLots";
import SNblock from "./SNblock/SNblock";
import {getIsAuth} from "../../redux/auth-selector";
import {getIsLoginAlert, getIsWalletInAlert, getIsWalletOutAlert} from "../../redux/app-selector";
import {connect} from "react-redux";
import {SetMeTC} from "../../redux/auth-reducer";
import {RegTC} from "../../redux/reg-reducer";
import {getProfile} from "../../redux/profile-selector";

const Profile = ({profile,}) => {
    return (
        <div className={style.wrapper}>
            <Row>
                <Col span={3}></Col>
                <Col span={14} className={style.profile}>
                    <div className={style.hiBlock}>
                        Привет, ЛЕРА!
                    </div>
                    <div className={style.mainInfoBlock}>
                        <div className={style.avatar}>

                        </div>
                        <div className={style.Info}>
                            <div className={style.cityInfo}>
                                <p>
                                    23 года, Москва
                                </p>
                                <p>
                                    нет оценок
                                </p>
                            </div>
                            <div className={style.statisticInfo}>
                                <div>
                                    <p>Активные лоты</p>
                                    <p>5</p>
                                </div>
                                <div>
                                    <p>Выполненные лоты</p>
                                    <p>20</p>
                                </div>
                                <div>
                                    <p>Заказанные лоты</p>
                                    <p>2</p>
                                </div>
                                <div>
                                    <p>Награды</p>
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.additionInfoBlock}>
                        <div className={style.addInfoBlockNav}>
                            <NavLink exact activeClassName={style.activeAddInfoBlockNav} to={'/profile'}>Обо мне</NavLink>
                            <NavLink activeClassName={style.activeAddInfoBlockNav} to={'/profile/wallet'}>Счёт</NavLink>
                            <NavLink activeClassName={style.activeAddInfoBlockNav} to={'/profile/lots'}>Лоты</NavLink>
                        </div>
                    </div>
                    <Route exact path = '/profile' render={()=> {
                        return <About profile={profile} />;
                    }} />
                    <Route path = '/profile/wallet' render={()=> {
                        return <Wallet profile={profile} />;
                    }} />
                    <Route path = '/profile/lots' render={()=> {
                        return <ProfileLots profile={profile} />;
                    }} />
                </Col>
                <Col span={4}>
                    <SNblock />
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}

class ProfileContainer extends React.Component{
    render() {
        return <Profile
            profile={this.props.profile}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
})

export default connect(mapStateToProps, {})(ProfileContainer);