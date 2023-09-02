export default function ShapesAnimation() {
  return (
    <div className='fixed top-20 z-0 h-screen w-full overflow-hidden'>
      <span className='animate-1 absolute left-[73%] top-[12%] z-0 h-full max-h-[250px] w-full max-w-[250px] rounded-full bg-primary opacity-40 sm:opacity-60' />
      <span className='animate-2 absolute left-[75%] top-[30%] z-0 h-full max-h-[100px] w-full max-w-[100px] rounded-full bg-emerald opacity-40 sm:opacity-60' />
      <span className='animate-3 absolute left-[80%] top-[28%] z-0 h-full max-h-[200px] w-full max-w-[200px] rounded-full bg-red opacity-40 sm:opacity-60' />
    </div>
  )
}
