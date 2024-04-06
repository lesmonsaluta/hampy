import { useNavigate } from 'react-router-dom';

import { supabase } from './clients/supabaseClient'

function logoutScreen() {
    const navigate = useNavigate();
    
    async function logoutHandler() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error
        }
        navigate("/login", { replace: true }); // This forces a redirect to the login page
    }
    return (

        <div>
            <p>This is some text</p>
            <button onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default logoutScreen;
