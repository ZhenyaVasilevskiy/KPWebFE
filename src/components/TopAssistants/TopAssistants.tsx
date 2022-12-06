import ButtonGroup from "../common/ButtonGroup/ButtonGroup";
import "./TopAssistants.css"
import TopAssistantImage from "../../images/TopAssistant.svg"
const TopAssistants = () => {
    return(
    <div className="TopAssistantsWrapper">
        <div className="TopAssistantsContent">
            <h2 className="TopAssistantsHeadline">TOP ASSISTANTS</h2>
            <ButtonGroup/>
            <div className="topAssistantCard">
                <img src={TopAssistantImage} alt="" />
                <div className="cardTextData">
                    <p>
                        qweqwe
                    </p>
                    <p>
                        qweqwe
                    </p>
                </div>
            </div>
            <div className="topAssistantCard">
                <img src={TopAssistantImage} alt="" />
                <div className="cardTextData">
                    <p>
                    Islam Kara
                    </p>
                    <p>
                    USA, Los Angeles  •  29.12.1997
                    </p>
                </div>
            </div>
        </div>
    </div>)
}

export default TopAssistants;