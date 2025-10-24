import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function testRLS() {
  const tables = ['profiles', 'bankrolls', 'bets', 'referrals'];

  for (const table of tables) {
    console.log(`\nFetching rows from table: ${table}`);
    const { data, error } = await supabase.from(table).select('*');
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  }
}

testRLS();
