import React, { useState, useEffect } from "react";
import "./Result.css";
import RankCard from "../components/RankCard";
import axios from "axios";

export default function Result() {
  const [profiles, setProfiles] = useState([]);
  const [displayed_profile, setDisplayed_profile] = useState({});
  useEffect(() => {
    const foo = async () => {
      const res = await axios.get("http://localhost:5000/api/profile/top/10");
      setProfiles(res.data);
      setDisplayed_profile({ ...res.data[0] });
    };
    foo();
  }, []);
  return (
    <>
      <div className="result-container">
        <div className="show-profile">
          {/* <div className="blur"></div> */}
          {displayed_profile.name ? (
            <>
              <div className="stats">
                <h1 className="name">{displayed_profile.name}</h1>
                <h2 className="title">{displayed_profile.title}</h2>
                <div className="detail-intro">
                  {displayed_profile.intro} (detail introduction)
                </div>
              </div>

              <div className="social-links">
                <ul className="social">
                  <li>
                    <a href="">
                      <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram-square fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="img-gallery-container">
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/130868644_679944582713916_5486154884800449761_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=1&_nc_ohc=YNIWL4TqDpEAX9VSoB-&tp=1&oh=f22c94753c4bb412ddbf3c5db73b7d4f&oe=603291AC" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/130161228_682864282432113_1213590713571990147_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5Vz1iMS6d6EAX_MXYHJ&tp=1&oh=600180dd2da285c6f1a3b41f7d6a1aac&oe=603469B4" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/130824839_203899464564474_7747745918851091351_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=1&_nc_ohc=fTKP2arAlRMAX_h6Cnz&tp=1&oh=a31ec8974f7c2730fa9c719b3d8ad6e2&oe=603263B0" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.420.1080.1080a/s640x640/127259077_1128419020944098_840929554380348168_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=e0LoVhA4lGsAX-VN3zT&tp=1&oh=a6eca7dd6de98c69acda1975e5e1461f&oe=600BB8D2" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c315.0.810.810a/s640x640/110012181_886761518511832_7529818608982203998_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=104&_nc_ohc=n5sfv-I1CN0AX_gy2E0&tp=1&oh=7d8a10288f23f537485202beebf99c79&oe=60333BBB" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.161.1440.1440a/s640x640/97337264_678781379576423_6999114499331638536_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=111&_nc_ohc=Xi_WSX1GzosAX9KQMnW&tp=1&oh=fe0fb0eaed7a21fbe05faa4ac1c551ce&oe=6031CB01" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82499236_206014217187592_6955236196231898309_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=104&_nc_ohc=K0FVuFSXfTsAX9D0qJI&tp=1&oh=f488d51662866288bf51b5651afb2b29&oe=6030FE2E" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.141.1131.1131a/s640x640/83638637_199759274507838_7446069173151937668_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=106&_nc_ohc=Ss9-1WrKMa0AX96_4Lr&tp=1&oh=50487b1a39b173e699794eae335d40fd&oe=6031AFE3" />
                </div>
                <div className="image">
                  <img src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.51.1440.1440a/s640x640/78703619_555050118650210_4807808859192554484_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=JHZuh1_tl9sAX9KVAmm&tp=1&oh=9d07d71eb5b1b18f99afacb9e47e6112&oe=6033084D" />
                </div>
              </div>
            </>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
        <div className="rank-list">
          <h1 className="title-text">Ranking Board</h1>

          {profiles.map((p, i) => (
            <RankCard
              key={i}
              onClick={(i) => {
                console.log(profiles[i]);
                setDisplayed_profile(() => {
                  return { ...profiles[i] };
                });
              }}
              rank={i + 1}
              rate={p.rate}
              name={p.name}
              title={p.title}
              img_url={p.pictures[0]}
              ig_follwers={p.ig_follwers}
              ig_link={p.ig_link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
