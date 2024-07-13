import Carousel from 'react-bootstrap/Carousel';
import Mult from '../Components/Multy.jpg'
import Nonekr from '../Components/Nkr.jpg'
import Copter from '../Components/Helic.jpg'
export function Carusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Mult }
          alt="Multy"
        />
        <Carousel.Caption>
          <h5>Мультироторные – мультикоптерные дроны</h5>
          <p>В полете дрон держит горизонтальное положение относительно поверхности земли и может зависать над определенным местом, перемещаться влево, вправо, вперед, назад, вверх и вниз, а так же, поворачиваться вокруг своей оси. Все действия совершаются путем изменения тяги на каждом моторе.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Nonekr }
          alt="Non"
        />
        <Carousel.Caption>
          <h5>Беспилотники с неподвижным крылом</h5>
          <p>Для полета, и создания подъемной силы они используют "крыло", как его используют обычные самолеты. Эти беспилотники не могут зависать на месте в воздухе, борясь с гравитацией.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Copter }
          alt="Cop"
        />
        <Carousel.Caption>
          <h5>Однороторный дрон – беспилотный вертолет</h5>
          <p>
          Однороторные дроны очень похожи по конструкции и на настоящие вертолеты. В отличие от многороторного дрона, у одноготорного дрона есть один большой ведущий винт плюс небольшой по размеру винт на хвосте, чтобы контролировать курс.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

