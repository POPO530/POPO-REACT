import { Link } from "react-router-dom"; /* React19ならこれでいい　*/

function Top() {

  return (
    <div className="top-screen">
      <h1>POPO Portfolio</h1> {/* トップ画面のタイトル */}
      <p>
        ReactとTypeScriptを学習しながら制作したWebアプリです。
      </p>
      <h2>使用技術</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Three.js</li>
      </ul>
      <h3>3Dパックマン風ゲーム</h3>
      <p>React Three Fiberで制作</p>
      <Link to="game" className="link-button">ゲームを遊ぶ</Link> {/* ゲーム画面へのリンク */}
      <h3>一番くじ風くじシミュレーター</h3>
      <p>Reactの状態管理(useState)を利用して制作</p>
      <Link to="kuji" className="link-button">くじを引く</Link> {/* くじ画面へのリンク */}
    </div>
  );
}

export default Top; // Topコンポーネントをエクスポート