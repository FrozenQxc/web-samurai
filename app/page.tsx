import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<div className='flex justify-center items-center h-[450px] '>
				{/* <ul className='text-white flex gap-2 flex-col text-[25px]'>
					<li className='text-hover'>FrozenQxc</li>
					<li className='text-hover'>Age 21</li>
					<li className='text-hover'>GitHub</li>
					<li className='text-hover'>Telegram</li>
					<li className='text-hover'>Vk</li>
				</ul> */}
				<Link href='https://github.com/FrozenQxc'>
					<Image
						className='flex rounded-[50%] cursor-pointer hover:animate-pulse shadow-neon border scale-105 '
						src='https://avatars.githubusercontent.com/u/125030768?s=400&u=bbc2a9a95825d61c62ae28ba95c4723b58b9c5e2&v=4'
						alt='logo'
						width={225}
						height={250}
					/>
				</Link>
			</div>
		</div>
	)
}
