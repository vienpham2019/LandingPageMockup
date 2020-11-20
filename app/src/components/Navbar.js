export default function Navbar() {
  const collapse = ["PASSION & PURPOSE", "BODY", "MIND", "SOUL"];
  const info = ["ABOUT", "ACCOUNT"];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-4">
      <div class="container font-weight-light">
        <span class="navbar-brand" role="button" style={{ fontSize: "1.7em" }}>
          Becoming You
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto my-2">
            {collapse.map((value) => (
              <li class="nav-item mx-3" role="button">
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <ul class="navbar-nav mx-auto my-2">
            {info.map((value) => (
              <li class="nav-item mx-3" role="button">
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
