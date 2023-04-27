/* eslint-disable react/prop-types */
import React from 'react';
import '../style/cover.css';

function renderEducation(props) {
    const array = [];
    for (let i = 1; i <= props.schoolCount; i++) {
        const element = <div className="school">{`School ${i}:`}
            <div>{props[`school${i}`]}</div>
            <div><em>{props[`attended${i}`]}</em></div>
            <div>{props[`field${i}`]}</div>
        </div>;
      array.push(element);
    }
    return array;
}

function renderExperience(props) {
    const array = [];
    for (let i = 1; i <= props.jobCount; i++) {
        const element = <div className="jobs">
            <div>{props[`job${i}`]}</div>
            <div>{props[`company${i}`]}</div>
            <div><em>{props[`date${i}`]}</em></div>
            <div>{props[`role${i}`]}</div>
        </div>;
      array.push(element);
    }
    return array;
}

const Cover = ({props}) => {
    return (
        <div id="cover">
                <div id='name'>
                    <div>{props.fname + ' ' + props.lname}</div>
                    <div><em>{props.title}</em></div>
                </div>
                <div id="sidepanel">
                    <div id="personal">
                        <div className="info-personal">
                            <div>Address:</div>
                            <div>{props.address}</div>
                        </div>
                        <div className="info-personal">
                            <div>Phone number:</div>
                            <div>{props.tel}</div>
                        </div>
                        <div className="info-personal">
                            <div>Email:</div>
                            <div>{props.email}</div>
                        </div>
                        <div></div>
                    </div>
                    <div id="education">
                        {renderEducation(props)}
                    </div>
                </div>
                <div id="main">
                    <div id="overview">
                        <div>Overview:</div>
                        <div>{props.desc}</div>
                    </div>
                    <div id="experience">
                        <div>Experience:</div>
                        {renderExperience(props)}
                    </div>
                </div>
            </div>
    )
}

export default Cover;