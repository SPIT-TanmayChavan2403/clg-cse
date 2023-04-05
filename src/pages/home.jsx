import '../styles/home.css'

export default function Home(){
    return(
        <>
        <div id="home">
            <div id="hod-message">
                <div id="hod-message-head">
                    <div id="hod-message-head-img">
                        <img src="/faculty/dr-dhananjay-kalbande.jpg" alt="" />
                    </div>
                    <div id="hod-message-head-text">
                        <div id="hod-message-title">
                            <p>
                                Message from HOD
                            </p>
                            <p>
                                Dr. Dhananjay Kalbande
                            </p>
                        </div>
                        <div id="hod-message-subtitle">
                            HOD of Computer Science and Engineering Department
                        </div>
                    </div>
                </div>
                <div id="hod-message-desc">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                        Dear Students
                    </p>
                    <br />

                    <p>
                    CSE(Data Science), CSE(AIML) and MCA
                    </p>
                    <br />

                    <p>

                    I would like to extend my warmest welcome to the Department of Computer Science and Engineering. The Department offers 2 UG programs [B.Tech CSE (Data Science), B.Tech CSE (AIML) ] and 1 PG Program [ MCA ].
                    </p>
                    <br />

                    <p>
                    We pride ourselves on being pioneers to educate tomorrow's visionaries, conducting research, and leading a broad range of initiatives that validate the transformative power of Computer Science and Engineering and Computer Applications.
                    </p>
                    <br />
                        
                    <p>
                    Our innovative academic and research institution gives serious students like you the skills needed to launch successful careers.  Through high-quality academic programs enriched with today's National Education Policy(NEP-2020) that offer a unique blend of teaching, research, activity-based learning including Seva Satva, minors etc. that strengthens your ability to solve problems, you can expand your knowledge base, work independently, think critically, and find new ways to apply Science and Engineering concepts to benefit society.
                    </p>
                    <br />


                    <p>
                    Students work alongside faculty members who are leaders in their respective disciplines, have access to labs equipped with the latest technologies, and are connected to a comprehensive University providing breadth and depth of opportunities. As a result, our students acquire critical thinking capabilities as well as practically oriented skills that are prized by prestigious companies and academic institutions of National and International Importance.
                    </p>
                    <br />

                    <p>
                    All faculty members of the Department of Computer Science and Engineering are strongly committed to supporting your success. In return, we know you will study hard, seek out and respect the opinions of faculties and find opportunities to give back to your society. The efforts are consciously planned for the overall development of students. This leads our students to become competent, innovative, socially-responsible and dynamic. We are confident that our students will emerge as assets not only to this institution but also to the entire society, and the nation at large.
                    </p>
                    <br />

                    I wish you all very best for the successful career ahead.
                    <i className="fa-solid fa-quote-right right"></i>
                </div>
            </div>
            <div id="important-links">
                <p>Important Links</p>
            </div>
        </div>
        <div className='content'>
            <h2 className="programOffered"> Programs offered by the department </h2>
                <div className="cardContainer">
                    <div className="card">
                        <span className="programTitle"> CSE - AIML </span> <br />
                        <a href="/" rel="noreferrer" className="knowMore"> Know More </a>
                    </div>
                    <div className="card">
                        <span className="programTitle"> CSE - DS </span> <br />
                        <a href="/" rel="noreferrer" className="knowMore"> Know More </a>
                    </div>
                    <div className="card">
                        <span className="programTitle"> MCA </span> <br />
                        <a href="https://mca.spit.ac.in/" rel="noreferrer" target="_blank" className="knowMore"> Know More </a>
                    </div>
                </div>
        </div>
        </>
    )
}