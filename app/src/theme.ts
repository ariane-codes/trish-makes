import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
    name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `'Karla', sans-serif`,
		"--theme-font-family-heading": `'Karla', sans-serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "24px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #25d0b4 
		"--color-primary-50": "222 248 244", // #def8f4
		"--color-primary-100": "211 246 240", // #d3f6f0
		"--color-primary-200": "201 243 236", // #c9f3ec
		"--color-primary-300": "168 236 225", // #a8ece1
		"--color-primary-400": "102 222 203", // #66decb
		"--color-primary-500": "37 208 180", // #25d0b4
		"--color-primary-600": "33 187 162", // #21bba2
		"--color-primary-700": "28 156 135", // #1c9c87
		"--color-primary-800": "22 125 108", // #167d6c
		"--color-primary-900": "18 102 88", // #126658
		// secondary | #3fc0d9 
		"--color-secondary-50": "226 246 249", // #e2f6f9
		"--color-secondary-100": "217 242 247", // #d9f2f7
		"--color-secondary-200": "207 239 246", // #cfeff6
		"--color-secondary-300": "178 230 240", // #b2e6f0
		"--color-secondary-400": "121 211 228", // #79d3e4
		"--color-secondary-500": "63 192 217", // #3fc0d9
		"--color-secondary-600": "57 173 195", // #39adc3
		"--color-secondary-700": "47 144 163", // #2f90a3
		"--color-secondary-800": "38 115 130", // #267382
		"--color-secondary-900": "31 94 106", // #1f5e6a
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #f896d4 
		"--color-success-50": "254 239 249", // #feeff9
		"--color-success-100": "254 234 246", // #feeaf6
		"--color-success-200": "253 229 244", // #fde5f4
		"--color-success-300": "252 213 238", // #fcd5ee
		"--color-success-400": "250 182 225", // #fab6e1
		"--color-success-500": "248 150 212", // #f896d4
		"--color-success-600": "223 135 191", // #df87bf
		"--color-success-700": "186 113 159", // #ba719f
		"--color-success-800": "149 90 127", // #955a7f
		"--color-success-900": "122 74 104", // #7a4a68
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #d21919 
		"--color-error-50": "248 221 221", // #f8dddd
		"--color-error-100": "246 209 209", // #f6d1d1
		"--color-error-200": "244 198 198", // #f4c6c6
		"--color-error-300": "237 163 163", // #eda3a3
		"--color-error-400": "224 94 94", // #e05e5e
		"--color-error-500": "210 25 25", // #d21919
		"--color-error-600": "189 23 23", // #bd1717
		"--color-error-700": "158 19 19", // #9e1313
		"--color-error-800": "126 15 15", // #7e0f0f
		"--color-error-900": "103 12 12", // #670c0c
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}

