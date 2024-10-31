import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePage({ defaultVideo }) {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (defaultVideo != null) {
            setShouldRedirect(true);
        }
    }, [defaultVideo]);

    if (shouldRedirect) {
        return <Navigate to={`/videos/${defaultVideo.id}`} />;
    }
}

export default HomePage;
