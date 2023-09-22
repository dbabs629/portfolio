export default function ShapesAnimation() {
  window.addEventListener('scroll', () => {
    let circleBlue = document.getElementById('circle-blue')
    let circleGreen = document.getElementById('circle-green')
    let circleRed = document.getElementById('circle-red')

    if (
      (window.scrollY > 800 && window.scrollY < 1900) ||
      window.scrollY > 3800
    ) {
      circleBlue.classList.add('circle-1-left')
      circleGreen.classList.add('circle-2-left')
      circleRed.classList.add('circle-3-left')
    } else {
      circleBlue.classList.remove('circle-1-left')
      circleGreen.classList.remove('circle-2-left')
      circleRed.classList.remove('circle-3-left')
    }
  })

  return (
    <div className='fixed top-20 z-0 h-screen w-full overflow-hidden'>
      <span
        id='circle-blue'
        className={`animate-1 absolute left-[90%] top-[12%] z-0 h-full max-h-[150px] w-full max-w-[150px] rounded-full bg-primary opacity-60 transition-all duration-1000 ease-in-out md:max-h-[250px] md:max-w-[250px]`}
      />
      <span
        id='circle-green'
        className={`animate-2 absolute left-[87%] top-[22%] z-0 h-full max-h-[80px] w-full max-w-[80px] rounded-full bg-emerald opacity-60 transition-all duration-1000 ease-in-out md:max-h-[100px] md:max-w-[100px]`}
      />
      <span
        id='circle-red'
        className={`animate-3 absolute left-[90%] top-[25%] z-0 h-full max-h-[120px] w-full max-w-[120px] rounded-full bg-red opacity-60 transition-all duration-1000 ease-in-out md:max-h-[200px] md:max-w-[200px]`}
      />
    </div>
  )
}
