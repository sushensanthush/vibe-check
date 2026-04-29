export type VibeStatus = 'excellent' | 'stuttering' | 'offline';

export interface VibeReport {
  status: VibeStatus;
  latency: number;
  timestamp: number;
}

export class VibeCheck {
  private timer: any = null;

  constructor(private pingUrl: string = 'https://www.google.com/favicon.ico', private interval: number = 5000) {}

  private async measureLatency(): Promise<number> {
    const start = performance.now();
    try {
      await fetch(`${this.pingUrl}?t=${Date.now()}`, { mode: 'no-cors', cache: 'no-store' });
      return performance.now() - start;
    } catch {
      return -1;
    }
  }

  public start(callback: (report: VibeReport) => void) {
    this.timer = setInterval(async () => {
      const latency = await this.measureLatency();
      let status: VibeStatus = 'excellent';

     const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  if (latency === -1 || !isOnline) status = 'offline';

      else if (latency > 1500) status = 'stuttering';

      callback({ status, latency, timestamp: Date.now() });
    }, this.interval);
  }

  public stop() {
    if (this.timer) clearInterval(this.timer);
  }
}