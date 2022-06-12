import Dictators from './dictators';
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import createScrollSnap from 'scroll-snap'

class Dictator extends React.Component {
    container = React.createRef()
    bindScrollSnap() {
        const element = this.container.current
        createScrollSnap(element, {
            snapDestinationY: '90%',
        }, () => console.log('snapped'))
    }
    
    state = {dictator: {}}
    scrollLocations = {}
    componentDidMount() {
        const interval = setInterval(()=> {
            if (this.props.match.params.year.length===0 || typeof(this.props.match.params.year)==="undefined") clearInterval(interval);
            if (this.scrollLocations[this.props.match.params.year]) {this.scrollOnLoad(); clearInterval(interval)}
        }, 100);
        this.bindScrollSnap()
        const dictatorName = this.props.match.params.Dictator;
        console.log(dictatorName)
        this.setState({ dictator: {...Dictators[dictatorName], name: (dictatorName in Dictators) && dictatorName} });
        Dictators[dictatorName].importantDates.forEach((date) => this.scrollLocations[date.date] = React.createRef())
    }

    scrollToSection(event) {
        event.preventDefault();
        this.scrollLocations[event.currentTarget.id].current.scrollIntoView({ behavior: 'smooth' })
    };

    scrollOnLoad() {
        this.scrollLocations[this.props.match.params.year].current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        const dictator = this.state["dictator"];
        const importantDates = dictator.importantDates;
        return (
            <div className="all-content" ref={this.container}>
		<div className="scroller">
                <div className='timeline-wrapper-2'>
                    <ul className='StepProgress'>
                    {importantDates && importantDates.map((importantDateObject, index) => (
                        <Link key={index} id={importantDateObject.date} className="link-link" onClick={() => this.scrollOnLoad()} to={`/${dictator.name}/${importantDateObject["date"]}`}>
                            <li className='StepProgress-item'>
                                <div className="bold time">{importantDateObject.date}</div>
                            </li>
                        </Link>
                    ))}
                    </ul>
                </div>
                <section>
                    <div className='dictator-content'>
                        <div className='title'>
                            <Link to="/"><h1 className='name'>{dictator.name}</h1></Link>
                        </div>
                        <img className='dictator-propaganda' src={`data:image/jpeg;base64,${dictator.imageBase64}`}/>
                        <p className='summary' dangerouslySetInnerHTML={{__html: dictator.summary}}></p>
                    </div>
                </section>
                {importantDates && importantDates.map((importantDate, index) => (
                    <section id={importantDate.date} ref={this.scrollLocations[importantDate.date]} key={index}>
                        <h1>{importantDate.date}</h1>
                        <img className='dictator-propaganda' src={`data:image/jpeg;base64,${importantDate.imageBase64}`}/>
                        <p dangerouslySetInnerHTML={{__html: importantDate.storyInnerHTML}}></p>
                    </section>
                ))}
		</div>
            </div>
        )
    }
}

export default withRouter(Dictator);
