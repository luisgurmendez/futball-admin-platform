import React from 'react';
import { Table, TableProps, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const EditableTableContainer = styled.div`
  padding: 2rem;
`

const EditableTableActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

const EditableTable: React.FC<TableProps> = ({ children, ...rest }) => {

  return (
    <EditableTableContainer>
      <EditableTableActions>
        <Button>Agregar</Button>
      </EditableTableActions>
      <Table {...rest}>
        {children}
      </Table>
    </EditableTableContainer>

  )

}






