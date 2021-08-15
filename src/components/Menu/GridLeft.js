import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function GridLeft() {
    return (
        <div className="lala">
            <div className="search">
                <input type="text" name id placeholder="Write something..." className="search__input" />
                <button type="submit" className="search__button" tabIndex={-1}>Search</button>
            </div>
            <div className="Mui-tenten">
                <div>
                    <ShoppingCartIcon />
                </div>

            </div>

        </div>
    )
}
