import styled from "styled-components";


export const MenuNav = styled.nav`
    height: 8vh;
    max-height: 80px;
    min-height: 65px;

    display: flex ;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 

    padding: 0 8%;
    background-color: ${(props) => props.CustomBgColor || "#1E1E1E"};
    color: ${ (props) => props.CustomColor || "#F2F2EE" };

`

export const MenuLogo = styled.div`
    span{
         color: #0361CF; 
    }
    
`


export const MenuList =  styled.ul`
    display: flex;
    gap: 3rem;

    font-weight: 500;
    font-size: .85rem;

    a{
        cursor: point;
    }
`