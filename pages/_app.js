import '../styles/globals.css'
import { WebBundlr } from "@bundlr-network/client"
import { MainContext } from '../context'
import { useState, useRef } from 'react'
import { providers, utils } from 'ethers'

function MyApp({ Component, pageProps }) {
  const [bundlrInstance, setBundlrInstance] = useState()
  const [balance, setBalance] = useState()
  const bundlrRef = useRef()
  return <Component {...pageProps} />
}

export default MyApp
