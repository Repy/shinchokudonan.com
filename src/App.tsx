import { } from 'react'
import { TopPage } from './pages/TopPage'

export function App() {

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>進捗どうなん.com</h1>
          </a>
        </div>
        {/*         
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  今すぐ始める
                </a>
              </div>
            </div>
          </div>
        </div>
        */}
      </nav>
      <div className="container is-max-desktop">
        <TopPage />
      </div>
    </>
  )
}
