export default function Navbar() {
  const collapse = ["PASSION & PURPOSE", "BODY", "MIND", "SOUL"];
  const info = ["ABOUT", "ACCOUNT"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
      <div className="container font-weight-light">
        <span
          className="navbar-brand"
          role="button"
          style={{ fontSize: "1.7em" }}
        >
          Becoming You
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto my-2">
            {collapse.map((value) => (
              <li className="nav-item mx-3" role="button">
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav mx-auto my-2">
            {info.map((value) => (
              <li className="nav-item mx-3" role="button">
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
