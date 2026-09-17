import { supabase } from '../library/supabase'

export async function getProjects() {
  console.log('🔵 getProjects() dipanggil')

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('🔴 getProjects() error:', error)
    throw error
  }

  console.log('🟢 getProjects() berhasil')
  console.log('📁 Projects data:', data)

  return data
}