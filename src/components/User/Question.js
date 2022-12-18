import _ from 'lodash';
import { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';

const Question = (props) => {
    const [isPreviewImage, setIsPreviewImage] = useState(false)
    const { data, index } = props;
    if(_.isEmpty(data)) {
        return (<></>)
    }

    const handleCheckBox = (event, aId, qId) => {
        props.handleCheckBox(aId, qId)
    }

    
    return (
        <>
        {data.image ?
            <div className="q-image">
                <img 
                style={{cursor: "pointer"}}
                onClick={() => setIsPreviewImage(true)}
                src={`data:image/jpeg;base64,${data.image}`}/>
                { isPreviewImage &&
                    <Lightbox 
                        onClose={() => setIsPreviewImage(false)}
                        image={`data:image/jpeg;base64,${data.image}`}
                        title={"Question Image"}
                    >
                    </Lightbox>
                }         
            </div>
            :
            <div className="q-image">

            </div>
        }
            <div className="question">Question {index + 1}: {data.questionDescription} ?</div>
            <div className="answer">
                {data.answers && data.answers.length && 
                data.answers.map((answer, index) => {
                    return (
                        <div 
                            key={`answer-${index}`}
                            className='a-child'
                        >
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    checked={answer.isSelected}
                                    onChange={(event) => handleCheckBox(event, answer.id, data.questionId)}
                                />
                                <label 
                                    className="form-check-label" 
                                >
                                    {answer.description}    
                                </label>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
        
    )
}

export default Question;