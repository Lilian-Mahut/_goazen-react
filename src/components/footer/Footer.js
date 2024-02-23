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
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container flex justify-around">
        <div>© {year} Goazen</div>
        <div className="">
          <ul className="flex flex-row">
            <li>{t('footer.part1')}</li>
            <li>·</li>
            <li>{t('footer.part2')}</li>
            <li>·</li>
            <li>{t('footer.part3')}</li>
            <li>·</li>
            <li>{t('footer.part4')}</li>
          </ul>
        </div>
        {/* CHANGE LANGUAGE */}
        <div className="flex">
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
        <div className="">
          <ul className="flex">
            <li>
              <img
                src={iconInstagram}
                alt="Instagram"
                className=""
                width="22"
                height="22"
              />
            </li>
            <li>
              <img
                src={iconFacebook}
                alt="Facebook"
                className=""
                width="22"
                height="22"
              />
            </li>
            <li>
              <img src={iconX} alt="X" className="" width="22" height="22" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
