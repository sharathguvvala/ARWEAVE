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

  function onFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      const image = URL.createObjectURL(file)
      setImage(image)
      let reader = new FileReader()
      reader.onload = function () {
        if (reader.result) {
          setFile(Buffer.from(reader.result))
        }
      }
      reader.readAsArrayBuffer(file)
    }
  }

  async function uploadFile() {    
    let tx = await bundlrInstance.uploader.upload(file, [{ name: "Content-Type", value: "image/png" }])
    console.log('tx: ', tx)
    setURI(`http://arweave.net/${tx.data.id}`)

  }

  return (
    
  )
}
