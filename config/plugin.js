'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //use mysql
  mysql:{
      enable:true,
      package:'egg-mysql'
  }
};
