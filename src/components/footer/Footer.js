import iconLang from '../../assets/images/language.svg';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import iconInstagram from '../../assets/images/iconInstagram.png';
import iconFacebook from '../../assets/images/iconFacebook.png';
import iconX from '../../assets/images/iconX.png';

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' },
};

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="container flex justify-between">
        <div className="">
          <ul>
            <li>
              <img src={iconInstagram} alt="Instagram" />
            </li>
            <li>
              <img src={iconFacebook} alt="Facebook" />
            </li>
            <li>
              <img src={iconX} alt="X" />
            </li>
          </ul>
        </div>
        {/* CHANGE LANGUAGE */}
        <div>
          <img src={iconLang} className="" alt="lang" width="26" height="26" />
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        {/* END LANGUAGE */}
        <div className="">Made & Share with ❤</div>
        <div className="socialNetworks">
          <ul>
            <li>{t('footer.part1')}</li>
            <li>{t('footer.part2')}</li>
            <li>{t('footer.part3')}</li>
            <li>{t('footer.part4')}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
