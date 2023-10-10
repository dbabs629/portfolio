import { useState, useEffect } from 'react'

export default function LoadImg({ imgHighRes, imgLowRes, addClassName, alt }) {
  const [imgFile, setImgFile] = useState(imgLowRes)

  useEffect(() => {
    setImgFile(imgHighRes)
  }, [imgFile, imgHighRes])

  return (
    <>
      <img
        src={imgFile}
        alt={alt}
        className={`${addClassName}`}
        loading='lazy'
        onLoad={() => setImgFile(imgHighRes)}
      />
    </>
  )
}
