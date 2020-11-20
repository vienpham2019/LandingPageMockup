export default function Footer() {
  const footer_info = [
    { key: "Products", val: ["Features", "Pricing", "Support"] },
    { key: "Company", val: ["Features", "Pricing", "Support"] },
  ];
  return (
    <footer className="my-5 container">
      <div className="row">
        {footer_info.map((value) => (
          <div className="col">
            <h3>{value.key}</h3>
            <ul className="pl-2">
              {value.val.map((v) => (
                <li className="text-muted">{v}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-5 m-2 ml-4" style={{ minWidth: "400px" }}>
          <h3>Subscribe</h3>
          <span className="text-muted">
            Get access to latest news and all the features by subcribing here
            now.
          </span>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control service-input bg-light"
              placeholder="Email"
            />
            <div className="input-group-prepend">
              <button className="btn px-4 py-2 header-button" type="button">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
