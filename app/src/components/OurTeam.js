export default function OurTeam() {
  const service = [
    "https://suburbanmen.com/wp-content/uploads/2020/01/women-in-black-and-white-are-a-beautiful-thing-20180711-106.jpg",
    "https://i.etsystatic.com/10150478/r/il/85720e/1345114635/il_570xN.1345114635_hqan.jpg",
    "https://lh3.googleusercontent.com/proxy/EUZv7ZGfmbSpQHvKegr3mq3U7-LjAFx_NMADPLfYQNwwC3RCKkhIrXs4h_ZVJmMSaBvsJeTEzH6d-whPy615qk1C9dkff-Z8bnIIFd5LNgFrdcUMuoinQM3Rk9eFrZbR2_2C4PIuzSuuJ6g8KnsiSFmPnQ",
  ];
  return (
    <div style={{ marginBottom: "10em" }}>
      <div class="text-center" style={{ margin: "5em 0" }}>
        <h1>Meet Our Team</h1>
        <div class="mt-4">
          {service.map((value) => (
            <img
              class="m-5"
              style={{ width: "13em", height: "13em", borderRadius: "50%" }}
              src={value}
            ></img>
          ))}
        </div>
      </div>
      <div class="text-center my-5 font-weight-light ">
        <h2>Stay up to date on services</h2>
        <span class="text-secondary mb-5" style={{ fontSize: "1.3em" }}>
          Sign up to receive emails
        </span>
        <div class="container mt-4">
          <form>
            <div class="form-row">
              <div class="col mx-4 my-2">
                <input
                  type="text"
                  class="form-control service-input"
                  placeholder="Name"
                />
              </div>
              <div class="col mx-4 my-2">
                <input
                  type="text"
                  class="form-control service-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <button class="btn px-5 py-3 header-button my-4">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
