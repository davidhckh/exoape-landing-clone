import HomeHero from './Hero/HomeHero'
import HomeNews from './News/HomeNews'
import HomeReel from './Reel/HomeReel'
import HomeWork from './Work/HomeWork'

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeWork />
            <HomeReel />
            <HomeNews />
        </>
    )
}

export default Home