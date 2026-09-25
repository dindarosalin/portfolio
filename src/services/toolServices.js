import { supabase } from '../library/supabase'

export async function getTools() {
    const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('is_active', true)
        .order('display_order', {
            ascending: true,
        })

    if (error) {
        throw error
    }

    return data
}