export default function Footer() {
  const footer_info = [
    { key: "Products", val: ["Features", "Pricing", "Support"] },
    { key: "Company", val: ["Features", "Pricing", "Support"] },
  ];
  return (
    <footer class="my-5 container">
      <div className="row">
        {footer_info.map((value) => (
          <div className="col">
            <h3>{value.key}</h3>
            <ul class="pl-2">
              {value.val.map((v) => (
                <li class="text-muted">{v}</li>
              ))}
            </ul>
          </div>
        ))}
        <div class="col-5 m-2 ml-4" style={{ minWidth: "400px" }}>
          <h3>Subscribe</h3>
          <span class="text-muted">
            Get access to latest news and all the features by subcribing here
            now.
          </span>
          <div class="input-group mt-4">
            <input
              type="text"
              class="form-control service-input bg-light"
              placeholder="Email"
            />
            <div class="input-group-prepend">
              <button class="btn px-4 py-2 header-button" type="button">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
