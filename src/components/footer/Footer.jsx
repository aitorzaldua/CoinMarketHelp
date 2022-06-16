import React from 'react';
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
/* import {FiInstagram} from 'react-icons/fi'; */
import {BsGithub} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <section id='Footer' className='footer'>
      <a href='#header' className='footer__logo'>aitor.zaldua@draftdigital.org</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#Bubbles'>Community</a></li>
        <li><a href='#Markets'>Market</a></li>
        <li><a href='https://aitorzaldua.netlify.app/' target="_blank" rel="noreferrer">MyPortfolio</a></li>
      </ul>

    <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/aitor-zaldua/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href='https://twitter.com' target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      <a href='https://github.com/aitorzaldua' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>

    <div className='footer__copyright'>
      <small>Voting system based on &copy; boblles.com. CoinMarketHelp Designed with <AiFillHeart/> by MG.</small>
    </div>


    </section>
  )
}

export default Footer;