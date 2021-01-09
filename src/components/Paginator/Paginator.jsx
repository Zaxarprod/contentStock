import style from "./Paginator.module.scss";
import React from "react";

export const Paginator = ({currentPage, countPages, func}) => {
    let arr = []
    for(let i = 1; i<countPages; i++){
        arr.push(i)
    }
    return (
        <div className={style.paginator}>
            {
                currentPage>(1) && <div
                    onClick={
                        ()=>{
                            func(currentPage-1)
                        }
                    }
                >...</div>
            }
            {
                arr.map(el=>{
                    if(el>=currentPage && el<=(currentPage+3)){
                        return (
                            <div className={el===currentPage?style.curr:''}
                                 onClick={
                                     ()=>{
                                         func(el)
                                     }
                                 }
                            >{el}</div>
                        )
                    }
                })
            }
            {
                currentPage<(countPages-3) && <div
                onClick={
                    ()=>{
                        func(currentPage+1)
                    }
                }
                >...</div>
            }
            <div className={countPages===currentPage?style.curr:''}
                 onClick={
                     ()=>{
                         func(countPages)
                     }
                 }
            >{countPages}</div>
        </div>
    )
}