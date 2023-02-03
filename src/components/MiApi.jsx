import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const MiApi = () => {
    const [filterInfo, setFilterInfo] = useState('');
    const [charactersInfo, setCharactersInfo] = useState([]);
    const apiURL = "https://rickandmortyapi.com/api/character";

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const data = await fetch(apiURL);
            let characters = await data.json();
            characters = characters.results;
            setCharactersInfo(characters);
        } catch (e) {
            alert(e.message)
        }
    }
    const sortInfo = () => {
        charactersInfo.sort((a,b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            }else {
                return 0;
            }});
        setCharactersInfo(charactersInfo);
        console.log(charactersInfo);
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <input name="character filter" className="w-50 p-3 text-center rounded mb-4 mt-3" placeholder="Search by name or status" type="text" onChange={(e) => setFilterInfo(e.target.value)} value={filterInfo}/>
            </div>
            
            <section className="">
                {charactersInfo.map(character => {
                        if (filterInfo === "" || character.name.toLowerCase().includes(filterInfo.toLowerCase()) || character.status.toLowerCase().includes(filterInfo.toLowerCase())) {
                            return (
                                <Accordion key={character.id} className="w-50 container">
                                    <Accordion.Item eventKey={character.id}>
                                        <Accordion.Header>{character.name}</Accordion.Header>
                                        <Accordion.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div className="h3">
                                                        <p>Status: {character.status}</p>
                                                        <p>Species: {character.species}</p>
                                                        <p>Gender: {character.gender}</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <Figure>
                                                        <Figure.Image
                                                            width={171}
                                                            height={180}
                                                            alt="171x180"
                                                            src={character.image}
                                                            
                                                        />
                                                    </Figure>
                                                </Col>
                                            </Row>
                                        </Container>    
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )
                        }})};
            </section>
        </div>
    )

};


export default MiApi;