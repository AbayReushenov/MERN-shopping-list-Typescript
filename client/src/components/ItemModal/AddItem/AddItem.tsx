import React from 'react';
import { Button } from 'reactstrap';

interface Props {
  onClick: () => void;
}

export const AddItem: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      color='dark'
      style={{ marginBottom: '2rem' }}
      onClick={onClick}
    >
      Добавить пункт
    </Button>
  );
};
