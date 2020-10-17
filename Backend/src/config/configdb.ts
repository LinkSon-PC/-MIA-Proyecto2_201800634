const oracledb = require('oracledb');
import keys from './keys'


async function Open(sql: any, binds: any, autoCommit: any) {
    let cnn = await oracledb.getConnection(keys.database);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;