import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { 
  Flex,
  Box,
  Heading,
  Text,
  Border
} from 'rebass';

import Author from './Author';
import LinkList from './LinkList';
import NotFound from './NotFound';
import ENTRYS from '../data/Entrys';
  
const entryById = id => ENTRYS.find(entry => entry.id === id);

const Entrys = props => {
  const { id } = props.match.params
  const entry = entryById(id)

  if (typeof entry === 'undefined')  {
    return (
      <NotFound />
    )
  }

  return (
    <div>
      <Helmet
        title={entry.title}
        meta={[
          { name: 'description', content: entry.description },
        ]}
      />
      <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
        <Box w={[1, null, 2/3, 2/3]} px={2} mb={4}>
          <article className='article'>
            <Heading is='h1' mb={2}>{entry.title}</Heading>
            <Text mb={[20]} color='#999' f={[1]}>{entry.date}に更新</Text>
            <ReactMarkdown className='article_body' source={entry.body} escapeHtml={false} />
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
