import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { axiosInstance } from './constants/axios';
import { capsuleData } from './constants/capsule';
import App from './App';

jest.mock('./constants/axios');
export const AppWrapperContext = () => {
  const queryClient = new QueryClient({
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  });

  return ({ children }: { children: any }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

const select = async (container: HTMLElement, text: string) => {
  const selectContainer = container?.firstElementChild?.firstElementChild
    ?.nextElementSibling as HTMLElement;
  fireEvent.keyDown(selectContainer, {
    key: 'ArrowDown',
  });
  await waitFor(() => getByText(selectContainer, text));
  fireEvent.click(getByText(selectContainer, text));
};

describe('App', () => {
  beforeEach(() => {
    const result = {
      data: {
        data: capsuleData,
      },
    };
    const promise = Promise.resolve(result);
    mockedAxios.post.mockImplementationOnce(() => promise);
  });

  it('renders the App Component', () => {
    render(<App />, { wrapper: AppWrapperContext() });
    expect(screen.getByTestId('app_wrapper')).toBeTruthy();
    expect(screen.getByTestId('loader_text')).toBeTruthy();
  });

  it('renders the capsule modal if a single capsule is clicked ', async () => {
    render(<App />, { wrapper: AppWrapperContext() });

    await waitFor(() => {
      const viewMore = screen.getByTestId('5e9e2c5bf35918ed873b2664');
      fireEvent.click(viewMore.querySelector('button')!);
      const capsuleWrapper = screen.queryByTestId('capsule_wrapper');
      expect(capsuleWrapper).toBeTruthy();
    });
  });

  it('calls the endpoint again if any of the search parameters changes', async () => {
    render(<App />, { wrapper: AppWrapperContext() });
    await waitFor(async () => {
      const status = screen.queryByTestId('status');
      await select(status!, 'Unknown');
      expect(axiosInstance.post).toHaveBeenCalled();
    });
  });
});
