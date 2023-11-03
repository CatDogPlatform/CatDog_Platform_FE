import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDog, faToolbox } from "@fortawesome/free-solid-svg-icons"
export const menuList = [
    {
        title: "Home",
        link: "/",
        icon: <FontAwesomeIcon icon={ faHouse } style={ { color: "#c2c2c2", } } />
    },
    {
        title: "Pets",
        link: "/pets",
        icon: <FontAwesomeIcon icon={ faDog } style={ { color: "#c2c2c2", } } />
    },
    {
        title: "Goods",
        link: "/goods",
        icon: <FontAwesomeIcon icon={ faToolbox } style={ { color: "#c2c2c2", } } />
    }

]