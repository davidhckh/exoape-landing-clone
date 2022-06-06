import Hero from './Hero/Hero'
import News from './News/News'
import Reel from './Reel/Reel'
import Work from './Work/Work'
import Footer from './Footer/Footer'
import ScrollCTA from './ScrollCTA/ScrollCTA'

const Home = () => {
    return (
        <>
            <Hero />
            <ScrollCTA/>
            <Work />
            <Reel />
            <News />
            <Footer />
        </>
    )
}

export default Home