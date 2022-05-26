import React from "react"
import {graphql, StaticQuery} from "gatsby";
import Header from "./Header";
import {StaticImage} from "gatsby-plugin-image";
import SEO from "./SEO";
// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <SEO/>
            <div className={"content-container"}>
                <StaticQuery
                    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
                    render={data => (
                        <>
                            <Header siteTitle={data.site.siteMetadata.title}/>
                            {children}
                            <section className="section-footer">
                                <div className="footer-divider">
                                    <a href="https://lumeweb.com"><StaticImage src={"../images/icon.png"}
                                                                               className="logo"
                                                                               alt="Lume Web"/></a>
                                </div>

                                <footer>
                                    <div className="company">
                                        <p>Hammer Technologies LLC</p>
                                    </div>
                                    <div className="github">
                                        <StaticImage src={"../images/icon-github.png"} alt="Github icon"/>
                                        <a href="https://github.com/LumeWeb/web3extension.com" target="_blank">View on
                                            Github</a>
                                    </div>
                                </footer>
                            </section>
                        </>
                    )}/>
            </div>
        </>
    )
}
