import React from 'react'
import MailingList from '../components/MailingList'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  mailingListSection:  {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20)
  }
}));

const Main = ({children}) => {

  const classes = useStyles();

  return (
    <main>
      {children}
      <Container maxWidth="md" component="section" className={classes.mailingListSection}>
        <MailingList />
      </Container>
    </main>
  )
}
export default Main
