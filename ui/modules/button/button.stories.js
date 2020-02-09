import buildAndRegisterCustomElement from '../../../.storybook/utils/build-custom-element'
import Button from 'c/button'
import docs from './button.mdx'

import '../../shared/missing-common.css'

buildAndRegisterCustomElement('c-button', Button)

export default {
  title: 'LWC/Button',
  parameters: docs.parameters
}

export const Base = () => '<c-button label="Base Button"></c-button>'

export const Brand = () =>
  '<c-button variant="brand" label="Brand Button"></c-button>'
