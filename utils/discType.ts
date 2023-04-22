
export function discType (type: string) {
  switch(type) {
    case 'PUTTER':
      return 'Putter';
    case 'MIDRANGE':
      return 'Midrange';
    case 'FAIRWAY_DRIVER':
      return 'Fairway Driver';
    case 'DISTANCE_DRIVER':
      return 'Distance Driver';
    default:
      return 'Unknown';
  }
}