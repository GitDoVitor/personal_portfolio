import './App.scss';
import './styles/links.scss';
import './styles/buttons.scss';
import Logo from './styles/images/logo.svg';
import LightSun from './styles/images/light-sun.svg';
import MyPhoto from './styles/images/IMG_20230218_145511_076 (1).webp';
import PinMap from './styles/images/pin-map.svg';

const urlDownload = "https://drive.google.com/uc?export=download&id=1oDfoE3KgVX-P-nelLQi9T9Y6TLUe4M16"

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-wrapper">
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
              <a
                className='pp-button-light'
                href={urlDownload}>
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div className="body-wrapper">
          <div className="text-wrapper">
            <span className='pp-h1'>Olá, eu sou o Vitor ✌</span>
            <p>
            Engenheiro de software apaixonado por Ciência de Dados. Possuo habilidades em desenvolvimento full stack focado em plataformas low-code. Atualmente estou buscando novas oportunidades para aplicar meus conhecimentos em projetos analíticos desafiadores.
            </p>
            <div className='card-wrapper'>
              <div className='location'>
                <img src={PinMap} alt="pin-map" />
                <span className='pp-body-b'>Foz do Iguaçu, Paraná</span>
              </div>
              <div className='available'>
                <div className='dot-wrapper'>
                  <div className='green-dot'></div>
                </div>
                <span className='pp-body-b'>Disponível para novos projetos</span>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={MyPhoto} alt="foto" className='pp-my-photo' />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
