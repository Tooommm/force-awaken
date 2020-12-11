import './App.css';
import ParallaxMousemove from 'react-parallax-mousemove';
import ad from './assets/ad.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
              <div className="menu">
                <div className="item"> LE COTÉ LUMINEUX </div>
                <div className="item"> LE COTÉ OBSCUR </div>
                <div className="item"> L’EMPIRE </div>
                <div className="item"> LES DROÏDES </div>
                <div className="item"> LES EWOKS </div>
                <div className="item"> JABBA LE HUTT </div>
              </div>
              <div className="logo"></div>
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
