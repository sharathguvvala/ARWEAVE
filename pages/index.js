import BigNumber from 'bignumber.js'
import { useContext, useState } from 'react'
import { MainContext } from '../context'

export default function Home() {
  const [file, setFile] = useState()
  const [image, setImage] = useState()
  const [URI, setURI] = useState()
  const [amount, setAmount] = useState()
  const { bundlrInstance, initialiseBundlr, balance, fetchBalance } = useContext(MainContext)

  async function initialize() {
    initialiseBundlr()
  }

  return (
    
  )
}
