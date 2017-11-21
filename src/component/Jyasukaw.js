import React from 'react';
import {
  Avatar,
  Text,
  Box } from 'rebass';

import AvatarJyasukaw from '../image/avatar_jyasukaw.png';
  
const Jyasukaw = () => (
  <div>
    <Box mb={[4]} style={{textAlign: 'center'}}>
      <Avatar
        size={200}
        src={AvatarJyasukaw}
      />
      <Text f={[3]}>Jyasukaw</Text>
      <Text f={[1]} color='#999'>通称「Jさん」</Text>
    </Box>
  </div>
)

export default Jyasukaw;
