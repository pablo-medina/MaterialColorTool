import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import App from './app'
import { TranslatorProvider } from './providers/translatorProvider'
import ProviderChain from './providers/providerChain'
import { PropertiesProvider } from './providers/propertiesProvider'
import { ThemeProvider } from './providers/themeProvider'

ReactDOM.render(
  <ProviderChain providers={
    [
      <PropertiesProvider />,
      <TranslatorProvider />,
      <ThemeProvider />
    ]}>
    <App navbar={
      {
        location: 'left',
        showLabels: true
      }
    } />
  </ ProviderChain>
  ,
  document.getElementById('root')
)
