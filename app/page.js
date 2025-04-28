import styles from "./page.module.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />

      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
