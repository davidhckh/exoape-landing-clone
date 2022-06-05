import './News.css'

const News = () => {
    return (
        <div id="news-container" className="center">
            <div className="news-media">
                <picture type="image">
                    <source type="image/webp" srcset="https://img2.storyblok.com/270x461/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 270w, https://img2.storyblok.com/350x598/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 350w, https://img2.storyblok.com/550x940/filters:format(webp):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 550w" />
                    <img src="https://img2.storyblok.com/550x940/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg" srcset="https://img2.storyblok.com/270x461/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 270w, https://img2.storyblok.com/350x598/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 350w, https://img2.storyblok.com/550x940/filters:format(jpeg):quality(70)/f/133769/748x1278/5784aa7150/home-news-1.jpg 550w" width="748" height="1278" loading="lazy" />
                </picture>
            </div>
            <div className="news-media">
                <video playsInline="" loop="loop" muted="muted" autoplay="autoplay" disablePictureInPicture="">
                    <source src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default News