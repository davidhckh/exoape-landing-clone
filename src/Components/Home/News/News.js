import './News.css'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const News = () => {

    const wrapper = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        //Image 0
        gsap.to(wrapper.current, {
            y: () => window.innerWidth * .15,
            scrollTrigger: { trigger: wrapper.current, scrub: true, end: 'bottom' }
        })

        //Image 1
        gsap.to(image1.current, {
            x: () => -window.innerWidth * .06,
            y: () => -window.innerWidth * .03,
            scrollTrigger: { trigger: image1.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 2
        gsap.to(image2.current, {
            x: () => window.innerWidth * .1,
            y: () => -window.innerWidth * .03,
            scrollTrigger: { trigger: image2.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 3
        gsap.to(image3.current, {
            x: () => -window.innerWidth * .18,
            scrollTrigger: { trigger: image3.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //Image 4
        gsap.to(image4.current, {
            x: () => window.innerWidth * .13,
            scrollTrigger: { trigger: image4.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //heading scroll trigger opening
        gsap.fromTo(heading0.current,
            { rotation: 6, opacity: 0, y: () => heading0.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })

        gsap.fromTo(heading1.current,
            { rotation: 6, opacity: 0, y: () => heading1.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })
    }, [])

    return (
        <div id="news-container" className="center column">
            <div id="news-media-container" ref={wrapper}>
                <div className="news-media">
                    <picture type="image">
                        <source type="image/webp" srcSet="https://img2.storyblok.com/270x461/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 270w, https://img2.storyblok.com/350x598/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 350w, https://img2.storyblok.com/550x940/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 550w" />
                        <img src="https://img2.storyblok.com/550x940/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg" srcSet="https://img2.storyblok.com/270x461/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 270w, https://img2.storyblok.com/350x598/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 350w, https://img2.storyblok.com/550x940/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 550w" width="748" height="1278" loading="lazy" />
                    </picture>
                </div>
                <div className="news-media" ref={image1}>
                    <video playsInline="" loop="loop" muted="muted" autoPlay="autoPlay" disablePictureInPicture="">
                        <source src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="news-media" ref={image2}>
                    <picture id="3643671" type="image" data-v-4a179df6="">
                        <source type="image/webp" srcSet="https://img2.storyblok.com/270x383/filters:format(webp):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 270w, https://img2.storyblok.com/350x497/filters:format(webp):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 350w, https://img2.storyblok.com/550x781/filters:format(webp):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 550w" sizes="(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px" />
                        <img src="https://img2.storyblok.com/550x781/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg" srcSet="https://img2.storyblok.com/270x383/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 270w, https://img2.storyblok.com/350x497/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 350w, https://img2.storyblok.com/550x781/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 550w" sizes="(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px" width="348" height="494" alt="ottografie site of the year" loading="lazy" />
                    </picture>
                </div>
                <div className="news-media" ref={image3}>
                    <picture type="image">
                        <source type="image/webp" srcSet="https://img2.storyblok.com/270x181/filters:format(webp):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 270w, https://img2.storyblok.com/350x235/filters:format(webp):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 350w, https://img2.storyblok.com/550x369/filters:format(webp):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 550w" sizes="(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px" />
                        <img src="https://img2.storyblok.com/550x369/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg" srcSet="https://img2.storyblok.com/270x181/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 270w, https://img2.storyblok.com/350x235/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 350w, https://img2.storyblok.com/550x369/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 550w" sizes="(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px" width="758" height="508" alt="fwaawwward aebele interiors" loading="lazy" />
                    </picture>
                </div>
                <div className="news-media" ref={image4}>
                    <video playsInline="" loop="loop" muted="muted" autoPlay="autoPlay" disablePictureInPicture="">
                        <source src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="row">
                <svg viewBox="0 0 12 12" fill="#0D0E13" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84="">
                    <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
                </svg>
                <p className="news-small-heading">In the media</p>
            </div>
            <h2>
                <div className="anim">
                    <div ref={heading0}>Spread</div>
                </div>
                <div className="anim">
                    <div ref={heading1}>the News</div>
                </div>
            </h2>
            <p className="news-text">Find out more about our work on these<br />leading design and technology platforms.</p>
        </div>
    )
}

export default News