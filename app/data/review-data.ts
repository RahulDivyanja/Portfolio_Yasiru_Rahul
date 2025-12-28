import type { ReactNode } from "react"
import type { StaticImageData } from "next/image"

export type ReviewProps = {
	id: string
	quote: ReactNode
	name: string
	title: string
	img?: StaticImageData | string | null
}

export const REVIEWS: readonly ReviewProps[] = [
	{
		id: "bespoke",
		quote: "Excellent work — helped us scale quickly and reliably.",
		name: "Client Name",
		title: "CEO, Example Co",
		img: "/assets/bespoke-logo.png",
	},
	{
		id: "automedics",
		quote: "Austin built our website fast and it works flawlessly.",
		name: "Jeff Egbert",
		title: "Owner, Automedics Kirkland",
		img: "/assets/automedics-logo-optimized.png",
	},
]

// O(1) lookup map keyed by `id`
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
	return REVIEW_MAP[id]
}

export const reviews = REVIEWS
