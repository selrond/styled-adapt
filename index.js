import { css } from 'styled-components'

export const till = screenWidth => (...styles) => (
	css`
		@media print, screen and (max-width: ${`${screenWidth}px`}) {
			& {
				${css(...styles)}
			}
		}
	`
)

export const from = screenWidth => (...styles) => (
	css`
		@media print, screen and (min-width: ${`${screenWidth}px`}) {
			& {
				${css(...styles)}
			}
		}
	`
)
