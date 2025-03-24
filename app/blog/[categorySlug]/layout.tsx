import { articles } from '@/lib/data';

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}) {
  const article = articles.find((a) => a.id === params.categorySlug);
  if (!article) {
    return {};
  }
  const metadata = {
    title: `${article.title}`,
    description: `${article.paragraphs[0]
      .split(' ')
      .slice(0, 15)
      .join(' ')}`,
    openGraph: {
      title: `${article.title}`,
      description: `${article.paragraphs[0]
        .split(' ')
        .slice(0, 15)
        .join(' ')}`,
      images: `${article.image}`,
    },
    //keywords: `${article.keywords}`,
    author: `${article.author}`,
    copyright: 'Freddy Machado',
    robots: 'nofollow',
  };
  return metadata;
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const article = articles.find((a) => a.id === params.categorySlug);
  if (!article) {
    return {};
  }
  return (
    <>
      <div>{children}</div>
    </>
  );
}
