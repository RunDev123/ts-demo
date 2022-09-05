/**
 * 功能：定义一个操作数据库的类，支持MySQL、MSSQL、MongoDb
 * 要求：MySQL、MSSQL、MongoDb功能一样，都有add、update、delete、get方法
 *
 */

// 首先定义接口
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}
// 定义一个操作MySQL数据库的类
class MySQLDb<T> implements DBI<T> {
  constructor() {
    // 模拟数据库连接操作
    console.log("通过node连接数据库");
  }
  add(info: T): boolean {
    // 模拟添加到数据库操作，这里打印出参数info拿到的数据
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    return true;
  }
  delete(id: number): boolean {
    return true;
  }
  get(id: number): any[] {
    const list = [
      {
        title: "xxxx",
        dest: "xxxxxxxxxxx",
      },
      {
        title: "xxxxxx",
        desc: "xxxxxxxxxxx",
      },
    ];
    return list;
  }
}

// 定义一个操作MSSQL数据库的类
class MSSQLDb<T> implements DBI<T> {
  constructor() {
    // 模拟数据库连接操作
    console.log("通过node连接数据库");
  }
  add(info: T): boolean {
    // 模拟添加到数据库操作，这里打印出参数info拿到的数据
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    return true;
  }
  delete(id: number): boolean {
    return true;
  }
  get(id: number): any[] {
    const list = [
      {
        title: "xxxx",
        dest: "xxxxxxxxxxx",
      },
      {
        title: "xxxxxx",
        desc: "xxxxxxxxxxx",
      },
    ];
    return list;
  }
}
// 定义一个操作Mongodb数据库的类
//  同上，略

// 操作用户表
// 定义 一个User类和数据库表的映射
class User {
  username: string | undefined;
  password: string | undefined;
}
const u = new User();
u.username = "张三";
u.password = "123456";

// 插入数据到MySQL数据库
const oMySQL = new MySQLDb<User>(); //类作为参数，来约束数据传入的类型
oMySQL.add(u);

// 插入数据到MSSQL数据库
const oMSSQL = new MSSQLDb<User>();
oMSSQL.add(u);

// 根据id查询MSSQL数据库中的数据
const data = oMSSQL.get(4);
console.log(data);
