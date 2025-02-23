import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
        <nav id="mydata">
                    <NavLink to={'https://github.com/chibancas?tab=repositories'} target="_blank">
                        <GitHubIcon fontSize='large'/>
                        <span>Mi código</span>
                    </NavLink>
                    <NavLink to={'https://www.youtube.com/channel/UCcjYbkn9iPVYnqE8c6-2kOQ'} target="_blank">
                        <YouTubeIcon fontSize='large'/>
                        <span>Mis vídeos</span>
                    </NavLink>
                    <a href="mailto:jj.ff.tecno@gmail.com" target="_blank">
                        <EmailIcon fontSize='large'/>
                        <span>jj.ff.tecno@gmail.com</span>
                    </a> 
                </nav>
    </footer>
  )
}
