import React from "react";
import { Link } from "react-router-dom";
import { characterContext } from "../context/CharacterContext";
import styled from "@emotion/styled";

// Estilos usando Emotion
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

const Card = styled.li`
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }

  p {
    padding: 10px;
    margin: 0;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    line-height: 1.4;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const CharacterList: React.FC = () => {
  const { characters } = characterContext();

  if (!characters || characters.length === 0) {
    return <Message>No characters found.</Message>;
  }

  return (
    <Container>
      <Title>Characters</Title>
      <Grid>
        {characters.map((character: any) => (
          <Card key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <img src={character.image} alt={character.name} loading="lazy" />
              <p>{character.name}</p>
            </Link>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterList;
