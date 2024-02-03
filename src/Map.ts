export interface Mappable {
  getName(): string;
  getLocation(): { lat: number; lng: number };
  getSummary(): string;
}

export class Map {
  private map: google.maps.Map;

  constructor(htmlId: string) {
    this.map = new google.maps.Map(
      document.getElementById(htmlId) as HTMLElement,
      { zoom: 1, center: { lat: 0, lng: 0 } }
    );
  }

  addMarker(item: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: { lat: item.getLocation().lat, lng: item.getLocation().lng },
      label: item.getName(),
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `Name: ${item.getSummary()}`,
      });

      infoWindow.open(this.map, marker);
    });
  }
}
