import '../styles/home.css'
import Header from './Header';
import Footer from './Footer';


export default function Home(){
    const iframeStyles ={
        height: 70 +'%',
        width: 45 + '%'
    }
    return(
        <>
            <Header />
            
            <div id="home">
                <div id="banner">
                    <div id="banner-info">
                        <div id="banner-info-title">
                            Lorem ipsum
                        </div>
                        <div id="banner-info-subtitle">
                            2022510081
                        </div>
                        <div id="banner-info-subtitle">
                            <p>FY</p>
                            <p>MCA</p>
                        </div>
                        <div id="banner-info-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis illum rerum, amet quae sed mollitia, maiores itaque ducimus debitis, voluptatibus expedita vitae adipisci harum hic deleniti placeat modi dicta.
                            Quis veritatis dolorum, harum molestias minima natus saepe possimus ipsam officiis consequatur non deleniti, dolores ducimus porro nisi officia nam in ex id ullam, tempora fugit cupiditate culpa alias. Itaque?
                            At quasi quia ipsam, odit exercitationem, provident reprehenderit tempore numquam dolorem veritatis corrupti itaque quae asperiores atque rem, dignissimos doloremque. Voluptas itaque debitis a tempore aspernatur cum natus nisi facilis.
                            Itaque qui aut eaque distinctio voluptas aperiam voluptatum pariatur dicta doloremque et fugit rerum saepe possimus.
                        </div>
                    </div>
                    <div id="banner-img">
                        <img src="./banner_img2.jpg" alt="" />
                    </div>
                </div>
                <div id="video-banner">
                    <div id="video-banner-title">
                        Computer Engineering @ S.P.I.T
                    </div>
                    <div id="video-banner-info">
                        <div id="video-banner-info-link">
                            <iframe src='https://www.youtube.com/embed/I28Rbrxy9PU'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    style={iframeStyles}
                            />
                        </div>
                        <div id="video-banner-info-desc">
                        The Department of Computer Engineering was established in the year 1995 and it is one of the earliest departments of the Institute. The department consists of 14 faculty members, 2 technical assistants and around 230 students working towards their Bachelors', Masters' and Doctoral degrees. The department attracts high quality students from all over Maharashtra and also from the country and has an impressive placement record and results. Many of the graduates choose to join some of the best institutions of higher learning around the world, whereas some prefer to gain a few years of work experience before deciding their next course of action.Still some others choose to chase their dream by opening their own start-ups, joining government firms and so on. Strong placements and results, highly qualified staff and laboratory facilities, research publications are some of the strengths of the department.
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}