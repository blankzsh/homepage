import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  //SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoFacebook } from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a football coach from Berlin, Germany!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Toni Karnas
          </Heading>
          <p>Football Coach and Individual Investor</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/karnas.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Karnas is a football coach and individual investor. 
          He loved football since he was a child, but his career 
          was extremely mediocre, so he chose to retire.
           After retiring, he chose to become a football coach, and he also actively invested Build a football academy.
            Currently he is actively preparing his company.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Essay
        </Heading>
        <BioSection>
          <BioYear>TEAM</BioYear>
          REAL MADRID
        </BioSection>
        <BioSection>
          <BioYear>Player
          </BioYear>
          I like every member of real madrid
        </BioSection>
        <BioSection>
          <BioYear>Favorite player</BioYear>
          LUKA MODRIC And TONI KROOS
        </BioSection>
 </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          
            Playing  Football
          
          , Travel,{' '}
            Photography
          
          ,Playing Football Manager
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/blankzsh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @blankzsh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/korestub" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @korestub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100089808147159" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @toni.karnas
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/toni.karnas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @toni.karnas
              </Button>
            </Link>
          </ListItem>
        </List>


        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
        If you want to contact me, click the button below.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:korestub@gmail.com"
            scroll={false}
            //leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me via email
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
