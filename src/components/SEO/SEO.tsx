import React from 'react'
import {Helmet} from "react-helmet"
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

// @ts-ignore
const SEO = ({title, desc, banner, pathname}) => {
    const {site, file} = useStaticQuery(query)

    const {
        siteMetadata: {
            siteUrl,
            defaultTitle,
            defaultDescription,
            siteLanguage,
            ogLanguage,
            twitter,
        },
    } = site

    const seo = {
        title: title || defaultTitle,
        description: desc || defaultDescription,
        image: `${siteUrl}${banner || file.childImageSharp.resize.src}`,
        url: `${siteUrl}${pathname || ''}`,
    }

    return (
        <>
            <Helmet title={seo.title}>
                <html lang={siteLanguage}/>
                <meta name="description" content={seo.description}/>
                <meta name="image" content={seo.image}/>
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6291a28498423e20"></script>
            </Helmet>
            <Facebook
                desc={seo.description}
                image={seo.image}
                title={seo.title}
                type={'website'}
                url={seo.url}
                locale={ogLanguage}
            />
            <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter}/>
        </>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    banner: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
    node: PropTypes.object,
}

SEO.defaultProps = {
    title: null,
    desc: null,
    banner: null,
    pathname: null,
    article: false,
    node: null,
}

const query = graphql`
 query {
  site {
    siteMetadata {
      siteUrl
      defaultTitle: title
      defaultDescription: description
      siteLanguage
      ogLanguage
      twitter
    }
  }
  file(relativePath: { eq: "logo.png" }) {
    childImageSharp {
      resize {
        src
      }
    }
  }
}`
