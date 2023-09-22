import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const radioStyle = {
    '&.Mui-checked': {
      color: pink[600], // Color when selected
    },
    '& .MuiIconButton-label': {
      backgroundColor: pink[300], // Background color of the center
    },
  };

  return (
    <div>
      <Radio {...controlProps('a')} sx={radioStyle} />
      <Radio {...controlProps('b')} color="secondary" sx={radioStyle} />
      <Radio {...controlProps('c')} color="success" sx={radioStyle} />
      <Radio {...controlProps('d')} color="default" sx={radioStyle} />
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
          '& .MuiIconButton-label': {
            backgroundColor: pink[300],
          },
        }}
      />
    </div>
  );
}
