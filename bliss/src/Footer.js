import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>© 2022 Bliss</p>
            <p>Privacy · Terms · Hotel Details</p>
        </div>
    )
}

export default React.memo(Footer);