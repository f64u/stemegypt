module.exports = {
  siteMetadata: {
    title: `STEM High School`,
    siteUrl: `https://stemegypt.edu.eg`,
    description: `Ranked first, STEM High School is deigned to create centers of excellence`,
    twitter: `@stemegypt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `STEM High School`,
        short_name: `STEM Egypt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000064`,
        display: `standalone`,
        icon: "./src/assets/forfav.png",
      },
    },
  ],
}
