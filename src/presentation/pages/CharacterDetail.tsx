import { Character } from "@/domain/entities/Character";
import styled from "@emotion/styled";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { characterContext } from "../context/CharacterContext";

const CharacterDetail: React.FC<{ character: Character }> = () => {
  const { id } = useParams<{ id: string }>();
  const { characters } = characterContext();

  const character = characters.find(
    (char: any) => char.id === parseInt(id || "", 10)
  );

  if (!character) {
    return <p>Character no encontrado!</p>;
  }
  return (
    <Container>
      <Title>{character.name}</Title>
      <Image src={character.image} alt={character.name} />
      <Detail>Estado: {character.status}</Detail>
      <Detail>Especies: {character.species}</Detail>
      <Detail>Genero: {character.gender}</Detail>
      <BackLink to="/">Ir a la lista</BackLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #ddd;
`;

const Detail = styled.p`
  font-size: 1rem;
  margin: 8px 0;
  color: #555;
`;

const BackLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export default CharacterDetail;
