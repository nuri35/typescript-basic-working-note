import { Point } from "./point";
import { Vehicle4 } from "./Vehicle"; //typescriptte yeni gelen özellik olan interfaceslarıda classlar gibi export import edebilmekteyiz

export class Taxi4 implements Vehicle4 {
  constructor(private _location: Point, private _color: string) {}

  travelTo2(point: Point) {
    console.log(
      `taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this._location.y}  dannnnn gidiyor en son class`
    );

    return 1000;
  }

  get location() {
    return this._location;
  }
  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("error");
    }
    this._location = value;
  }
}
