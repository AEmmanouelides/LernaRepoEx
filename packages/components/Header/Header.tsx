
export const Header = (props: {headerStyles: any, label: string}) => {
    return (
        <div data-testid="headerContainer" className="container" style={props?.headerStyles?.header}>
            <h1 data-testid="headerTitle" style={props?.headerStyles?.title}>{props?.label}</h1>
        </div>
    )
  }
