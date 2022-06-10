import React from 'react';
import Dictators from '../dictators'
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import createScrollSnap from 'scroll-snap'

class Landing extends React.Component {
    container = React.createRef()
    bindScrollSnap() {
        const element = this.container.current
        createScrollSnap(element, {
        snapDestinationY: '90%',
        }, () => console.log('snapped'))
    }

    state = {...Dictators};
    components = [];

    componentDidMount() {
        this.bindScrollSnap()
        Object.keys(this.state).map((key, index) => {
            this.setState(prevState => {
                let newState = {...prevState[key]};
                const Component = (
                    <Link to={`/${key}`} className="link-link" key={index}>
                <div className="timeline-wrapper" id={key}>
                    <h3>De voordelen van <b>{key}</b> - van {this.state[key]["date"].split(" - ")[0]} tot {this.state[key]["date"].split(" - ")[1]}</h3>
                    <ul className='timeline' index={index}>
                        {this.state[key]["importantDates"].map((importantDateObject, index) => <Link key={index} className="link-link" to={`/${key}/${importantDateObject["date"]}`}><li key={index} style={{color: 'white'}} data-year={importantDateObject["date"]}></li></Link>)}
                    </ul>
                </div></Link>
                );
                newState["Component"] = Component;
                this.components.push(() => { return Component});
                prevState[key] = newState;
                return prevState;
            })
        })
    }

    render() {
        return(
            <div className="scroller" id="container" ref={this.container}>
                <Helmet>
                    <style>{'body { background-color: #28282e !important; color: #fff !important;}'}</style>
                </Helmet>
                <section className='page first-page'>
                    {this.components.map((Component, index) => <Component key={index}/>)}
                </section>
                <section className='page first-page'>
                    <div className='all-content'>
                        <h1>Wat is dit?</h1>
                        <p>Voor een project in het Corlaer College geschiedenis, moesten wij een onderwerp vinden die verzwegen is, eentje die vrijwel niet terug te vinden is in de geschiedenisboeken omdat mensen actief eromheen praten. Ik dacht hierbij vrijwel direct aan de VOC/WIC met de slavenhandel, alleen had ik die al genomen voor een vorig PO. Dus toen dacht ik aan de voordelen van vroegere dictators. Iedereen hoort van de gruweldaden die dictators hebben verricht, maar de dictators zitten op dat moment in zo’n enorme machtspositie dat ze zonder toestemming van andere mensen wijzigingen door kunnen voeren, dit betekent dat ze alles in een land kunnen veranderen. Als ze het volk te boos maken, is de kans groot dat de dictator op een wellicht gewelddadige manier afgezet wordt, dus moeten ze in ieder geval iets doen om het volk blij te houden. Omdat we vrij weinig tijd hadden voor het onderzoek, moesten we kijken naar maar 3 verschillende dictators en de algemene voordelen die ze theoretisch <em>kunnen</em> hebben. Daarbij moeten er ook, vooral in de tijd van Napoleon, grote veranderingen geweest zijn om de bevolking van zo een gigantisch rijk belastinggeld laten betalen. Een heel bekend voorbeeld hiervan die vrijwel iedereen kent is dan ook van Napoleon, wie het idee van achternamen bedacht had en geadopteerd heeft om mensen makkelijker te belasten.</p><br/>
                        <p>Voor dit onderzoek hadden we meerdere deelvragen:</p><br/>
                        <ol style={{marginLeft: "40px"}}>
                            <li>Welke voordelen kunnen dictatorschap hebben voor de bevolking van een gebied?</li>
                            <li>Welke positieve (technologische en andere) vooruitgangen zijn geboekt door de dictators?</li>
                            <li>Hoeveel positieve vooruitgangen zijn dit vergeleken met democratische gebieden?</li>
                            <li>In welke situaties zijn dictaturen handiger dan democratisch-bestuurde landen?
                                <ol type="a" style={{marginLeft: "40px"}}><li>Zijn de historische dictaturen in deze situaties ook opgestart?</li></ol>
                            </li>
                        </ol>
                    </div>
                </section>
                <section className='page first-page'>
                    <div className='all-content'>
                        <h1>De theoretische voordelen</h1>
                        <p>Hoewel in lange termijn een dictatuur veel schade kan aanrichten, kan het ook voordelen hebben. Als grootste voordeel zijn politieke keuzes snel gemaakt; terwijl er in een democratisch gebied lang gedebatteerd moet worden, is er maar één persoons keuze nodig om een amendement door te laten gaan in een dictatuur. Hoewel dit in de praktijk veel corruptie door laat komen, in theorie zorgt dit ervoor dat in noodsituaties, keuzes snel gemaakt kunnen worden.</p><br/>
                        <p>Een goed voorbeeld van het bovenstaande is de corona-pandemie: hoewel de data betwijfelbaar is gezien ze veel invloed in de WHO hebben, had China enorm lage corona-cijfers. Omdat de “Volksrepubliek” van China Xi Jinping heeft toegewezen als dictator, moesten er snel keuzes gemaakt worden. In sommige gevallen werden mensen letterlijk dichtgelast in hun huizen en in aanloop van de olympische spelen werden mensen in miljoenensteden in enorm hoog tempo geforceerd te testen. Vrij veel mensen hebben tragischerwijs zelfmoord gepleegd door uit hun raam te springen om te proberen vrij te komen. Hoewel dit voor de bevolking erg heftige maatregelen zijn en hun leven vrij letterlijk een gevangenis heeft gemaakt, en dit slechts de maatregelen zijn waarvan wij westerners hebben gehoord, was het wel effectief.</p><img src="images/image3.png" className='source-graph'/><br/>
                        <p>Dit houdt alleen niet in dat dictaturen per definitie sneller zijn in het oplossen van dit soort problemen, volgens Petersen, German (2020) is de grafiek een u-vormig figuur.<br/><img src="images/image2.png" className='source-graph'/><br/>In hetzelfde onderzoek is ook een verband gevonden tussen BBP, hoeveelheid tests en gemeente effectiviteit, waarin dictaturen een hoger effectiviteit hebben per BBP dan democratisch gestuurde landen. Hiervoor wordt gecorrigeerd in het onderzoek gedaan door Alon, I., Farrell, M., &amp; Li, S. (2020), waaruit bleek dat Taiwan, Noord-Korea en Japan het beste effectiviteit van het verhelpen van een pandemie hebben; de conclusie daarvan was dat verantwoordelijkheid naar de bevolking hier de belangrijkste factor is in alle politieke systemen. Dit houdt in dat waar bij een democratie er geen 1 partij is die iets fout doet, maar meerdere ministers zijn die de keuze maken, is er in een dictatuur altijd maar 1 verantwoordelijke. Democratieën waar makkelijker te zien is wie verantwoordelijk is voor bepaalde onderwerpen, zoals in Nederland, scoren beter dan andere landen.</p><br/>
                        <p>Ook in economisch wanhopige tijden werkt een dictatuur sneller dan een democratisch land; na de Grote Depressie van 1929 viel de hoeveelheid democratische landen naar een dieptepunt van maar 21,31% democratische landen.<br/><img src="images/image4.png" className='source-graph'/><br/>Ook is te zien dat veel dictators in economisch wanhopige tijden aan de macht kwamen en de economie een stuk te verbeteren (zie hoofdstuk “De positieve vooruitgangen”).</p><br/>
                        <p>Volgens Y. Harari (2018) is de verwachting dat waar kunstmatige intelligentie verbetert, dictaturen zullen volgen. Hij ziet dat de afgelopen tijd alleen maar democratieën hebben gewonnen van dictaturen omdat ze sneller informatie kunnen verwerken: “In de late 20e eeuw presteerden democratieën meestal beter dan dictaturen, omdat ze veel beter waren in het verwerken van informatie”. Dit was volgens hem ook waarom de Sovjet-Unie zo ver achter de Verenigde Staten lag bij bepaalde punten. Zodra kunstmatige intelligentie meer op de voorgrond komt te liggen, zullen dictaturen net zo snel of zelfs sneller data verwerken, en omdat keuzes sneller gemaakt kunnen worden, worden dictaturen over het algemeen een stuk sneller.</p>
                    </div>
                </section>
                <section className='page first-page last-page'>
                    <div className='all-content'>
                        <h1>Hoe gebruik ik dit?</h1><br/><br/>
                        <p>Deze web-applicatie is te gebruiken op 3 verschillende manieren:</p><br/><br/>
                        <ol>
                            <li>Door te klikken op de tijdlijn, waarna u op de pagina van een dictator komt, en u de tijdlijn rechts kunt gebruiken, of naar beneden kunt scrollen</li><br/>
                            <li>Door te klikken op een van de jaartallen op de tijdlijnen, wordt u doorgestuurd naar dat jaartal, waarna u kunt verderkijken naar andere jaartallen, of terug kunt gaan</li><br/>
                            <li>U kunt ook op deze pagina naar beneden scrollen, waardoor u deze informatie krijgt te lezen</li><br/>
                        </ol>
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing;