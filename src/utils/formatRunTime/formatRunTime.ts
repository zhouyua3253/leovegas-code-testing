/**
 * Convert the runtime of a movie to string
 * @param runtime
 *
 * 112 -> 1h52m
 * 48 -> 48m
 * 120 -> 2h
 */
export function formatRunTime(runtime: number): string {
  if (runtime <= 0) {
    return "";
  }

  if (runtime < 60) {
    return `${runtime}m`;
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h${minutes}m`;
}
