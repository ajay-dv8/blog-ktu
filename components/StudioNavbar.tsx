import Image from 'next/image'
import Link from 'next/link'
import cornerDownLeft from '../public/cornerDownLeft.svg'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div>
        <Link href='/' className='text-[#f7ab0a] flex items-center bg-black p-3'>
          <Image src={cornerDownLeft} alt='' className='w-[1.2rem] mx-2 '/>
          Go to Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar