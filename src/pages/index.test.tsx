import React from "react";
import { render } from "@testing-library/react";
import HomePage from './index';
import { screen } from '@testing-library/react';

// const mockData = [
//   {
//     "q": "It's the possibility of having a dream come true that makes life interesting.",
//     "a": "Paulo Coelho",
//     "h": "<blockquote>&ldquo;It's the possibility of having a dream come true that makes life interesting.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
//   }
// ]

test('displays the home screen with links', () => {
    render(<HomePage />);

    expect(screen.getByText(/Develop/i)).toBeInTheDocument();
});