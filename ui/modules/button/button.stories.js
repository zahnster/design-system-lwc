import buildAndRegisterCustomElement from '../../../.storybook/utils/build-custom-element'
import Button from 'c/button'
import docs from './button.mdx'

buildAndRegisterCustomElement('c-button', Button)

export default {
  title: 'LWC/Button',
  parameters: docs.parameters
}

export const withText = () =>
  '<c-button label="wow this is a real lwc component"></c-button>'
