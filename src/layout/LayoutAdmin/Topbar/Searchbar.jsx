import React from "react"
import "./Searchbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const Searchbar = () => {
    return (
        <div className="search">
            <div className="search__input">
                <div className="search__icon-left">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#BDBDBD" }}
                    />
                </div>

                <input
                    type="text"
                    className="search__field"
                    placeholder="Search for anything"
                />
            </div>
        </div>
    )
}

export default Searchbar
