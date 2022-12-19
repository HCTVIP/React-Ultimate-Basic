import './DashBoard.scss'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from 'recharts';
import { getOverView } from '../../../services/apiServices';
import { useState, useEffect } from 'react';

const DashBoard = (props) => {

    const [dataOverView, setDataOverView] = useState([]);
    const [dataChart, setDataChart] = useState();

    useEffect (() => {
        fetchDataOverView();
    }, [])

    const fetchDataOverView = async () => {
        let res = await getOverView();
        if(res && res.EC === 0) {
            setDataOverView(res.DT)
            // process chart data
            const US = res?.DT?.users?.total;
            const QZ = res?.DT?.others?.countQuiz;
            const QS = res?.DT?.others?.countQuestions;
            const AS = res?.DT?.others?.countAnswers;
            const data = [
                {
                    "name": "User",
                    "US": US,
                },
                {
                  "name": "Quizzes",
                  "QZ": QZ,
                },
                {
                  "name": "Questions",
                  "QS": QS,
                },
                {
                  "name": "Answers",
                  "AS": AS,
                },
            ];
            setDataChart(data)
        }
    }

    return (
        <div className="dashboard-container">
            <div className="title"> DashBoard</div>
            <div className="content">
                <div className="c-left">
                    <div className="child">
                        <span className="text-1" >Total User</span>
                        <span className="text-2">{dataOverView && dataOverView.users && dataOverView.users.total 
                            ? 
                            <>{dataOverView.users.total}</> 
                            : 
                            <>0</>
                            }
                        </span>
                        </div>
                    <div className="child">
                        <span className="text-1">Total Quiz</span>
                        <span className="text-2">{dataOverView && dataOverView.others && dataOverView.others.countQuiz 
                            ? 
                            <>{dataOverView.others.countQuiz}</> 
                            : 
                            <>0</>
                            }</span>
                        </div>
                    <div className="child">
                        <span className="text-1">Total Questions</span>
                        <span className="text-2">{dataOverView && dataOverView.others && dataOverView.others.countQuestions 
                            ? 
                            <>{dataOverView.others.countQuestions}</> 
                            : 
                            <>0</>
                            }</span>
                        </div>
                    <div className="child">
                        <span className="text-1">Total Answers</span>
                        <span className="text-2">{dataOverView && dataOverView.others && dataOverView.others.countAnswers
                            ? 
                            <>{dataOverView.others.countAnswers}</> 
                            : 
                            <>0</>
                            }</span>
                        </div>
                </div>
                <div className="c-right">
                    <ResponsiveContainer width="95%" height={"100%"}>
                        <BarChart data={dataChart}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="US" fill="#0d77e1" />
                            <Bar dataKey="QZ" fill="#8884d8" />
                            <Bar dataKey="QS" fill="#82ca9d" />
                            <Bar dataKey="AS" fill="#e51236" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
          
        </div>
    )
}
export default DashBoard;