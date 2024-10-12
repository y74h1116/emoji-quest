import { FC } from "react";
import { Link } from "react-router-dom";
import { AfterRendering } from "./parts/AfterRendering";

export const Top:FC = () => {
  return (
    <>
      <header>
        <h1 className="title_font_size">絵文字クエスト</h1>
      </header>
      <main>
        <article>
          <Link className="border_round background_color_blue color_white under_line_none" to="/profile">戦ってみる</Link>
          <p>
            HP、攻撃力、守備力、素早さの合計が100ポイントになるように振り分けて、<br/>
            いきなりバトルします！
          </p>
          <p>懐かしい JBS クエストの習作です。</p>
        </article>
      </main>
      <AfterRendering/>
    </>
  );
};
