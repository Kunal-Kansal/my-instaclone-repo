import React from "react";

export default function Nav() {
    return <>
        <header>
            <nav id="page-nav">
                <div>
                    <a href="/">
                        <div className="header-img-container-first"></div>
                    </a>
                    <a href="/form">
                        <div className="header-img-container-second"> </div>
                    </a>
                </div>
            </nav>
        </header>
    </>
}
