import React, { useState } from 'react';

export default function TextAreaWithLanguageOptions() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text1Len, setText1Len] = useState(0)
    const [text2Len, setText2Len] = useState(0)
    const [fromLanguage, setFromLanguage] = useState('English');
    const [toLanguage, setToLanguage] = useState('French');
    const languages = [
        "Amharic", "Arabic", "Bielarus", "Bemba", "Bislama", "Bajan", "Bengali", "Tibetan", "Breton", "Bosnian",
        "Catalan", "Coptic", "Czech", "Welsh", "Danish", "Dzongkha", "German", "Maldivian", "Greek", "English",
        "Spanish", "Estonian", "Basque", "Persian", "Finnish", "Fanagalo", "Faroese", "French", "Galician", "Gujarati",
        "Hausa", "Hebrew", "Croatian", "Hungarian", "Indonesian", "Icelandic", "Italian", "Japanese", "Kazakh",
        "Khmer", "Kannada", "Korean", "Kurdish", "Kyrgyz", "Latin", "Lao", "Latvian", "Mende", "Malagasy", "Maori",
        "Malay", "Maltese", "Burmese", "Nepali", "Niuean", "Dutch", "Norwegian", "Nyanja", "Pakistani", "Palauan",
        "Panjabi", "Pashto", "Pijin", "Polish", "Portuguese", "Kirundi", "Romanian", "Russian", "Sango", "Sinhala",
        "Slovak", "Samoan", "Shona", "Somali", "Albanian", "Serbian", "Swedish", "Swahili", "Tamil", "Telugu",
        "Tetum", "Tajik", "Thai", "Tigrinya", "Turkmen", "Tagalog", "Tswana", "Tongan", "Turkish", "Ukrainian",
        "Uzbek", "Vietnamese", "Wolof", "Xhosa", "Yiddish", "Zulu"
    ];
    const characterLimit = 5000;


    const handleSwap = () => {
        setText1(text2);
        setText2(text1);
        setFromLanguage(toLanguage);
        setToLanguage(fromLanguage);
    };

    const translation = async () => {
        console.log("translation start ")
        if (text1.length >= 5000) {
            alert("Shorter Your text please ")
        }
        if (fromLanguage === toLanguage) {
            alert("Please Check the choices of Language ")
            return
        }
        const url = (`https://api.mymemory.translated.net/get?q=${text1}!&langpair=${fromLanguage}|${toLanguage}`)

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Response Status : ${response.status}`)
        }
        const data = await response.json()
        setText2(data.responseData.translatedText)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 space-y-2 min-h-screen p-2">
            <div className="flex items-center space-x-2">
                {/* Column 1: Language Selector and Text Area 1 */}
                <div className="flex flex-col space-y-2">
                    {/* Language Selector 1 */}
                    <select
                        value={fromLanguage}
                        onChange={(e) => {
                            setFromLanguage(e.target.value)
                        }}
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
                        value={text1 || ''}
                        onChange={(e) => {
                            setText1(e.target.value)
                            setText1Len(e.target.value.length)
                        }}
                        className="w-[30vw] h-[35vh] p-2 border border-black rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter text here..." maxLength={characterLimit}
                    ></textarea>
                    <div className="text-right text-sm text-gray-500">
                        {text1Len}/{characterLimit}
                    </div>
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
                        value={toLanguage}
                        onChange={(e) => setToLanguage(e.target.value)}
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
                        value={text2 || ''}
                        onChange={(e) => setText2(e.target.value)}
                        className="w-[30vw] h-[35vh] p-2 border border-black rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter text here..." disabled
                    ></textarea>
                    <div className="text-right text-sm text-gray-500">
                        {text2Len}/{characterLimit}
                    </div>
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
