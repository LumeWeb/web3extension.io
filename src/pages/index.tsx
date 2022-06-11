import * as React from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";

// markup
const IndexPage = () => {
    return <Layout>
        <div className="section-introduction">
            <div className="heading-introduction">
                <h1>Lume Web, your personal and private gateway to web3</h1>
            </div>
            <div className="section-portal">
                <div className="portal-frame">
                    <div className="portal"/>
                </div>
            </div>
        </div>

        <section className="section-download">
            <div>
                <h2>Download the Web Extension by Lume Web</h2>
            </div>
            <div className="download">
                <div className="download-button">
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/lume-web/" target="_blank"><StaticImage
                        src={"../images/firefox.svg"} alt={"Firefox Extension Download"} width={50}/></a>
                    <a href="https://microsoftedge.microsoft.com/addons/detail/lume-web/iknceiggnffomcchipaclfnjfkbkppof"
                       target="_blank"><StaticImage
                        src={"../images/msedge.svg"} alt={"Microsoft Edge Extension Download"} width={50}/></a>
                </div>
            </div>
        </section>
        <section className="section-share">
            <h3>Share</h3>
            <div>
                <p>Outside upgrading to web3, or supporting with $ if you can, the best way to support this initiative is by sharing and blue pilling your social network, friends and family. If orange is for bitcoin, then blue must represent web3, and both represent 2 sides of a bitcoin for freedom!</p>
                <div className="addthis_inline_share_toolbox" />
            </div>
        </section>

        <section className="section-advantages">
            <div className="advantage-card">
                <StaticImage src={"../images/icon-lock.svg"} alt="Icon lock"/>
                <span>It's private</span>
                <p>There is no sign-up required to browse web3. You do not even need to provide an email for basic use.
                    Additionally, if you do create an account, all data is encrypted with your password</p>
            </div>
            <div className="advantage-card">
                <StaticImage src={"../images/icon-folder-lock.svg"} alt="Icon folder lock"/>
                <span>It's personal</span>
                <p>Everything you do is owned by you. Your data is not controlled or owned by others. You are free to
                    share copies to let others own a version or keep encrypted in your account.</p>
            </div>
            <div className="advantage-card">
                <StaticImage src={"../images/icon-channel.svg"} alt="Icon channel"/>
                <span>It's your gateway</span>
                <p>Gain freedom on a new web, owned by its users, and with privacy and control built-in.</p>
            </div>
        </section>

        <section className="text-image">
            <div className="content-img">
                <StaticImage src={"../images/portal-image.jpg"} alt="Portal"/>
            </div>
            <div className="content-body">
                <h3>Lume Web grants your access to web3</h3>
                <p>Currently, there is a lot of marketing and hype around "Web3", because frankly most don't have a clue
                    on what Web3 is, just that there is money in it! It is the second .com boom. Similar can be said for
                    "The Metaverse", but many will love to pitch and sell otherwise. Most things claiming to "be" Web3
                    are
                    really just another platform trying to make money off you, but not really being on a secure,
                    decentralized web that is intended for your freedom.</p>
                <p>Now many of the services have technology that are "building blocks" for the next internet, but the
                    owners have other ideas as well, which makes them into what they were marketed to not be. That is...
                    centralized "SaaS" services that want to sell you something, but only achieve becoming another
                    internet walled garden, with some "blockchain" technology mixed in.</p>

            </div>
        </section>

        <section className="text-image">
            <div className="content-body">
                <h3>Free Yourself</h3>
                <p>We have had decentralized internet for a while now (decades) in various forms, so consider Web3 an upgrade that
                    combines many of these attempts + blockchain, into an evolution for the user-owned internet, rather than us, the
                    user, becoming batteries in
                    the matrix.</p>
            </div>
            <div className="content-img">
                <StaticImage src={"../images/matrix.jpg"} alt="Matrix Pods"/>
            </div>

        </section>
    </Layout>
}

export default IndexPage
