import './ContentWrapper.scss';

interface ContentWrapperProps {
  children: React.ReactNode;
  classList?: string,
}

function ContentWrapper({ children, classList = '' }: ContentWrapperProps) {

  const createClass = (): string => {
    return `contentWrapper p-3 ${classList}`;
  }

  return (
    <div className={createClass()}>{ children }</div>
  )
}

export default ContentWrapper