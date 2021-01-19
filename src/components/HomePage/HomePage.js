import React from 'react';

import { useTranslation } from 'react-i18next';

function HomePage(props) {
    const { t, i18n } = useTranslation();
    
    return (
        <h1>{t("welcome")}</h1>
    )
}

export default HomePage;