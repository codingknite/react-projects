import React, { useState } from 'react'
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as CgIcons from 'react-icons/cg';

const Features = ({ quoteHandler }) => {

    return (

        < div className="feature-container " >
            <div className="modes">
                <BsIcons.BsSun className="darkmode" size="30" />
            </div>
            <div className="share-twitter">
                <SiIcons.SiTwitter className="twitter-icon" size="32" />
            </div>
            <div className="next-quote" onClick={quoteHandler}>
                <button className="next" >Next Quote</button>
                <CgIcons.CgArrowLongRight size="25" className="next-icon" />
            </div>
        </div >
    )
}

export default Features