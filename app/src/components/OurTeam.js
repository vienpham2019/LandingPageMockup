import member_1 from "../image/member_1.jpg";
import member_2 from "../image/member_2.jpg";
import member_3 from "../image/member_3.jpg";
export default function OurTeam() {
  const service = [member_1, member_2, member_3];
  return (
    <div style={{ marginBottom: "10em" }}>
      <div className="text-center" style={{ margin: "5em 0" }}>
        <h1>Meet Our Team</h1>
        <div className="mt-4">
          {service.map((value) => (
            <img
              className="m-5"
              style={{ width: "13em", height: "13em", borderRadius: "50%" }}
              src={value}
            ></img>
          ))}
        </div>
      </div>
      <div className="text-center my-5 font-weight-light ">
        <h2>Stay up to date on services</h2>
        <span className="text-secondary mb-5" style={{ fontSize: "1.3em" }}>
          Sign up to receive emails
        </span>
        <div className="container mt-4">
          <form>
            <div className="form-row">
              <div className="col mx-4 my-2">
                <input
                  type="text"
                  className="form-control service-input"
                  placeholder="Name"
                />
              </div>
              <div className="col mx-4 my-2">
                <input
                  type="text"
                  className="form-control service-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <button className="btn px-5 py-3 header-button my-4">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
