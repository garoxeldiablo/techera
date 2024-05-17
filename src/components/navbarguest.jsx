import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { Outlet, useNavigate } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Consultation', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Forum', href: '#', current: false },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarGuest(){
    const navigate = useNavigate();
    return(
        <>
            <Disclosure as="nav" className="bg-white shadow-md fixed z-10 w-full">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <img
                            className="h-8 w-auto"
                            src="../src/assets/logo/techera2.png"
                            alt="Your Company"
                        />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? "border-b-2 border-b-blue-700" : "transition ease-in delay-20 hover:border-b-2 hover:border-b-blue-700",
                                'px-3 py-2 text-md'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    <button className='bg-blue-700 text-white py-2 px-3 rounded-md transition ease-in delay-20 hover:bg-blue-600' onClick={()=>navigate('/signin')}>Sign In</button>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-blue-900 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            <Outlet/>
        </>
    )
}