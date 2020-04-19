import React from 'react'

export default function FakeGroupButton({ before, after }) {
    return (
        <div className="fake-group-button">
            <a href={`#${before}`}><ion-icon name="arrow-up-outline"></ion-icon></a>
            <a href={`#${after}`}><ion-icon name="arrow-down-outline"></ion-icon></a>
        </div>
    )
}
