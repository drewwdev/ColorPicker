import React, { useState } from 'react'

export function Saturation() {
  const [saturation, setSaturation] = useState(50)

  function _saturationRangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderSaturation = event.target.value

    setSaturation(Number(sliderSaturation))
  }
  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={saturation}
      onInput={_saturationRangeInput}
    />
  )
}
