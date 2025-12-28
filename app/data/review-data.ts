import type { ReactNode } from "react"
import type { StaticImageData } from "next/image"

export type ReviewProps = {
	quote: ReactNode
	name: string
	title: string
	img?: StaticImageData | string | null
}

export const reviews: ReviewProps[] = [
	{
		quote: "Excellent work — helped us scale quickly and reliably.",
		name: "Client Name",
		title: "CEO, Example Co",
		img: null,
	},
]

export{}
