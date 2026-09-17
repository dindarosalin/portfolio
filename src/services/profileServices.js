import { supabase } from '../library/supabase'

export async function getProfile() {
  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .eq('is_active', true)
    .single()

  if (error) {
    throw error
  }

  return data
}