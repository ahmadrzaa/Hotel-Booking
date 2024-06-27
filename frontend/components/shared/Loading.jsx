/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Loading() {
  return (
    <div className='loading'>
      <img
        src='/images/gif/loading-arrow.gif'
        alt='loading gif'
      />
      <h4>Data loading...</h4>
    </div>
  );
}

export default Loading;
