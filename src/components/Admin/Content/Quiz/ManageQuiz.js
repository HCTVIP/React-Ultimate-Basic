import './ManageQuiz.scss';
import 'react-select';
import Select from 'react-select';
import { useState } from 'react';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
  ]

const ManageQuiz = (prop) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [type, settype] = useState("EASY");
    const [image, setImage] = useState(null);

    const handleChangeFile = (event) => {
    
    }

    return (
        <div className="quiz-container">
            <div className="title">
                Manage Quizzes
            </div>
            <hr/>
            <div className="add-new">
            
            </div>
            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz:</legend>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='your quiz name'
                        valaue={name}
                        onChange={event=> setName(event.target.value)}
                        />
                    <label >Name</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='description'
                        onChange={event=> setDescription(event.target.value)}
                    />
                    <label >Description</label>
                </div>
            </fieldset>
            <div className="my-3">
                <Select
                    type={type}
                    // defaultValue={selectedOption}
                    // onChange={setSelectedOption}
                    options={options}
                    placeholder="Quiz type..."
                />
            </div>
            <div className="more-actions form-group">
                <label className="mb-1">Upload Image</label>
                <input 
                    type="file" 
                    className="form-control"
                    onChange={event=> handleChangeFile(event)}
                />
            </div>
            <div className="list-detail">
                Table
            </div>
        </div>
    )
}

export default ManageQuiz;