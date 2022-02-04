import * as React from 'react'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

type Props = {
  style: React.CSSProperties
  containerStyle: React.CSSProperties
  className: string
  containerClassName: string
}

const ReactLoggy: React.FC<Props> = ({
  style,
  className,
  containerStyle,
  containerClassName
}) => {
  const [showLogs, setShowLogs] = React.useState(false)

  const newConsole = (oldConsole: Console): Console => {
    if (typeof window !== 'undefined') {
      const container = document.getElementById('react-loggy-container')
      if (!container) {
        return oldConsole
      }
      return {
        ...oldConsole,
        log(text: String) {
          oldConsole.log(text)
          container.innerHTML = `
          <div style="padding:10px;background-color:#fff;border-radius:10px;margin-bottom:10px;">
          ${text}
          </div>
          `
        },
        warn(text: String) {
          oldConsole.warn(text)
          container.innerHTML += `
          <div style="padding:10px;background-color:rgba(255, 178, 23,0.6);border-radius:10px;margin-bottom:10px;">
          ${text}
          </div>
          `
        },
        error(text: String) {
          oldConsole.error(text)
          container.innerHTML += `
          <div style="padding:10px;background-color:rgba(255, 0, 0,0.6);border-radius:10px;margin-bottom:10px;color:white">
          ${text}
          </div>
          `
        }
      }
    }

    return oldConsole
  }

  React.useEffect(() => {
    window.console = newConsole(window.console)
  }, [])

  return (
    <div>
      <button
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          color: '#fff',
          ...style
        }}
        className={className}
        onClick={() => setShowLogs((prev) => !prev)}
      >
        Logs
      </button>
      <Drawer
        direction='bottom'
        onClose={() => setShowLogs(false)}
        open={showLogs}
      >
        <div
          id='react-loggy-container'
          className={containerClassName}
          style={{
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            top: 0,
            left: 0,
            zIndex: showLogs ? 9990 : -1,
            backgroundColor: '#e3e3e3',
            overflowY: 'auto',
            padding: 20,
            direction: 'ltr',
            ...containerStyle
          }}
        />
      </Drawer>
    </div>
  )
}

export default ReactLoggy
