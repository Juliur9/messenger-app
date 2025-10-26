import { createClient } from '@supabase/supabase-js';

// Dein neuer Supabase Client
const supabaseUrl = 'https://htqtazqgbzgskonkifnn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cXRhenFnYnpnc2tvbmtpZm5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMDA5NTYsImV4cCI6MjA3Njc3Njk1Nn0.rVodcXmRUqRGoquOPppQpeXem4kX6pJ8-vE5qeP5h0Y';

//client wird exportiert
export const supabase = createClient(supabaseUrl, supabaseKey);