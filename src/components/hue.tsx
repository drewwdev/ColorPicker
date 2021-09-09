import React, { useState } from 'react'

export function Hue() {
  const [hue, setHue] = useState(180)

  function _hueRangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderHue = event.target.value

    setHue(Number(sliderHue))
  }
  return (
    <input
      type="range"
      min="0"
      max="360"
      step="1"
      value={hue}
      onInput={_hueRangeInput}
    />
  )
}
