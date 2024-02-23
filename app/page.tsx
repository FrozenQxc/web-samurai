// Убираем строку 'use client', так как она не нужна

// Исправляем объект data, добавляем кавычки для значений строковых ключей и исправляем ошибки в их написании
const data = {
	title: [
		'HTML',
		'CSS',
		'Sass',
		'Tailwind',
		'JavaScript',
		'ReactJs',
		'NextJs',
		'Typescript',
		'NodeJs',
		'Redux',
		'Webpack',
		'Docker',
		'MongoDB',
		'ExpressJs',
		'GIT',
	],
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<div className='flex justify-center items-center h-[450px] '>
				<div className='rounded-lg flex-col gap-7 shadow-neon flex justify-between items-center p-5 w-[950px] '>
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
							src='/avatar.jpg'
							alt='logo'
							width={225}
							height={250}
						/>
					</Link>
					<span className='text-white text-[23px]'>
						Привет! Я front-end разработчик!
					</span>
				</div>
			</div>
			<div className='h-[400px] w-full flex justify-center'>
				<div className=''>
					<div className='flex justify-center pt-3'>
						<h1 className='text mb-5'>My skills</h1>
					</div>
					<div className='w-[1000px] px-[30px]'>
						<ul className='p-7 rounded-lg   shadow-neon text-white flex flex-wrap gap-5 text-[20px]'>
							{data.title.map((skill, index) => (
								<li
									className='border rounded-lg hover:text-purple-300 transition-colors duration-200 border-purple-300 p-2 justify-center'
									key={index}
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
