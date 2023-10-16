import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as rtlRender, RenderOptions, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TaskServiceProvider } from "../contexts";
import { DialogProvider } from "../contexts/dialog-context";

interface ProvidersProps {
  children?: ReactElement;
}

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskServiceProvider>
        <DialogProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </DialogProvider>
      </TaskServiceProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => {
  return rtlRender(ui, { wrapper: AllTheProviders, ...options });
}

export * from "@testing-library/react";

export { customRender as render };