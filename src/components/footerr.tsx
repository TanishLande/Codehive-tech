"use client"


export default function Footer() {
  return (
    <div className="p-4 md:p-10 m-2 md:m-10 bg-gradient-to-b from-blue-900/40 to-blue-900/10 text-white rounded-xl">
      <div className="flex flex-col space-y-6 md:space-y-12">
        {/* Top section with logo and connect */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Craft code<span className="text-blue-500"> Hive Tech</span>
            </h1>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300">
              Transforming ideas into stunning frontend experiences.
            </p>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300 font-medium">
              Mobile: +91 91121 88036 / 91121 88031
            </p>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-300">
              Main office: Navnirman, behind Rameshwar Temple, Rupeenagar, Pune-411 062
            </p>
          </div>
          
          <div className="md:text-right">
            <h2 className="font-medium mb-2">Connect</h2>
            {/* <div className="flex space-x-3 md:justify-end mb-2 md:mb-3">
              <Link
                href="#"
                className="bg-zinc-800 p-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-zinc-800 p-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-zinc-800 p-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div> */}
            <a
              href="mailto:hr@craftcodehivetech.com"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              hr@craftcodehivetech.com <br />
              info@craftcodehivetech.com
            </a>
          </div>
        </div>

        {/* Bottom section with copyright and call button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 border-t border-zinc-800 pt-4">
          <div className="text-xs md:text-sm text-gray-400">
            <p>© 2025 CraftCodeHiveTech. All rights reserved.</p>
          </div>
          
          {/* <Link
            href="#"
            className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors text-center md:text-left"
          >
            Book A Call
          </Link> */}
        </div>
      </div>
    </div>
  );
}