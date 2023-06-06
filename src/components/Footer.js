import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className = "footer">
        <p>Find me here:</p>
        <div className='socialMedia'>
          <Link to = 'https://www.linkedin.com/in/phuc-nguyen-534398223/'><LinkedInIcon/></Link>
          <Link to = 'https://github.com/phucnguyen02'><GitHubIcon/></Link>
          <Link to = 'https://www.facebook.com/profile.php?id=100007642095036'><FacebookIcon/></Link>
        </div>
        <p> ndhp02@gmail.com </p>
    </div>
  )
}

export default Footer