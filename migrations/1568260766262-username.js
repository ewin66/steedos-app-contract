'use strict'

let db = require("../db");

// 如果 space_users.username 不存在，自动更新为对应的 user.username。
module.exports.up = async function (next) {
  let space_users = await db.findOne("space_users");
}

module.exports.down = async function (next) {
}
