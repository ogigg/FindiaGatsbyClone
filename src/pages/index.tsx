import Header from '@/components/header';
import { graphql, StaticQuery } from 'gatsby';

export default function Home() {
  return (
    <>
      <Header />
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
                  promo_video {
                    localFile {
                      url
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <div className="flex max-w-6xl mx-auto flex-wrap">
              <div className="w-full lg:w-1/2 p-2">
                <h1 className="text-white text-6xl font-semibold text-center mb-5">
                  {data.allStrapiHomepage.nodes[0].header}
                </h1>
                <p className="text-white text-lg font-medium text-center">
                  {
                    data.allStrapiHomepage.nodes[0].first_content.data
                      .first_content
                  }
                </p>
                <video
                  controls
                  src={
                    data.allStrapiHomepage.nodes[0].promo_video.localFile.url
                  }
                ></video>
              </div>

              <div className="w-full lg:w-1/2 p-2">
                <div className="w-64 mx-auto">
                  <a href="https://play.google.com/store/apps/details?id=team.moodup.findia">
                    <img
                      alt="pobierz z Google Play"
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png"
                    ></img>
                  </a>
                </div>
                <a href="https://play.google.com/store/apps/details?id=team.moodup.findia">
                  <div className="text-white text-center">
                    ↑ <br></br>Kliknij tutaj, aby pobrać aplikację
                  </div>
                </a>
                <img
                  width="690"
                  height="445"
                  src="https://secureservercdn.net/160.153.138.178/uvf.ceb.myftpupload.com/wp-content/uploads/2022/07/ilosc_pobran_3-1-1024x661.png"
                  alt="Findia chart downloads"
                  loading="lazy"
                  sizes="(max-width: 690px) 100vw, 690px"
                ></img>
              </div>
            </div>
          )}
        />
      </main>
    </>
  );
}
