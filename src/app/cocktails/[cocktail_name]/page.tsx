export default async function Page({
  params,
}: {
  params: Promise<{ cocktail_name: string }>;
}) {
  const { cocktail_name } = await params;

  return <div>{cocktail_name}</div>;
}
