import { PageContainer, TextContainer, DownloadCvContainer, ImageContainer } from "./styled"
import homeImage from "../../Assets/img/home-transparent.png"
import { Link } from "react-router-dom"

import {FaGithubSquare, FaLinkedin} from "react-icons/fa"

const HomePage = () => {
    return <>
        <PageContainer>
            <TextContainer>
                <h2>Hello!</h2>
                <h1>I'm &#160;Leomar Paz</h1>
                <p className="tracking-in-expand">Front End Developer</p>
                
                <DownloadCvContainer>
                    <div>
                        <Link className="Underline__Download">Download CV</Link>
                    </div> 
                    <div>
                        <a href="https://github.com/LeomarPaz2022" target="_blank" rel="noreferrer"><FaGithubSquare className="Icons__Social"/> </a>
                        <a href="https://www.linkedin.com/in/leomarpaz/" target="_blank" rel="noreferrer"><FaLinkedin className="Icons__Social"/></a>
                    </div>
                </DownloadCvContainer>

            </TextContainer>

            <ImageContainer>
                <img src={homeImage} alt="Foto do desenvolvedor front end Leomar"/>
            </ImageContainer>

        </PageContainer>
    </>
}


export default HomePage