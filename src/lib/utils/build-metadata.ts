import type { Metadata } from 'next/types';

type BuildMetaProps = Metadata;

/**
 * For more info check out {@link https://nextjs.org/docs/app/building-your-application/optimizing/metadata Next Metadata docs}.
 */
export const buildMetadata = ({ title, description, twitter, openGraph, ...rest }: BuildMetaProps): Metadata => {
  const metaTitle = title || undefined;
  const metaDescription = description ? { description: description } : null;

  return {
    title: metaTitle,
    ...metaDescription,
    openGraph: {
      title: metaTitle,
      ...metaDescription,
      ...openGraph,
    },
    twitter: {
      title: metaTitle,
      ...metaDescription,
      ...twitter,
    },
    ...rest,
  };
};
