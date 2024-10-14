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

                        

                    </div>
                   
                </div>
        </>
    )
}

export default DbCustomers;