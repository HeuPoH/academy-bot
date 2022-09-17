/* eslint-disable prettier/prettier */
// import { openDatabase } from 'react-native-sqlite-storage';

// import { DBTables } from '~library/common/types';

// function getDBConnection() {
//   return openDatabase({ name: 'academy.db', location: 'default' });
// }

// export async function prepareDatabase(query: string) {
//   const conn = await getDBConnection();
//   await conn.executeSql(query);
//   conn.close();
// }

// export class DatabaseService<T extends Object> {
// private tbName: string;

// constructor(tableName: keyof DBTables, query: string) {
//   this.tbName = tableName;
//   prepareDatabase(query);
// }

// getTableName(): string {
//   return this.tbName;
// }

// getData() {
//   const query = `select * from ${this.tbName}`;
//   return this.execute(query);
// }

// setData(data: T[]): Promise<any> {
//   return Promise.all(data.map(d => {
//     const prepareData = Object.keys(d).map(key => `${key}=${d[key]}`).join(',');
//     const query = `insert into ${this.tbName} set ${prepareData}`;
//     this.execute(query);
//   }));
// }

// deleteData(id: number): Promise<any> {
//   const query = `delete from ${this.tbName} where id=${id}`;
//   return this.execute(query);
// }

// updateData(id: number, data: any): Promise<any> {
//   const prepareData = Object.keys(data).map(key => `${key}=${data[key]}`).join(',');
//   const query = `update ${this.tbName} set ${prepareData} where id=${id}`;
//   return this.execute(query);
// }

// getDataByKey(key: string, value: string | number): Promise<any> {
//   const query = `select * from ${this.tbName} where ${key}=${value}`;
//   return this.execute(query);
// }

// async execute(query: string): Promise<any> {
//   const conn = await this.getConnection();
//   const result = conn.executeSql(query, undefined, () => console.log(2), e => console.log(e));

//   conn.close();
//   return result;
// }

// private getConnection() {
//   return getDBConnection();
// }
// }

export class Text { }
