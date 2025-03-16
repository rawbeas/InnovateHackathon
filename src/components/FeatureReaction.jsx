import React from "react";
import { IoIosAlert } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
const FeatureSection = () => {
  const features = [
    {
      image: "../public/Logo1.png",
      icon: <IoIosAlert className="size-[200px] text-blue-600" />,
      title: "Public Complaint System",
      description:
        "Report pollution issues via a web form. Complaints are integrated into a government dashboard and prioritized based on urgency, empowering citizens to participate in environmental monitoring.",
      link: {
        text: "Learn more",
        url: "#",
      },
    },
    {
      image:
        "https://water.org/media/images/Waterorg_Homepage_Img-6.format-webp_Io1pN8o.webp",
      icon: <GiDeliveryDrone className="size-[200px] text-blue-600" />,
      title: "Smart Boat Drone",
      description:
        "Collects real-time water quality data, classifying zones into Safe, Warning, and Critical categories. Enables continuous assessment and informed decisions to address pollution.",
      link: {
        text: "Learn more",
        url: "#",
      },
    },
    {
      image:
        "https://water.org/media/images/Waterorg_Homepage_Img-7_3aqvQpy.format-webp_AzhhVXy.webp",
      icon: <FaMapMarkedAlt className="size-[200px] text-blue-600" />,
      title: "Real Time Tracking",
      description:
        "Interactive map visualizes pollution levels in real-time using data from drones and sensors. Useful for monitoring trends and planning interventions.",
      link: {
        text: "Learn more",
        url: "#",
      },
    },
  ];

  return (
    <>
      {/* first part */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image and $5 overlay */}
          <div className="relative group">
            
            <img
              src="./Map.jpg"
              alt="Person pouring clean water"
              className="w-full rounded-lg hover:shadow-xl hover:scale-110 transition duration-300"
            />
            <div className="absolute top-0 left-0 w-48 h-48 md:w-74 md:h-74 bg-blue-400 rounded-full flex flex-col items-center justify-center text-white opacity-75">
              <span className="md:text-5xl text-md  font-bold">20+Centers</span>
              <div className="w-3/4 h-px bg-white my-2"></div>
              <p className="text-center text-sm md:text-base px-4">
                Real-time surveillance tracks pollution, enabling data-driven
                sustainable strategies effectively.
              </p>
            </div>
          </div>

          {/* Right side content */}
          <div>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
              Real Time Analysis
            </h2>

            <p className="text-gray-600 mb-6">
              The IoT-enabled boat drones collect real-time water quality data,
              including pH levels, turbidity, dissolved oxygen, and
              contaminants. This data is immediately sent to the cloud for
              processing. From the cloud, the data is fetched by a computing
              center, where it is fed into a machine learning model (CatBoost
              Classifier). The model analyzes the data and classifies river
              zones into categories such as Clean, Moderate, Polluted, or Highly
              Polluted. The classified zones, along with GPS coordinates, are
              visualized on an interactive map using the Folium library. This
              enables authorities and users to monitor pollution hotspots in
              real-time and take actionable steps for river cleanup.
            </p>

            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium"
            >
              Learn about our Mapping system
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* second part */}

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <img
              src="./Drone.jpeg"
              alt="People managing finances for water access"
              className="w-full h-[350px] object-cover shadow-md rounded-lg hover:shadow-xl hover:scale-110 transition duration-300 "
            />
          </div>

          {/* Center content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold  text-gray-800 mb-6">
              INTRODUCING S.A.F
            </h2>

            <p className="text-gray-600 mb-4">
              For millions of people, polluted rivers stand between them and
              clean water, affecting their health and environment.
            </p>

            <p className="text-gray-600 mb-4">
              That's where S.A.F (Surveillance Against Filth) drones come in.
              These innovative drones are equipped with custom 3D-printed hulls,
              advanced LiDAR sensors for depth mapping, and proximity sensors to
              dodge debris. Powered by solar panels for 12-hour missions, they
              perform live turbidity and pH analysis, mapping river zones into
              Green, Yellow, and Red categories using Folium.
            </p>

            <p className="text-gray-600 mb-6">
              Our solution is efficient! S.A.F drones are 40% cheaper than
              traditional drones and scalable for fleet deployment, making river
              cleanup smarter, faster, and more affordable.
            </p>

            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium"
            >
              See our impact
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Right image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <img
              src="https://images.indianexpress.com/2015/05/yamuna-pollution-main.jpg"
              alt="Woman with access to clean water"
              className="w-full h-[350px] object-cover rounded-lg shadow-md rounded-lg hover:shadow-xl hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* third part */}

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-4 hover:p-8 hover:scale-120 hover:mx-6 border  hover:border-blue-500 rounded-3xl  transition-all duration-700 shadow-sm hover:shadow-2xl">
              <div className="mb-6 flex justify-center ">
                {feature.icon}
                {/* <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-md"
                /> */}
              </div>
              <h3 className="text-3xl  text-center font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {feature.description}
              </p>
              <a
                href={feature.link.url}
                className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium"
              >
                {feature.link.text}
                <svg
                  className="ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
