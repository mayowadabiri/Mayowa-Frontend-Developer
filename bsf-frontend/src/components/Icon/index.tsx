import { useMemo } from 'react';

interface IIconProps {
  name: Icons;
  height?: number;
  width?: number;
  fill?: string;
}

export enum Icons {
  Mark = 'mark',
  CaretDown = 'caret-down',
  ArrowRight = 'arrow-right',
  ArrowLeft = 'arrow-left',
  Close = 'close',
}

export const Icon = ({ name, width, height, fill }: IIconProps) => {
  const iconWidth = useMemo(() => width || 24, [width]);
  const iconHeight = useMemo(() => height || 24, [height]);
  const iconFill = useMemo(() => fill || '#9595A7', [fill]);

  if (name === Icons.ArrowLeft) {
    return (
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5098 3.87L15.7298 2.1L5.83984 12L15.7398 21.9L17.5098 20.13L9.37984 12L17.5098 3.87Z"
          fill={iconFill || '#2D3C3C'}
        />
      </svg>
    );
  }
  if (name === Icons.ArrowRight) {
    return (
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.49016 20.13L8.27016 21.9L18.1602 12L8.26016 2.1L6.49016 3.87L14.6202 12L6.49016 20.13Z"
          fill={iconFill || '#2D3C3C'}
        />
      </svg>
    );
  }
  if (name === Icons.CaretDown) {
    return (
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke={iconFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === Icons.Close) {
    return (
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99605 3.90625C4.74015 3.90625 4.47255 3.99226 4.27725 4.18726C3.88675 4.57826 3.88675 5.23424 4.27725 5.62524L10.5585 11.9062L4.27725 18.1873C3.88675 18.5783 3.88675 19.2342 4.27725 19.6252C4.66785 20.0152 5.32425 20.0152 5.71485 19.6252L11.996 13.3443L18.2773 19.6252C18.6679 20.0152 19.3242 20.0152 19.7148 19.6252C20.1053 19.2342 20.1053 18.5783 19.7148 18.1873L13.4335 11.9062L19.7148 5.62524C20.1053 5.23424 20.1053 4.57826 19.7148 4.18726C19.5195 3.99226 19.2519 3.90625 18.996 3.90625C18.7401 3.90625 18.4727 3.99226 18.2773 4.18726L11.996 10.4682L5.71485 4.18726C5.51955 3.99226 5.25195 3.90625 4.99605 3.90625Z"
          fill={iconFill}
        />
      </svg>
    );
  }

  if (name === Icons.Mark) {
    return (
      <svg
        width="18"
        height="13"
        viewBox="0 0 18 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1L6 12L1 7"
          stroke={iconFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return <div />;
};

Icon.defaultProps = {
  height: 24,
  width: 24,
  fill: '',
};
