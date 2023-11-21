import { Header } from '@/components/header'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Alphacado',
	description: 'Alphacado',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
		</>

	)
}
