import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cases from './Cases/Cases';
import * as actions from '../../store/action/index';
import UpArrow from '../../assets/Up.png';
import styles from './LiveData.module.css';

 

class LiveData extends Component{

    componentDidMount(){
        this.props.fetchData();
        this.intervalID = setInterval(this.props.fetchData.bind(this), 10000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render(){
        const { totalData } = this.props;
        return(
            totalData.map((item) => {
                let time = item.date.toString();
                let year = time.slice(0, 4);
                let month = time.slice(4, 6);
                let day = time.slice(6, 8);
                return (
                    <div className={styles.LiveData}> 
                        <h2>Covid Status on {month}-{day}-{year} </h2>
                        <Cases caseData={item.positive}>
                            <p>Positive cases<img src={UpArrow} alt="up-arrow"></img> </p>
                        </Cases>
                        <Cases caseData={item.positiveIncrease}>
                            <p>Positive Cases Increase<img src={UpArrow} alt="up-arrow"></img> </p>
                        </Cases>
                        <Cases caseData={item.negative}>
                            <p>Negative Cases<img src={UpArrow} alt="up-arrow"></img> </p>
                        </Cases>
                        <Cases caseData={item.death}>
                            <p>Deaths<img src={UpArrow} alt="up-arrow"></img> </p>
                        </Cases>
                    </div>
                )
            })
        );
    }
}

const mapStateToProps = state => {
    console.log("state>>>", state)
    return{
        totalData: state.totalData,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(actions.fetchAggregateData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveData);