import React from 'react';
import { Route } from 'react-router-dom';
import { 
  Flex,
  Box,
  Heading,
  Border
} from 'rebass';

import CardList from './CardList';
  
const Home = () => (
  <div>
    <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
      <Box w={[1, null, null, 1024]} px={2} mb={4}>
        <Border mb={2} pb={2} bottom>
          <Heading>HOME</Heading>
        </Border>
        <Route path='/' component={CardList} />
      </Box>
    </Flex>
  </div>
)

export default Home;
