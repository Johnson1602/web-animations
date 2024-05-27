import { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { ActionButton } from '@/components'
import { BUTTON_STATE } from '@/constants'
import type { ButtonState } from '@/types'

interface FormProps {
  placeholder: string
  closePopover: () => void
}

export function Form(props: FormProps): JSX.Element {
  const { placeholder, closePopover } = props

  const [formState, setFormState] = useState<ButtonState>(BUTTON_STATE.IDLE)
  const [feedbackContent, setFeedbackContent] = useState('')
  const [isShowPlaceholder, setIsShowPlaceholder] = useState(true)

  async function handleSubmit() {
    setFormState(BUTTON_STATE.LOADING)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setFormState(BUTTON_STATE.SUCCESS)

      setTimeout(() => {
        closePopover()
      }, 2000)
    } catch {
      setFormState(BUTTON_STATE.ERROR)
      setTimeout(() => setFormState(BUTTON_STATE.IDLE), 2000)
    }
  }

  return (
    <Fragment>
      <motion.span
        className={classNames('form__placeholder', {
          'form__placeholder--hide': !isShowPlaceholder,
        })}
        layoutId='placeholder'
      >
        {placeholder}
      </motion.span>

      <AnimatePresence mode='popLayout'>
        {formState === BUTTON_STATE.SUCCESS ? (
          <motion.div
            key='success'
            className='feedback__success'
            initial={{ y: -32, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.4,
            }}
          >
            <p>Feedback received, you rock! 🎸</p>
          </motion.div>
        ) : (
          <motion.form
            key='form'
            className='feedback__form'
            exit={{ y: 8, opacity: 0, filter: 'blur(4px)' }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.4,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='form__input'>
              <textarea
                className='form__textarea'
                onChange={(e) => setFeedbackContent(e.target.value)}
                onFocus={() => setIsShowPlaceholder(false)}
                onBlur={() => !feedbackContent && setIsShowPlaceholder(true)}
                style={{ borderRadius: 10 }}
              />
            </div>

            <ActionButton
              className='form__submit'
              buttonState={formState}
              initialText='Submit'
              successText={`Got it, thanks! 📣`}
              errorText='Oops! Try again.'
              onClick={handleSubmit}
            />
          </motion.form>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
