export default function Header() {
  return (
    <header className="mx-5 relative">
      <div className="navbar-logo"></div>
      <div className="flex justify-between top-0 absolute m-5">
        <img src={'/logo.svg'} alt="Logo" />
        <div className="navbar-links"></div>
      </div>
    </header>
  );
}
