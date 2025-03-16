import React from "react";

const FeatureSection = () => {
  const features = [
    {
      image:
        "https://water.org/media/images/Waterorg_Homepage_Img-5_aImN98V.format-webp_VG5RoQd.webp",
      title: "Our founders: Matt Damon and Gary White",
      description:
        "Fifteen years ago, Matt and Gary worked independently to help break down barriers between people in need and access to safe water. A common goal to pioneer smart solutions to the water crisis brought them together, and their combined water and sanitation expertise and star-power have allowed Water.org to grow into a leader in the water and sanitation sector.",
      link: {
        text: "Meet our team",
        url: "#",
      },
    },
    {
      image:
        "https://water.org/media/images/Waterorg_Homepage_Img-6.format-webp_Io1pN8o.webp",
      title: "Highest rankings from charity watch dogs",
      description:
        "Water.org has received the highest rating from Charity Navigator for more than 10 years, demonstrating our commitment to transparency and financial accountability.",
      link: {
        text: "See our financials",
        url: "#",
      },
    },
    {
      image:
        "https://water.org/media/images/Waterorg_Homepage_Img-7_3aqvQpy.format-webp_AzhhVXy.webp",
      title: "Partnering to solve the water crisis",
      description:
        "We are fortunate to work with partners – corporations, financial institutions, and foundations – who share our passion and vision. Together, we are changing lives with safe water on 4 continents around the world.",
      link: {
        text: "Learn about partnerships",
        url: "#",
      },
    },
  ];

  return (
    <>
      {/* first part */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image and $5 overlay */}
          <div className="relative">
            <img
              src="https://water.org/media/images/Waterorg_Homepage_Img-3_5V2HZOt.format-webp_Y9mGMcu.webp"
              alt="Person pouring clean water"
              className="w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-400 rounded-full flex flex-col items-center justify-center text-white">
              <span className="text-6xl md:text-7xl font-bold">$5</span>
              <div className="w-3/4 h-px bg-white my-2"></div>
              <p className="text-center text-sm md:text-base px-4">
                $5 helps empower someone in need with lasting access to safe
                water
              </p>
            </div>
          </div>

          {/* Right side content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your donation is a powerful catalyst
            </h2>

            <p className="text-gray-600 mb-6">
              Together with our 179 partners around the world, we've helped
              mobilize more than $6.6 billion in capital to support small loans
              that bring access to safe water and sanitation to millions of
              people in need. By supporting Water.org, you are part of a
              solution that reaches more people, faster and more efficiently.
            </p>

            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium"
            >
              Learn about our smart solutions
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

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <img
              src="https://ucarecdn.com/21eea803-b3e9-4d91-9f17-978687bad2f5/-/resize/1032x/-/format/auto/"
              alt="People managing finances for water access"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Center content */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              There's a smart way to end the water crisis
            </h2>

            <p className="text-gray-600 mb-4">
              For millions around the world, access to funds stands between them
              and safe water and sanitation in their homes.
            </p>

            <p className="text-gray-600 mb-4">
              That's where Water.org comes in. Water.org offers smart solutions
              that break down the barriers between people living in poverty and
              access to safe water and sanitation.
            </p>

            <p className="text-gray-600 mb-6">
              Our solutions are working! Today more than 76 million people
              around the world can turn on a tap or safely use a toilet because
              small, affordable loans empowered them to get access to safe water
              or sanitation.
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
              src="https://media.istockphoto.com/id/1040455046/photo/middle-age-man-drinking-a-glass-of-water-with-a-happy-face-standing-and-smiling-with-a.jpg?s=612x612&w=0&k=20&c=0wCAapRCP9MOuScTo4JO2l4VpZZOtWW4_Tuc3IO5Q4w="
              alt="Woman with access to clean water"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* third part */}

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
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
