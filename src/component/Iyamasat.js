import React from 'react';
import {
  Avatar,
  Text,
  Box
} from 'rebass';

import AvatarIyamasat from '../image/avatar_iyamasat.png';
  
const Iyamasat = () => (
  <div>
    <Box mb={[4]} style={{textAlign: 'center'}}>
      <Avatar
        size={200}
        src={AvatarIyamasat}
      />
      <Text f={[3]}>Iyamasat</Text>
      <Text f={[1]} color='#999'>スーパールーキー</Text>
    </Box>
  </div>
)

export default Iyamasat;
