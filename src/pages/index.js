import * as React from "react"
import Layout from '../components/layout'

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi there, my name is Megan!</p>
      <StaticImage
        src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=4096x4096"
        alt="A black and brown dog sitting like a queen"
      />
      <StaticImage
        src="https://pbs.twimg.com/media/EvkRvf3VoAQxxrf?format=jpg&name=large"
        alt="A reddish-brown pitbull being cute"
      />
    </Layout>
  )
}

export default IndexPage
