function TrackerStat(props) {
    let primaryText, secondaryText, altText;

    if (props.tests) {
        primaryText = props.tests.toLocaleString();
        altText = "Total Tests";
        secondaryText = props.testsPerMillion.toLocaleString();
    }
    else if (props.cases) {
        primaryText = props.cases.toLocaleString();
        altText = "Total Cases";
        secondaryText = props.casesPerMillion.toLocaleString();
    }
    else if (props.deaths) {
        primaryText = props.deaths.toLocaleString();
        altText = "Total Deaths";
        secondaryText = props.deathsPerMillion.toLocaleString();
    }
    else if (props.active) {
        primaryText = props.active.toLocaleString();
        altText = "Active";
        secondaryText = false;
    }
    else if (props.critical) {
        primaryText = props.critical.toLocaleString();
        altText = "Critical";
        secondaryText = false;
    }
    else {
        primaryText = props.recovered.toLocaleString();
        altText = "Recovered";
        secondaryText = false;
    }

    return (
        <li className="tracker-stat">
            <p className="tracker-stat-primary">
                {primaryText}
                <strong>{altText}</strong>
            </p>
            <p className="tracker-stat-secondary" style={{ display: secondaryText ? '' : 'none'}}>
                {secondaryText}
                <strong>Per 1 Million</strong>
            </p>
        </li>
    )
}

export default TrackerStat;