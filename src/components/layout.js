/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Header from "./header"
import "./layout.scss"

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
	const [theme, setTheme] = useState(document.body.classList.contains(Themes.light) ? Themes.light : Themes.dark)
	return (
		<>
			<Header
				siteTitle={data.site.siteMetadata.title}
				theme={theme}
				changeTheme={() => {
					setTheme(prev => prev === Themes.light ?
						Themes.dark :
						Themes.light)
					document.body.classList.remove(theme === Themes.light ?
						Themes.light :
						Themes.dark)
					document.body.classList.add(theme === Themes.dark ?
						Themes.light :
						Themes.dark)
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
