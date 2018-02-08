import React from 'react';
import { 
  Flex,
  Box,
  BlockLink,
  Card,
  BackgroundImage,
  Subhead,
  Relative,
  Absolute,
  Small
} from 'rebass';

import ENTRYS from '../data/Entrys';

const CardList = () => (
  <div>
    <Flex wrap>
      {ENTRYS.map(entry => (
        <Box key={entry.id} px={2} py={2} w={[1, 1/2, 250]}>
          <Card>
            <BlockLink href={`#/entry/${entry.author}/${entry.id}`}>
              <BackgroundImage ratio={1} mb={[1]} src={entry.image_url}/>
              <Subhead p={2} mb={2} f={[1]} color='#333'>{entry.title}</Subhead>
              <Box p={2}>
                <Relative>
                  <Absolute bottom left><Small color='#999'>{entry.date}</Small></Absolute>
                  <Absolute bottom right><Small color='#999'>{entry.author}</Small></Absolute>
                </Relative>
              </Box>
            </BlockLink>
          </Card>
        </Box>
      ))}
    </Flex>
  </div>
)

export default CardList;
