import React, {useState} from 'react'
import style from './Players.module.scss'
import {Col, Row} from "antd"
import Search from "antd/es/input/Search"
import {connect} from 'react-redux'
import {SetFilterTC} from "../../redux/players-reducer";
import {Paginator} from "../Paginator/Paginator";
import {getCurrentPage, getFilter, getPlayers, getPageCount, getSearchStr} from "../../redux/players-selector";

const Players = ({carts, filters, searchStr, SetFilter, currentPage, pageCount}) => {
    let [searchText, SetSearchText] = useState(searchStr)
    let changeTextSearch = (e) => {
        SetSearchText(e.target.value)
    }
    let search = (value) => {
        SetFilter(filters,1,value)
    }
    let func = (value) => {
        debugger
        SetFilter(filters, value, searchStr)
    }
    return (
        <div className={style.wrapper}>
            <Row>
                <Col span={3}></Col>
                <Col span={5}></Col>
                <Col span={13} className={style.headerBlock}>
                    <h1>Все исполнители</h1>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row className={style.block2}>
                <h1 className={style.backgroundText}>
                    FUN<br/>
                    NY
                </h1>
                <Col span={3}></Col>
                <Col span={5} className={style.filterBlock}>
                    <div className={style.filterHeaderBlock}>
                        <h1>ФИЛЬТРУЙ</h1>
                    </div>
                    <div className={style.filter}>
                        {Object.keys(filters).map(filter => {
                            return (
                                <div>
                                    <p>{filter}</p>
                                    {Object.keys(filters[filter]).map(el => {
                                        return (
                                            <div>
                                                {el} : {filters[filter][el]}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col span={13} className={style.contentBlock}>
                    <Search placeholder="Найди своего любимого исполнителя"
                            enterButton
                            className={style.inputSearch}
                            value={searchText}
                            onChange={changeTextSearch}
                            onSearch={search}
                    />
                    <div className={style.cartsBlock}>
                        {carts.map(cart => {
                            return (
                                <div>
                                    <div></div>
                                    <img src={cart.media}/>
                                    <p>{cart.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <Paginator
                        currentPage={currentPage}
                        countPages={pageCount}
                        func={func}
                    />
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}

class PlayersContainer extends React.Component{
    componentDidMount() {
        this.props.SetFilterTC()
    }
    render(){
        return (
            <Players
                carts={this.props.players}
                filters={this.props.filters}
                pageCount={this.props.pageCount}
                currentPage={this.props.currentPage}
                searchStr={this.props.searchStr}
                SetFilter={this.props.SetFilterTC}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    players: getPlayers(state),
    filters: getFilter(state),
    pageCount: getPageCount(state),
    currentPage: getCurrentPage(state),
    searchStr: getSearchStr(state),
})

export default connect(mapStateToProps, {SetFilterTC})(PlayersContainer)