import TrackerStat from "./tracker-stat";

function TrackerStats(props) {
    const updated = new Date(props.data.updated);
        
    return (
        <div className="tracker">
            <div className="tracker-stats">
                <ul>
                    <TrackerStat tests={props.data.tests} testsPerMillion={props.data.testsPerOneMillion}/>
                    <TrackerStat cases={props.data.cases} casesPerMillion={props.data.casesPerOneMillion}/>
                    <TrackerStat deaths={props.data.deaths} deathsPerMillion={props.data.deathsPerOneMillion}/>
                    <TrackerStat active={props.data.active}/>
                    <TrackerStat critical={props.data.critical}/>
                    <TrackerStat recovered={props.data.recovered}/>
                </ul>
            </div>
            <div className="tracker-last-updated">
                <p>
                    Last Updated:
                    {
                        // mira
                    }
                    {updated.getDate()}/{updated.getMonth() + 1}/{updated.getFullYear()} {updated.getHours()}:{updated.getMinutes()}
                </p>
            </div>
        </div>
    )
}

export default TrackerStats;