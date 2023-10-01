import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

const Services = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
        
        <main className="container mx-auto">
              
            <div className="text-2xl font-semibold text-white mb-4 h-1/2 mt-12">
                Our Services
            </div>
        <section className="my-16 mx-4">
          
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
            <Link href="/environment-consulting">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Environment Consulting
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/construction-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Construction Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/electrical-safety">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Electrical Safety
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/training">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Training
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>

            <Link href="/safety-management">
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Safety Management
                </h3>
                <p className="text-gray-600 text-sm">
                    Description of Service 1. You can add more details here.
                </p>
                        </div>
            </Link>
          </div>
              </section>
              </main>
    </>
  );
};

export default Services;
