import { supabase } from '../library/supabase'

export async function getSkills() {
    const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('id', {
            ascending: true,
        })

    if (error) {
        throw error
    }

    return data
}