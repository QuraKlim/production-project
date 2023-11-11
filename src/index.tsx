import { render } from 'react-dom'
import { App } from './app/App'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProviders'

import 'shared/config/i18n/i18n'

render(
  <div>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
)
