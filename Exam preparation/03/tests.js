let { expect } = require("chai");
let { Repository } = require("./solution.js");

describe("Repository", () => {
  let properties = {
    name: "string",
    age: "number",
    birthday: "object",
  };

  let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };

  let clonedEntity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };

  describe("Initialization", () => {
    it("Should add props property on init", () => {
      let repository = new Repository(properties);

      expect(repository).to.have.property("props");
      expect(repository.props).to.deep.equal(properties);
    });

    it("Should have property data on init", () => {
      let repository = new Repository(properties);

      expect(repository).to.have.property("data");
      expect(typeof repository.data).is.equal("object");
      expect(repository.data).instanceOf(Map);
    });
  });

  describe("Add entity", () => {
    it("Should return incremented id if valid entity is added", () => {
      let repository = new Repository(properties);

      expect(repository.add(entity)).to.equal(0);
      expect(repository.add(entity)).to.equal(1);
    });

    it("Should sotre valid entity in data map", () => {
      let repository = new Repository(properties);

      repository.add(entity);

      expect(repository.data.get(0)).not.to.be.undefined;
      // expect(repository.data.get(0)).to.deep.equal(entity);
      expect(repository.data.get(0))
        .to.have.property("name")
        .that.equals("Pesho");
      expect(repository.data.get(0)).to.have.property("age").that.equals(22);
      expect(repository.data.get(0)).to.have.property("birthday");
    });

    it("Should throw error if property is missing", () => {
      let entity = {
        name: "Pesho",
        age: 22,
      };

      let repository = new Repository(properties);

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property birthday is missing from the entity!`
      );
    });

    it("Should throw error if property has other type", () => {
      let entity = {
        name: "Pesho",
        age: 22,
        birthday: "1998-01-06T22:00:00.000Z",
      };

      let repository = new Repository(properties);

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property birthday is not of correct type!`
      );
    });
  });

  describe("Get count", () => {
    it("Should return number of entities", () => {
      let repository = new Repository(properties);
      repository.add(entity);
      repository.add(entity);
      repository.add(entity);

      expect(repository.count).is.equal(3);
    });

    it("Should return zero if no addded entities", () => {
      let repository = new Repository(properties);
      expect(repository.count).is.equal(0);
    });
  });

  describe("Get Id", () => {
    it("Should return entity by id", () => {
      let repository = new Repository(properties);

      repository.add(entity);

      expect(repository.getId(0)).to.deep.equal(clonedEntity);
    });

    it("Should throw error when no id is found", () => {
      let repository = new Repository(properties);

      expect(() => repository.getId(1)).to.throw(
        Error,
        `Entity with id: 1 does not exist!`
      );
    });
  });

  describe("Update", () => {
    it("Should update one valid entity with another", () => {
      let newEntity = {
        name: "Ilko",
        age: 20,
        birthday: new Date(2003, 11, 11),
      };

      let repository = new Repository(properties);

      repository.add(entity);
      repository.update(0, newEntity);

      expect(repository.getId(0).name).to.equal("Ilko");
    });

    it("Should throw error when id does not exist", () => {
      let repository = new Repository(properties);

      expect(() => repository.update(2, entity)).to.throw(
        Error,
        `Entity with id: 2 does not exist!`
      );
    });
  });

  describe("Delete", () => {
    it("Should delete one valid entity", () => {
      let repository = new Repository(properties);

      repository.add(entity);
      repository.add(entity);
      repository.del(0);

      expect(repository.count).to.equal(1);
    });

    it("Should throw error when deleting entity on invalid id", () => {
      let repository = new Repository(properties);

      repository.add(entity);

      expect(() => repository.del(2)).to.throw(
        Error,
        `Entity with id: 2 does not exist!`
      );
    });
  });
});
