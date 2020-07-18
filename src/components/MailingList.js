import React from 'react'
import TextBlock from './TextBlock'
import { useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  }
})

const MailingList = () => {

  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      strapiMailingList {
        body {
          overtext
          title
          body
        }
      }
    }
  `)

  const {overtext, title, body} = data.strapiMailingList.body;

  return (
    <div className={classes.root}>
      <TextBlock overtext={overtext} title={title} body={body} />
    </div>
  )
}
export default MailingList
