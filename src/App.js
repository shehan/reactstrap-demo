import React from "react";
import {Button, Card, CardBody, CardHeader, CardText, Col, Container, Row} from "reactstrap";


function App() {
    return (
        <div>
            <Button color="primary" onClick={() => alert('Hello!')}>Primary</Button>

            {/*<Container fluid>*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            <Button color="primary">Primary</Button>*/}
            {/*            <Button color="secondary">Secondary</Button>*/}
            {/*            <Button color="primary" disabled>Disabled</Button>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}

            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col>1 of 2</Col>*/}
            {/*        <Col>2 of 2</Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col><Button color="primary">primary</Button></Col>*/}
            {/*        <Col><Button color="secondary">secondary</Button></Col>*/}
            {/*        <Col><Button color="link">link</Button></Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}

            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col style={{background: 'lightblue'}}>1 of 3</Col>*/}
            {/*        <Col xs={6} style={{background: 'lightgreen'}}>2 of 3 (wider)</Col>*/}
            {/*        <Col style={{background: 'lightyellow'}}>3 of 3</Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col>1 of 3</Col>*/}
            {/*        <Col xs={5}>2 of 3 (wider)</Col>*/}
            {/*        <Col>3 of 3</Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}


            {/*<Card className="m-4">*/}
            {/*    <CardBody border="primary">*/}
            {/*        <CardHeader tag="h2">Greetings Friends!</CardHeader>*/}
            {/*        <CardText>*/}
            {/*            'Twas the night before Christmas, when all through the house. Not a creature was stirring, not*/}
            {/*            even a mouse;. The stockings were hung by the chimney with ......*/}
            {/*        </CardText>*/}
            {/*        <Button>Hello!</Button>*/}
            {/*    </CardBody>*/}
            {/*</Card>*/}

        </div>
    );
}

export default App;
