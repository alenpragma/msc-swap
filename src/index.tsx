import 'inter-ui'
import { ResetCSS } from 'msc-uikit'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import App from './pages/App'
import Providers from './Providers'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import GlobalStyle from './style/Global'

if ('ethereum' in window) {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
  localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
      </>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
