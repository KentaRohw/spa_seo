import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import { 
  Provider,
  Heading,
  Flex,
  Box,
  Text,
  Toolbar,
  Link,
  Card,
  BackgroundImage,
  Subhead,
  Border,
  Small,
  Avatar,
  Media,
  Image } from 'rebass';
import logoGithub from './logo-github.png';
import './App.css';

const theme = {
}

const ENTRYS = [
  {
    id: '8392473984',
    title: '記事タイトル1',
    date: '2017-11-20',
    author: 'kentatan',
    body: '記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。',
    image_url: 'https://placehold.jp/800x800.png'
  },
  {
    id: '2381273217',
    title: '記事タイトル2記事タイトル2',
    date: '2017-11-21',
    author: 'kentatan',
    body: '記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。',
    image_url: 'https://placehold.jp/800x800.png'
  },
  {
    id: '49873434374',
    title: '記事タイトル3記事タイトル3記事タイトル3',
    date: '2017-11-22',
    author: 'kentatan',
    body: '記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。',
    image_url: 'https://placehold.jp/800x800.png'
  },
  {
    id: '98848234923',
    title: '記事タイトル4記事タイトル4記事タイトル4記事タイトル4',
    date: '2017-11-23',
    author: 'kentatan',
    body: '記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。記事の内容です。',
    image_url: 'https://placehold.jp/800x800.png'
  }
]

const CardList = () => (
  <div>
    <Flex wrap>
      {ENTRYS.map(entry => (
        <Box px={2} py={2} w={[1, 1/2, 210]}>
          <Card key={entry.id}>
            <Link href={`/entry/${entry.id}`}>
              <BackgroundImage
                ratio={1}
                mb={[2]}
                src={entry.image_url}
              />
              <Small p={2}>{entry.date}</Small>
              <Subhead p={2} f={[2]}>
              {entry.title}
              </Subhead>
            </Link>
          </Card>
        </Box>
      ))}
    </Flex>
  </div>
)

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
      <article>
        <Border mb={2} pb={2} bottom>
          <Heading is='h1'>{entry.title}</Heading>
        </Border>
        <Text mb={[10]} color='#ccc' f={[1]}><time datetime={entry.date}>{entry.date}</time></Text>
        <Text>
          {entry.body}
        </Text>
      </article>
    </div>
  )
}

const Home = () => (
  <div>
    <Border mb={2} pb={2} bottom>
      <Heading>HOME</Heading>
    </Border>
    <Route path='/' component={CardList} />
  </div>
)

const Entry = () => (
  <div>
    <Border mb={2} pb={2} bottom>
      <Heading>記事</Heading>
    </Border>
    <Route path='/entry' component={CardList} />
  </div>
)

const About = () => (
  <div>
    <Border mb={2} pb={2} bottom>
      <Heading>ABOUT</Heading>
    </Border>
    <Text>Coming soon</Text>
  </div>
)

const LinkList = () => (
  <div>
    <ul className="sideLink">
      {ENTRYS.map(entry => (
        <li key={entry.id}>
          <Link href={`/entry/${entry.id}`}>
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

class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <BrowserRouter>
          <div>
            {/* 
                ヘッダー
              */}
            <header>
              <Toolbar mb={[4]}>
                <Flex mx='auto' w={[1, null, null, 1024]} align='center'>
                  <Box>
                    <ul className="toolBar">
                      <li><NavLink exact to='/'>HOME</NavLink></li>
                    </ul>
                  </Box>
                  <Box ml='auto' px={2}>
                    <Link href='https://github.com/KentaRohw/spa_seo' color='#333'>
                      <Image width={30} height={30} src={logoGithub}/>
                    </Link>
                  </Box>
                </Flex>
              </Toolbar>
            </header>
            {/* 
                コンテンツ（2カラム）
              */}
            <section>
              <Flex wrap mx='auto' mb={[5]} w={[1, null, null, 1024]}>
                <Box w={[1, null, 2/3, 2/3]} px={2} mb={4}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/entry' component={Entry} />
                  <Route path='/entry/:id' component={Entrys} />
                  <Route path='/about' component={About} />
                </Box>
                <Box w={[1, null, 1/3, 1/3]} px={3} flex='none'>
                  <Box mb={[4]} Align='center'>
                    <Avatar
                      size={200}
                      src='http://frebull.net/wp-content/uploads/2015/03/nail-crip-400x400.jpg'
                    />
                    <Text f={[4]}>kentatan</Text>
                    <Text f={[1]}>フロントエンド・エンジニア</Text>
                  </Box>
                  <Heading mb={3} f={3}>トピックス</Heading>
                  <Route component={LinkList} />
                </Box>
              </Flex>
            </section>
            {/* 
                フッター
              */}
            <footer>
              <Border top>
                <Toolbar bg='#fff'>
                  <Flex mx='auto' w={[1, null, null, 1024]} align='center'>
                    <Box>
                      <ul>
                        <li>
                          <Link href='/about' f={[1]} mx={[10]} children='ABOUT'/>
                        </li>
                      </ul>
                    </Box>
                  </Flex>
                </Toolbar>
              </Border>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
