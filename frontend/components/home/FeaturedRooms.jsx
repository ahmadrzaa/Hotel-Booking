/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';
import { v4 as uniqueId } from 'uuid';
import Room from '../shared/Room';
import Title from './Title';

function FeaturedRooms({ featuredRoom }) {
  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />

      <div className='featured-rooms-center'>
        {featuredRoom?.map((room) => (
          <Room key={uniqueId()} room={room} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRooms;
