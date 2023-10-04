import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faDog,faToolbox } from "@fortawesome/free-solid-svg-icons"
export const menuList = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={ faHouse } style={ { color: "#c2c2c2", } } />
    },
    {
        title: "Pets",
        icon: <FontAwesomeIcon icon={faDog} style={ { color: "#c2c2c2", } }/>
    },
    {
        title: "Goods",
        icon: <FontAwesomeIcon icon={faToolbox} style={ { color: "#c2c2c2", } }/>
    }

]