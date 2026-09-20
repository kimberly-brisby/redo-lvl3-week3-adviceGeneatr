import AdviceButton from "./AdviceButton";
import diceImg from "../../src/assets/icon-dice.svg";
import desktopImg from "../../src/assets/pattern-divider-desktop.svg";
import mobileImg from "../../src/assets/pattern-divider-mobile.svg";

function AdviceCard({adviceId, AdviceText, onGenerateAdvice}){
    return(
        

 <div class="container">

    <article className="advice-card" aria-labelledby="advice-heading">
            <p className="advice-card_eyebrow" id="advice-heading">
                Advice #{adviceId}
            </p>
     
        <img src={desktopImg}  alt="desktop" id="desktop" />
        <div className="dice" onClick={getAdvice}>
            <img src={diceImg} alt="dice" id="dice" />
        </div>
      
  
            <blockQuote className="advice-card_quote">"{AdviceText}"</blockQuote>

            <piture className="advice-card_divider" aria-hidden="true">
                <source
                media="{min-width:36rem}"
                srcSet={desktopImg}
                />
                <img src={mobileImg} alt="mobile" />
            </piture>

            <AdviceButton onClick={onGenerateAdvice} />
        </article>
  </div>      
    );
}

export default AdviceCard;