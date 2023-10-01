import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Reliable EHS - Home</title>
      </Head>

      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-[url('https://us.tencatefabrics.com/hubfs/GLOBAL%20-%20Website%20imgs/header%20industrial%20safety.png')] bg-cover bg-center">
        <div className="absolute top-0 h-full w-full bg-[url('https://us.tencatefabrics.com/hubfs/GLOBAL%20-%20Website%20imgs/header%20industrial%20safety.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 text-white">
              <div>
                Electrical Safety
              </div>
              <div variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </div>
            </div>
          </div>
        </div>
        </div> 
      <main className="container mx-auto">
        

        <section className="py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Service Card 1 */}
            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/process-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Process Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>
          </div>
        </section>

        <section>
          <div className="mt-64 mb-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                {/* <UsersIcon className="h-6 w-6 text-blue-gray-900" /> */}
              </div>
              {/* <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography> */}
              <div className="mb-8 font-normal text-white">
                Reliable EHS is a leading consulting firm dedicated to offer expert consultation on Environmental, Health & Safety (EHS) and risk management. 
                Headquartered in Chandigarh, India, NorthStar was born with a single goal in mind: to assist businesses across the globe manage their Environmental, Health and Safety (EHS) processes and performance, 
                while mitigating risk.
                As a global leader in cutting-edge EHS solutions, our relationship with consumers has grown, and we’ve come to understand that it’s our shared responsibility to improve people’s lives by operating effectively in the complex and ever evolving world of Environment, Health & Safety regulations.
                Our expertise allows us to offer a wide range of services and support in safety management, electrical safety, logistics safety
              </div>
              {/* <button variant="outlined">read more</button> */}
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
