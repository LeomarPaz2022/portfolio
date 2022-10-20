import { MenuNav, MenuList, MenuLogo } from "./styled"
import { Link } from "react-router-dom"

const ThemeMenu  = () => {
    return <>
        <MenuNav >
            <MenuLogo>
                <h1>
                    <span>&#123;</span> Leomar Paz <span>&#125;</span>
                </h1>    
            </MenuLogo>
            <MenuList>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Contact</Link></li>
            </MenuList>
               
        </MenuNav>
          
      
    </>
}


export default ThemeMenu