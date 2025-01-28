/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright © DecSoft Utils - All rights reserved.
 Visit our website at: https://www.decsoftutils.com
 */

const selectEx = {
	props: {
		modelValue: String | Object,
		value: String | Object,
		name: String,
		classes: String,
  items: Array,
  itemIndex: Number,
		readonly: Boolean,
		size: String,
		hidden: Boolean,
		type: String,
		title: String,
		label: String,
		disabled: Boolean,
		tabIndex: Number,
		focusHandler: Function,
		changeHandler: Function,
		blurHandler: Function,
		clickHandler: Function,
		dblclickHandler: Function,
		mousedownHandler: Function,
		mouseupHandler: Function,
		mousemoveHandler: Function,
		mouseenterHandler: Function,
		mouseleaveHandler: Function,
		contextmenuHandler: Function
	},
	methods: {
    // Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
    updateModelValue: function (event) {
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      this.$emit('update:modelValue', event.target.value);
    }
	},
	template: `<select :id="name" :tabindex="tabIndex" v-show="!hidden" :class="[classes, 'form-select', 'form-select-' + size]" :title="title" :disabled="disabled" @input="updateModelValue" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler"><option :selected="index === itemIndex" v-for="(item, index) in items" :data-index="index">{{item.text}}</option></select>`
};


const typeahead = {
	props: {
		value: String,
		item: Object,
		items: Array,
		emptyText: String,
  autocomplete: Boolean,
  highlight: Boolean,
		name: String,
		classes: String,
		readonly: Boolean,
		size: String,
		placeholder: String,
		hidden: Boolean,
		type: String,
		title: String,
		label: String,
		disabled: Boolean,
		tabIndex: Number,
		itemClickHandler: Function,
		focusHandler: Function,
		inputHandler: Function,
		changeHandler: Function,
		blurHandler: Function,
		clickHandler: Function,
		dblclickHandler: Function,
		mousedownHandler: Function,
		mouseupHandler: Function,
		mousemoveHandler: Function,
		mouseenterHandler: Function,
		mouseleaveHandler: Function,
		contextmenuHandler: Function,
		keyupHandler: Function,
		keydownHandler: Function,
		cutHandler: Function,
		copyHandler: Function,
		pasteHandler: Function
	},
	mounted: function () {
		let
			self = this;

		$('body').on('click', function () {
			$('#' + self.name + '-list').html('').hide();
		});

		$('body').on('click', '.' + this.name + '-list-item', self.itemClickHandler);
	},
	methods: {
    // Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
    updateModelValue: function (event) {
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      this.$emit('update:modelValue', event.target.value);
						this.inputHandler(event);
    }
	},
	template: `<div :id="name" :title="title" v-show="!hidden" :class="[classes, 'decsoft-typeahead-container']"><input :readonly="readonly" :tabindex="tabIndex" type="text" :placeholder="placeholder" :value="value" :disabled="disabled" :id="name + '-input'" :class="['form-control w-100 h-100', 'form-control-' + size]" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @input="updateModelValue" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler" @keyup="keyupHandler" @keydown="keydownHandler" @cut="cutHandler" @copy="copyHandler" @paste="pasteHandler"><ul :id="name + '-list'" class="z-3 list-group decsoft-typeahead-list"></ul></div>`
};

const labelInput = {
	props: {
		modelValue: String,
		value: String,
		name: String,
		classes: String,
		readonly: Boolean,
		size: String,
		hidden: Boolean,
		type: String,
		title: String,
		label: String,
		disabled: Boolean,
		tabIndex: Number,
		focusHandler: Function,
		inputHandler: Function,
		changeHandler: Function,
		blurHandler: Function,
		clickHandler: Function,
		dblclickHandler: Function,
		mousedownHandler: Function,
		mouseupHandler: Function,
		mousemoveHandler: Function,
		mouseenterHandler: Function,
		mouseleaveHandler: Function,
		contextmenuHandler: Function,
		keyupHandler: Function,
		keydownHandler: Function,
		cutHandler: Function,
		copyHandler: Function,
		pasteHandler: Function
	},
	mounted: function () {

	},
	methods: {
    // Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
    updateModelValue: function (event) {
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      this.$emit('update:modelValue', event.target.value);
						this.inputHandler(event);
    }
	},
	template: `<div :id="name" v-show="!hidden" :class="[classes, 'form-floating']"><input :type="type" :title="title" @input="updateModelValue" :readonly="readonly" :tabindex="tabIndex" :placeholder="label" :value="value" :disabled="disabled" :id="name + '-input'" :class="['form-control w-100 h-100', 'form-control-' + size]" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler" @keyup="keyupHandler" @keydown="keydownHandler" @cut="cutHandler" @copy="copyHandler" @paste="pasteHandler"><label :for="name + '-input'">{{label}}</label></div>`
};

const labelText = {
	props: {
		modelValue: String,
		value: String,
		name: String,
		classes: String,
		readonly: Boolean,
		size: String,
		hidden: Boolean,
		type: String,
		title: String,
		label: String,
		disabled: Boolean,
		tabIndex: Number,
		focusHandler: Function,
		inputHandler: Function,
		changeHandler: Function,
		blurHandler: Function,
		clickHandler: Function,
		dblclickHandler: Function,
		mousedownHandler: Function,
		mouseupHandler: Function,
		mousemoveHandler: Function,
		mouseenterHandler: Function,
		mouseleaveHandler: Function,
		contextmenuHandler: Function,
		keyupHandler: Function,
		keydownHandler: Function,
		cutHandler: Function,
		copyHandler: Function,
		pasteHandler: Function
	},
	mounted: function () {

	},
	methods: {
    // Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
    updateModelValue: function (event) {
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      this.$emit('update:modelValue', event.target.value);
						this.inputHandler(event);
    }
	},
	template: `<div :id="name" v-show="!hidden" :class="[classes, 'form-floating']"><textarea :id="name + '-textarea'" :title="title" :value="value" :disabled="disabled" :tabindex="tabIndex" :class="[classes, 'form-control w-100 h-100', 'form-control-' + size]" :placeholder="label" @input="updateModelValue" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler" @keyup="keyupHandler" @keydown="keydownHandler" @cut="cutHandler" @copy="copyHandler" @paste="pasteHandler"></textarea><label :for="name + '-textarea'">{{label}}</label></div>`
};

const labelSelect = {
	props: {
    modelValue: String, // https://vuejs.org/guide/components/events.html#usage-with-v-model
    name: String,
		label: String,
    value: String,
    classes: String,
    title: String,
    size: String,
    tabIndex: Number,
    hidden: Boolean,
    items: Array,
    itemIndex: Number,
    disabled: Boolean,
    changeHandler: Function,
    focusHandler: Function,
    blurHandler: Function,
    clickHandler: Function,
    dblclickHandler: Function,
    mousedownHandler: Function,
    mouseupHandler: Function,
    mousemoveHandler: Function,
    mouseenterHandler: Function,
    mouseleaveHandler: Function,
    contextmenuHandler: Function
	},
	mounted: function () {

	},
	methods: {
		// Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
		updateModelValue: function (event) {
			// https://vuejs.org/guide/components/events.html#usage-with-v-model
			this.$emit('update:modelValue', event.target.value);
		}
	},
	template: `<div :id="name" v-show="!hidden" :class="[classes, 'form-floating']"><select :id="name + '-select'" :tabindex="tabIndex" :class="['form-select w-100 h-100', 'form-select-' + size]" :title="title" :disabled="disabled" @input="updateModelValue" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler"><option :selected="index === itemIndex" v-for="(item, index) in items" :data-index="index">{{item}}</option></select><label :for="name + '-select'">{{label}}</label></div>`
};

const labelSelectEx = {
	props: {
    modelValue: String | Object, // https://vuejs.org/guide/components/events.html#usage-with-v-model
    value: String | Object,
    name: String,
		  label: String,
    classes: String,
    title: String,
    size: String,
    tabIndex: Number,
    hidden: Boolean,
    items: Array,
    itemIndex: Number,
    disabled: Boolean,
    changeHandler: Function,
    focusHandler: Function,
    blurHandler: Function,
    clickHandler: Function,
    dblclickHandler: Function,
    mousedownHandler: Function,
    mouseupHandler: Function,
    mousemoveHandler: Function,
    mouseenterHandler: Function,
    mouseleaveHandler: Function,
    contextmenuHandler: Function
	},
	mounted: function () {

	},
	methods: {
		// Don't use arrow functions in components methods!!!! => https://stackoverflow.com/a/43073924
		updateModelValue: function (event) {
			// https://vuejs.org/guide/components/events.html#usage-with-v-model
			this.$emit('update:modelValue', event.target.value);
		}
	},
	template: `<div :id="name" v-show="!hidden" :class="[classes, 'form-floating']"><select :id="name + '-select'" :tabindex="tabIndex" :class="['form-select w-100 h-100', 'form-select-' + size]" :title="title" :disabled="disabled" @input="updateModelValue" @change="changeHandler" @focus="focusHandler" @blur="blurHandler" @click="clickHandler" @dblclick="dblclickHandler" @mousedown="mousedownHandler" @mouseup="mouseupHandler" @mousemove="mousemoveHandler" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @contextmenu="contextmenuHandler"><option :selected="index === itemIndex" v-for="(item, index) in items" :data-index="index">{{item.text}}</option></select><label :for="name + '-select'">{{label}}</label></div>`
};


