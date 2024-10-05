import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerProfileTable } from "./parts/PlayerProfileTable";
import { PlayerImageFile } from "./models/PlayerProfile";
import { InputSubmitProfile } from "./parts/InputSubmitProfile";

export const Profile:FC = () => {
  const navigate  = useNavigate();
  const submitHandler = () => {
    navigate('/opponent');
  };

  return (
    <>
      <main>
        <article>
          <div>

            <div className="display_inline_block vertical_align_top padding_all_5">
              <div>
                あなたの代理として<br/>
                たたかう棒人形です。<br/>
                棒人形に名前をつけて<br/>
                100ポイントを<br/>
                HP、攻撃力、守備力、素早さ<br/>
                に振り分けてください。
              </div>
              <img src={PlayerImageFile} className="character_image_size"/>
            </div>

            <div className="display_inline_block vertical_align_top">
              <form onSubmit={submitHandler}>
                <div className="padding_all_5">
                  <PlayerProfileTable/>
                </div>
                <InputSubmitProfile/>
              </form>
            </div>

          </div>
        </article>
      </main>
      <footer className="padding_top_10">
        <span className="little_font_size color_gray">since 2024/10</span>
      </footer>
    </>
  );
};
