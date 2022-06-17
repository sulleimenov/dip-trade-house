import { $, jQuery } from 'jquery'
import mixitup from 'mixitup'
import { Fancybox } from "@fancyapps/ui";

window.$ = $
window.jQuery = jQuery

document.addEventListener('DOMContentLoaded', () => {
	const burderBtn = document?.querySelector('.header__burger-menu-wrapper')
	const menu = document?.querySelector('.menu')
	burderBtn.addEventListener('click', function () {
		menu.classList.toggle('show')
	})

	const containerEl = document?.querySelector('.stores__list')

	let mixer = mixitup(containerEl, {
		animation: {
			duration: 250,
			nudge: false,
			reverseOut: false,
			effects: '',
		},
	})
})
