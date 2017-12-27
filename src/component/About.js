import React from 'react';
import Helmet from 'react-helmet';
import { 
  Flex,
  Box,
  Heading,
  Text,
  Border
} from 'rebass';

const About = () => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'About' },
      ]}
    />
    <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
      <Box w={[1, null, null, 1024]} px={2} mb={4}>
        <Border mb={2} pb={2} bottom>
          <Heading>ABOUT</Heading>
        </Border>
        <Text>Coming soon</Text>
      </Box>
    </Flex>
  </div>
)

export default About;
