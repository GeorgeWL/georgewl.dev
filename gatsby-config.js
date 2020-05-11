module.exports = {
	siteMetadata: {
		title: `GeorgeWL.dev | George W Langham`,
		description: `George W Langham - Web Software Developer`,
		author: `@georgewl`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GeorgeWL.dev | George W Langham`,
				short_name: `georgewl.dev`,
				start_url: `/`,
				background_color: `#FFC045`,
				theme_color: `#303030`,
				display: `minimal-ui`,
				icon: `src/images/logo-circ.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
