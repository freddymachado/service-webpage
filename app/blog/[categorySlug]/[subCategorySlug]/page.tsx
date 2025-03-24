
export default async function Page({
  params,
}: {
  params: { subCategorySlug: string };
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{params.subCategorySlug}</h1>

    </div>
  );
}
