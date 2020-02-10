import { LightningElement, api } from 'lwc'

export default class Badge extends LightningElement {
  @api label = 'Example Badge Label'
  @api base = false
  @api icon = false
  @api inverse = false
  @api positive = false
  @api negative = false
  @api warning = false
  @api reverse = false
  @api assistive = false
}
