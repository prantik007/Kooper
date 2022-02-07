function Footer() {
  let curYear = new Date().getFullYear();

  return (
    <footer>
      <span>Copyright {curYear}</span>
    </footer>
  );
}

export default Footer;
