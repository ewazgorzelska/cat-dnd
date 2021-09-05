import React from 'react';
import styled from 'styled-components';
import Cat from './Cat';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
   
    display: flex;
`;

const Title = styled.div`
    padding: 8px;
`;

const CatList = styled.div`
    padding: 8px;
`;

const Column = ({column, cats}) => {
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {provided => (
                    <CatList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                    { cats.map((cat, index) => <Cat key={cat.id} cat={cat} index={index} />) }
                    {provided.placeholder}
                </CatList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column;