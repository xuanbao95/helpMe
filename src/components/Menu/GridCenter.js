import React from 'react'
import Men from './MerchMenu/Men'
import Women from "./MerchMenu/Women"
import Kids from "./MerchMenu/Kids"
import Coutomise from "./MerchMenu/Coutomise"
import SNKRS from "./MerchMenu/SNKRS"
export default function GridCenter(props) {
    return (
        <div className="grid-center">
            <ul className="grid-ul">
                <li>
                    <Men></Men>
                </li>
                <li>
                    <Women></Women>
                </li>
                <li>
                    <Kids></Kids>
                </li>
                <li>
                    <Coutomise></Coutomise>
                </li>
                <li>
                    <SNKRS></SNKRS>
                </li>

            </ul>
        </div>
    )
}
