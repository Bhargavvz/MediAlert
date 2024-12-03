import { Client } from 'pg';

async function testConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Nani2005',
    database: 'medialert'
  });

  try {
    console.log('Attempting to connect to PostgreSQL...');
    await client.connect();
    console.log('Successfully connected to PostgreSQL!');

    // Test query to check if users table exists
    const result = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `);

    if (result.rows[0].exists) {
      console.log('Users table exists');
      
      // Count users
      const userCount = await client.query('SELECT COUNT(*) FROM users');
      console.log(`Number of users in database: ${userCount.rows[0].count}`);
    } else {
      console.log('Users table does not exist');
    }

  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    await client.end();
  }
}

testConnection();
