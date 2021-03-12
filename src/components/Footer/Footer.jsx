import block from 'bem-cn'
import React from 'react'
import './Footer.css'
import cyberpunk from '../../assets/img/cyberpunk.svg'
import CD_Projekt from '../../assets/img/CD_Projekt_logo.svg'

const f = block('footer')

export const Footer = () => (
  <footer className={f()}>
    <div className={f('container').mix('container')}>
      <div className={f('left')}>
        <a href="#" className={f('logo')}>
          <img src={cyberpunk} alt="Киберпанк логотип" />
        </a>
        <a href="#" className={f('logo')}>
          <img src={CD_Projekt} alt="Логотип CD Projekt Red" />
        </a>
      </div>
      <div className={f('right')}>
        <a href="#" className={f('link')}>Лицензия</a>
        <a href="#" className={f('link')}>Политика конфиденциальности</a>
      </div>
    </div>
    <div className={f('bottom')}>
      <small className="copyright">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</small>
    </div>
  </footer>
)
