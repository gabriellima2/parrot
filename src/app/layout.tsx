import './globals.css'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { METADATA } from '@/constants/metadata'

export const metadata: Metadata = {
	metadataBase: new URL(METADATA.site),
	title: METADATA.title,
	description: METADATA.description,
	keywords: METADATA.keywords,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: METADATA.site,
		title: METADATA.title,
		description: METADATA.description,
	},
	twitter: {
		card: 'summary_large_image',
		site: METADATA.site,
		title: METADATA.title,
		description: METADATA.description,
	},
	applicationName: METADATA.applicationName,
	authors: METADATA.authors,
	creator: METADATA.creator,
	publisher: METADATA.publisher,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>{children}</body>
		</html>
	)
}
