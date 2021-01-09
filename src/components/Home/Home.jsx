import React from 'react'
import style from './Home.module.scss'
import Block1 from "./Blocks/Block1"
import Block2 from "./Blocks/Block2"
import Block3 from "./Blocks/Block3"
import Block4 from "./Blocks/Block4"
import Block5 from "./Blocks/Block5"

const Home = () => {
    return (
        <div className={style.wrapper}>
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
        </div>
    )
}

export default Home