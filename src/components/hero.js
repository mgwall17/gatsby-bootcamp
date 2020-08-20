import React from 'react'
import Animation from '../components/animation'
import heroStyles from './hero.module.scss'
import { Link } from 'gatsby'

const Hero = () => {
    return (
        <div>
        <div className={heroStyles.row}>
     <div className={heroStyles.textBox}>
        <h2>Transforming Science through Data-Driven Discovery</h2>
        <Link to="/contact" className={heroStyles.button}> Create a new account today! </Link>
        </div>
        <div className={heroStyles.animationBox} >
        <Animation/>
        </div>
        </div>
    </div>
    )
}

export default Hero