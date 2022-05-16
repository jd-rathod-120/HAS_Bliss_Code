import { Button } from '@material-ui/core'
import React ,{useState} from 'react'
import "./Banner.css"
import Search from './Search'
import {useHistory} from "react-router-dom"

function Banner() {
    const history = useHistory();

    const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick ={()=>{setShowSearch(!showSearch)}} className="button_searchButton" variant="outlined">{showSearch ? "HIDE" : "Book Room" }</Button>
            </div>
            <div className="banner_info">
                <h2 class="hh">Hotel Bliss</h2>
                <h5 class="hhh">Hotel Bliss where Love resides,Memories are created.</h5>
                {/* <Button onClick={()=>{history.push("/search")}}variant="outlined"> Explore Nearby</Button> */}
            </div>
        </div>
    )
}

export default Banner
