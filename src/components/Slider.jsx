function Slider({ imgList, alt, link }) {
  let projectImgList = [...imgList]
  let projectAltList = [...alt]
  console.log(projectAltList)

  return (
    <div className='text-white'>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <img src={projectImgList[0]} alt={projectAltList[0]} />
      </a>
      <button>Prev</button>
      <button>Next</button>
    </div>
  )
}
export default Slider
