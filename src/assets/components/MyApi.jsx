import Card from "react-bootstrap/Card";

const MyApi = () => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>Status</Card.Text>
                    <Card.Text>Species</Card.Text>
                    <Card.Text>Origin name</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default MyApi;
