import './Footer.scss';
// import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <img src="" alt="Logo Goazen" />
      <div className="footerLinks">
        <p>A propos</p>
        <p>Mentions légales</p>
        <p>Conditions générales d'utilisation</p>
        <p>Politique de protection des données personnelles</p>
        <p>Contact</p>
      </div>
      <div className="socialNetworks">
        {/* facebook */}
        <p>
          <img src="" alt="" />
        </p>
        {/* X */}
        <p>
          <img src="" alt="" />
        </p>
        {/* Discord */}
        <p>
          <img src="" alt="" />
        </p>
        {/* Instagram */}
        <p>
          <img src="" alt="" />
        </p>
      </div>
    </footer>
  );
}
