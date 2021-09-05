import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.h2``;

const Image = styled.img`
  width: 300px;
  height: 100px;
  padding: 8px;
`;

const Cat = ({ cat, index }) => {
  return (
    <Draggable draggableId={cat.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Title>{cat.title}</Title>
          <Image src={cat.link} alt={cat.title} />
        </Container>
    )}
    </Draggable>
  )
}

export default Cat;
