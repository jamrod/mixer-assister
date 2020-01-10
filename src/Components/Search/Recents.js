import React from 'react'

function Recents (props) {
    const recents = props.recents
    
    return (
        <div className="flex-container-row recents">
            <p>Recent Drinks:</p>
            {recents.map((item, i) => (
                <span onClick={() => (props.recentSearch(item))} key={i} className="clickable">{item}</span>
            ))}
        </div>
    )
}

export default Recents
