import React from 'react'
import C from './C'

export default function B() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-header text-center text-white bg-secondary">
                        <h2>B Component</h2>
                        </div>
                        <div className="card-body">
                            <C />
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    )
}
