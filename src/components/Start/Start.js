import React from 'react';
import './Css/start.css';

const Start = () => {
    return (
        <div className="container">
            <header className="header">
                <img src="logo.png" alt="Better Mortgage" className="logo" />
                <div className="help">
                    <svg className="phone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92V22a2 2 0 0 1-2.18 2A19.73 19.73 0 0 1 2 4.18 2 2 0 0 1 4 2h5.08a2 2 0 0 1 2 1.72l.7 5a2 2 0 0 1-1 2.12L8.87 12.3a15.72 15.72 0 0 0 6.88 6.88l1.4-1.4a2 2 0 0 1 2.12-1l5 .7a2 2 0 0 1 1.72 2Z"></path>
                    </svg>
                    <span>Need help? Call (415) 523 8837</span>
                </div>
            </header>

            <main className="main">
                <div className="profile">
                    <img src="profile.jpg" alt="Betty" className="profile-pic" />
                    <h1>Hi, I'm Betty!</h1>
                    <p>What can I help you with?</p>
                </div>

                <div className="options">
                    <button className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                            <path d="M3 12l2-2m0 0l7-7 7 7m-7 7v6"></path>
                            <path d="M5 10v10a1 1 0 0 0 1 1h3m10-11h-4a1 1 0 0 0-1 1v9m-4-10v10"></path>
                        </svg>
                        Buying a home
                    </button>
                    <button className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                            <path d="M3 12l2-2m0 0l7-7 7 7m-7 7v6"></path>
                            <path d="M5 10v10a1 1 0 0 0 1 1h3m10-11h-4a1 1 0 0 0-1 1v9m-4-10v10"></path>
                        </svg>
                        Refinance my mortgage
                    </button>
                    <button className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                            <path d="M3 12l2-2m0 0l7-7 7 7m-7 7v6"></path>
                            <path d="M5 10v10a1 1 0 0 0 1 1h3m10-11h-4a1 1 0 0 0-1 1v9m-4-10v10"></path>
                        </svg>
                        Get cash from my home
                    </button>
                </div>
            </main>

            <footer className="footer">
                <div className="stats">
                    <div>
                        <span className="amount">$100B</span>
                        <span>home loans funded entirely online</span>
                    </div>
                    <div>
                        <span className="customers">400K</span>
                        <span>customers who chose a Better Mortgage</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Start;