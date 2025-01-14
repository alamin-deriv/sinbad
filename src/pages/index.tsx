import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import OurTerms from './home/our-terms'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import TechStack from './home/tech-stack'
import JoinUs from 'components/layout/join-us'
import Layout from 'components/layout/layout'

export type IconProps = {
    active?: number
    setActive?: (number) => void
}

const Home = () => {
    const [active, setActive] = useState(0)

    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Home</title>
            </Helmet>
            <Carousel active={active} setActive={setActive} />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUs appearance="home" />
        </Layout>
    )
}

export default Home
