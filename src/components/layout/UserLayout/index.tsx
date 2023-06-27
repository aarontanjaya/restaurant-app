import React from "react";
import Link from "next/link";
import { UserLayoutProps } from "../interface";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>asd</div>
        <div className={styles.nav__group}>
          <Link href="/" className={styles.nav__item__wrapper}>
            <HomeOutlined className={styles.icons} />
          </Link>
          <Link href="/transactions" className={styles.nav__item__wrapper}>
            <UnorderedListOutlined className={styles.icons} />
          </Link>
        </div>
      </nav>
      <div className={styles.page__content}>{children}</div>
    </div>
  );
};

export default UserLayout;
