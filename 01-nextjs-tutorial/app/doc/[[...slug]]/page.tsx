import { notFound } from "next/navigation";

export function DocPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];

  return (
    <div>
      <h1>Optional Catch-all Route (App Router)</h1>
      <p>slug: {JSON.stringify(slug)}</p>
    </div>
  );
}

export default DocPage;
