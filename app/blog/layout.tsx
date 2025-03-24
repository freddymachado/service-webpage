import React from 'react';
export const metadata = {
  title: {
    default: 'Blog',
    template: '%s | Sitio Vegano',
  },
  description: '%s',
  openGraph: {
    title: '%s | Sitio Vegano',
    description: '%s',
    images: [`%s`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
