import React from 'react';
import ContentLoader from 'react-content-loader';

export const ProductsSkeleton: React.FC = () => (
  <ContentLoader viewBox="0 0 1360 900" width="100%">
    <rect x="30" y="0" rx="8" ry="8" width="275" height="300" />
    <rect x="30" y="350" rx="0" ry="0" width="275" height="40" />
    <rect x="30" y="400" rx="0" ry="0" width="200" height="30" />
  </ContentLoader>
);
