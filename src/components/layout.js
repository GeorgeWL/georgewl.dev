/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	return (
		<>
			<Header
				siteTitle={data.site.siteMetadata.title}
				theme={document.body.classList.contains('light-theme') === 'light-theme' ?
					'light-theme' :
					'dark-theme'}
				changeTheme={() => {
					document.body.classList.remove(currentTheme)
					document.body.classList.add(currentTheme === 'light-theme' ?
						'dark-theme' :
						'light-theme')
				}}
			/>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
          {` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}


export default Layout
