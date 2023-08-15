import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});
    
// use http://localhost:3000/employee/ if https://my-json-server.typicode.com/DavidLivingstoneHini/mern-social-jsonserver/employee stops working
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/DavidLivingstoneHini/mern-social-jsonserver/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div className="container" style={{justifyContent: "center", alignItems: "center", marginTop: "35px"}}>
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h3 style={{textDecoration: "underline", marginTop: "15px"}}>Active customers</h3>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <p>The Customer name is : <b>{empdata.name}</b>  ({empdata.id})</p>
                        <h5>Contact Details</h5>
                        <p>Email is : {empdata.email}</p>
                        <p>Phone Number is : {empdata.phone}</p>
                        <Link className="btn btn-danger" to="/responses" style={{marginBottom: "15px"}}>Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;