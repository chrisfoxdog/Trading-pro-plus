import { supabase } from './supabaseClient.js';

async function insertSampleData() {
  // 1️⃣ Profiles
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .insert([
      { id: '00000000-0000-0000-0000-000000000001', user_id: '00000000-0000-0000-0000-000000000001', full_name: 'Chris Nobles', email: 'chris@example.com' },
      { id: '00000000-0000-0000-0000-000000000002', user_id: '00000000-0000-0000-0000-000000000002', full_name: 'Jane Doe', email: 'jane@example.com' }
    ]);

  if (profilesError) console.error('Profiles error:', profilesError);

  // 2️⃣ Bankrolls
  const { data: bankrolls, error: bankrollsError } = await supabase
    .from('bankrolls')
    .insert([
      { profile_id: '00000000-0000-0000-0000-000000000001', balance: 500, currency: 'USD' },
      { profile_id: '00000000-0000-0000-0000-000000000002', balance: 250, currency: 'USD' }
    ]);

  if (bankrollsError) console.error('Bankrolls error:', bankrollsError);

  // 3️⃣ Bets
  const { data: bets, error: betsError } = await supabase
    .from('bets')
    .insert([
      { bankroll_id: bankrolls[0].id, placed_by: '00000000-0000-0000-0000-000000000001', amount: 50, odds: 1.5, status: 'pending' },
      { bankroll_id: bankrolls[1].id, placed_by: '00000000-0000-0000-0000-000000000002', amount: 25, odds: 2, status: 'pending' }
    ]);

  if (betsError) console.error('Bets error:', betsError);

  // 4️⃣ Referrals
  const { data: referrals, error: referralsError } = await supabase
    .from('referrals')
    .insert([
      { referrer_id: '00000000-0000-0000-0000-000000000001', referee_id: '00000000-0000-0000-0000-000000000002', bonus_amount: 10, status: 'pending' }
    ]);

  if (referralsError) console.error('Referrals error:', referralsError);

  console.log('Sample data inserted successfully!');
}

insertSampleData();
