import React from 'react'

import AppCanvas from '../components/app/AppCanvas';
import AppDemo01 from '../components/app/AppDemo01';
import AppDemo02 from '../components/app/AppDemo02';

export function Home() {
    return (
        <div className="container-fluid">
                <AppCanvas> </AppCanvas> 
                <AppDemo01>
                </AppDemo01>

                <AppDemo02>
                </AppDemo02>

        </div>
    )
}


export function About() {
    return (
        <div>
            <h1>
                [About]
            </h1>
        </div>
    )
}

export function Products() {
    return (
        <div>
            <h1>
                [Products]
            </h1>
        </div>
    )
}


export function News() {
    return (
        <div>
            <h1>
                [News]
            </h1>
        </div>
    )
}

export function Demos() {
    return (
        <div>
            <h1>
                [Demo]
            </h1>
        </div>
    )
}

export function Whoop404() {
    return (
        <div>
            <h1>
                [Whoop404]
            </h1>
        </div>
    )
}

