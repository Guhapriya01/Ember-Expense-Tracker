export default class DollarsTransform {
  deserialize(serialized) {
    return serialized/82.72;
  }

  serialize(deserialized) {
    return deserialized*82.72;
  }

  static create() {
    return new this();
  }
}
