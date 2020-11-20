import flower_img from "../image/flower.jpg";
import plant_1 from "../image/plant_1.jpg";
import plant_2 from "../image/plant_2.jpg";
import plant_3 from "../image/plant_3.jpg";
export default function Service() {
  const service = [
    {
      url: plant_1,
      content: "What",
    },
    {
      url: plant_2,
      content: "We",
    },
    {
      url: plant_3,
      content: "Offer",
    },
  ];
  return (
    <div>
      <div className="h-50 px-5 overflow-hidden w-100 my-5">
        <div className="row d-flex flex-wrap">
          {service.map((value) => (
            <div
              className="col m-3 d-flex align-items-center header-background"
              style={{
                height: "20em",
                minWidth: "20em",
                backgroundImage: `url(${value.url})`,
              }}
            >
              <span className="mx-auto p-3 bg-white w-75 text-center">
                {value.content}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="service-background border"
        style={{
          height: "50em",
          margin: "5em 3em",
          backgroundImage: `url(${flower_img})`,
        }}
      >
        <div className="h-100 text-center mx-auto d-flex align-items-center">
          <div className="w-100">
            <span className="text-white p-2 service-title">
              How we are diffrent?
            </span>
            <br />
            <button className="btn px-5 py-4 header-button my-3">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
