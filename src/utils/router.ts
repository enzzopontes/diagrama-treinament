import type { AppModule } from '../types/navigation';

export interface RouteState {
  module: AppModule;
  subjectId: string;
  subModal?: string;
}

export function parseCurrentRoute(defaultSubjectId: string = ''): RouteState {
  if (typeof window === 'undefined') {
    return { module: 'hub', subjectId: defaultSubjectId };
  }

  // Support hash routing (/#/subject/module) or pathname (/subject/module)
  const hash = window.location.hash.replace(/^#\/?/, '');
  const pathname = window.location.pathname.replace(/^\//, '');
  const activePath = hash || pathname;

  if (!activePath || activePath === '' || activePath === 'hub') {
    return { module: 'hub', subjectId: defaultSubjectId };
  }

  const segments = activePath.split('/').filter(Boolean);
  if (segments.length === 0) {
    return { module: 'hub', subjectId: defaultSubjectId };
  }

  const subjectId = segments[0];
  if (subjectId === 'hub') {
    return { module: 'hub', subjectId: defaultSubjectId };
  }

  if (segments.length === 1) {
    return { module: 'subject', subjectId };
  }

  const mod = segments[1] as AppModule;
  const validModules: AppModule[] = ['resumo', 'simulado', 'flashcards', 'diagramas'];
  if (validModules.includes(mod)) {
    return {
      module: mod,
      subjectId,
      subModal: segments[2],
    };
  }

  return { module: 'subject', subjectId };
}

export function navigateTo(
  subjectId?: string,
  module?: AppModule,
  options?: { replace?: boolean; subModal?: string }
): void {
  if (typeof window === 'undefined') return;

  let targetPath = '/';
  if (subjectId && subjectId !== 'hub') {
    targetPath = `/${subjectId}`;
    if (module && module !== 'subject' && module !== 'hub') {
      targetPath += `/${module}`;
      if (options?.subModal) {
        targetPath += `/${options.subModal}`;
      }
    }
  }

  const newUrl = targetPath;
  const method = options?.replace ? 'replaceState' : 'pushState';

  try {
    window.history[method]({ subjectId, module }, '', newUrl);
  } catch {
    // Fallback for sandboxed iframes
    window.location.hash = `#${targetPath}`;
  }

  window.dispatchEvent(new Event('app-route-change'));
}

export function setupRouteListener(
  callback: (route: RouteState) => void,
  defaultSubjectId: string = ''
): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleRouteChange = () => {
    callback(parseCurrentRoute(defaultSubjectId));
  };

  window.addEventListener('popstate', handleRouteChange);
  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('app-route-change', handleRouteChange);

  // Initial run
  handleRouteChange();

  return () => {
    window.removeEventListener('popstate', handleRouteChange);
    window.removeEventListener('hashchange', handleRouteChange);
    window.removeEventListener('app-route-change', handleRouteChange);
  };
}
