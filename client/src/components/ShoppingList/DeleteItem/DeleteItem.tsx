import React from 'react';
import { Button } from 'reactstrap';

interface Props {
  id: string;
  onDelete: (id: string)  => void;
}

export const DeleteItem: React.FC<Props> = ({ id, onDelete }) => {
  return (
    <Button
    key={id}
    className="remove-btn"
    color="danger"
    size="sm"
    onClick={() => onDelete(id)}
  >
    &times;
  </Button>
  );
};
