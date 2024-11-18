import React from 'react';


export default function Header() {
    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-slate-600 border-slate-50 px-4 lg:px-6 py-2.5 text-white text-center">
                    <div className="flex justify-center items-center">
                        <ul className="text-center">
                            <li className="text-lg lg:text-2xl font-bold tracking-wide">
                                REACT - TRANSLATOR
                            </li>


                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

