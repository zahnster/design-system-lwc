import buildAndRegisterCustomElement from '../../../.storybook/utils/build-custom-element'
import Badge from 'c/badge'
import docs from './badge.mdx'

buildAndRegisterCustomElement('c-badge', Badge)

export default {
  title: 'LWC/Badge',
  parameters: docs.parameters
}

export const Base = () =>
  '<c-badge base="true" label="423 Credits Available"></c-badge>'

export const WithIcon = () =>
  '<c-badge icon="true" label="423 Credits Available"></c-badge>'

export const Inverse = () =>
  '<c-badge inverse="true" label="423 Credits Available"></c-badge>'

export const Positive = () =>
  '<c-badge positive="true" label="423 Credits Available"></c-badge>'

export const Negative = () =>
  '<c-badge negative="true" label="423 Credits Available"></c-badge>'

export const Warning = () =>
  '<c-badge warning="true" label="423 Credits Available"></c-badge>'

export const Reverse = () =>
  '<c-badge reverse="true" label="423 Credits Available"></c-badge>'

export const AssistiveText = () =>
  '<c-badge assistive="true" label="423 Credits Available"></c-badge>'
