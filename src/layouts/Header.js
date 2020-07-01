import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(10),
    // display: 'flex',
    // alignItems: 'center',
    // backgroundColor: 'rgb(247, 247, 247)',
    // clipPath: 'polygon(0px 0px, 100% 0px, 100% calc(100% - 3em), 0% 100%)',
    // height: '50vh',
    // minHeight: '35em'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginBottom: theme.spacing(4)
  }
}));

// const HeaderBackground = ()

const Header = ({ title, subtitle, logo }) => {

  const classes = useStyles();
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Logo  />
        </div>
        <Nav />
      </div>
    </header>
    // <header className={classes.header}></header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
