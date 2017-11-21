import React from 'react';
import {
  Avatar,
  Text,
  Box } from 'rebass';

import AvatarKentatan from '../image/avatar_kentatan.png';
  
const Kentatan = () => (
  <div>
    <Box mb={[4]} style={{textAlign: 'center'}}>
      <Avatar
        size={200}
        src={AvatarKentatan}
      />
      <Text f={[3]}>kentatan</Text>
      <Text f={[1]} color='#999'>「イギギ、イギ…」</Text>
    </Box>
  </div>
)

export default Kentatan;
