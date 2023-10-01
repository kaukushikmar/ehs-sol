
export function Footer({
  title = "Reliable EHS",
  description =
    "One stop EHS Solution",
  socials = [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
  ],
  menus = [
    {
      name: "About Us",
      items: [
        { name: "About Us", path: "" },
        { name: "Vision & Mission", path: "" },
        {
          name: "Policies",
          path: "",
        },
        {
          name: "Our Clients",
          path: "",
        },
        {
          name: "Technical Resources",
          path: "",
        },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "Process Safety",
          path: "/404",
        },
        {
          name: "Environment Consulting",
          path: "",
        },
        {
          name: "Construction Safety",
          path: "",
        },
        {
          name: "Electrical Safety",
          path: "",
        },
        {
          name: "Safety Management",
          path: "",
        },
        {
          name: "Logistics Safety",
          path: "",
        },
        {
          name: "EHS Software",
          path: "",
        },
        {
          name: "Training",
          path: "",
        },
      ],
    },
  ],
  copyright = (
    <>
      Copyright © {new Date().getFullYear()} Reliable EHS
    </>
  ),
}) {

  return (
    <footer className="relative px-4 pt-8 pb-6 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-2xl font-semibold mb-4">{title}</h4>
            <p className="text-gray-300">{description}</p>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${name}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <h5 className="text-sm font-medium mb-2 text-blue-300 uppercase">
                  {name}
                </h5>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-normal text-blue-300 hover:text-blue-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="text-sm font-normal text-blue-300">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
