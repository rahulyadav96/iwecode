import "../styles/calculator.css";
import {Button} from "./Button"
export const Calculator = ()=>{
    return <>
            <div className="calculator">
                <div className="container">
                    <div className="top">
                        <div className="title">Calculator</div>
                        <div className="cancel"><img src="./images/icon.svg" alt="cancel_icon"/></div>
                    </div>
                    <div className="case_usd">
                        <div className="cake">
                                <span> <img src="./images/icon-round-512.svg" alt=""/></span> <span>Cake</span>
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
                        
                    </div>
                </div>
            </div>
    </>
}