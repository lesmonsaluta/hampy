import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wtmwddkhnsstxqexqiws.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bXdkZGtobnNzdHhxZXhxaXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzUzNzgsImV4cCI6MjAyNzkxMTM3OH0.sKFfHHobNMhq0aiZ4XoOhKTbP9dnd3EDocMPpqljdUI'

export const supabase = createClient(supabaseUrl, supabaseKey)
