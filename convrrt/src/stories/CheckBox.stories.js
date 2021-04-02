import CheckBox from '../components/CheckBox/CheckBox.jsx';

export default {
	title: 'Atom/CheckBox',
	component: CheckBox,
	argTypes: {},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CheckBox },
	template: '<CheckBox v-bind="$props" />',
});

// CHECKBOX DEFAULT STORY
export const CheckBoxDefault = Template.bind({});
CheckBoxDefault.args = {
	label: 'Default',
	checked: false,
	default: true,
};

// CHECKBOX FOCUS STORY
export const CheckBoxFocus = Template.bind({});
CheckBoxFocus.args = {
	label: 'Focus',
	checked: false,
	focus: true,
};
CheckBoxFocus.parameters = { pseudo: { focus: true } };

// CHECKBOX FOCUS VISIBLE STORY
export const CheckBoxFocusVisible = Template.bind({});
CheckBoxFocusVisible.args = {
	label: 'FocusVisible',
	checked: false,
	focusVisible: true,
};
CheckBoxFocusVisible.parameters = { pseudo: { focusVisible: true } };

// CHECKBOX DISABLED STORY
export const CheckBoxDisabled = Template.bind({});
CheckBoxDisabled.args = {
	label: 'Disabled',
	checked: false,
	disabled: true,
};