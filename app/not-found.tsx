import { getCurrentLocale } from '@/lib/i18n';
import { getPageCopy } from '@/content/pageCopy';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default async function NotFound() {
  const locale = await getCurrentLocale();
  const copy = getPageCopy(locale).notFound;

  return (
    <Container>
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center py-24 text-center">
        <span className="text-6xl font-extrabold text-primary-700">404</span>
        <h1 className="mt-4 text-3xl font-bold text-ink">{copy.title}</h1>
        <p className="mt-3 text-ink-muted">{copy.body}</p>
        <div className="mt-8">
          <Button href="/">{copy.cta}</Button>
        </div>
      </div>
    </Container>
  );
}
