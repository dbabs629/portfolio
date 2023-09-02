import { useState } from 'react'

export default function LoadImg({ imgHighRes, imgLowRes, addClassName, alt }) {
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
