// import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="flex">
        <div className="">
          <div className="">Logo</div>
          <div className="text-red-600">Nom de l'application</div>
        </div>
        <div className="">
          <div className="">Burger Menu</div>
          <div className="">Login</div>
        </div>
        {/* A SUPPRIMER */}
        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl">Hello connard ! Tailwind CSS in React!</h1>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Click Me
          </button>
        </div>
        {/* UP SUPPRIMER */}
      </div>
    </header>
  );
}
