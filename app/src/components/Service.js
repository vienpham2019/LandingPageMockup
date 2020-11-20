export default function Service() {
  const service = [
    {
      url:
        "https://wallpaperstock.net/leaf-after-summer-rain-wallpapers_13893_1920x1200.jpg",
      content: "What",
    },
    {
      url:
        "https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/spider-plant_t50-ss.jpg?itok=CY0bu9pJ",
      content: "We",
    },
    {
      url:
        "https://www.almanac.com/sites/default/files/image_nodes/lily-of-the-valley-sun.jpg",
      content: "Offer",
    },
  ];
  return (
    <div>
      <div class="h-50 px-5 overflow-hidden w-100 my-5">
        <div class="row d-flex flex-wrap">
          {service.map((value) => (
            <div
              class="col m-3 d-flex align-items-center header-background"
              style={{
                height: "20em",
                minWidth: "20em",
                backgroundImage: `url(${value.url})`,
              }}
            >
              <span class="mx-auto p-3 bg-white w-75 text-center">
                {value.content}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        class="service-background border"
        style={{
          height: "50em",
          margin: "5em 3em",
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0781/4423/files/03_6e547f44-c075-45a1-b575-7d41acdc6df3.jpg?v=1568864617')",
        }}
      >
        <div class="h-100 text-center mx-auto d-flex align-items-center">
          <div class="w-100">
            <span class="text-white p-2 service-title">
              How we are diffrent?
            </span>
            <br />
            <button class="btn px-5 py-4 header-button my-3">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
