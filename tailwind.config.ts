/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px',
				'h-mini': {
					raw: '(max-height: 700px)'
				}
			},
			colors: {
				// 'primary-sgs': '#071118',
				// 'secondary-sgs': '#101C29',
				'primary-sgs': '#24215D',
				'secondary-sgs': '#191C44',
				'gold-sgs': '#C9A35A',
				'secondary-gold-sgs': '#C6A15B',
				'dark-sgs': '#09121D',
				'gold-light-sgs': '#D8B97A',
				'primary-light-sgs': '#F5F0E6',
				'border-sgs': '#243445',
				// 'blue-sgs': '#1B91D0',
				'blue-sgs': '#201F53',
				'blue-secondary-sgs': '#04567B',
				'gray-sgs': '#5D6471',
				'secondary-gray-sgs': '#667085',
				'green-sgs': '#75C142',
				'orange-sgs': '#FF6347',
				'yellow-sgs': '#FBBB2B',
				'purple-sgs': '#7158D9',
				'navy-sgs': {
					50: "#E8E8F5",
					100: "#B9BAE0",
					200: "#8B8DCB",
					300: "#686BB9",
					400: "#4A4DA3",
					500: "#35388A",
					600: "#292B6B",
					700: "#202253",
					800: "#101126",
					900: "#0A0B1C",
					'dark': "#0B0C1D",
					'light': '##F7F7FB',
					DEFAULT: "#17183A",
				},
				'premium-gold-sgs': {
					50: "#FBF5E8",
					100: "#F5E8C8",
					200: "#ECD59F",
					300: "#E4C278",
					400: "#DDB05A",
					500: "#B88732",
					600: "#986D27",
					700: "#76501F",
					800: "#523716",
					900: "#33230F",
					DEFAULT: '#D4A144'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: '#d1d5db',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			backgroundImage: {
				"basic-gold-metallic-sgs": "linear-gradient( 135deg, #76501F 0%, #B88732 18%, #D4A144 35%, #F5E8C8 50%, #D4A144 65%, #B88732 82%, #76501F 100%)",
				"premium-gold-metallic-sgs": "linear-gradient(110deg, #76501F 0%, #B88732 20%, #D4A144 38%, #F5E8C8 50%, #DDB05A 62%, #B88732 80%, #76501F 100%)",
				"gold-metallic": "linear-gradient(110deg, #76501F 0%, #B88732 20%, #D4A144 38%, #F5E8C8 50%, #DDB05A 62%, #B88732 80%, #76501F 100%)"
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// dialogIn: {
				// 	"0%": {
				// 		opacity: "0",
				// 		transform: "translate(-50%, calc(-50% + 60px))",
				// 	},
				// 	"100%": {
				// 		opacity: "1",
				// 		transform: "translate(-50%, -50%)",
				// 	},
				// },
				// dialogOut: {
				// 	"0%": {
				// 		opacity: "1",
				// 		transform: "translate(-50%, -50%)",
				// 	},
				// 	"100%": {
				// 		opacity: "0",
				// 		transform: "translate(-50%, calc(-50% + 60px))",
				// 	},
				// },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// dialogIn: "dialogIn 300ms ease-out",
				// dialogOut: "dialogOut 250ms ease-in",
			},
		}
	},
	// plugins: [require("tailwindcss-animate")],
	plugins: [animate],
}