import { redirect } from '@sveltejs/kit';

// Lectures sekmesi kaldırıldı; eski linkleri ilk sekmeye yönlendir.
export const GET = () => {
    throw redirect(308, '/nomad/milestones');
};
