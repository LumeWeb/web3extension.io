import * as React from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";

const DonatePage = () => {
  return  <Layout>
        <section className="section-donate">
            <h1>Support Lume Web, help us build an open, decentralized web for humanity</h1>
            <div className="download">
                <div className="download-button">
                    <a href="https://lumeweb.com/donate" target="_blank">
                        <button className="btn">Make a donation</button>
                    </a>
                </div>
            </div>
        </section>


        <section className="section-advantages">
            <div className="advantage-card">
                <StaticImage src={"../images/icon-code.svg"} alt="Icon code"/>
                <span>Development spending</span>
                <p>All donations are spent on active development of Lume Web and maintaining community services.</p>
            </div>
            <div className="advantage-card">
                <StaticImage src={"../images/icon-shield.svg"} alt="Icon shield"/>
                <span>Help pioneer Web3</span>
                <p>The Web3 is taking back the internet to be the user-owned internet. If we, the users, don't fund and build what we want, it will be again, decided for us, and benefit others and become centralized to a few, not decentralized for the many.</p>
            </div>
            <div className="advantage-card">
                <StaticImage src={"../images/icon-grid.svg"} alt="Icon grid"/>
                <span>Help us grow</span>
                <p>We need the communities voice and hands. Lume Web is your open gateway and platform, so it must be built by those who are going to use it the most.</p>
            </div>
        </section>


        <section className="text-image">
            <div className="content-img">
                <StaticImage src={"../images/image-roadmap.jpg"} alt="Roadmap image"/>
            </div>
            <div className="content-body">
                <h3>Why we ask for your donations</h3>
                <p>At this time, Lume Web is a one-person show and frankly... a speck of dust on the internet, but with large ideas and a unique vision. We are relying on the community, and crypto whales to support this initiative to build the technology the internet needs to be owned by the users its serves.</p>
                <p>The current internet is controlled by a few for them to make money with you as the product, in exchange for all the "free" stuff you get in return. If you think on it, you will find a pattern here, and it turns us to becoming batteries in the matrix.</p>
            </div>
        </section>


        <section className="text">
            <div className="text-body">
                <h3>$$ How to support $$</h3>
                <p>We aren't picky 😉. If there is a way you want to pay us, we are happy to take it. The project is funded through Hammer Technologies LLC, in the USA, and so crypto, FOSS platforms, and traditional payment methods are all accepted! Just click donate at the top to see your options, and to contact us if needed.</p>
            </div>
        </section>


        <section className="text-image column-reverse">
            <div className="content-body">
                <h3>The way we are different</h3>
                <p>First understand the .com boom/bubble/bust in the 1990's to 2000's was a gold rush for VC's to get rich or die trying. Outside VC's... everyone seemed to be smoking something and was looking to get rich too!</p>
                <p>We have entered that era again, but this time with crypto, web3 and the "metaverse". Crypto is the money-arm of the web, web3 is to be the next internet, and at this time the "metaverse" is PR-filled hype and per the wolf of wallstreet.. <blockquote>It's a whazy. It's a woozie. It's fairy dust.</blockquote> If you want the metaverse, look at MMORPG, VR or just... real life 😝</p>
           <p>The Lume Web project has no VC equity and will never give out equity in any form to investment companies since their motive is to make a profit usually by being a walled garden and centralizing. VC's interests broadly go against the interest of a user-owned internet.</p>
            </div>
            <div className="content-img">
                <StaticImage src={"../images/image-development-race.png"} alt="Roadmap image"/>
            </div>
        </section>
    </Layout>
};

export default DonatePage;
