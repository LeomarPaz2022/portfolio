import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        list-style: none;
        h1{
            font-size: 1.1rem;
        }
        box-sizing: border-box;

        position: relative;
      
    }
    :root{
        --white : #ffffff;
        --yellow : #F0A226;
        --grey-0: #F8F9FA;
        --grey-1: #F2F2EE;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --grey-50: #868E96;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disable: #59323F;
        --sucess:#3FE864;
        --negative: #E83F5B;
    }
    // body::-webkit-scrollbar {
    //     display: none;
    // }
    
    body{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        color: var(--grey-1);
        background-color: #fffff;
    }
    
    ul::-webkit-scrollbar {
        display: none;
    }
    a {
        text-decoration: none;
        color: var(--grey-0);
    }
    button{
        max-width: 326px;
        max-height: 50px;
        border: none;
        cursor: pointer;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        background-color: var(--grey-3);
    }
   
    input, select{
        padding: 0 .5rem;
        color: var(--grey-50);
        height: 36px;
        border: 0.973988px solid #343B41;
        border-radius: 3.19812px;
        background-color: var(--grey-2);
    }
`

export const FlexContainer = styled.div`
   
    width: 100%;
    display: flex;
    flex-direction: ${ (props) => props.flexDirection || "row" };
    align-items: ${ (props) => props.alignItems || "flex-start" };
    justify-content: ${ (props) => props.justifyContent || "flex-start" };
    flex-wrap: ${ (props) => props.flexWrap || "wrap" };
    gap: ${ (props) => props.gap || "1rem" };
     
`

export const CustomButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    
    width: ${ (props) => props.customWidth || "100%" };
    height: ${ (props) => props.customHeight || "48px" };
    
    max-width: 300px;
    max-height: 50px;
    
    
    font-size: ${(props) => props.fontSize || "1.1em"};
    color: var(${(props) => `--${props.fontColor}` || '--grey-0' });
    margin: ${(props) => props.Margin || ".8em"};
   
    padding: 0.5rem 1rem;
    
    
    border: none;
    border-radius: ${ (props) => props.borderRadius || "5px" };
    
    background-color: var(${ (props) => `--${props.customBgColor}`|| "--color-primary" });
`