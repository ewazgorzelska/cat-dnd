import React, { useState } from 'react';
import initialData from './initialData';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {

  const [ data, setData ] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = data.columns[source.droppableId];
    const newCatIds = Array.from(column.catIds);
    newCatIds.splice(source.index, 1);
    newCatIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      catIds: newCatIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    }

    setData(newData);

  };

  return <DragDropContext
            onDragEnd={onDragEnd}
          >
          {data.columnOrder.map(columnId => {
            const column = data.columns[columnId];
            const cats = column.catIds.map(catId => data.cats[catId]);

            return <Column key={column.id} column={column} cats={cats} />
          })}
        </DragDropContext>

}

export default App;
