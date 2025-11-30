import tata from "../assets/images/tata-solar.webp";
import waaree from "../assets/images/WAAREE-Solar.webp";
import adani from "../assets/images/adani.png";
import Luminous from "../assets/images/luminous.webp";

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Our Solar Products
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-5xl mx-auto">
        Explore our premium range of high-efficiency solar panels, inverters,
        and batteries from India’s most trusted brands including TATA Power,
        WAAREE Solar, and Adani Solar. Each product is selected for maximum
        performance, long-term reliability, and excellent warranty
        support-ensuring clean and affordable energy for your home or business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={tata}
            alt="TATA Solar Panel 440W"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="font-semibold text-lg">TATA Power Solar Panel </h3>
          <p className="text-gray-500">Warranty: 30 Years</p>
        </div>

        {/* Product 2 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={waaree}
            alt="WAAREE Solar 545W Mono PERC"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="font-semibold text-lg">WAAREE Solar 540W - 580W</h3>
          <p className="text-gray-500">Warranty: 30 Years</p>
        </div>
        {/* Product 3 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={adani}
            alt="WAAREE Solar 545W Mono PERC"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="font-semibold text-lg">Adani Solar 550W - 600W</h3>
          <p className="text-gray-500">Warranty: 30 Years</p>
        </div>

        {/* Product 4 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={Luminous}
            alt="Luminous Solar Inverter 3KW"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="font-semibold text-lg">Luminous Solar Inverter 3KW</h3>
          <p className="text-gray-500">Warranty: 5 Years</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
