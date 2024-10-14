import React from "react";


function DbProduct (){
    return (
        <>
            <div className="row">
                    <div className="col-lg-12 rounded shadow bg-white p-3 border-start border-bottom border-success " style={{ height: '300px' }}>
                        <div className="d-flex justify-content-between">
                            <div className="">
                            <h3>
                            <b>Products</b>
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
                                    <th>category</th>
                                    <th>price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>solar battery</td>
                                    <td>battery</td>
                                    <td>$ 1200.00</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button> 
                                            </div>
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button>

                                            </div>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                    <td>solar battery</td>
                                    <td>battery</td>
                                    <td>$ 1200.00</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button> 
                                            </div>
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button>

                                            </div>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                    <td>solar battery</td>
                                    <td>battery</td>
                                    <td>$ 1200.00</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button> 
                                            </div>
                                            <div>
                                            <button className="btn btn-sm btn-success"> hello</button>

                                            </div>

                                        </div>
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

export default DbProduct;