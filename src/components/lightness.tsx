import React, { useState } from 'react'

export function Lightness() {
  const [lightness, setLightness] = useState(50)

  function _lightnessRangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderLightness = event.target.value

    setLightness(Number(sliderLightness))
  }
  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={lightness}
      onInput={_lightnessRangeInput}
    />
  )
}
