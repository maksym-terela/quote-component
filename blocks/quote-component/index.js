import './editor.scss';
import './style.scss';
import edit from './edit';
import save from './save';
import icon from './icon';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
	'testimonials/extendedblock',
	{
		title: __('Custom Quote Block', '_qc'),
		description: __('About custom quote block functionality', '_qc'),
		category: 'common',
		icon: icon,
		keywords: [
			__( 'Quote', '_qc' ),
			__( 'Editable Fields', '_qc' ),

		],
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			authorTitle:{
				type: 'array',
				source: 'children',
				selector: 'h6',
			},
			imgURL: {
				type: 'string',
				source: 'attribute',
				attribute: 'src',
				selector: 'img',
			},
			imgID: {
				type: 'number',
			},
			imgAlt: {
				type: 'string',
				source: 'attribute',
				attribute: 'alt',
				selector: 'img',
			},
			textAlignment: {
				type: 'string'
			},
			blockAlignment: {
				type: 'string',
				default: 'wide',
			},
			colorPalette: {
				type: "string",
				default: "#ffff"
			},
			textPalette: {
				type: "string",
				default: "#173e9e"
			},
		},
		getEditWrapperProps( { blockAlignment } ) {
			if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
				return { 'data-align': blockAlignment };
			}
		},
		edit,
		save,
	},

);