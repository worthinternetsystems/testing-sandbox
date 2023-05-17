export class TimeService {
  getCurrentIsoString() {
    return new Date().toISOString();
  }
}
