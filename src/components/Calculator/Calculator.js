import React from 'react'
import './Css/calc.css'

function Calculator() {
    return (
        <> <div id="__next">
            <main class="__className_5f7ae9">
                <header className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white">
                    <nav className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5">
                        <div className="flex flex-row">
                            <div className="invisible -translate-x-full bg-interactiveForegroundInverseTertiary inset-0 overflow-auto overscroll-contain fixed z-10 p-6 shadow-md flex flex-col transition-translate duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]">
                                <div className="flex justify-between items-center">
                                    <a className="inline-block px-2 flex-none" href="/">
                                        <svg
                                            role="img"
                                            className="icon icon-LogoBetter2021"
                                            width="85px"
                                            height="35px"
                                            viewBox="0 0 495 133"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Better</title>
                                            <path
                                                d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <button
                                        className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl w-auto"
                                        title="Menu"
                                    >
                                        <div className="align-center flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={32}
                                                height={32}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-x "
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <details className="group flex-none">
                                    <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                        Buy
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </summary>
                                    <ul className="m-0 list-none">
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/preapproval/nxt-purchase"
                                            >
                                                Apply now
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/mortgage-rates"
                                            >
                                                Purchase rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/how-much-house-can-i-afford"
                                            >
                                                Affordability calculator
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/mortgage-calculator"
                                            >
                                                Mortgage calculator
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/rent-vs-buy-calculator/"
                                            >
                                                Rent vs buy calculator
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/find-an-agent"
                                            >
                                                Find an agent
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/va-loan"
                                            >
                                                VA loans
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/content"
                                            >
                                                Learning center
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                                <details className="group flex-none">
                                    <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                        Refinance
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </summary>
                                    <ul className="m-0 list-none">
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/preapproval/nxt-refinance"
                                            >
                                                Apply Now
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/refinance-rates"
                                            >
                                                Refinance rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/content/refinance-calculator/"
                                            >
                                                Cash-out refinance calculator
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/content"
                                            >
                                                Learning Center
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                                <details className="group flex-none">
                                    <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                        HELOC
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </summary>
                                    <ul className="m-0 list-none">
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/preapproval/nxt-heloc"
                                            >
                                                Apply Now
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/heloc-calculator"
                                            >
                                                Calculate your Cash 💵
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/heloc-vs-cashout-refi-calculator"
                                            >
                                                HELOC vs. Cash-out Refinance
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/content"
                                            >
                                                Learning Center
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                                <details className="group flex-none">
                                    <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                        Rates
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </summary>
                                    <ul className="m-0 list-none">
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/mortgage-rates"
                                            >
                                                Purchase mortgage rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/refinance-rates"
                                            >
                                                Refinance rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/cash-out-refinance-rates"
                                            >
                                                Refinance cash-out rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/heloc-rates"
                                            >
                                                HELOC rates
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/va-loan-rates"
                                            >
                                                Purchase VA rates
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                                <details className="group flex-none">
                                    <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                        Better+
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </summary>
                                    <ul className="m-0 list-none">
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="https://www.bettercover.com/"
                                            >
                                                Get Insurance
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/title"
                                            >
                                                Title and Closing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/b/attorney-match"
                                            >
                                                Better Attorney Match
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/content"
                                            >
                                                Learning Center
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/b/better-real-estate-partner-agents"
                                            >
                                                Better Agent Match
                                                <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">
                                                    For Agents
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground"
                                                href="/b/duo"
                                            >
                                                Better Duo
                                                <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">
                                                    For Agents
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                                <div className="bg-successBackground px-6 py-2 rounded-full flex items-center justify-center">
                                    <div className="mr-3">
                                        <svg
                                            width={19}
                                            height={18}
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                                                fill="#292B29"
                                            />
                                        </svg>
                                    </div>
                                    Call us anytime at
                                    <a
                                        className="ml-1 underline underline-offset-[3px] hover:text-textHighlight"
                                        href="tel:4155238837"
                                    >
                                        (415) 523 88371
                                    </a>
                                </div>
                                <div className="flex flex-col gap-4 mt-auto">
                                    <a
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary h-16 px-12 py-5 w-auto"
                                        href="/start"
                                    >
                                        <p className="leading-body m-0 p-0 text-left text-base flex flex-col items-center text-current font-bold">
                                            <span>Get started</span>
                                            <span className="text-xs font-normal text-interactiveSecondary">
                                                3 min | No credit impact
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <button
                                aria-label="close navigation bar"
                                className="bg-interactiveForegroundInversePrimary fixed inset-0 h-screen w-screen opacity-80 z-1 invisible focus:border transition-translate duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]"
                            />
                            <ul className="flex items-center">
                                <li className="mr-2">
                                    <a
                                        className="font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                                        href="/"
                                    >
                                        <svg
                                            role="img"
                                            className="icon icon-LogoBetter2021"
                                            width="65px"
                                            height="20px"
                                            viewBox="0 0 495 133"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Better</title>
                                            <path
                                                d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-5 hidden xl:block">
                                    <div className="group relative">
                                        <span className="">
                                            <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                                                Buy
                                            </button>
                                        </span>
                                        <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                            <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                                <div>
                                                    <a
                                                        href="/preapproval/nxt-purchase"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Apply now
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/mortgage-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Purchase rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/how-much-house-can-i-afford"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Affordability calculator
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/mortgage-calculator"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Mortgage calculator
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/rent-vs-buy-calculator/"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Rent vs buy calculator
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/find-an-agent"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Find an agent
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/va-loan"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        VA loans
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/content"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Learning center
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mx-5 hidden xl:block">
                                    <div className="group relative">
                                        <span className="">
                                            <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                                                Refinance
                                            </button>
                                        </span>
                                        <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                            <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                                <div>
                                                    <a
                                                        href="/preapproval/nxt-refinance"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Apply Now
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/refinance-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Refinance rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/content/refinance-calculator/"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Cash-out refinance calculator
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/content"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Learning Center
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mx-5 hidden xl:block">
                                    <div className="group relative">
                                        <span className="">
                                            <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                                                HELOC
                                            </button>
                                        </span>
                                        <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                            <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                                <div>
                                                    <a
                                                        href="/preapproval/nxt-heloc"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Apply Now
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/heloc-calculator"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Calculate your Cash 💵
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/heloc-vs-cashout-refi-calculator"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        HELOC vs. Cash-out Refinance
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/content"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Learning Center
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mx-5 hidden xl:block">
                                    <div className="group relative">
                                        <span className="">
                                            <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                                                Rates
                                            </button>
                                        </span>
                                        <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                            <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                                <div>
                                                    <a
                                                        href="/mortgage-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Purchase mortgage rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/refinance-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Refinance rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/cash-out-refinance-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Refinance cash-out rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/heloc-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        HELOC rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/va-loan-rates"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Purchase VA rates
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mx-5 hidden xl:block">
                                    <div className="group relative">
                                        <span className="">
                                            <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                                                Better+
                                            </button>
                                        </span>
                                        <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                            <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                                <div>
                                                    <a
                                                        href="https://www.bettercover.com/"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Get Insurance
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/title"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Title and Closing
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/b/attorney-match"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Better Attorney Match
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/content"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Learning Center
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/b/better-real-estate-partner-agents"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Better Agent Match
                                                        <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">
                                                            For Agents
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/b/duo"
                                                        className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between "
                                                    >
                                                        Better Duo
                                                        <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">
                                                            For Agents
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="m12 5 7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex items-center gap-3 lg:gap-6">
                            <li className="">
                                <div className="group min-[520px]:relative">
                                    <div className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary">
                                        <svg
                                            width={19}
                                            height={18}
                                            viewBox="0 0 19 18"
                                            className="transition-all ease-in-out group-hover:[&_path]:fill-interactiveForegroundInversePrimary h-3 w-3 md:h-4 md:w-4"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                                                fill="#292B29"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                                        <div className=" bg-backgroundTertiary px-10 py-7 rounded-base w-80 shadow-md">
                                            Call us anytime at{/* */}{" "}
                                            <a
                                                className="underline hover:text-textHighlight"
                                                href="tel:4155238837"
                                            >
                                                415-523-8837
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="transition-all duration-500 ease-in hidden">
                                <a
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary py-3 w-auto h-8 px-4 md:px-6 md:h-12"
                                    href="/start"
                                >
                                    Get started
                                </a>
                            </li>
                            <li>
                                <button
                                    className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary"
                                    aria-label="open mobile nav bar"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-menu "
                                    >
                                        <line x1={4} x2={20} y1={12} y2={12} />
                                        <line x1={4} x2={20} y1={6} y2={6} />
                                        <line x1={4} x2={20} y1={18} y2={18} />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="bg-successBackground py-16">
                    <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                        <div className="flex·flex-col·justify-between·gap-x-lg">
                            <div className="flex-1">
                                <h1 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter">
                                    Mortgage calculator
                                </h1>
                                <p className="font-normal leading-body m-0 p-0 text-left text-base my-lg pb-base text-textSecondary lg:max-w-3xl">
                                    Use our mortgage calculator built directly into it! Get accurate
                                    estimates for your monthly mortgage payments if you will be required
                                    to have private mortgage insurance (PMI). Also learn why
                                </p>
                                <div className="mb-lg flex w-full items-end gap-base">
                                    <div className="grow">
                                        <div className="w-full max-w-[300px]">
                                            <label
                                                className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base"
                                                htmlFor="home-price"
                                            >
                                                Home price
                                            </label>
                                            <div className="z-0 relative w-full text-lg md:text-[40px]">
                                                <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl lg:h-4xl">
                                                    <div
                                                        aria-hidden="true"
                                                        data-testid="input-icon-box"
                                                        className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 text-xl lg:text-3xl w-lg h-lg flex items-center justify-center lg:top-[30px] left-xs"
                                                    >
                                                        $
                                                    </div>
                                                    <input
                                                        data-qa="home-price"
                                                        name="home-price"
                                                        type="tel"
                                                        data-labelalign="top"
                                                        id="input-"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        aria-invalid="false"
                                                        className="text-left relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border pl-[32px] text-xl lg:text-3xl"
                                                        defaultValue="300,000"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="w-full max-w-[300px]">
                                            <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base">
                                                Monthly payment
                                            </p>
                                            <p
                                                className="leading-body m-0 p-0 text-left my-lg flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl"
                                                data-qa="monthly-payment"
                                            >
                                                $1,529{/* */}/mo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <a
                                            className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                                            href="/preapproval/nxt-purchase"
                                        >
                                            Get pre-approved
                                        </a>
                                    </div>
                                </div>
                                <div className="relative mx-lg mt-8 mb-lg">
                                    <input
                                        type="range"
                                        min={50000}
                                        max={3000000}
                                        step={100}
                                        className="bg-textPrimary [&::-webkit-slider-thumb]:bg-textPrimary rounded-base w-full cursor-pointer appearance-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-moz-range-track]:h-2 [&::-moz-range-track]:w-full [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:dark:bg-neutral-700"
                                        id="min-and-max-range-slider-usage"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(to right, rgb(41, 43, 41) 8.47457627118644%, #c8c9c6 8.47457627118644% 100%)"
                                        }}
                                        defaultValue={300000}
                                    />
                                </div>
                                <div className="mt-xl hidden md:block">
                                    <div className="gap-x-5xl gap-y-px lg:flex">
                                        <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                                            <div className="flex-1">
                                                <div className="z-0 relative">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <label
                                                            htmlFor="input-"
                                                            id="-label"
                                                            className="text-base font-bold leading-body text-interactiveForegroundMuted absolute top-[20px] left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1"
                                                        >
                                                            ZIP code
                                                        </label>
                                                        <input
                                                            maxLength={5}
                                                            type="tel"
                                                            data-labelalign="top"
                                                            id="input-"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-1">
                                                <div className="w-9/12 ">
                                                    <div className="z-0 relative [&>div:first-of-type]:rounded-r-none">
                                                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                            <label
                                                                htmlFor="input-"
                                                                id="-label"
                                                                className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                                                            >
                                                                Down payment
                                                            </label>
                                                            <div
                                                                aria-hidden="true"
                                                                data-testid="input-icon-box"
                                                                className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] left-xs"
                                                            >
                                                                $
                                                            </div>
                                                            <input
                                                                data-qa="downpayment"
                                                                name="downpayment"
                                                                type="tel"
                                                                data-labelalign="top"
                                                                id="input-"
                                                                autoCapitalize="off"
                                                                autoCorrect="off"
                                                                aria-invalid="false"
                                                                className="text-left px-sm pb-none pl-[32px] pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                                defaultValue="60,000"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-3/12 min-w-3xl">
                                                    <div className="z-0 relative flex [&>div:first-of-type]:rounded-l-none [&>div:first-of-type]:border-l-0">
                                                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                            <div
                                                                aria-hidden="true"
                                                                data-testid="input-icon-box"
                                                                className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center right-xs"
                                                            >
                                                                %
                                                            </div>
                                                            <input
                                                                data-qa="down-payment-ratio"
                                                                data-labelalign="top"
                                                                id="input-"
                                                                autoCapitalize="off"
                                                                autoCorrect="off"
                                                                className="text-left px-sm pb-none relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                                defaultValue={20}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                                            <div className="flex-1">
                                                <div className="z-0 relative">
                                                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                                        <label
                                                            htmlFor="input-"
                                                            id="-label"
                                                            className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                                                        >
                                                            Interest rate
                                                        </label>
                                                        <div
                                                            aria-hidden="true"
                                                            data-testid="input-icon-box"
                                                            className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] right-xs"
                                                        >
                                                            %
                                                        </div>
                                                        <input
                                                            data-labelalign="top"
                                                            id="input-"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                            defaultValue="6.500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="relative w-full">
                                                    <label
                                                        className="leading-body m-0 p-0 text-left text-interactiveForegroundMuted absolute left-base origin-top-left transition-all duration-300 ease-in-out z-1 top-[7px] text-xs font-normal"
                                                        htmlFor=""
                                                    >
                                                        Length of loan
                                                    </label>
                                                    <select
                                                        id=""
                                                        className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-backgroundTertiary outline-none rounded-base border border-solid border-strokeBorder px-base w-full h-3xl p-2xs pb-none pt-base duration-300 ease-in-out z-0 focus:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] focus:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_3px_inset] hover:shadow-accentBorderSecondary flex-1"
                                                    >
                                                        <option value={30} label="30 years" selected="">
                                                            30 years
                                                        </option>
                                                        <option value={20} label="20 years">
                                                            20 years
                                                        </option>
                                                        <option value={15} label="15 years">
                                                            15 years
                                                        </option>
                                                    </select>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-xs"
                                                    >
                                                        <path d="M7 9.5L12 14.5L17 9.5H7Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginBottom: "spacing.xsmall",
                                            rowGap: "spacing.xsmall"
                                        }}
                                    >
                                        <a
                                            className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                                            href="/preapproval/nxt-purchase"
                                        >
                                            Get pre-approved
                                        </a>
                                    </div>
                                    <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl mt-lg flex w-full items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-plus "
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>{" "}
                                        Add details
                                    </button>
                                    <div
                                        className="p-base bg-backgroundPrimary px-lg shadow-lg fixed left-0 top-[70px] w-full z-[10000] invisible opacity-0"
                                        data-qa="mobile-header"
                                        style={{
                                            transition:
                                                "opacity $$motion.easing.universal $$motion.timing.T3 0s, visibility 0s $$motion.timing.T4"
                                        }}
                                    >
                                        <div className="grid grid-cols-2 gap-xl">
                                            <div>
                                                <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                                                    Home price
                                                </p>
                                                <p
                                                    className="leading-body m-0 p-0 text-base rounded-base bg-interactiveForegroundSecondary py-xs text-center font-bold text-textInversePrimary"
                                                    data-qa="mobile-header-home-price"
                                                >
                                                    $300,000
                                                </p>
                                            </div>
                                            <div>
                                                <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                                                    Monthly payment
                                                </p>
                                                <p
                                                    className="leading-body m-0 p-0 text-left text-textSecondary text-base pt-xs font-bold"
                                                    data-qa="mobile-header-monthly-payment"
                                                >
                                                    $1,529{/* */}/mo
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-accentBorderInverseSecondary pt-4xl">
                    <div class="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                        <div class="grid md:grid-cols-2">
                            <div>
                                <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                                    Monthly payment breakdown
                                </h4>
                                <p
                                    className="leading-body m-0 p-0 text-left mt-lg overflow-hidden text-3xl font-bold text-textPrimary"
                                    data-testid="sum"
                                >
                                    $1{/* */}/mo
                                </p>
                                <div className="mt-2xl">
                                    <svg
                                        height={100}
                                        id="svgelem"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            data-testid="principalPill"
                                            height={80}
                                            rx="0.5"
                                            ry="0.5"
                                            className="duration-300 ease-in-out fill-backgroundInverseSecondary"
                                            width={1}
                                            x={0}
                                            y={0}
                                        />
                                        <rect
                                            data-testid="taxesPill"
                                            height={80}
                                            rx="0.5"
                                            ry="0.5"
                                            className="duration-300 ease-in-out fill-infoSecondary"
                                            width={1}
                                            x={1}
                                            y={0}
                                        ></rect>
                                        <rect
                                            data-testid="insurancePill"
                                            height={80}
                                            rx="0.5"
                                            ry="0.5"
                                            className="duration-300 ease-in-out fill-graph2Tertiary"
                                            width={1}
                                            x={2}
                                            y={0}
                                        ></rect>
                                        <rect
                                            data-testid="hoaPill"
                                            height={80}
                                            rx="0.5"
                                            ry="0.5"
                                            className="duration-300 ease-in-out fill-graph4Tertiary"
                                            width={1}
                                            x={3}
                                            y={0}
                                        ></rect>
                                        <rect
                                            data-testid="utilitiesPill"
                                            height={80}
                                            rx="0.5"
                                            ry="0.5"
                                            className="duration-300 ease-in-out fill-graph3Tertiary"
                                            width={1}
                                            x={4}
                                            y={0}
                                        ></rect>
                                        0
                                    </svg>
                                    <div className="md: block p-lg mt-2xl rounded-base shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-0 duration-300 ease-in-out">
                                        <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mb-lg">.</h4>
                                        <p
                                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                            data-testid="description"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="flex justify-between h-3xl mb-base">
                                    <div className="flex items-center text-textPrimary w-1/2">
                                        <div className="rounded-sm h-base w-[5px] mr-xs bg-backgroundInverseSecondary" />
                                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                                            Principal &amp; interest
                                        </p>
                                    </div>
                                    <p
                                        className="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-interactiveForegroundSecondary"
                                        data-testid="principal-&-interest"
                                    >
                                        $600
                                    </p>
                                </div>
                                <div className="flex justify-between h-3xl mb-base">
                                    <div className="flex items-center text-textPrimary w-1/2">
                                        <div className="rounded-sm h-base w-[5px] mr-xs bg-infoSecondary" />
                                        <label
                                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                            htmlFor="input-taxes"
                                            id="taxes-label"
                                        >
                                            Property taxes
                                        </label>
                                    </div>
                                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                            <div
                                                aria-hidden="true"
                                                data-testid="input-icon-box"
                                                className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                            >
                                                $
                                            </div>
                                            <input
                                                aria-describedby="-help-text"
                                                name="taxes"
                                                type="number"
                                                data-labelalign="top"
                                                id="input-"
                                                autoCapitalize="off"
                                                autoCorrect="off"
                                                aria-errormessage="-help-text"
                                                className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                defaultValue={265}
                                            />
                                        </div>
                                        <div
                                            className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                            id="-help-text"
                                        >
                                            {" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between h-3xl mb-base">
                                    <div className="flex items-center text-textPrimary w-1/2">
                                        <div className="rounded-sm h-base w-[5px] mr-xs bg-graph2Tertiary" />
                                        <label
                                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                            htmlFor="input-insurance"
                                            id="insurance-label"
                                        >
                                            Homeowners insurance
                                        </label>
                                    </div>
                                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                            <div
                                                aria-hidden="true"
                                                data-testid="input-icon-box"
                                                className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                            >
                                                $
                                            </div>
                                            <input
                                                aria-describedby="-help-text"
                                                name="insurance"
                                                type="number"
                                                data-labelalign="top"
                                                id="input-"
                                                autoCapitalize="off"
                                                autoCorrect="off"
                                                aria-errormessage="-help-text"
                                                className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                defaultValue={132}
                                            />
                                        </div>
                                        <div
                                            className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                            id="-help-text"
                                        >
                                            {" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between h-3xl mb-base">
                                    <div className="flex items-center text-textPrimary w-1/2">
                                        <div className="rounded-sm h-base w-[5px] mr-xs bg-graph4Tertiary" />
                                        <label
                                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                            htmlFor="input-hoa"
                                            id="hoa-label"
                                        >
                                            HOA fees
                                        </label>
                                    </div>
                                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                                            <div
                                                aria-hidden="true"
                                                data-testid="input-icon-box"
                                                className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                                            >
                                                $
                                            </div>
                                            <input
                                                aria-describedby="-help-text"
                                                name="hoa"
                                                type="number"
                                                data-labelalign="top"
                                                id="input-"
                                                autoCapitalize="off"
                                                autoCorrect="off"
                                                aria-errormessage="-help-text"
                                                className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                                                defaultValue={132}
                                            />
                                        </div>
                                        <div
                                            className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                                            id="-help-text"
                                        >
                                            {" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-lg" data-orientation="vertical">
                                    <div data-state="closed" data-orientation="vertical" className="">
                                        <h3 data-orientation="vertical" data-state="closed" className="flex">
                                            <button
                                                type="button"
                                                aria-controls="radix-:R5d6m:"
                                                aria-expanded="false"
                                                data-state="closed"
                                                data-orientation="vertical"
                                                id="radix-:R1d6m:"
                                                className="flex flex-1 items-center justify-between py-4 font-bold transition-all [&[data-state=open]>svg]:rotate-180"
                                                data-radix-collection-item=""
                                            >
                                                <div
                                                    className="flex justify-between h-3xl h-auto mb-0 w-full"
                                                    data-testid="open-utilities"
                                                >
                                                    <div className="flex items-center text-textPrimary w-auto">
                                                        <div className="rounded-sm h-base w-[5px] mr-xs bg-graph3Tertiary"></div>
                                                        <p
                                                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                                                            id="utilities-label"
                                                        >
                                                            Utilities
                                                        </p>
                                                    </div>
                                                    <span className="leading-body m-0 p-0 text-textPrimary text-base w-[144px] text-left font-bold">
                                                        $100
                                                    </span>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>
                                        </h3>
                                    </div>
                                </div>
                                <button
                                    className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto mb-xs"
                                    data-testid="copyLink"
                                >
                                    Copy estimate link
                                </button>



                            </div>

                        </div>
                    </div>
                </section>

                <div className="bg-accentBorderInverseSecondary">
                    <section
                        id="seo-section-wrapper"
                        className="gap-x-lg [&>p]:text-textSecondary py-16 md:flex-row [&>h2]:mb-xl [&>h3]:my-lg [&>p]:my-sm m-auto max-w-screen-2xl justify-between px-6 md:px-14"
                    >
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How does a mortgage calculator help me?
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            When deciding how much house you can afford, one of the most important
                            pieces to determine is whether a home will fit into your monthly budget. A
                            mortgage calculator helps you understand the monthly cost of a home. And
                            ours will allow you to enter different down payments and interest rates to
                            help determine what is affordable for you.
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How much monthly mortgage payment can I afford?
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Lenders determine how much you can afford on a monthly housing payment by
                            calculating your{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/what-is-a-good-debt-to-income-ratio"
                            >
                                debt-to-income ratio (DTI)
                            </a>
                            . The maximum DTI you can have in order to qualify for most mortgage loans
                            is often between 45-50%, with your anticipated housing costs included.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Your DTI is the balance between your income and your debt. It helps
                            lenders understand how safe or risky it is for them to approve your loan.
                            A DTI ratio represents how much of your gross monthly income is spoken for
                            by creditors, and how much of it is left over to you as disposable income.
                            It’s most commonly written as a percentage. For example, if you pay half
                            your monthly income in debt payments, you would have a DTI of 50%.
                        </p>
                        <div className="flex flex-col items-center">
                            <div>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                    Formula for calculating your debt-to-income (DTI) ratio:
                                </p>
                                <img
                                    alt="Mortgage calculator | Debt to income ratio (DTI) formula"
                                    loading="lazy"
                                    width={780}
                                    height={153}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    src="images/dti-formula.jpg"
                                />
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                    Here’s an example of what calculating your DTI might look like:
                                </p>
                                <img
                                    alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
                                    loading="lazy"
                                    width={780}
                                    height={525}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    src="images/dti-example.jpg"
                                />
                            </div>
                        </div>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How to calculate monthly mortgage payments{/* */}?
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Your monthly mortgage payment includes loan principal and interest,
                            property taxes, homeowners insurance, and mortgage insurance (PMI), if
                            applicable. While not typically included in your mortgage payment,
                            homeowners also pay monthly utilities and sometimes pay homeowners
                            association (HOA) fees, so it’s a good idea to factor these into your
                            monthly budget. This mortgage calculator factors in all these typical
                            monthly costs so you can really crunch the numbers.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            Formula for calculating monthly mortgage payments
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The easiest way to calculate your mortgage payment is to use a calculator,
                            but for the curious or mathematically inclined, here’s the formula for
                            calculating principal and interest yourself:
                        </p>
                        <div className="flex flex-col items-center">
                            <div>
                                <img
                                    alt="Mortgage calculator | Monthly mortgage payment formula"
                                    loading="lazy"
                                    width={780}
                                    height={126}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    src="images/monthly-mortgage-payments-formula.jpg"
                                />
                                <div>
                                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                        Where:
                                    </p>
                                    <ul className="ml-xl list-disc">
                                        <li>
                                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                                <b>M</b> is monthly mortgage payments
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                                <b>P</b> is the principal loan amount (the amount you borrow)
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                                <b>r</b> is the monthly interest rate
                                                <br />
                                                (annual interest rate divided by 12 and expressed as a decimal)
                                                <br />
                                                <small>
                                                    For example:
                                                    <br />
                                                    if the annual interest rate is <b>5%</b>,<br /> the monthly
                                                    rate would be <b>0.05/12</b> = .00417, or{/* */} <b>.417%</b>
                                                </small>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                                <b>n</b> is the total number of payments in months
                                                <br />
                                                <small>
                                                    For example:
                                                    <br />
                                                    for a 30-year loan, n = 30×12 = <b>360</b> months
                                                </small>
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm">
                                        Here’s a simple example:
                                    </p>
                                    <img
                                        alt="Mortgage calculator | Monthly mortgage payment formula example"
                                        loading="lazy"
                                        width={780}
                                        height={221}
                                        decoding="async"
                                        data-nimg={1}
                                        style={{ color: "transparent" }}
                                        src="images/monthly-mortgage-payments-example.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            This formula assumes a fixed-rate mortgage, where the interest rate
                            remains constant throughout the loan term. And remember, you’ll still need
                            to add on taxes, insurance, utilities, and HOA fees if applicable.
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            How to use this mortgage calculator?
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Play around with different home prices, locations,{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/faq/loan-process/down-payment-definition"
                            >
                                down payments
                            </a>
                            , interest rates, and mortgage lengths to see how they impact your monthly
                            mortgage payments.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Increasing your down payment and decreasing your interest rate and
                            mortgage term length will make your monthly payment go down. Taxes,
                            insurance, and HOA fees will vary by location. If you enter a down payment
                            amount that’s less than 20% of the home price,{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/what-is-pmi-or-private-mortgage-insurance"
                            >
                                private mortgage insurance (PMI)
                            </a>{" "}
                            {/* */}costs will be added to your monthly mortgage payment. As the costs
                            of utilities can vary from county to county, we’ve included a utilities
                            estimate that you can break down by service. If you’re thinking about
                            buying a condo or into a community with a Homeowners Association (HOA),
                            you can add HOA fees.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The only amounts we haven’t included are the money you’ll need to save for
                            annual home maintenance/repairs or the costs of home improvements. To see
                            how much home you can afford including these costs, take a look at the
                            {/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/how-much-house-can-I-afford"
                            >
                                Better home affordability calculator
                            </a>
                            .
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Fun fact:{/* */}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/how-to-calculate-property-tax-on-a-house"
                            >
                                Property tax rates
                            </a>{" "}
                            {/* */}are extremely localized, so two homes of roughly the same size and
                            quality on either side of a municipal border could have very different tax
                            rates. Buying in an area with a lower property tax rate may make it easier
                            for you to afford a higher-priced home.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            Do you know your property tax rate?
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            While exact property tax rates vary by county, it can be helpful to look
                            at taxes on the state level to get an idea for taxes in your state. Here’s
                            a helpful chart from{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state"
                            >
                                Forbes
                            </a>
                            {/* */}breaking down the Census Bureau’s 2021 American Community Survey
                            5-year estimate:
                        </p>
                        <div className="my-3xl">
                            <div
                                className="relative pointer group w-full h-full overflow-scroll"
                                tabIndex={0}
                            >
                                <table className="min-w-full border border-successAccent table-auto clip-inset-round">
                                    <thead className="">
                                        <tr>
                                            <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                    State
                                                </p>
                                            </th>
                                            <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                    Median Effective Property Tax Rate
                                                </p>
                                            </th>
                                            <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                    Mean Effective Property Tax Rate
                                                </p>
                                            </th>
                                            <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                    Median Home Value
                                                </p>
                                            </th>
                                            <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                                                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                                                    Median Property Taxes Paid
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="even:bg-successBackground">
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    AL
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.41%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.40%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $157,100
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $646
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="even:bg-successBackground">
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    AK
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    1.23%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    1.04%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $282,800
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $3,464
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="even:bg-successBackground">
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    AZ
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.62%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.63%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $265,600
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $1,648
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="even:bg-successBackground">
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    AR
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.62%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    0.64%
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $142,100
                                                </p>
                                            </td>
                                            <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                                                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                                                    $878
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
                                <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto hidden md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute">
                                    See all {/* */}states
                                </button>
                            </div>
                            <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl block md:hidden mt-base w-full">
                                See all {/* */}states
                            </button>
                        </div>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How is Better’s mortgage calculator different?
                        </h2>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            This {/* */}mortgage calculator shows your payments with taxes and
                            insurance
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The property taxes you contribute are used to finance the services
                            provided by your local government to the community. These services
                            encompass schools, libraries, roads, parks, water treatment, police, and
                            fire departments. Even after your mortgage has been fully paid, you will
                            still need to pay property taxes. If you neglect your property taxes, you
                            run the risk of losing your home to your local tax authority.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Your lender will usually require you to have homeowners insurance while
                            you're settling your mortgage. This is a common practice among lenders
                            because they understand that nobody wants to continue paying a mortgage on
                            a home that's been damaged or destroyed.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Here's an interesting fact: Once you fully own your home, the choice to
                            maintain homeowners insurance is entirely up to you. However, to ensure
                            your home is protected against damages caused by fires, lightning strikes,
                            and natural disasters that are common in{/* */} {/* */}your area{/* */},
                            it is highly recommended to keep it. Therefore, always factor in these
                            costs when using a Mortgage Calculator{/* */}.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            This {/* */}mortgage calculator shows your mortgage costs with PMI
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            PMI, an abbreviation for private mortgage insurance, aids potential
                            homeowners in qualifying for a mortgage without the necessity of a 20%
                            down payment. By opting for a lower down payment and choosing a mortgage
                            with PMI, you can purchase a home sooner, begin accruing equity, and keep
                            cash available for future needs. This can all be calculated using this{" "}
                            {/* */}Mortgage Calculator.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Choosing a mortgage with PMI is a popular option:{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="https://cdn.nar.realtor/sites/default/files/documents/2021-07-realtors-confidence-index-08-23-2021.pdf"
                            >
                                71% of first-time homebuyers
                            </a>{" "}
                            {/* */}had a down payment of less than 20% in July 2021.{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="https://fortune.com/2021/08/31/down-payment-on-a-house-how-much-money-to-put-down"
                            >
                                In 2020, the median down payment for first-time homebuyers was just 7%,
                                and it hasn’t risen above 10% since 1989.
                            </a>
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            PMI is automatically removed from conventional mortgages once your home
                            equity reaches 22%. Alternatively, you can request the removal of PMI once
                            you've accumulated at least 20% home equity.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            This {/* */}mortgage calculator includes HOA fees
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Homeowners association (“HOA”) fees are typically charged directly by a
                            homeowners association, but as HOA fees come part and parcel with condos,
                            townhomes, and planned housing developments, they’re an essential factor
                            to consider when calculating your mortgage costs.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Homes{/* */} that share structural elements, such as roofs and walls, or
                            community amenities like landscaping, pools, or BBQ areas, often require
                            homeowners to pay HOA fees for the maintenance of these shared features.
                            It's important to factor in these costs during your budget planning stage,
                            especially considering that HOA fees typically increase annually.{/* */}{" "}
                            {/* */}HOAs may also charge additional fees known as ‘special assessments’
                            to cover unexpected expenses from time to time.
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How to reduce your monthly mortgage payments?
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The lower the purchase price of the home, the lower your loan amount will
                            be. But if the seller is less than willing to cut you a deal, you have
                            other options.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            Extend the length of your mortgage
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The more time you have to pay off the mortgage, the less each monthly
                            mortgage payment will be. (In lender-speak, ‘extending the length of your
                            mortgage’ is known as ‘increasing your loan term’.) This is why people
                            often choose a 30-year fixed rate mortgage over one with a 15- or 20-year
                            term.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            Increase your down payment
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The smaller the amount of your mortgage, the smaller your monthly mortgage
                            payments will be. If you’re able to put at least 20% of the home price
                            towards your{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/how-much-should-you-put-down-on-a-house"
                            >
                                down payment
                            </a>
                            , you’ll be able to avoid PMI (private mortgage insurance). Even if you
                            can’t afford a complete 20% down payment, boosting your down payment will
                            help you get PMI removed sooner. In fact, boosting your down payment by 5%
                            can lower your monthly PMI fees.
                        </p>
                        <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
                            Get a lower interest rate
                        </h3>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Increasing your down payment can be one way to help you qualify for a
                            lower interest rate. The amount of your down payment compared to the total
                            amount of the loan is called your{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/3-most-important-numbers-mortgage-application"
                            >
                                loan-to-value ratio (LTV)
                            </a>
                            .
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Depending on your loan amount, a lower LTV may increase the likelihood of
                            you being offered a low interest rate. If you intend on keeping your home
                            for a while, you could consider buying{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/points-credits-and-how-to-decide-if-theyre-right-for-you"
                            >
                                points
                            </a>
                            {/* */}to reduce your interest rate. Buying points essentially means you
                            agree to pay more upfront costs in exchange for a lower monthly payment.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            If you think you may sell or refinance the home in the first 5-10 years of
                            the mortgage, you could consider an{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/so-youre-considering-an-adjustable-rate-mortgage"
                            >
                                adjustable-rate mortgage (ARM)
                            </a>
                            . An ARM offers a lower fixed interest rate for a set introductory
                            period—typically 5, 7, or 10 years. Once the set introductory period ends,
                            the interest rate adjusts (interest rate may increase after consummation).
                            The introductory interest rate for ARMs is typically lower than the
                            interest rate for a conventional fixed-rate mortgage which could make it a
                            great way to save on interest if you know you won’t keep the mortgage for
                            long.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            If you’re not planning on buying a home for a while, improving your credit
                            score is a tried and true way of increasing your chances of qualifying for
                            a lower interest rate. By reducing your{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/3-most-important-numbers-mortgage-application"
                            >
                                debt-to-income ratio (DTI)
                            </a>
                            , lenders will see that you comfortably afford your mortgage and may be
                            more willing to offer a lower interest rate.
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            How much home can I afford?
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            Once again, the easiest way to do this is with a calculator! To know if a
                            home is in your budget, try out our{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/how-much-house-can-I-afford"
                            >
                                home affordability calculator
                            </a>
                            . This calculator will take a few inputs from you, like income and
                            savings, and let you know the maximum amount of home you can afford.
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                            Next steps to buying a house
                        </h2>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            There are{/* */}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/steps-to-buying-a-house"
                            >
                                8 steps to buying a house
                            </a>{" "}
                            {/* */}and by using this calculator you’ve completed step 2 (calculating
                            your home affordability) and maybe even step 1 (getting your finances in
                            order).
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            The next step is getting pre-approved. A mortgage pre-approval with Better
                            Mortgage takes as little as 3-minutes and doesn’t impact your credit
                            score. It’s a free, no-commitment way to see how much home you can buy,
                            the mortgages you qualify for, and the range of interest rates you’ll be
                            offered.
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                            If you’re ready to buy a home now, our{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/content/the-definitive-home-buying-checklist"
                            >
                                definitive home buying checklist
                            </a>
                            {/* */}can walk you through everything you need to know to get the home
                            you want. With your Better Mortgage pre-approval letter in hand, you’ll be
                            able to show sellers and real estate agents that you mean business—giving
                            you an edge over homebuyers that don’t have this kind of proof that
                            they’re financially ready to purchase. And by working with an agent from
                            Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on
                            closing costs, and save up to $8,200 on average over the life of your
                            loan.**
                        </p>
                        <hr className="my-12 border-t border-strokeDivider" />
                        <section>
                            <div>
                                <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                                    More resources
                                </h2>
                                <div className="flex flex-col justify-between gap-2xl pt-[36px] md:flex-row">
                                    <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                        <img
                                            alt="Get pre-approved to see how much you can borrow"
                                            loading="lazy"
                                            width={32}
                                            height={32}
                                            decoding="async"
                                            data-nimg={1}
                                            style={{ color: "transparent" }}
                                            src="images/doc-correct.svg"
                                        />
                                        <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                            <span>Get pre-approved to see how much you can borrow</span>
                                        </p>
                                        <a
                                            className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                            href="/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=calculator&utm_content=mortgage-calculator"
                                        >
                                            Get started{/* */} →
                                        </a>
                                        <p className="font-normal leading-body m-0 p-0 text-left text-xs text-textSecondary">
                                            Won’t impact your credit
                                        </p>
                                    </div>
                                    <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                        <img
                                            alt="See today’s rates in your area"
                                            loading="lazy"
                                            width={32}
                                            height={32}
                                            decoding="async"
                                            data-nimg={1}
                                            style={{ color: "transparent" }}
                                            src="images/downtrend.svg"
                                        />
                                        <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                            <span>See today’s rates in your area</span>
                                        </p>
                                        <a
                                            className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                            href="/mortgage-rates"
                                        >
                                            See rates{/* */} →
                                        </a>
                                    </div>
                                    <div className="rounded-base px-xl py-lg border border-strokeDivider flex-1">
                                        <img
                                            alt="Find out your max homebuying budget"
                                            loading="lazy"
                                            width={32}
                                            height={32}
                                            decoding="async"
                                            data-nimg={1}
                                            style={{ color: "transparent" }}
                                            src="images/calculator.svg"
                                        />
                                        <p className="font-normal leading-body m-0 p-0 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
                                            <span>Find out your max homebuying budget</span>
                                        </p>
                                        <a
                                            className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline"
                                            href="/how-much-house-can-i-afford"
                                        >
                                            Try our mortgage calculator{/* */} →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="pb-lg m-auto max-w-screen-2xl justify-between px-6 md:px-14">
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                            *See{/* */}{" "}
                            <a
                                className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
                                href="/faq/rates/whats-the-fine-print-better-real-estate"
                            >
                                Better Real Estate discount terms and conditions
                            </a>
                            .
                        </p>
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
                            **The average lifetime savings estimate is based on a comparison of the
                            Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate
                            mortgage product with Better Mortgage’s own offered rate for a comparable
                            mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional,
                            conforming fully-amortizing home purchase loans for borrowers with a
                            loan-to-value of 80 percent and with excellent credit. Better Mortgage’s
                            offered rate is based on pricing output for a 30-year fixed-rate mortgage
                            product with a 30-day lock period for a single-family, owner-occupied
                            residential property and a borrower with excellent (760 FICO) credit and a
                            loan-to-value ratio of 80 percent. Individual savings could vary based on
                            current market rates, property type, loan amount, loan-to-value, credit
                            score, debt-to-income ratio and other variables.
                        </p>
                    </section>
                </div>

            </main>
        </div>

        </>
    )
}

export default Calculator