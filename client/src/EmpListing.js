import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import Navtab from "scenes/navtab";
import Footer from "scenes/footer";
import "styles.css";
import {
    Edit,
    Cancel,
    Info,
    SkipNext,
    MoveUp,
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
    const Pushfunction = (id) => {
        let myData = empdata; 
        const parsed = JSON.parse(myData); 
        parsed.push(3); 
        myData = JSON.stringify(parsed); 
        console.log(myData);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://test-api-dpqa.onrender.com/employee/" + id, {
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
            <Navtab />
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
                                <td>Actions</td>
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

                                            <IconButton onClick={() => { Removefunction(item.id) }}>
                                               <Cancel sx={{ fontSize: "25px", color: "#bf0a28" }} />
                                            </IconButton>

                                            <IconButton onClick={() => { Removefunction(item.id) }}>
                                               <SkipNext sx={{ fontSize: "25px", color: "#0a4fbf" }} />
                                            </IconButton>

                                            <IconButton onClick={() => { Pushfunction(item.id) }}>
                                               <MoveUp sx={{ fontSize: "25px", color: "#9e0abf" }} />
                                            </IconButton>

                                            <IconButton onClick={() => { LoadEdit(item.id) }}>
                                               <Edit sx={{ fontSize: "22px", color: "#42248a" }} />
                                            </IconButton>

                                            {/* <IconButton onClick={() => { LoadDetail(item.id) }}>
                                               <Info sx={{ fontSize: "25px" }} />
                                            </IconButton> */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </Box>
    );
}

export default EmpListing;