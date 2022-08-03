import { ResultSetHeader } from 'mysql2';
import { Iusers } from '../interfaces/usersInterface';
import connection from './connection';

const createUserModels = async (user: Iusers) => {
  const { username, classe, level, password } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
  `, [username, classe, level, password]);
    
  return {
    id: insertId,
    username,
    classe,
    level,
    password,
  };
};

export default createUserModels;