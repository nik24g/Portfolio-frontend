import React from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'
import {homeData} from '../data/homeData'

import '../css/home.css'

export default function Home(props) {
    document.title = props.title
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: homeData.quotes,
            typeSpeed: 100,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
            backSpeed: 50,
            backDelay: 2000,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
    return (

        <div className="content">
            <h1>Welcome</h1>
            <h1><span ref={el}></span></h1>
            <h1>{homeData.baseLocation}</h1>
            <Link to="/contact"><button className="hire-me">Hire Me</button></Link>
        </div>

    )
}
