import React from 'react'

import AppCanvas from '../components/app/AppCanvas';
import AppDemo01 from '../components/app/AppDemo01';
import AppDemo02 from '../components/app/AppDemo02';

export function Home() {
    return (
        <>
        <AppCanvas> </AppCanvas> 
        <div className="container">
                <AppDemo01>
                </AppDemo01>
        </div>
		</>
    )
}


export function About() {
    return (
        <div className="container">
            <h1>
                [About]
            </h1>
        </div>
    )
}

export function Products() {
    return (
        <div className="container">
            <h1>
                [Products]
            </h1>
        </div>
    )
}


export function News() {
    return (
        <div className="container">
            <h1>
                [News]
            </h1>
        </div>
    )
}

export function Demos() {
    return (
        <>
	
        </>
    )
}

export function Whoop404() {
    return (
        <div className="container">
            <h1>
                [Whoop404]
            </h1>
        </div>
    )
}
