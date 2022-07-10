// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import MainPage from "./Mainpage";
import MyPage from "./container/Mypage";
import "./static/css/navbar.css";
import "./static/css/mainpage.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

const ProviderConfig = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <BrowserRouter basename="/wp">
      <div className="header">
        <div className="game-container">
          <nav className="game-blocK">
            <ul className="game-list">
              <li className="game-item">
                <a className="game-link" href="#">
                  리그오브레전드
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  Duo
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  QWER (이스포츠 전적)
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  발로란트
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  배틀그라운드
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  오버워치
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  이터널 리턴
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  톡피지지
                </a>
              </li>
              <li className="game-item">
                <a className="game-link" href="#">
                  데스크톱
                </a>
              </li>
            </ul>
          </nav>
          <div className="setting">
            <select className="setting-select">
              <option selected>한국어</option>
              <option>영어</option>
              <option>중국어</option>
            </select>
            <button className="login-btn">로그인</button>
          </div>
        </div>
        <div className="nav-container">
          <nav className="nav-block">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  홈
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  챔피언 분석
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  게임 모드
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  통계
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  랭킹
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  프로관전
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  멀티서치
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  커뮤니티
                </a>
              </li>
            </ul>
            <form className="nav-search">
              <select className="nav-search-select">
                <option selected>KR</option>
                <option>JP</option>
                <option>OCE</option>
              </select>
              <input
                className="nav-search-input"
                type="text"
                placeholder="소환사명을 입력하세요."
              />
              <button className="nav-search-submit" type="submit">
                검색
              </button>
            </form>
          </nav>
        </div>
      </div>
      <SearchBar placeholder="챔피언 검색" />
      <div className="contents">
        <Card type="position" />
        <div className="card-container">
          <Card type="champion" />
          <Card type="rank" />
        </div>
      </div>
      <footer>
        <br></br>
      </footer>

      <Routes>
        <Route path="/Mainpage" element={<MainPage />} />
        <Route path="/Mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
