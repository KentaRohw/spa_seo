import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { 
  Flex,
  Box,
  Heading,
  Border
} from 'rebass';

import CardList from './CardList';
  
const Home = () => (
  <div>
    <Helmet
      title='SPAでSEO検証！JSでレンダリングしたWebページはどこまでクロールされるのか'
      meta={[
        { name: 'description', content: 'GoogleやBingのクローラーがどこまでJavaScriptを認識するのかをReactを使って検証してみます。加えて本サイトの構築手順や、MFIについて調べた事も簡単にお話しします。' },
      ]}
    />
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
