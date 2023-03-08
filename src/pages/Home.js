import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import TlLogo from '../assets/images/tn.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'

const navigation = [
  { name: 'Talent Land', href: 'https://www.talent-land.mx/' },
  { name: 'Genius Arena', href: 'https://genius-arena.com/' },
  { name: 'Hiring Challenge', href: 'https://www.talent-network.org/iniciativas/hiring-challenge/' },
  { name: 'Talent Founders', href: 'https://talent-founders.club/' },
]

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089fc" />
              <stop offset={1} stopColor="#26ff2a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5">
              <img className="h-8" src={TlLogo} alt="Talent Network" />
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500 rounded-md hover:shadow-inner px-3 py-2 bg-transparent hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out"> 
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-bold leading-6 text-blue-900 hover:text-green-500 rounded-md px-3 py-2 bg-gray-50 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out shadow-sm">
              Iniciar Sesión
            </Link>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <p className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src={TlLogo} alt="Talent Network" />
              </p>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineCloseCircle 
                    className="h-6 w-6"
                    aria-hidden="true"    
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <p
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="uppercase text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">
                events engine
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                LA MEJOR PLATAFORMA PARA GESTIONAR EVENTOS DEL MUNDO MUNDIAL
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <p
                  className="text-sm font-semibold leading-6 bg-green-600 text-white hover:text-green-500 rounded-md hover:shadow-inner px-3 py-2 hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out"
                >
                  Iniciar Sesión
                </p>
                <p href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500 rounded-md hover:shadow-inner px-3 py-2 hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out">
                  Crear cuenta  <span aria-hidden="true">→</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}

export { Home }