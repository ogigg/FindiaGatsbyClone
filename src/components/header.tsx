import { graphql, Link, StaticQuery } from 'gatsby';

interface MenuItem {
  id: string;
  Label: string;
  url: string;
}
export default function Header() {
  return (
    <header className="mx-5 relative">
      <div className="navbar-logo"></div>
      <div className="flex justify-between top-0 right-0 left-0 absolute m-5">
        <img src={'/logo.svg'} alt="Logo" />
        <div className="navbar-links">
          <StaticQuery
            query={graphql`
              query NavTopMenu {
                allStrapiTopMenu {
                  nodes {
                    TopMenu {
                      id
                      Label
                      url
                    }
                  }
                }
              }
            `}
            render={(data) => {
              return data.allStrapiTopMenu.nodes[0].TopMenu.map(
                (menuItem: MenuItem) => {
                  return (
                    <Link
                      to={menuItem.url}
                      key={menuItem.id}
                      className="text-white m-2 font-semibold"
                    >
                      {menuItem.Label}
                    </Link>
                  );
                },
              );
            }}
          />
        </div>
      </div>
    </header>
  );
}
