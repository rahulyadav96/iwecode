import { useState } from "react";
import "../styles/calculator.css";
import { Button } from "./Button"

export const Calculator = () => {
    const [pencileClick, setPencilClick] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const handlePencilClick = () => {
        setPencilClick(!pencileClick);
    }
    const handleShow = () => {
        setShowDetails(!showDetails);
    }
    return <>
        <div className="calculator">
            <div className="container">
                <div className="top">
                    <div className="title">Calculator</div>
                    <div className="cancel"><img src="./images/icon.svg" alt="cancel_icon" /></div>
                </div>
                <div className="case_usd">
                    <div className="cake">
                        <span> <img src="./images/icon-round-512.svg" alt="" /></span> <span>Cake</span>
                    </div>

                    <div className="usd">
                        <div className="toggle">
                            <span className="spot"></span>
                        </div>
                        <span>USD</span>
                    </div>
                </div>

                <div className="cake-input-wrapper">
                    <div className="cake-inputbox">2.10000 CAKE </div>
                    <div className="cake-bottom">
                        <div className="doller-tag-container">
                            <div className="doller-tag default-selected-cake">USE BALANCE</div>
                            <div className="doller-tag">$1000</div>
                            <div className="doller-tag">$100</div>
                        </div>
                        <div className="variable-discount">~ $20.82</div>
                    </div>

                </div>
                <div className="timeframe">
                    <div className="timeframe-title">Timeframe</div>
                    <div className="tag-container">
                        <div className="tag default">1 Day</div>
                        <div className="tag">7 Days</div>
                        <div className="tag">30 Days</div>
                        <div className="tag">1 Year</div>
                        <div className="tag">5 Years</div>
                    </div>

                </div>

                <div className="enable-acc">
                    <div className="enable-title">Enable Accelerated APY</div>
                    <div className="enable-toggle">
                        <span className="enable-spot"></span>
                    </div>
                </div>

                <div className="select-tier-container">
                    <div className="tier-title">Select Tier</div>
                    <div className="tag-container">
                        <div className="tag">Teir 1</div>
                        <div className="tag">Teir 2</div>
                        <div className="tag">Teir 3</div>
                        <div className="tag default">Teir 4</div>
                        <div className="tag">Teir 5</div>
                    </div>
                </div>

                <div className="roi">
                    <div className="top-title-roi">ROI at Current Rates</div>
                    <div className={`pencile-container ${pencileClick ? "pencil_click" : ""}`} onClick={handlePencilClick}>
                        {
                            pencileClick ? <img src="./images/Essentials/Vector.svg" /> : <img src="./images/vector.svg" />
                        }

                        <span className="ammount">100.0 USD </span>
                    </div>
                    <div className="bottom-text-roi">~ 3CAKE + 10 DON</div>
                </div>

                <div className="button-container">
                    <Button >Apply</Button>
                    <Button style={{ backgroundColor: "#ffffff", color: "#000000", border: "1px solid #000000" }}>Cancel</Button>

                </div>

                <div className="bottom-info">
                    <div className="bottom-info-title" onClick={handleShow}>
                        
                        {showDetails?"Hide details":"Show details"} <span><img src="./images/arrow/coolicon.svg" alt="" /></span></div>
                    <div className={`hidden-info ${showDetails?"show":"hide"}`} >
                        <div className="hidden-title">
                            APY
                        </div>
                            <ul>
                                <li>Calculated based on current rates</li>
                                <li>All fugures are estimates provided for your convenience only,
                                    and by no means represent guaranted returns.</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}