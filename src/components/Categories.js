import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

function Categories(props) {
return(
          <article>
              <Link to="/"><button className="f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma2" >All</button></Link>
              <Link to="/business"><button className="f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma2" >Business</button></Link>
              <Link to="/science"><button className="f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1" >Science</button></Link>
              <Link to="/politics"><button className="f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1" >Politics</button></Link>
              <Link to="/sports"><button className="f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1" >Sports</button></Link>
            </article>
)
}

export default Categories