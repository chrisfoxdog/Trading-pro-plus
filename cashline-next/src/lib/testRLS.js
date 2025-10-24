import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

console.log('Supabase client loaded');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testRLS() {
  const tables = ['profiles', 'bankrolls', 'bets', 'referrals'];

  for (const table of tables) {
    console.log(`\nFetching rows from table: ${table}`);
    const { data, error } = await supabase.from(table).select('*').limit(5);
    if (error) console.error(error);
    else console.log(data);
  }
}

testRLS();
