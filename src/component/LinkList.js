import React from 'react';
import {
  Heading, 
  Link,
  Subhead,
  Media,
  Image } from 'rebass';

import ENTRYS from '../data/Entrys';

const LinkList = () => (
  <div>
    <Heading mb={3} f={3}>最近の記事</Heading>
    <ul className="sideLink">
      {ENTRYS.map(entry => (
        <li key={entry.id}>
          <Link href={`/entry/${entry.author}/${entry.id}`}>
            <Media>
              <Image mr={2} width={64} height={64} src={entry.image_url} />
              <Subhead f={[2]}>{entry.title}</Subhead>
            </Media>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default LinkList;
