/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import ThemeContext from "../context/themeContext"
const Themes = { light: 'light-theme', dark: 'dark-theme' }
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
	const [theme, setTheme] = useState(Themes.light)

	return (
		<div className={`layout-${theme}`}>
			<Header
				siteTitle={data.site.siteMetadata.title}
				theme={theme}
				changeTheme={() => {
					setTheme(prev => prev === Themes.light ?
						Themes.dark :
						Themes.light)
				}} />
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
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

Layout.contextType = ThemeContext;

export default Layout
