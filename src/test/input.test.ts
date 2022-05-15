import '@testing-library/jest-dom';
// import { expect, describe, it } from 'vitest';
// import { render, screen, userEvent } from '../utils/test-utils';
// import AppContainer from '../components/AppContainer';

// There was an effort taken but in vain...

// describe('Input', async () => {
//   it('should render the input', () => {
//     render(AppContainer());
//     expect(
//       screen.getByRole('textbox', {
//         name: /location/i,
//       }),
//     ).toBeInTheDocument();
//   });
//   it('should change input value', () => {
//     render(AppContainer());
//     screen.logTestingPlaygroundURL();

//     const input = screen.getByRole('textbox', {
//       name: /location/i,
//     });
//     expect(input).toBeInTheDocument();
//     userEvent.type(input, 'New York');
//     expect(input).toHaveValue('New York');
//   });
// });
