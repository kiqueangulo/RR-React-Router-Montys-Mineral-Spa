import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, index) => 
        <Carousel.Item key={index}>
            <img 
                className='d-block w-100'
                src='https://t4.ftcdn.net/jpg/02/61/49/05/360_F_261490536_nJ5LSRAVZA0CK9Nvt2E1fXJVUfpiqvhT.jpg'
                alt='Grey background'
            />
            <Carousel.Caption>
                <p>{eachPackage}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>Cheack out some of our packages! Every package is ethically sourced and oganic!</Card.Text>
                </Card.Body>
            </Card>
            <Carousel fade>
                {displayPackages}
            </Carousel>
        </Container>
    )
}