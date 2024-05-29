import React from "react";
import { Menu,Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LoginStatus({name,isLoggedIn}){
    const navigate = useNavigate()

    if (isLoggedIn) {
        return(
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
                            <p className='hidden md:block text-base text-blue-900 mx-2 font-semibold'>{name}</p>
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
                                    href="/signup"
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
        )
    } else {
        return (
            <>
            <button className='bg-blue-700 text-white py-2 px-3 rounded-md transition ease-in delay-20 hover:bg-blue-600' onClick={()=>navigate('/signin')}>Masuk</button>
            </>
        )
    }
}