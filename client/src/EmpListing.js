import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import Navbar from "scenes/navbar";
import "styles.css";
import {
    Edit,
    Delete,
    Info,
  } from "@mui/icons-material";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/responses/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/responses/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://my-json-server.typicode.com/DavidLivingstoneHini/mern-social-jsonserver/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("https://my-json-server.typicode.com/DavidLivingstoneHini/mern-social-jsonserver/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <Box>
            <Navbar />
        <div className="container" style={{marginTop: "35px"}}>
            <div className="card">
                <div className="card-title" style={{marginLeft: "18px", marginTop: "15px" }}>
                    <h4>Responses</h4>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add Manually <b style={{fontSize: "16px"}}>+</b></Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Queue Number</td>
                                <td>Customer Name</td>
                                <td>Customer ID</td>
                                <td>Phone Number</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            {/* <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
                                            <IconButton onClick={() => { LoadEdit(item.id) }}>
                                               <Edit sx={{ fontSize: "25px" }} />
                                            </IconButton>

                                            <IconButton onClick={() => { Removefunction(item.id) }}>
                                               <Delete sx={{ fontSize: "25px" }} />
                                            </IconButton>

                                            <IconButton onClick={() => { LoadDetail(item.id) }}>
                                               <Info sx={{ fontSize: "25px" }} />
                                            </IconButton>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        </Box>
    );
}

export default EmpListing;