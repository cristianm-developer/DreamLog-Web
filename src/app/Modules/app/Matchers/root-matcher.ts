import { UrlMatchResult, UrlSegment } from "@angular/router";

export function rootMatcher(segments: UrlSegment[]): UrlMatchResult | null {
    const firstSegment = segments[0]?.path || '';
    const rootRoutes = ['app', 'v'];
    return rootRoutes.includes(firstSegment)? {consumed: segments} : null
}