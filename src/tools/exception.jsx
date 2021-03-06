import React from 'react'
import ReactLoading from '../components/react-loading'

export default function Exception({
  isLoading,
  timedOut,
  pastDelay,
  error
}) {
  if (isLoading) {
    // While our other component is loading...
    if (timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>
    } else if (pastDelay) {
      // Display a loading screen after a set delay.
      return <ReactLoading/>
    } else {
      // Don't flash "Loading..." when we don't need to.
      return <ReactLoading/>
    }
  } else if (error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load</div>
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null
  }
}