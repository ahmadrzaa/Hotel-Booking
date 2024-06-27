/**
 * @name Hotel Booking System
 * @author Ahmad Raza (Raza)
 * @description Hotel Booking and Management System Software ~ Developed By A Raza
 * @copyright ©2024 ― Ahmad Raza . All rights reserved.
 * @version v0.0.1
 *
 */

function arrayToCommaSeparatedText(array) {
  return array?.length > 0 ? array
    .map((item) => item)
    .join(', ')
    .toString() : 'N/A';
}

export default arrayToCommaSeparatedText;
