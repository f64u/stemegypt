import React from 'react';

import styles from './landing.module.scss';
import logo from '../../assets/icons/logo.svg';

import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const Landing = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "images/STEM.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1880) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<BackgroundImage Tag="section" id={styles.landing} fluid={data.file.childImageSharp.fluid}>
			<div className={styles.overlay} />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.downlay} />

					<div className={styles.text}>
						<h1 className={styles.title}>STEM Egypt</h1>
						<h2 className={styles.subtitle}>High School for Boys</h2>
					</div>
					<img src={logo} alt="STEM Egypt" width={230} className={styles.logo} />
				</div>
			</div>
		</BackgroundImage>
	);
};

export default Landing;
