export interface MockMenuItem {
  title: string;
  imgUrl: string;
}

export interface CardProps extends React.ComponentProps<"div"> {
  type?: string;
}
