import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

export async function POST({ request }) {
	const { email } = await request.json();

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: 'Invalid email' }, { status: 400 });
	}

	const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
	const { error } = await supabase.from('waitlist').insert({ email });

	if (error) {
		if (error.code === '23505') {
			return json({ success: true });
		}
		console.error('Supabase error:', error);
		return json({ error: 'Something went wrong' }, { status: 500 });
	}

	return json({ success: true });
}
