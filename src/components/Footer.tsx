const Footer = ({ darkTheme }: { darkTheme?: boolean }) => (
  <p className={`pt-12 pb-4 text-sm ${darkTheme && "text-white"}`}>
    Created by{" "}
    <a
      href="https://www.annado.net/"
      className={`${darkTheme ? "text-pink-300" : "text-blue-500"}`}
    >
      Anna Do
    </a>
    , Data from{" "}
    <a
      href="https://bit.ly/3pkP7xX"
      className={`${darkTheme ? "text-pink-300" : "text-blue-500"}`}
    >
      Zen Quotes
    </a>
  </p>
);

export default Footer;
