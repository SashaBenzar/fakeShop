import React from "react"
import ContentLoader from "react-content-loader";

export const CategoriesSkeleton = () => (
    <ContentLoader
        speed={2}
        width={160}
        height={40}
        viewBox="0 0 160 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="20" ry="20" width="160" height="40" />
    </ContentLoader>
)