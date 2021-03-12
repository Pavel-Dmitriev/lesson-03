import block from 'bem-cn'
import React from 'react'
import cyberpunk from '../../assets/img/cyberpunk.svg'
import './Header.css'
// import '../../assets/styles/main.css'

const h = block('header')
const s = block('social')

export const Header = () => (
  <header className={h()}>
    <div className={h('container').mix('container')}>
      <a href="#" className={h('logo')}>
        <img src={cyberpunk} alt="Киберпанк логотип" />
      </a>
      <ul className={s()}>
        <li className={s('item')}><a href="" className={s('link', { youtube : true })} aria-label="Киберпанк на Ютубе"></a></li>
        <li className={s('item')}><a href="" className={s('link', { vk: true })} aria-label="Киберпанк во Вконтакте"></a></li>
        <li className={s('item')}><a href="" className={s('link', { facebook: true })} aria-label="Киберпанк на Фейсбуке"></a></li>
        <li className={s('item')}><a href="" className={s('link', { twitter: true })} aria-label="Киберпанк в Твиттере"></a></li>
        <li className={s('item')}><a href="" className={s('link', { twitch: true })} aria-label="Киберпанк на Твиче"></a></li>
        <li className={s('item')}><a href="" className={s('link', { instagram: true })} aria-label="Киберпанк в Инстаграме"></a></li>
      </ul>
      {/* <span className={b('title')}>
      Application title
    </span> */}
    </div>
  </header>
)
