export default function Heading({ title }) {
  return (
    <h2 className='z-10 mx-auto mb-8 max-w-[500px] text-center text-2xl font-bold leading-loose text-primary underline decoration-red decoration-8 underline-offset-8 xs:mb-24 md:text-4xl'>
      {title}
    </h2>
  )
}
