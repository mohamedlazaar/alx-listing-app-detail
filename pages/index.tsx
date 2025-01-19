import Image from "next/image";
import Pill from "@/components/common/Pill"
import property1 from "@/public/assets/property1.png";
import { PROPERTYLISTINGSAMPLE } from '@/constants'

const filterArray = [
  'All',
  'Top Villa',
  'Free Reschedule',
  'Book Now, Pay later',
  'Self CheckIn',
  ' Instant Book',
]

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export default function Home() {
  return (
    <div>
      <section
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${property1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-white text-3xl font-bold">
          <h1 className="text-5xl font-bold">Welcome to our website</h1>
        </div>
      </section>
      <section className="flex gap-4 justify-between py-8 px-6">
        {filterArray.map((filter, index) => (
          <Pill key={index} filter={filter} />
        ))}
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3  gap-16 px-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => {
          return (
            <article className=" rounded-lg shadow-lg" key={index}>
              <img
                src={property.image}
                alt={property.name}
                className="object-cover w-full h-[255px]  rounded-[16.5px]"
              />

              <h2 className="text-[#161117] font-semibold text-[22px] leading-[27.5px] text-center py-4">
                {property.name}
              </h2>
              <div className="flex justify-between px-4 pb-4">
                <p className="font-bold text-[22px] leading-[27.5px] text-[#161117]">
                  Price: ${property.price}
                </p>
                <span className="text-[#161117] text-[17px] leading-[21.25px] font-medium">
                  Rate: {property.rating}
                </span>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  );
}