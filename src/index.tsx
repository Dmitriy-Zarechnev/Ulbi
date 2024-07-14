import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {StoreProvider} from 'app/providers/storeProvider'
import {ThemeProvider} from 'app/providers/themeProvider'
import 'app/styles/index.scss'

import './shared/config/i18n/i18n'
import {ErrorBoundary} from 'app/providers/errorBoundary'


const container = document.getElementById('root')
const root = createRoot(container)


root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)

