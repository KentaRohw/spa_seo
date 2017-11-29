import React from 'react';
import { Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { 
  Flex,
  Box,
  Heading,
  Text,
  Border } from 'rebass';

import Author from './Author';
import LinkList from './LinkList';
import ENTRYS from '../data/Entrys';
  
const entryById = id => ENTRYS.find(entry => entry.id === id);

const Entrys = props => {
  const { id } = props.match.params
  const entry = entryById(id)

  if (typeof entry === 'undefined')  {
    return (
      <div>
        <p>こちらの記事id '{id}' は存在しません</p>
      </div>
    )
  }

  return (
    <div>
      <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
        <Box w={[1, null, 2/3, 2/3]} px={2} mb={4}>
          <article className='article'>
            <Border mb={2} pb={2} bottom>
              <Heading is='h1'>{entry.title}</Heading>
            </Border>
            <Text mb={[10]} color='#ccc' f={[1]}>{entry.date}</Text>
            <ReactMarkdown source={entry.body} />
          </article>
        </Box>
        <Box w={[1, null, 1/3, 1/3]} px={3} flex='none'>
          <Author />
          <Route path='/entry'　component={LinkList} />
        </Box>
      </Flex>
    </div>
  )
}

export default Entrys;
