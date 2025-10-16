/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./db/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		inter: [
  			'Inter',
  			'system-utils',
  			'sans-serif'
  		],
  		mulish: [
  			'Mulish',
  			'sans-serif'
  		],
  		main: [
  			'var(--main-fontFamily)',
  			'sans-serif'
  		]
  	},
  	letterSpacing: {
  		main: 'calc(var(--main-letterSpace)*1px)'
  	},
  	lineHeight: {
  		main: 'var(--main-lineHeight)'
  	},
  	fontSize: {
  		extraSmall: '0.85vw',
  		h1: '3vw',
  		p: '1vw',
  		small: '1.2vw',
  		main: '1.4vw',
  		mobileExtraSmall: '2vw',
  		mobileH1: '6vw',
  		mobileP: '2.5vw',
  		mobileSmall: '3.5vw',
  		mobileMain: '4.5vw'
  	},
  	screens: {
  		lg: {
  			max: '1023px'
  		},
  		sm: {
  			max: '600px'
  		},
  		mobile: {
  			max: '600px'
  		},
  		md: {
  			max: '767px'
  		},
  		xl: {
  			max: '1279px'
  		},
  		max768: {
  			max: '768px'
  		},
  		tp: {
  			max: '540px'
  		},
  		sq: {
  			max: '412px'
  		},
  		tk: {
  			max: '360px'
  		},
  		'3xl': {
  			max: '9920px'
  		}
  	},
  	colors: {
  		primary: {
  			'500': '#000000',
  			dark: 'rgba(0,0,0,0.83)'
  		},
  		secondary: {
  			'500': '#FFFFFF',
  			dark: 'grey',
  			border: 'var(--secondary-color-border)'
  		},
  		transparent: 'transparent',
  		white: {
  			'100': '#F0F3F5',
  			'200': 'rgba(11,9,9,0.15)',
  			'300': 'rgba(11,9,9,0.55)',
  			'400': '#ffffff',
  			'500': '#FFFFFF',
  			'600': '#F7F9FA',
  			'700': 'hsla(0,0%,100%,0.82)'
  		},
  		red: {
  			'500': '#FF0000'
  		},
  		gray: {
  			'100': 'rgba(136,136,136,0.46)',
  			'200': '#efefef',
  			'300': '#a9a9a9',
  			'400': '#949494',
  			'500': '#E3DBD8',
  			'600': '#727272',
				'alt-100': 'ffffff14',
  		},
  		black: {
  			'300': '#1F242C',
  			'400': '#000000',
  			'500': '#000000'
  		},
  		blue: {
  			'500': '#023957',
				"linked-in": '#1268C0'
  		},
  		category: {
  			'300': 'var(--categoryDark-color-500)',
  			'400': 'var(--categoryLight-color-500)',
  			'500': 'var(--category-color-500)'
  		},
  		partners: {
  			'500': 'var(--partners-color-500)'
  		},
  		footer: {
  			'500': '#142A31'
  		},
  		button: {
  			'400': 'var(--button2-color-500)',
  			'500': 'var(--button1-color-500)'
  		},
  		hover: {
  			'500': 'var(--hover-color-500)'
  		},
  		main: {
  			green: '#07bd00',
  			greenOpacity: '#86BB4633',
  			lag: '#1F242C'
  		},
  		orange: {
  			'400': '#f3b020',
  			'500': '#FFA500'
  		},
  		yellow: {
  			'500': '#FFEA00'
  		},
  		'color-1': '#DB5B47',
  		'color-2': '#E5A51D',
  		'color-3': '#10A3D1',
  		'color-4': '#00BDBC',
  		'color-5': '#BCD531'
  	},
  	extend: {
  		boxShadow: {
  			custom: '0px 5px 10px -5px rgba(255,255,255,0.5)',
  			customWhite: '0px 10px 15px 0px #02395726'
  		},
  		background: {
  			customGradient: 'linear-gradient(to right, var(--gradient_background_second), var(--gradient_background_first))'
  		},
  		keyframes: {
  			bgSlideTop: {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			bgSlideRight: {
  				'0%': {
  					transform: 'translateX(200%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			bgSlideBottom: {
  				'0%': {
  					transform: 'translateY(200%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			bgSlideLeft: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			bgSlideOut: {
  				'0%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				}
  			},
  			rotate1: {
  				'0%': {
  					transform: 'translateX(-100%) rotate(-50deg)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateX(0) rotate(-15deg)',
  					opacity: 1
  				}
  			},
  			rotate2: {
  				'0%': {
  					transform: 'translateX(200%) rotate(60deg)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateX(0) rotate(25deg)',
  					opacity: 1
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			}
  		},
  		animation: {
  			rotate1: 'rotate1 0.8s ease-in-out forwards',
  			rotate2: 'rotate2 0.8s ease-in-out forwards',
  			'slide-top': 'bgSlideTop 2s ease-in-out',
  			'slide-right': 'bgSlideRight 2s ease-in-out',
  			'slide-bottom': 'bgSlideBottom 2s ease-in-out',
  			'slide-left': 'bgSlideLeft 2s ease-in-out',
  			'bg-slide-out': 'bgSlideOut 0.5s ease-in-out forwards',
  			fadeIn: 'fadeIn 2s ease-in-out',
  			fadeInFast: 'fadeIn 1s ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
