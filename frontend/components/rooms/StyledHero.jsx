/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

import styled from 'styled-components';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : '/images/jpeg/room-1.jpeg')})
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
