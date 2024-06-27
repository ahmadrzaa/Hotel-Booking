/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

import Head from 'next/head';
import React from 'react';
import Footers from './footers';
import Navbar from './navbar';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || 'Beach Resort'}</title>
        <meta name='description' content='Beach Resort ― Hotel Room Booking System' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main style={{ overflow: 'auto' }}>
        {children}
      </main>
      <Footers />
    </>
  );
}

export default MainLayout;
