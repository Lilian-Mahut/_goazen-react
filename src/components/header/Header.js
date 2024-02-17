// import './Header.scss';
import iconLang from '../../assets/images/language.svg';

export default function Header() {
  return (
    <header>
      <div className="container flex justify-between font-sans">
        <div className="flex p-4">
          <div className="text-red-600 p-3">
            <a href="/">Logo+Goazen!</a>
          </div>
        </div>
        <div className="flex p-4">
          <img src={iconLang} className="" alt="lang" width="26" height="26" />
          <div className="flex justify-between box-border h-14 w-32 border-2 border-slate-300 rounded-full p-3">
            <div className="">Menu</div>
            <div className="">Avatar</div>
          </div>
        </div>
      </div>
    </header>
  );
}
