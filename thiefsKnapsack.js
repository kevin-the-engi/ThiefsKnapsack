const items = require('./items.js');

class KnapSack {
  constructor(weight) {
    this.weightLimit = weight,
    this.totalWeight = 0,
    this.totalValue = 0,
    this.maxValue = 0,
    this.sack = [];
  }

  addToSack(item) {
    this.sack.push(item)

    return this.sack;
  }

  calculateTotals(value, weight) {
    this.totalValue += value;
    this.totalWeight += weight;
  }

  checkWeight(weight) {
    if (this.totalWeight + weight <= this.weightLimit) {
      return true;
    }

    return false;
  }

  updateMaxValue() {
    if (this.maxValue < this.totalValue) {
      this.maxValue = this.totalValue;
    }
  }

  checkSack(items) {
    for (let i = 0; i < items.length; i++) {
      let mainWeight = items[i].weight;
      let mainValue = items[i].value;

      this.totalWeight = mainWeight;
      this.totalValue = mainValue;

      if (i !== items.length - 1) {
        for (let j = i + 1; j < items.length; j++) {
          let weight = items[j].weight;
          let value = items[j].value;

          if (this.checkWeight(weight)) {
            this.calculateTotals(value, weight);
          } else {
            this.updateMaxValue();
            break;
          }

        }
        this.updateMaxValue();
      }
    }

    return this.maxValue;
  }
}