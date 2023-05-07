import { render, screen, waitFor } from "@testing-library/react";
import MyApp from "./_app";
import React from "react";
import * as mockData from "../data/index";
import { QuoteResponse } from "../data/types";

// const mockedGetQuotes = jest.fn();

jest.mock("../data/index");

const mockQuoteResponse: QuoteResponse = {
  q: "Hard to see, the dark side is",
  a: "Yoda",
  h: "<blockquote>&ldquo;Hard to see, the dark side is</blockquote>",
  c: "100",
  i: "yoda.jpg",
};

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display error message if fetch fails", async () => {
    (mockData.getQuotes as jest.Mock).mockRejectedValue('failed');
    //@ts-ignore
    render(<MyApp Component={<>hello</>} pageProps={null} />);
    await waitFor(() => {
      expect(screen.getByText(/loading/i));
    });
    await waitFor(() => {
      expect(screen.getByText(/There was a problem fetching/i));
    });
  });

  test("should display loading message and then display Component when quotes returns", async () => {
    (mockData.getQuotes as jest.Mock).mockImplementation(() =>
      Promise.resolve([mockQuoteResponse])
    );
    //@ts-ignore
    render(<MyApp Component={() => <div>hello</div>} pageProps={null} />);
    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
  });
});
