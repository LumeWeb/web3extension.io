import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image";

const Header = () => (
    <div className="header">
        <Link to={"/"}><StaticImage src={"../images/logo.png"} alt={"Lume Web"} className={"logo"}/> </Link>
        <div className={"header-buttons"}>
            <Link to={"/donate"}>
                <button className="donate-btn">Donate</button>
            </Link>
            <a href="https://discord.gg/3fe4KZhZ9y" target="_blank">
                <button className="donate-btn">Discord</button>
            </a>
        </div>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
