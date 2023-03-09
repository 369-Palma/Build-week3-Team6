/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Spinner } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const PeopleYouMightKnow = () => {
  const users = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(fetchProfiles(""));
  }, []);

  // Randomizza gli utenti
  const shuffledUsers = users.sort(() => Math.random() - 0.5);

  return (
    <Container>
      <Row>
        <h4 className=" fw-bold">Persone che potresti conoscere</h4>
      </Row>
      {isLoading && <Spinner animation="border" variant="primary" className="my-2" />}
      <Row className="py-2">
        <CardSidebar users={shuffledUsers} />
      </Row>
    </Container>
  );
};

export default PeopleYouMightKnow;
