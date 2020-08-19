import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description, image, pathname, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            shortTitle
            description
            siteUrl
            image
            userTwitter
            nav {
              title
              path
            }
            github {
              site
              api
            }
            author {
              name
              site
            }
          }
        }
      }
    `,
  )

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: `${site.siteMetadata.siteUrl}${image ? image : site.siteMetadata.image}`,
    url: `${site.siteMetadata.siteUrl}${pathname || '/'}`,
  }

  return (
    <Helmet htmlAttributes={{ lang }} title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:locale" content={{ lang }} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />

      <meta name="twitter:creator" content={site.siteMetadata.userTwitter} />
      <meta name="twitter:site" content={site.siteMetadata.userTwitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  lang: 'en',
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  en: PropTypes.string,
}

export default SEO
