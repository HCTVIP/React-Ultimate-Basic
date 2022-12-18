import CountDown from "./CountDown";
import { useRef } from 'react';

const RightContent = (props) => {

    const {dataQuiz} = props;
    const refDiv = useRef([]);
    
    const onTimeUp = () => {
        props.handleFinishQuiz();
    }

    const getClassQuestion = (question, index) => {
        if(question && question.answers.length > 0) {
            let isUnAnswered = question.answers.some(answer => 
                answer.isSelected === true
            )
            if(isUnAnswered) {
                return "question selected";
            }
        }
        return "question"
    }

    const handleClickQuestion = (question, index) => {
        if(refDiv.current) {
            refDiv.current.forEach(item => 
                {
                    if(item && item.className === "question clicked") {
                        item.className = "question"
                    }
                }
            )
        }
        props.setIndex(index)
        if(question && question.answers.length > 0) {
            let isUnAnswered = question.answers.some(answer => 
                answer.isSelected === true
            )
            if(isUnAnswered) {
                return;
            }
        }
        refDiv.current[index].className="question clicked";
        props.setIndex(index);
    }
    
    return (
        <>
            <div className="main-timer">
                <CountDown onTimeUp={onTimeUp}/>
            </div>
            <div className="main-question">
                {dataQuiz && dataQuiz.length > 0 && dataQuiz.map((item,index) => {
                    return (
                        <div 
                            key={`question-abc-${index}`} 
                            className={getClassQuestion(item, index)}
                            onClick={() => handleClickQuestion(item,index)}
                            ref={el => refDiv.current[index] = el}
                        >
                            {index + 1}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RightContent;