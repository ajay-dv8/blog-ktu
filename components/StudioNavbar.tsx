import Link from 'next/link'
import React from 'react'

const StudioNavbar = (props: any) => {
  return (
    <div>
        <div>
            <Link href='/' className='text-[#f7aboa] flex items-center bg-black'>
                Homepage
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar