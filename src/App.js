import './App.css';
import { useSpring, animated } from 'react-spring';
import ad from './assets/ad.jpg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 + 0.5}px,${y / 11 - 0.5}px,0)`;

function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="App">
      <div className="container">
        <div className="header" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <div className="menu">
            <div className="item"> LE COTÉ LUMINEUX </div>
            <div className="item"> LE COTÉ OBSCUR </div>
            <div className="item"> L’EMPIRE </div>
            <div className="item"> LES DROÏDES </div>
            <div className="item"> LES EWOKS </div>
            <div className="item"> JABBA LE HUTT </div>
          </div>
          <animated.div class="logo" style={{ transform: props.xy.interpolate(trans1) }} />
        </div>

        <div className="content">
          <div className="text">
            <h3>Star Wars, The Force Awakens</h3>
            <p> Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». </p>
            <p> Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie. </p>
            <p> Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». </p>
            <p> Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie. </p>
            <p> Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». </p>
            <p> Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie. </p>
          </div>
          <div className="ad">
            <img src={ad} alt="star wars"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
