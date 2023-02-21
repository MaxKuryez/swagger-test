import { useState, ChangeEvent } from "react";
import { TextField, FormControl, Select, MenuItem, Button,  } from '@mui/material';
import { StyledForm } from './styled';
import { SelectChangeEvent } from "@mui/material";
import { API_URL_NEW, PROJECT_ENDPOINTS } from 'endpoints';

const CreatePetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: 1,
    category: { id: 1, name: "" },
    tags: [{ id: 0, name: "" }],
    status: "available"
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      id: Number(e.target.value),
    }));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      category: {
        ...prevData.category,
        name: e.target.value,
      },
    }));
  };

  const handleTagsIdChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newTags = [...formData.tags];
    newTags[index].id = parseInt(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const handleTagsNameChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newTags = [...formData.tags];
    newTags[index].name = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const handleStatusChange = (e: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({
      ...prevData,
      status: e.target.value,
    }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    };

    fetch(`${API_URL_NEW}${PROJECT_ENDPOINTS.CREATE_PET}`, options)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField label="Name" value={formData.name} onChange={handleNameChange} />
      <TextField label="ID" type="number" value={formData.id} onChange={handleIdChange} />
      <TextField label="Category" value={formData.category.name} onChange={handleCategoryChange} />
      {formData.tags.map((tag, index) => (
        <div key={index}>
        <TextField
          label="Tag ID"
          type="number"
          value={tag.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTagsIdChange(e, index)}
        />
        <TextField
          label="Tag Name"
          value={tag.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTagsNameChange(e, index)}
        />
      </div>
      ))}
      <FormControl>
        Status:
        <Select value={formData.status} onChange={handleStatusChange}>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="sold">Sold</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </StyledForm>
  );
};

export default CreatePetForm;
