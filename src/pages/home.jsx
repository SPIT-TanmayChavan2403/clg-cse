import '../styles/home.css';
import { data } from '../metadata/aboutDeptData';

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
                                { data["message-from-hod"].title }
                            </p>
                            <p>
                               { data["message-from-hod"].name }
                            </p>
                        </div>
                        <div id="hod-message-subtitle">
                            { data["message-from-hod"].designation }
                        </div>
                    </div>
                </div>
                <div id="hod-message-desc">
                    <i className="fa-solid fa-quote-left"></i>
                    {
                        data["message-from-hod"].message.map((line, index) => (
                            <span key={index}>
                                { line }
                            </span>
                        ))
                    }
                    <i className="fa-solid fa-quote-right right"></i>
                </div>
            </div>

            <div id="line">
                <div className='break'></div>
            </div>

            <div id="important-links">
                <p>Important Links</p>
            </div>
        </div>
        <div className='content'>
            <h2 className="programOffered"> Programs offered by the department </h2>
            <div className="cardContainer">
                <div className="card">
                    <span className="programTitle"> CSE (AIML) </span> <br />
                    <a href="/cse-aiml" rel="noreferrer" className="knowMore"> Know More </a>
                </div>
                <div className="card">
                    <span className="programTitle"> CSE (DS) </span> <br />
                    <a href="/cse-ds" rel="noreferrer" className="knowMore"> Know More </a>
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