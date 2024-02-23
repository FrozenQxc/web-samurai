import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='flex mx-auto  justify-between w-[1300px]  '>
			<div className='flex gap-2 items-center text-center '>
				<Image alt='logo' src='/3.png' width={65} height={65} />
				<label className='text animate-ping '>WebSamurai</label>
			</div>
			<div className='flex items-center gap-10 p-5  text-lime-500 text-[20px]'>
				<Link
					className='hover:text-lime-300 transition-colors duration-300 '
					href='/works'
				>
					Мои работы
				</Link>
				<Link
					className='hover:text-lime-300 transition-colors duration-300 '
					href='/'
				>
					Обо мне
				</Link>
				<Link
					className='hover:text-lime-300 transition-colors duration-300 '
					href='/'
				>
					Обо мне
				</Link>
			</div>
		</div>
	)
}

export default Navbar
