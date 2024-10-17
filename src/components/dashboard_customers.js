import React from "react";

function DbCustomers(){
    return (
        <>
        <div className="row">
                    <div className="col rounded  shadow  bg-white border-start border-bottom border-success " style={{ height: '300px' }}>
                    <div className="d-flex justify-content-between">
                            <div className="">
                            <h3>
                            <b>Customers</b>
                        </h3>
                            </div>

                            <div>
                                <button className="btn btn-outline-success"><b>See all</b></button>
                            </div>
                        </div>
                        <hr className=""/>

                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Telephone</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>+14 clark quarters workslayout </td>
                                        <td> +234 8113148117</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>+14 clark quarters workslayout </td>
                                        <td> +234 8113148117</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>+14 clark quarters workslayout </td>
                                        <td> +234 8113148117</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        

                    </div>
                   
                </div>
        </>
    )
}

export default DbCustomers;