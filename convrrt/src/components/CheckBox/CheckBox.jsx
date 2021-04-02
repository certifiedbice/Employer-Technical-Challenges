
import Vue from 'vue';
import { styled, VueEmotion } from '@egoist/vue-emotion';

import './checkbox.css';

Vue.use(VueEmotion);

const Label = styled('label')``

const SpanOuter = styled('span')`
	display: grid;
	grid-template-areas: "checkbox";
	> * {
		grid-area: checkbox;
	}
`

const Input = styled('input')`
	opacity: 0;
   	width: 1em;
   	height: 1em;
`

const SpanInner = styled('span')`
	display: inline-grid;
	width: 1em;
	height: 1em;
	border-radius: 0.15em;
	svg {
		transition: transform 0.1s ease-in 25ms;
		transform: scale(0);
		transform-origin: bottom left;
	}
`

const Svg = styled('svg')``

const Path = styled('path')``


export default {
	name: 'CheckBox',
	props: {
		label: {
			type: String,
			required: true,
		},
		default: {
			type: Boolean,
			default: false,
		},
		focus: {
			type: Boolean,
			default: false
		},
		focusVisible: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		labelClasses() {
			return {
				'checkbox': true,
				'checkbox--default': this.default && !this.checked,
				'checkbox--default-checked': this.default && this.checked,
				'checkbox--focus': this.focus && !this.checked,
				'checkbox--focus-checked': this.focus && this.checked,
				'checkbox--focus-visible': this.focusVisible && !this.checked,
				'checkbox--focus-visible-checked': this.focusVisible && this.checked,
				'checkbox--disabled': this.disabled && !this.checked,
				'checkbox--disabled-checked': this.disabled && this.checked,
			};
		},
		spanOuterClasses() {
			return {
				'checkbox__input': true,
				'checkbox__input--default': this.default,
				'checkbox__input--focus': this.focus,
				'checkbox__input--focus-visible': this.focusVisible,
				'checkbox__input--disabled': this.disabled,
			};
		},
		spanInnerClasses() {
			return {
				'checkbox__control': true,
				'checkbox__control--default': this.default && !this.checked,
				'checkbox__control--default-checked': this.default && this.checked,
				'checkbox__control--focus': this.focus,
				'checkbox__control--focus-checked': this.focus && this.checked,
				'checkbox__control--focus-visible': this.focusVisible && !this.checked,
				'checkbox__control--focus-visible-checked': this.focusVisible && this.checked,
				'checkbox__control--disabled': this.disabled && !this.checked,
				'checkbox__control--disabled-checked': this.disabled && this.checked,
			};
		},
	},
	render (h) {
		return (
			<Label default class={this.labelClasses}>
				<SpanOuter class={this.spanOuterClasses}>
					<Input type="checkbox" checked={this.checked} disabled={this.disabled} />
					<SpanInner class={this.spanInnerClasses}>
						<Svg 
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<Path
								fill="none"
								stroke="currentColor"
								stroke-width="3"
								d="M1.73 12.91l6.37 6.37L22.79 4.59"
							/>
						</Svg>
					</SpanInner>
				</SpanOuter>
			</Label>
		)
	}
}