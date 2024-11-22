import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'WebSamurai⚡',
	icons: {
		icon: '/3.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='image-container'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	)
}