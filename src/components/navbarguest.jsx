import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/reducers'
import { useEffect,useState } from 'react'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Consultation', href: '/consultation', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Forum', href: '/forum', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarGuest(){

    const location = useLocation();
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
    const dispatch = useDispatch();

    // tampilkan nama user
    // const [displayUsername, setDisplayUsername] = useState(() => JSON.parse(localStorage.getItem('username')));

    // useEffect(() => {
    //     const usernameData = localStorage.getItem('username');

    //     if (usernameData) {
    //         const parsedUsername = JSON.parse(usernameData);
    //         console.log(parsedUsername);
    //         setDisplayUsername(parsedUsername);
    //     }
    // }, []); // Empty dependency array ensures the effect runs only once

    // console.log(displayUsername);

    const navigate = useNavigate();

    if (location.pathname === '/users') {
        return null;
      }

    if (location.pathname === '/login') {
        return null;
      }

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
                                className="h-9 w-auto"
                                src="../src/assets/logo/logo2.png"
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
                                    item.current ? "border-b-2 border-b-blue-700" : "transition ease-in delay-20 border-b-2 border-white hover:border-b-blue-700",
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
                        {isAuthenticated ? (
                            <>
                            <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            {/* <p className='hidden md:block text-base text-blue-900 mx-2 font-semibold'>{displayUsername}</p> */}
                            </Menu.Button>
                        </div>
                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="/editprofile"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-blue-900')}
                                >
                                    Profil Anda
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="/cart"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-blue-900')}
                                >
                                    Keranjang
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    onClick={()=>dispatch(logout())}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-blue-900')}
                                >
                                    Keluar
                                </a>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>
                            </Menu>
                            </>
                        ):(
                            <button className='bg-blue-700 text-white py-2 px-3 rounded-md transition ease-in delay-20 hover:bg-blue-600' onClick={()=>navigate('/login')}>Masuk</button>
                        )}
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