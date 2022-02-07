import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { increase } from "../src/lib/store/@test/addAnything";

// 1. 버튼을 만들거야
// 2. 해당 버튼에 디스패치 핸들러를 넣을거야
// 3. 디스패치 => store 값을 넣을거야.
const Home: NextPage = () => {
  const dispatch = useDispatch();

  const dispatchHandler = () => {
    console.log("t");
    dispatch(increase());
  };

  return (
    <div className={styles.container}>
      <button onClick={dispatchHandler}>디스패치</button>
      <h2 style="color: #F1C2E3">자동화 배포 적용 완료</h2>
    </div>
  );
};

export default Home;
