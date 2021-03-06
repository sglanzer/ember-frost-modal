import Ember from 'ember'
const { A, run } = Ember
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook,
  initialize as initializeHook
} from 'ember-hook'
import { beforeEach, describe } from 'mocha'

describeComponent(
  'frost-modal-error-message',
  'Integration: FrostModalErrorMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initializeHook()
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('things', A([]))
      const things = this.get('things')
      while (this.get('things').length < 50) {
        things.addObject(`Thing ${things.length + 1}`)
      }
      run(() => {
        this.set('isModalVisible', true)

        this.render(hbs`
          {{frost-modal-outlet}}
          {{frost-modal-error-message
            buttons=buttons
            confirm=(hash
              isVisible=false
            )
            details=(component 'list-em' things=things)
            footer=footer
            hook='error-dialog'
            isVisible=isModalVisible
            subtitle=subtitle
            summary='Are you familiar with the old robot saying?'
            title='"Does not compute"'
            onClose=(action closeModal)
          }}`
        )
      })
    })

    it('renders', function (done) {
      this.$('.frost-modal-outlet-container.message').ready(() => {
        return capture('error-dialog', {
          targetElement: this.$('.frost-modal-outlet-container.message')[0],
          experimentalSvgs: true
        }).then(() => {
          done()
        }).catch((err) => {
          done(err)
        })
      })
    })

    it('closes on cancel', function () {
      $hook('error-dialog-modal-cancel').click()

      expect($hook('error-dialog-modal'), 'Is modal hidden')
          .to.have.length(0)
    })

    describe('when subtitle present', function () {
      beforeEach(function () {
        this.set('subtitle', 'Foo bar')
      })

      it('renders subtitle', function () {
        const $subtitle = this.$('.frost-modal-dialog-header-subtitle')
        expect($subtitle).to.have.length(1)
        expect($subtitle.text()).to.equal('Foo bar')
      })
    })

    describe('when subtitle not present', function () {
      beforeEach(function () {
        this.set('subtitle', undefined)
      })

      it('does not render subtitle DOM', function () {
        expect(this.$('.frost-modal-dialog-header-subtitle')).to.have.length(0)
      })
    })

    describe('when footer text present', function () {
      beforeEach(function () {
        this.set('footer', 'Foo bar')
      })

      it('renders footer text', function () {
        const $footer = this.$('.frost-modal-dialog-footer-text')
        expect($footer).to.have.length(1)
        expect($footer.text()).to.equal('Foo bar')
      })
    })

    describe('when footer text not present', function () {
      beforeEach(function () {
        this.set('footer', undefined)
      })

      it('does not render footer text DOM', function () {
        expect(this.$('.frost-modal-dialog-footer-text')).to.have.length(0)
      })
    })

    describe('when buttons present', function () {
      beforeEach(function () {
        this.set('buttons', [
          {
            priority: 'secondary',
            text: 'Foo'
          },
          {
            priority: 'secondary',
            text: 'Bar'
          }
        ])
      })

      it('renders custom buttons plus cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(4)
      })
    })

    describe('when buttons not present', function () {
      beforeEach(function () {
        this.set('buttons', undefined)
      })

      it('only renders cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(2)
      })
    })
  }
)
