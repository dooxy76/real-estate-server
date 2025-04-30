import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#01005f]">
            <div
                className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div >
                        <Link to={'/home'}>
                            <h2 className="font-blach sm:text-xl text-sm text-left hover:bg-transparent uppercase text-slate-100 tracking-tighter w-full font-oswald font-bold flex items-center justify-start">
                                <img className='max-w-md' src={logo} alt="logo" />
                            </h2>
                        </Link>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 border-t-2 border-brand-blue pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 font-oswald"
                >
                    <div>
                        <p className="font-bold uppercase font-oswald text-slate-100">Services</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    1on1 Coaching
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Company Review
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Accounts Review
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    HR Consulting
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    SEO Optimisation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold uppercase font-oswald text-slate-100">Company</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Meet the Team
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Accounts Review
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold uppercase font-oswald text-slate-100">Helpful Links</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    FAQs
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Live Chat
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold uppercase font-oswald text-slate-100">Legal</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Accessibility
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Returns Policy
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Refund Policy
                                </Link>
                            </li>

                            <li>
                                <Link className="text-slate-100 duration-300 hover:text-white font-heading">
                                    Hiring Statistics
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer