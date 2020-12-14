import './App.css';
import { useSpring, animated } from 'react-spring';
import ad from './assets/ad.jpg';
import kiloren from './assets/kiloren.png';
import r2c3 from './assets/r2d2_c3p0.jpg';
import storm from './assets/stormtroopers.jpg';
import facebook from './assets/icon_facebook.png';
import twitter from './assets/icon_twitter.png';
import instagram from './assets/icon_instagram.png';

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
        <img className="kiloren" src={kiloren} alt="kiloren" />
        <div className="article">
          <h1 className="title">A long time ago, in a galaxy far, far away…</h1>
          <img className="article-picture" src={r2c3} alt="r2d2 and C3p0" />
          <p> <strong><em>La Guerre des étoiles</em></strong> (titre original <strong><em>Star Wars</em></strong>, soit littéralement <em>Guerres Stellaires</em> ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (<strong><em>l'Épisode IV - Un nouvel espoir</em></strong>) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. </p>
          <p> Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) : </p>
          <p> - Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns, péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du <em>space fantasy</em>. </p>
          <p> - Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de <strong><em>Star Trek</em></strong>), qui avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex). </p>
          <p> - Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance que l'action proprement dite. </p>
          <p> - La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence). </p>
        </div>
        <div className="footer">
          <img className="img-footer" src={storm} alt="stormtroopers"/>
          <div className="footer-bottom">
            <div className="footer-bottom-title">
              <p> <strong>TM Lucasfilm</strong> Ltd. All Rights Reserved.</p>
            </div>
            <div className="footer-box flex">
              <div className="list">
                <ul>
                  <li>Terms of Use</li>
                  <li>Legal Notice</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="list">
                <ul>
                  <li>Your California Privacy Rights</li>
                  <li>Star Wars at Disney Store</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="social-media">
                <p>FOLLOW STAR WARS</p>
                <div className="flex">
                  <img src={facebook} alt="facebook"></img>
                  <img src={twitter} alt="twitter"></img>
                  <img src={instagram} alt="instagram"></img>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
