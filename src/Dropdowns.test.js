import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('dropdowns update and reset correctly (without combobox)', async () => {
  render(<App />);

  // Wait for dropdowns to appear after the -1 second loading delay
  await waitFor(() => screen.getByDisplayValue('Home Ownership'));

 //Grabs dropdown button
  const homeDropdown = screen.getByDisplayValue('Home Ownership');
  const quarterDropdown = screen.getByDisplayValue('Quarter');
  const termDropdown = screen.getByDisplayValue('Term');
  const yearDropdown = screen.getByDisplayValue('Year');
  const resetButton = screen.getByText(/reset/i);

  // Stimulates user changes
  fireEvent.change(homeDropdown, { target: { value: 'RENT' } });
  fireEvent.change(quarterDropdown, { target: { value: '3' } });
  fireEvent.change(termDropdown, { target: { value: '36 months' } });
  fireEvent.change(yearDropdown, { target: { value: '2014' } });

 // Checks new values
  expect(homeDropdown.value).toBe('RENT');
  expect(quarterDropdown.value).toBe('3');
  expect(termDropdown.value).toBe('36 months');
  expect(yearDropdown.value).toBe('2014');

 //  Form Reset Check
  fireEvent.click(resetButton);

 //  Checking reset values
  expect(homeDropdown.value).toBe('');
  expect(quarterDropdown.value).toBe('');
  expect(termDropdown.value).toBe('');
  expect(yearDropdown.value).toBe('');
});


