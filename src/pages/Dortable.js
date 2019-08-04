import * as React from 'react';
import styled from 'styled-components';
import img1 from '../img/dortable-1.png';
import img2 from '../img/dortable-2.png';
import img3 from '../img/dortable-3.png';
import img4 from '../img/dortable-4.png';
import img5 from '../img/dortable-5.png';
import img6 from '../img/dortable-6.png';
import img7 from '../img/dortable-7.png';
import img8 from '../img/dortable-8.png';
import img9 from '../img/dortable-9.png';
import img10 from '../img/dortable-10.png';
import img11 from '../img/dortable-11.png';

const Text = styled.div`
  max-width: 920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: ${({ white }) => white && 'white' || 'black'};
  transition: color 0.3s;
  padding: 0 10px;
  padding-top: ${({ marginTop }) => marginTop && `${marginTop}px` || '0'};
  & > p {
    font-family: 'Merriweather', serif;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
  &.cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -3;
  }
`;

const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent 0px, white 100px);
  z-index: -2;
  height: ${({ marginTop }) => marginTop && `calc(100% + 100px - ${marginTop}px)` || '100%'};
  margin-top: ${({ marginTop }) => marginTop && `${marginTop - 100}px` || '0'};
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #2e2b31;
  transform: ${({ cover }) => cover === 'normal' && 'translateY(0)'
    || cover === 'up' && ' translateY(-100%)'
    || 'translateY(100%)'};
  transition: transform 0.3s;
  /* transform: scaleY(0); */
`;

const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Merriweather', serif;
`;

const Header = styled.h2`
  font-family: 'Merriweather', serif;
`;

class Dortable extends React.Component {

  constructor(props) {
    super(props);

    this.coverRef = React.createRef();
    this.startDarkThemeRef = React.createRef();
    this.endDarkThemeRef = React.createRef();
  }

  state = {
    coverImageHeight: 0,
    blackCover: 'down',
    isImagesLoaded: false,
    startDarkThemePos: 0,
    endDarkThemePos: 0
  };

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler);
  };

  onDarkThemeImageLoaded = () => {
    const { isImagesLoaded } = this.state;
    if (!isImagesLoaded) {
      return this.setState({ isImagesLoaded: true });
    }

    const startDarkThemeImg = this.startDarkThemeRef.current;
    const endDarkThemeImg = this.endDarkThemeRef.current;
    if (!startDarkThemeImg || !endDarkThemeImg) {
      return;
    }

    this.setState({
      startDarkThemePos: startDarkThemeImg.getBoundingClientRect().top + window.pageYOffset - 3 * window.innerHeight / 4,
      endDarkThemePos: endDarkThemeImg.getBoundingClientRect().bottom + window.pageYOffset - 3 * window.innerHeight / 4,
    });
    window.addEventListener('scroll', this.scrollHandler);
  };

  onCoverLoad = () => {
    const coverImage = this.coverRef.current;
    if (!coverImage) {
      return;
    }

    this.setState({
      coverImageHeight: coverImage.clientHeight
    });
  };

  scrollHandler = () => {
    const yPos = window.pageYOffset;
    const { startDarkThemePos, endDarkThemePos, blackCover } = this.state;
    console.log({ yPos, startDarkThemePos, endDarkThemePos, blackCover });
    let newBlackCover = '';
    if (yPos < startDarkThemePos && blackCover !== 'down') {
      newBlackCover = 'down';
    } else if (yPos > startDarkThemePos && yPos < endDarkThemePos && blackCover !== 'normal') {
      newBlackCover = 'normal';
    } else if (yPos > endDarkThemePos && blackCover !== 'up') {
      newBlackCover = 'up';
    } else {
      return;
    }
    this.setState({ blackCover: newBlackCover });
  };

  // darkThemeHandler = () => {
  //   this.setState(prevState => {
  //     let newState = '';
  //     if (prevState.blackCover === 'down') {
  //       newState = 'normal';
  //     } else if (prevState.blackCover === 'normal') {
  //       newState = 'up';
  //     } else if (prevState.blackCover === 'up') {
  //       newState = 'down';
  //     } else {
  //       return;
  //     }
  //     return { blackCover: newState };
  //   });
  // }

  render () {
    const { coverImageHeight, blackCover } = this.state;
    return (
      <div style={ { position: 'relative' } }>
        <MainBackground marginTop={ coverImageHeight } />
        <Background cover={ blackCover } />
        <Image src={ img1 } ref={ this.coverRef } onLoad={ this.onCoverLoad } className="cover" />
        <Text white={ blackCover === 'normal' } marginTop={ coverImageHeight } >
          <Title>DOR Table</Title>
          <p><i>Задача. Сделать приложение для HR-менеджеров, которое заменит Excel.</i></p>
          <p>
            HR-агенты используют таблицы. Много таблиц. Таблицы с работниками, таблицы с задачами, с ролями, правилами и много много всего. Сейчас они используют Excel для этого. DOR Table объединит все эти таблицы в одно приложение, свяжет все сущности воедино.
          </p>
          <p>
            Для написания приложения использовался Electron, который позволяет писать веб приложения, а компилировать нативные под все платформы (Windows, Linux, macOS). Из библиотек выбрали React, Redux, для стилей styled components (CSS-in-JS). Для типизации использовали Flow. Для поиска возможных ошибок - ESLint.
          </p>
          <p>
            Все началось с шаблона. Мы постепенно стали разбираться, как настроить его под себя, куда добавить свои компоненты и как их организовать.
          </p>
          <p>
            Структурировать файлы было решено по немного измененному фрактальному подходу (https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).
          </p>
          <Header>Функционал приложения</Header>
          <Image src={ img2 } onClick={ this.darkThemeHandler } />
          <p>
            В приложении есть восемь сущностей, для каждой своя таблица. Все таблицы связаны. Например, в таблице Правила мы можем указать, что Роль директор может создавать Процессы в компании.
          </p>
          <p>
            Важная часть - поиск. Он помогает ориентироваться в большом объеме информации. Поиск бывает как текстовый, так и по фильтрам.
          </p>
          <Image src={ img3 } />
          <p>
            Также вся история таблиц сохраняется, ее можно просмотреть, выбрав дату на панели слева:
          </p>
          <Image src={ img4 } />
          <p>
            В приложении есть и темная тема:
          </p>
          <Image src={ img5 } ref={ this.startDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
          <p>
            Почти все ячейки, кроме системных можно отредактировать
          </p>
          <Image src={ img6 } />
          <p>
            А также прокомментировать
          </p>
          <Image src={ img7 } ref={ this.endDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
          <p>
            Можно посмотреть сразу все изменения по строке
          </p>
          <Image src={ img8 } />
          <p>
            Вот так добавляется новая строка
          </p>
          <Image src={ img9 } />
          <p>
            С валидацией
          </p>
          <Image src={ img10 } />
          <p>
            Много кода…
          </p>
          <Image src={ img11 } />
          <p>
            Приложение было написано в течение полугода, была исправлена куча багов, производительность улучшалась несколько десятков раз, весь функционал был добавлен с нуля.
          </p>
          <Header>Спасибо за внимание!</Header>
        </Text>
      </div>
    );
  }

};

export default Dortable