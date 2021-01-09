import style from './App.scss'
import Header from "./components/Header/Header"
import React from "react"
import {Route} from "react-router-dom"
import Home from "./components/Home/Home"
import {SetMeTC} from "./redux/auth-reducer"
import {connect} from "react-redux"
import {getIsAuth} from "./redux/auth-selector"
import {getIsLoginAlert, getIsWalletInAlert, getIsWalletOutAlert} from "./redux/app-selector"
import LoginAlert from "./components/alerts/LoginAlert"
import Footer from "./components/Footer/Footer"
import Players from "./components/Players/Players"
import Lots from "./components/Lots/Lots";
import {RegTC} from "./redux/reg-reducer";
import Lot from "./components/Lot/Lot";
import Profile from "./components/Profile/Profile";
import WalletInAlert from "./components/alerts/WalletIn/WalletIn";
import WalletOutAlert from "./components/alerts/WalletOut/WalletOut";
import User from "./components/User/User";

const App = ({isLoginAlert,isWalletInAlert,isWalletOutAlert}) => {
  return (
      <div className={style.wrapper}>
          {isLoginAlert && <LoginAlert />}
          {isWalletInAlert && <WalletInAlert />}
          {isWalletOutAlert && <WalletOutAlert />}
          <Header />
          <Route exact path = '/' render={()=> {
              return <Home />;
          }} />
          <Route exact path = '/players' render={()=> {
              return <Players />;
          }} />
          <Route exact path = '/lots' render={()=> {
              return <Lots />;
          }} />
          <Route path = '/lot' render={()=> {
            return <Lot />;
          }} />
          <Route path = '/profile' render={()=> {
              return <Profile />;
          }} />
          <Route path = '/user' render={()=> {
              return <User />;
          }} />
          <Footer />
      </div>
  )
}

class AppContainer extends React.Component{
    componentDidMount() {
        this.props.SetMeTC()
        this.props.RegTC()
    }

    render() {
        return <App
            isLoginAlert={this.props.isLoginAlert}
            isWalletInAlert={this.props.isWalletInAlert}
            isWalletOutAlert={this.props.isWalletOutAlert}
        />
    }
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    isLoginAlert: getIsLoginAlert(state),
    isWalletInAlert: getIsWalletInAlert(state),
    isWalletOutAlert: getIsWalletOutAlert(state),
})

export default connect(mapStateToProps, {SetMeTC, RegTC})(AppContainer);
