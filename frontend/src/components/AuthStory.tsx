import React from "react";
import { useTranslation } from "react-i18next";

const AuthStory: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="mt-8 text-left bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                {t("story.title")}
            </p>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{t("story.subtitle")}</h2>
            <p className="text-sm text-gray-700 leading-6 mb-2">{t("story.description")}</p>
            <p className="text-sm text-gray-700 leading-6">{t("story.details")}</p>
        </div>
    );
};

export default AuthStory;
