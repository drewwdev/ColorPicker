import React from 'react'
import { Hue } from './components/hue'
import { Saturation } from './components/saturation'
import { Lightness } from './components/lightness'

export function App() {
  return (
    <div>
      <main>
        <aside>
          Color
          <div className="colorpreview"></div>
        </aside>
        <div className="sliders">
          <div>
            H <Hue />
          </div>
          <div>
            S <Saturation />
          </div>
          <div>
            L <Lightness />
          </div>
        </div>
      </main>
    </div>
  )
}
