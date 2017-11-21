import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Flex,
  Box,
  Toolbar,
  Link,
  Image } from 'rebass';

import logoGithub from '../image/logo_github.png';
  
const Header = () => (
  <div>
    <header>
      <Toolbar mb={[4]} bg='#24292e'>
        <Flex mx='auto' w={[1, null, null, 1024]} align='center'>
          <Box>
            <ul className="toolBar">
              <li><NavLink exact to='/'>HOME</NavLink></li>
            </ul>
          </Box>
          <Box ml='auto' px={2}>
            {/*
            <Link href='https://github.com/KentaRohw/spa_seo' color='#333'>
              <Image width={30} height={30} src={logoGithub}/>
            </Link>
            */}
          </Box>
        </Flex>
      </Toolbar>
    </header>
  </div>
)

export default Header;
