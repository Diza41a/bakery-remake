import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Styles
import s from '../styles/shared';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

// Multi Language support
import '../i18n';

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Reset default css rules */}
      <Global styles={css`${emotionReset}`} />
      <s.Header>
        <div className="header-body">
          {/* -- Logo -- */}
          <Link href='/' className='logo-wrap'>
            <div className="logo" />
          </Link>

          {/* -- Main nav -- */}
          <nav>
            <Link href="about">{t('header.about')}</Link>
            <Link href="menu">{t('header.menu')}</Link>
            <Link href="contact">
              <i className="fa-solid fa-question icon" />
              {` ${t('header.contact')}`}
            </Link>
            <button id="settings-btn" type='button'>
              <i className="fa-solid fa-gear" />
              <i className="fa-solid fa-chevron-down" />
            </button>
            {/* <Link href="/admin-dashboard">{t('header.admin')}</Link> */}
          </nav>
        </div>

        <div className="background" />
      </s.Header>
      <Component {...pageProps} />
    </>
  )
}
