import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Navbar className="mt-5" expand="lg" bg="light" variant="light" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Container className="justify-content-center">
                &copy; AirQuality {year}
            </Container>
        </Navbar>
    )
}

export default Footer;