import React from "react";
import style from "./loaders.module.css"

export default function Loader(){

    return(
        <div>
            <img width="1241px" height="539px" src="https://i.kym-cdn.com/photos/images/newsfeed/001/088/791/15b.gif" alt="search" />
            <div className={style.positionImg}>
            <img width="150px" height="150px" src="https://acegif.com/wp-content/uploads/loading-12.gif" alt="" />
            </div>
        </div>
    )
}