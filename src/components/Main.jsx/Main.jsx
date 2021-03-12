import block from 'bem-cn'
import React from 'react'
import './Main.css'
import aboutImage1 from '../../assets/img/about-image-1.jpg'
import aboutImage2 from '../../assets/img/about-image-2.jpg'
import aboutImage3 from '../../assets/img/about-image-3.jpg'
import monitor from '../../assets/img/monitor-hp.jpg'
import HP from '../../assets/img/hp-logo.svg'
import cyberpunk from '../../assets/img/cyberpunk.svg'
import covers from '../../assets/img/covers.jpg'
import pc from '../../assets/img/pc.svg'
import xbox from '../../assets/img/xbox.svg'
import stadia from '../../assets/img/stadia.svg'
import ps4 from '../../assets/img/ps4.svg'

const h = block('hero')
const a = block('about')
const hp = block('hp')
const b = block('buy')
const p = block('platforms-list')

export const Main = () => (
  <main className="main">
    {/* Секция с фоновым изображением */}
    <section className={h()}>
      <div className={h('container').mix('container')}>
        <div className={h('info').mix('corner-block')}>
          <h2 className={h('title')}>Доступно на всех платформах</h2>
          <button className={h('btn').mix('btn-reset')}>Узнать больше</button>
        </div>
      </div>
    </section>
    <div className="container">
      <section className={a()}>
        <h2 className={a('title')}>Найт-Сити изменит тебя навсегда!</h2>
        <p className={a('description')}>
          <span className={a('description', { highlighted: true }).mix({})}>Cyberpunk 2077</span> &nbsp;&mdash; приключенческая ролевая игра, действие которой происходит в&nbsp;мегаполисе Найт-Сити, где власть, роскошь и&nbsp;модификации тела ценятся выше всего. Ты&nbsp;играешь за&nbsp;V, наёмника в&nbsp;поисках устройства, позволяющего обрести бессмертие. Ты&nbsp;сможешь менять киберимпланты, навыки и&nbsp;стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на&nbsp;ход сюжета и&nbsp;всё, что тебя окружает.
      </p>
        <div className={a('images')}>

          <div className={a('left')}>
            <div className={a('image').mix('corner-block')}>
              <img src={aboutImage1} alt="Найт-Сити-1" />
            </div>
            <div className={a('image').mix('corner-block')}>
              <img src={aboutImage2} alt="Найт-Сити-2" />
            </div>
          </div>
          <div className={a('right').mix('corner-block')}>
            <img src={aboutImage3} alt="Найт-Сити-2" />
          </div>
        </div>

      </section>
    </div>
    {/*Секция-  Погружение вместе с HP */}
    <section className={hp()}>
      <div className={hp('container').mix('container')}>
        <div className={hp('left')}>
          <img className={hp('image')} src={monitor} alt="Монитор HP" />
          <div className={hp('logos')}>
            <a href="#">
              <img src={HP} alt="логотип HP" />
            </a>
            <a href="#">
              <img src={cyberpunk} alt="Киберпанк логотип" />
            </a>
          </div>
        </div>
        <div className={hp('right')}>
          <h2 className={hp('title')}>Полное погружение вместе с HP</h2>
          <p className={hp('description')}>
            Погрузись в&nbsp;современные экшен-игры с&nbsp;реалистичным изображением с&nbsp;помощью монитора с&nbsp;диагональю 23,8&nbsp;дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на&nbsp;любые события с&nbsp;временем отклика 1&nbsp;мс и&nbsp;частотой в&nbsp;144&nbsp;Гц!
          </p>
          <ul className={hp('list')}>
            <li className={hp('item').mix('paint')}>Яркие насыщенные цвета</li>
            <li className={hp('item').mix('stars')}>Кристальная четкость изображения</li>
            <li className={hp('item').mix('moves')}>Быстрые движения и плавный геймплей</li>
          </ul>
          <button className={hp('btn').mix('btn-reset')}>Подробнее</button>
        </div>
      </div>
    </section>
    {/*Секция -  Купить игру Киберпанк */}
    <section className={b()}>
      <picture>
        <img className={b('image')} src={covers} alt="Обложки игры Киберпанк" aria-hidden="true" />
      </picture>
      <div className={b('container').mix('container')}>
        <div className={b('content')}>
          <h2 className={b('title')}>Купить игру Cyberpunk 2077</h2>
          <p className={b('subtitle')}>В комплект входит:</p>
          <ul className={b('list')}>
            <li className={b('item').mix('circle')}>Футляр с игровыми дисками</li>
            <li className={b('item').mix('comments')}>Футляр с кодом для загрузки игры и дисками (pc)</li>
            <li className={b('item').mix('images')}>Справочник с информацией об игровом мире</li>
          </ul>
          <p className={b('subtitle')}>Выберите платформу:</p>
          <ul className={p()}>
            <li className={p('item')}>
              <a href="#" className={p('list')}>
                <img src={pc} alt="PC" />
              </a>
            </li>
            <li className={p('item')}>
              <a href="#" className={p('list')}>
                <img src={stadia} alt="Stadia" />
              </a>
            </li>
            <li className={p('item')}>
              <a href="#" className={p('list')}>
                <img src={xbox} alt="Xbox" />
              </a>
            </li>
            <li className={p('item')}>
              <a href="#" className={p('list')}>
                <img src={ps4} alt="Sony Playstation 4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
)
