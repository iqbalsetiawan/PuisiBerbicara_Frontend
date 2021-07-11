import { Fragment } from 'react'
import Head from 'next/head';
import { Center, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Puisi berbicara</title>
      </Head>
      <Center>
        <Heading>
          Hello World
        </Heading>
      </Center>
    </Fragment>
  )
}
