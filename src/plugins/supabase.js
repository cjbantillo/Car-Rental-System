import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxvwgxwvnywxlljqqirb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dndneHd2bnl3eGxsanFxaXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NTYyOTAsImV4cCI6MjA1MzUzMjI5MH0.CLCUI1v0O2SQuaxeDuLBG6EFrCu2B-9VKsqqWgZb2qc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
