import { Fragment, useEffect, useRef } from 'react'
import { colors } from './style'

function LoadingIndicator({ colorIndicator }) {
  const indicatorRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentHeight = window.innerHeight
      const scrollHeight = window.document.body.scrollHeight
      const scrollY = window.scrollY

      const total = Math.round((scrollY / (scrollHeight - currentHeight)) * 100)
      indicatorRef.current.style.width = `${total}%`
    })
  }, [])


  return (
    <div ref={indicatorRef} id="loading-indicator" style={colors?.[colorIndicator] ?? colors.default}></div>
  )
}

const WithLoadingIndicator = Component => props => {
  return (
    <Fragment>
      <LoadingIndicator {...props} />
      <Component {...props} />
    </Fragment>
  )
}

export default WithLoadingIndicator