/*
 * Module dependencies
 */

import banner from './banner';

export default {
  banner: {
    find: function(callback) {
      setTimeout(() => {
        callback(banner);
      }, 500);
    }
  }  
}
