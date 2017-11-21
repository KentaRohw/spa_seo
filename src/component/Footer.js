import React from 'react';
import { 
  Border,
  Flex,
  Box,
  Toolbar,
  Link } from 'rebass';
  
const Footer = () => (
  <div>
    <footer>
      <Border top>
        <Toolbar bg='#fff'>
          <Flex mx='auto' w={[1, null, null, 1024]} align='center'>
            <Box>
              <ul>
                <li>
                  <Link href='/about' f={[1]} mx={[10]} children='ABOUT'/>
                </li>
              </ul>
            </Box>
          </Flex>
        </Toolbar>
      </Border>
    </footer>
  </div>
)

export default Footer;
