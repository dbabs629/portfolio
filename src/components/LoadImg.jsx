import { useState } from 'react'

function LoadImg({ imgHighRes, imgLowRes, addClassName, alt }) {
  const [imgFile, setImgFile] = useState(imgLowRes)

  return (
    <>
      <img
        src={imgFile}
        alt={alt}
        className={`${addClassName}`}
        onLoad={() => setImgFile(imgHighRes)}
      />
    </>
  )
}
export default LoadImg
