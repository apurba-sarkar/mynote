import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://assuasqstvygcbqucidh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzc3Vhc3FzdHZ5Z2NicXVjaWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NjYwMTQsImV4cCI6MjAyMjU0MjAxNH0.RQRz5gaHdyijMbNuuIMiskDVjxitqpvfijDyIOoOyjs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase