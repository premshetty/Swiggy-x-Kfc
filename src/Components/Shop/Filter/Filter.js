import React from 'react'
import classes from './Filter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
function Filter() {
    return (
        <div className={ classes.Filter }>
            <div className={ classes.search}>
                <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input type='text' placeholder=' search for dishes...' />
            </div>
            <div className={ classes.checkbox}>
                <input type='checkbox' /><label>Veg Only </label>
            </div>
            <div  className={ classes.favourite}>
                <span><FontAwesomeIcon icon={faHeart} /> </span><label>Favourite </label>
            </div>

        </div>
    )
}

export default Filter
