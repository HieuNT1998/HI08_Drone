import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import DashboardTitle from '../components/DashboardTitle'
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

class DroneDetail extends Component {
    state = {
        id: this.props.match.params.droneID
    }
    render() {
        return (
            <div className="container">
                <div className="row breadcrumbs">
                    <HomeIcon />
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Home
					    </Link>
                        <Link color="inherit" href="/hi08">
                            HI_08
					    </Link>
                        <Link color='inherit' href="/hi08/drones">drones</Link>
                        <Typography color="textPrimary">drone detail</Typography>
                    </Breadcrumbs>
                </div>
                <div className="row" >
                    <div className="col-lg-5">
                        <Card style={{ margin: "0px 0px 50px 0px ", padding: "50px 0px 50px 0px" }}>
                            <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
                            <CardBody>
                                <CardTitle style={{ textAlign: "center" }}>Drone {this.state.id}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-7">
                        <React.Fragment>
                            <DashboardTitle>Drone {this.state.id} </DashboardTitle>
                            <Typography component="p" variant="h6">
                                Total: 100
                            </Typography>
                            <Typography component="p" variant="h6">
                                Being used: 40
                            </Typography>
                            <Typography component="p" variant="h6">
                                Being in bucket: 45
                            </Typography>
                            <Typography component="p" variant="h6">
                                Maintance: 15
                            </Typography>
                            <Typography color="textSecondary" >
                                on 19 May, 2020
                            </Typography>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        );
    }
}

export default DroneDetail;