import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import '@testing-library/jest-dom';
import CreatePetForm from "./createPetForm";

test('it shows all the inputs and button', () => {
  render(<CreatePetForm />);

  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('ID')).toBeInTheDocument();
  expect(screen.getByLabelText('Category')).toBeInTheDocument();
  expect(screen.getAllByLabelText('Tag ID')).toHaveLength(1);
  expect(screen.getAllByLabelText('Tag Name')).toHaveLength(1);
  expect(screen.getByRole('listbox')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();

});
