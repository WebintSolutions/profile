import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://oejbxumbgzakxzcmkozx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lamJ4dW1iZ3pha3h6Y21rb3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1ODg1NjMsImV4cCI6MTk5NjE2NDU2M30.qgt7Iw59ytZxkY1kKCZ1ztx-kCFUjWNxrf8CUJTKndk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)