import { graphql, StaticQuery } from 'gatsby';

export default function Home() {
  return (
    <main>
      <StaticQuery
        query={graphql`
          query MyQuery {
            allStrapiHomepage {
              nodes {
                header
                first_content {
                  data {
                    first_content
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <div className="flex">
            <div className="w-1/2 p-2">
              <h1 className="text-white text-6xl font-semibold text-center mb-5">
                {data.allStrapiHomepage.nodes[0].header}
              </h1>
              <p className="text-white text-lg font-medium text-center">
                {
                  data.allStrapiHomepage.nodes[0].first_content.data
                    .first_content
                }
              </p>
            </div>

            <div className="w-1/2 p-2">
              <p>
                Follow me on Twitter (
                <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
              </p>
            </div>
          </div>
        )}
      />
    </main>
  );
}
