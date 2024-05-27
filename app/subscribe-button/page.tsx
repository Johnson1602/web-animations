'use client'

import { useState } from 'react'
import { DemoWrapper, ActionButton } from '@/components'
import { BUTTON_STATE } from '@/constants'
import type { ButtonState } from '@/types'

export default function SubscribeButtonPage() {
  const [buttonState, setButtonState] = useState<ButtonState>(BUTTON_STATE.IDLE)

  async function onButtonClick() {
    setButtonState(BUTTON_STATE.LOADING)

    // Simulate a network request
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setButtonState(BUTTON_STATE.SUCCESS)
    } catch {
      setButtonState(BUTTON_STATE.ERROR)
    }

    // Reset the button state after 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setButtonState(BUTTON_STATE.IDLE)
  }

  return (
    <DemoWrapper className='demo-subscribe-button'>
      <ActionButton
        buttonState={buttonState}
        initialText='Subscribe'
        successText={`You're in! 🎉`}
        errorText='Oops! Try again.'
        onClick={onButtonClick}
      />
    </DemoWrapper>
  )
}
