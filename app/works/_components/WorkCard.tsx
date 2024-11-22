import Image from 'next/image'

const WorkCard = () => {
	return (
		<div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg p-5 shadow-lg transform transition-all '>
			<a href='https://react-pizza-nine-delta.vercel.app' className='group'>
				<Image
					className='rounded-lg transition-transform duration-300 animate-pulse'
					src='https://sun9-29.userapi.com/impg/hhEPCbtLH1w3Jn2ujU27P9sCWJIwIvW9hayxDw/KwsMsvOivvQ.jpg?size=1672x1025&quality=96&sign=db95cabbc7b0ff0fbcd357e7ab6b3a41&type=album'
					width={500}
					height={300}
					alt='GitHub Repository'
				/>
			</a>
			<div className='mt-4 text-white'>
				<h1 className='text-2xl font-bold'>Проект: Pizza</h1>
				<p className='mt-2 text-gray-400'>Стек технологий: React, Redux</p>
				<a
					href='https://github.com/FrozenQxc/React-Pizza'
					className='inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition'
				>
					Посмотреть на GitHub
				</a>
			</div>
		</div>
	)
}

export default WorkCard
