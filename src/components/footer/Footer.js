import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container flex justify-between">
        <div className="">
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X</li>
          </ul>
        </div>
        <div className="">Made & Share with ❤</div>
        <div className="socialNetworks">
          <ul>
            <li>A propos</li>
            <li>F.A.Q.</li>
            <li>Mentions légales</li>
            <li>Conditions générales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
