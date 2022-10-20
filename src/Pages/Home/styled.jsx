import styled from "styled-components";



export const PageContainer = styled.main`
    width: 100%;
    height: 91.7vh;
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding: 0 8%;
    background-color: #000;
   

`
export const TextContainer = styled.div`

    margin-bottom: 3rem;


    h1{
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        letter-spacing: 2px;
        margin: 1.8rem 0;
        padding: .5rem 0;
    }

    h2{
        font-family: 'Inter', sans-serif;
        font-size: 1.3rem;
        font-weight: 500;
        padding: .5rem 0;
    }   

    p{  
        font-family: 'Playfair Display SC';
        font-size: 1.1rem;
        font-weight: 500;
        padding: .5rem 0;

        letter-spacing: 7px;
        color: var(--yellow)
    }

    .tracking-in-expand {
      -webkit-animation: tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
              animation: tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }

  
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  
   


`

export const DownloadCvContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;

    
    a{
        font-size: 1.4rem;
        font-weight: 600;
        font-style: bold;
        
        margin-top: 1rem;
    }

    .Underline__Download{
        text-decoration: 3px underline;
    }

    .Icons__Social{
        font-size: 1.8rem;
        margin: 0 5px;
        
    }

`


export const ImageContainer = styled.div`

    img{
        width: 40vw;
        max-width: 600px;
        min-width: 360px;

        max-height: 700px;
        min-height: 450px;


    }
`