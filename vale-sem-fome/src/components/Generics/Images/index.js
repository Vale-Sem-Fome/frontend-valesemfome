import React from 'react';

export default function Images(props){
    const images = props.images;
    const listImages = images.map((image) => 
        <li key={image.toString()}>
            <img className="img-fluid" src={image} alt="SJC sem Fome"/>
        </li>
    );

    return (
        <ul>{listImages}</ul>
    )
}