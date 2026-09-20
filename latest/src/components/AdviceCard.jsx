import AdviceButton from "./AdviceButton";

function AdviceCard({adviceId, AdviceText, onGenerateAdvice}){
    return(
        <article className="advice-card" aria-labelledby="advice-heading">
            <p className="advice-card_eyebrow" id="advice-heading">
                Advice #{adviceId}
            </p>

            <blockQuote className="advice-card_quote">"{AdviceText}"</blockQuote>

            <piture className="advice-card_divider" aria-hidden="true">
                <source
                media="{min-width:36rem}"
                srcSet="/images/pattern-divider-desktop.svg"
                />
                <img src="/images/pattern-divider-mobile.svg" alt="" />
            </piture>

            <AdviceButton onClick={onGenerateAdvice} />
        </article>
    );
}

export default AdviceCard;