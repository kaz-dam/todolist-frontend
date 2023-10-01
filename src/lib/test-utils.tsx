import React, { ReactElement } from "react";
import { render as rtlRender, RenderOptions, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface ProvidersProps {
  children?: ReactElement;
}

const AllTheProviders = ({ children }: ProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => {
  return rtlRender(ui, { wrapper: AllTheProviders, ...options });
}

export * from "@testing-library/react";

export { customRender as render };