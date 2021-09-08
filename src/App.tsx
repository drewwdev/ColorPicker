import React from 'react'
export function App() {
  return (
    <div>
      <main>
        <aside>
          Color
          <div className="colorpreview"></div>
        </aside>
        <div className="sliders">
          <div className="hue">
            H <input type="range" />
          </div>
          <div className="saturation">
            S <input type="range" />
          </div>
          <div className="lightness">
            L
            <input type="range" />
          </div>
          <div className="alpha">
            A
            <input type="range" />
          </div>
        </div>
      </main>
    </div>
  )
}
