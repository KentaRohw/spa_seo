import React from 'react';
import Helmet from 'react-helmet';
import { 
  Flex,
  Box,
  Heading,
  Text,
  Border
} from 'rebass';

const NotFound = () => (
  <div>
    <Helmet
      title="お探しのページは見つかりません。"
      meta={[
        { name: 'description', content: '404 NotFound' },
      ]}
    />
    <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
      <Box w={[1, null, null, 1024]} px={2} mb={4}>
        <Border mb={2} pb={2} bottom>
          <Heading>404: Not Found</Heading>
        </Border>
        <Text>お探しのページは見つかりません。</Text>
        <Text>URL、ファイル名にタイプミスがないか再度ご確認ください。</Text>
      </Box>
    </Flex>
  </div>
)

export default NotFound;
