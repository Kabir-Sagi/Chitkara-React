import React from 'react'
import D from './D'

export default function C() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-header text-center text-white bg-danger">
                        <h2>C Component</h2>
                        </div>
                        <div className="card-body">
                            <D />
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    )
}
