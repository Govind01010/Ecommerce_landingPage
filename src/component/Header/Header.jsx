import React from 'react'
import "./Header.css"
import { Products_data } from '../Products_list/Product';
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <div>
      <div className="header_logo">
        <div className="header_text">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '',
              400,
              'G',
              400,
              'GE',
              400,
              'GEN',
              400,
              'GENM',
              400,
              'GENME',
              400,
              'GENMED',
              400,
              'GENMEDI',
              400,
              'GENMEDIA',
              400
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>
      
    </div>

  )
}

export default Header