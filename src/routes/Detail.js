import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";
import TermsTable from "../common/TermsTable";
import {Container} from "@mui/material";
import AddTerm from "../term/AddTerm";
import GlossarySetting from "../component/GlossarySetting";

function Detail({title}) {
  const {id} = useParams();

  const [terms, setTerms] = useState([]);

  useEffect(() => {
    getTerms();
  }, [])

  const getTerms = async () => {
    const response = await ((await fetch(
      `${API_BASE_URL}/glossaries/${id}/terms`
    )).json());

    setTerms(response.terms);
  }

  const addTerm = (term) => {
    setTerms((prev) => [...prev, term]);
  }

  return (
    <Container>
      <GlossarySetting title={title}/>
      <AddTerm id={id} addTerm={addTerm}/>
      <TermsTable headers={["word", "description", "keyword1", "keyword2", "keyword3"]} terms={terms}/>
    </Container>
  )
    ;
}

export default Detail;