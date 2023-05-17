export class InjectedTimeService {
  constructor(private currentDate: Date) {}

  getCurrentIsoString() {
    return this.currentDate.toISOString();
  }
}
