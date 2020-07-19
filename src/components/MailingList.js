import React from 'react'
import TextBlock from './TextBlock'
import { useStaticQuery } from 'gatsby';
import { makeStyles, responsiveFontSizes } from '@material-ui/core';
import useIsInViewport from 'use-is-in-viewport';

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

  const [isInViewport, ref] = useIsInViewport({
    threshold: 50
  });

  const animateClass = isInViewport ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut';

  return (
    <div className={`${classes.root} ${animateClass}`} ref={ref}>
      <TextBlock overtext={overtext} title={title} body={body} />
    </div>
  )
}
export default MailingList
