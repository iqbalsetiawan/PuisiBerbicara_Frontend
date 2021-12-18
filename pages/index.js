import { Fragment } from 'react'
import Head from 'next/head';

import { Flex, Spacer, Heading, IconButton, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

import Navigation from '../modules/Navigation';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Puisi berbicara</title>
      </Head>
      <div>
        <Navigation />
      </div>
    </Fragment>
  )
}
