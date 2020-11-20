export default function Navbar() {
  const collapse = ["PASSION & PURPOSE", "BODY", "MIND", "SOUL"];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <span class="navbar-brand">Becoming You</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto">
            {collapse.map((value) => (
              <li class="nav-item mx-4" role="button">
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
