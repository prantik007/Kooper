import logo from "../assets/images/header-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className={"logo"} />
      <h1>Kooper</h1>
    </header>
  );
}

export default Header;
