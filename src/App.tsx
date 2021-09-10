import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 361))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 101))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 101))

  const newBackgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  function _hueSlider(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderHue = event.target.value

    setHue(Number(sliderHue))
  }
  function _lightnessSlider(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderLightness = event.target.value

    setLightness(Number(sliderLightness))
  }
  function _saturationSlider(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const sliderSaturation = event.target.value

    setSaturation(Number(sliderSaturation))
  }
  function _buttonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
  }
  return (
    <div>
      <main>
        <aside>
          Color
          <div className="colorpreview" style={newStyle}></div>
        </aside>
        <div className="sliders">
          <div>
            H
            <div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={hue}
                onInput={_hueSlider}
              />
              {hue}
            </div>
          </div>
          <div>
            S
            <div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={lightness}
                onInput={_lightnessSlider}
              />
              {lightness}%
            </div>
          </div>
          <div>
            L
            <div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={saturation}
                onInput={_saturationSlider}
              />
              {saturation}%
            </div>
          </div>
          <button onClick={_buttonClick}>Randomize</button>
        </div>
      </main>
    </div>
  )
}
