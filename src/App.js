import './App.scss';
import './styles/links.scss';
import './styles/buttons.scss';
import Logo from './styles/images/logo.svg';
import LightSun from './styles/images/light-sun.svg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="logo-wrapper">
            <a href='/'>
              <img src={Logo} alt="logo" />
            </a>
          </div>

          <div className="buttons-wrapper">
            <div className="links-wrapper">
              <a href='www.google.com' className='pp-link-menu-light'>Sobre mim</a>
              <a href='www.google.com' className='pp-link-menu-light'>Portfólio</a>
              <a href='www.google.com' className='pp-link-menu-light'>Contato</a>
            </div>
            <div className="social-wrapper">
              <a href='www.google.com'>
                <img src={LightSun} alt="light-sun" />
              </a>
              <a className='pp-button-light' href='/styles/docs/curriculum.pdf' download>Baixar CV</a>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
