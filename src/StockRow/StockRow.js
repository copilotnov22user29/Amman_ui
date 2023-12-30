import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function StockRow(props) {
    return (
        // <tr>
        //     <td>{props.ticker}</td>
        //     <td>{props.dayHigh}</td>
        //     <td>{props.dayLow}</td>
        //     <td>{props.perChange}</td>
        // </tr>

        //display stock data using card
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.ticker}</h5>
                    <p className="card-text">Day High: {props.dayHigh}</p>
                    <p className="card-text">Day Low: {props.dayLow}</p>
                    <p className="card-text">Change %: {props.perChange}</p>

                    {props.perChange > 0 ? (
                        <p className="card-text">Change %: <span className="text-success">{props.perChange}</span></p>
                    ) : (
                        <p className="card-text">Change %: <span className="text-danger">{props.perChange}</span></p>
                    )}
                </div>
            </div>
        </div>

    )
}
