function getLevelFromStatus(data) {
  if (!data) return 0;
  return data.stats?.level ?? 0;
}

function getXPPercent(data) {
  if (!data) return 0;
  const cur = data.stats?.xp?.current ?? 0;
  const nxt = data.stats?.xp?.next ?? 100;
  return Math.round((cur / nxt) * 100);
}
