import { render, screen } from '@testing-library/react';
import GradeTable from './components/Table'; // Adjust the path if needed
import '@testing-library/jest-dom';

test('renders grade headers and total balances correctly', () => {
  render(<GradeTable />);

  // Check headers
  expect(screen.getByText('Grade 1')).toBeInTheDocument();
  expect(screen.getByText('Grade 2')).toBeInTheDocument();
  expect(screen.getByText('Grade 3')).toBeInTheDocument();
  expect(screen.getByText('Grade 4')).toBeInTheDocument();

  // Check balance values formatted as currency
  expect(screen.getByText('$2000.00')).toBeInTheDocument();
  expect(screen.getByText('$3000000.00')).toBeInTheDocument();
  expect(screen.getByText('$10000.00')).toBeInTheDocument();
  expect(screen.getByText('$24000.00')).toBeInTheDocument();
});