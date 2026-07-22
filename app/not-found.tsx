import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container>
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center py-24 text-center">
        <span className="text-6xl font-extrabold text-primary-700">404</span>
        <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          The page you are looking for took a detour. Let us get you back on
          route.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </Container>
  );
}
