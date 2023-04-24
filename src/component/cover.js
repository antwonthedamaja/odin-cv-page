/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import '../style/cover.css';

class Cover extends Component {
    constructor(props) {
        super(props);
    }

    renderEducation() {
        const array = [];
        for (let i = 1; i <= this.props.cvProps.schoolCount; i++) {
            const element = <div className="school">{`School ${i}:`}
                <div>{this.props.cvProps[`school${i}`]}</div>
                <div><em>{this.props.cvProps[`attended${i}`]}</em></div>
                <div>{this.props.cvProps[`field${i}`]}</div>
            </div>;
          array.push(element);
        }
        return array;
    }

    renderExperience() {
        const array = [];
        for (let i = 1; i <= this.props.cvProps.jobCount; i++) {
            const element = <div className="jobs">
                <div>{this.props.cvProps[`job${i}`]}</div>
                <div>{this.props.cvProps[`company${i}`]}</div>
                <div><em>{this.props.cvProps[`date${i}`]}</em></div>
                <div>{this.props.cvProps[`role${i}`]}</div>
            </div>;
          array.push(element);
        }
        return array;
    }

    render() {
        return (
            <div id="cover">
                <div id='name'>
                    <div>{this.props.cvProps.fname + ' ' + this.props.cvProps.lname}</div>
                    <div><em>{this.props.cvProps.title}</em></div>
                </div>
                <div id="sidepanel">
                    <div id="personal">
                        <div className="info-personal">
                            <div>Address:</div>
                            <div>{this.props.cvProps.address}</div>
                        </div>
                        <div className="info-personal">
                            <div>Phone number:</div>
                            <div>{this.props.cvProps.tel}</div>
                        </div>
                        <div className="info-personal">
                            <div>Email:</div>
                            <div>{this.props.cvProps.email}</div>
                        </div>
                        <div></div>
                    </div>
                    <div id="education">
                        {this.renderEducation()}
                    </div>
                </div>
                <div id="main">
                    <div id="overview">
                        <div>Overview:</div>
                        <div>{this.props.cvProps.desc}</div>
                    </div>
                    <div id="experience">
                        <div>Experience:</div>
                        {this.renderExperience()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover;