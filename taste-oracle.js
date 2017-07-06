/**
 * Module   : taste-oracle
 * Function : 了解oracledb的各种用法
 * Project  : monitor
 * License  : Copyright © 2017 Shanghai Zhenhua Heavy Industries Co., Ltd. All rights reserved
 * Author   : Create by Colin Wu on 2017/7/6
 */

var oracledb = require('oracledb')

oracledb.getConnection(
  {
    user: 'qdecs1',
    password: 'qdecs123',
    connectString: '10.28.160.172/qdecs'
  },
  function (err, connection) {
    if (err) {
      console.error(err.message)
      return
    }
    connection.execute(
      'SELECT LANE_ID CHARGE_STATUS ' +
      'FROM T_AGV_CHARGE_LANE ' +
      'WHERE LANE_ID = 272',
      function (err, result) {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(result.rows)
      })
  })
