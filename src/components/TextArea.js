import React, { useState } from 'react';

export default function TextAreaWithLanguageOptions() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [language1, setLanguage1] = useState('en');
    const [language2, setLanguage2] = useState('');

    const languages = ['English', 'Spanish', 'French', 'German'];

    const handleSwap = () => {
        setText1(text2);
        setText2(text1);
        setLanguage1(language2);
        setLanguage2(language1);
    };

    const translation = () => {
        console.log("translation start ")
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 space-y-2 min-h-screen p-2">
            <div className="flex items-center space-x-2">
                {/* Column 1: Language Selector and Text Area 1 */}
                <div className="flex flex-col space-y-2">
                    {/* Language Selector 1 */}
                    <select
                        value={language1}
                        onChange={(e) => setLanguage1(e.target.value)}
                        className="w-[30vw] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="" disabled>
                            Select Language
                        </option>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>

                    {/* Text Area 1 */}
                    <textarea
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        className="w-[30vw] h-[35vh] p-2 border border-black rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter text here..."
                    ></textarea>
                </div>

                {/* Swap Button */}
                <button
                    onClick={handleSwap}
                    className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring self-center"
                >
                    Swap
                </button>

                {/* Column 2: Language Selector and Text Area 2 */}
                <div className="flex flex-col space-y-2">
                    {/* Language Selector 2 */}
                    <select
                        value={language2}
                        onChange={(e) => setLanguage2(e.target.value)}
                        className="w-[30vw] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="" disabled>
                            Select Language
                        </option>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>

                    {/* Text Area 2 */}
                    <textarea
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        className="w-[30vw] h-[35vh] p-2 border border-black rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter text here..."
                    ></textarea>
                </div>
            </div>

            {/* Translate Button */}
            <button
                className="px-8 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring" onClick={translation}
            >
                Translate
            </button>
        </div>
    );
}
